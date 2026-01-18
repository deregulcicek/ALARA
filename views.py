import requests
import logging
from django.conf import settings
from django.core.mail import send_mail
from django.utils import timezone
from django.db.models import Q
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django_ratelimit.decorators import ratelimit
from .models import Contact
from .serializers import ContactSerializer

logger = logging.getLogger(__name__)


def verify_recaptcha(token):
    """Verify reCAPTCHA token with Google"""
    if not settings.RECAPTCHA_SECRET_KEY:
        return True  # Skip verification if no secret key
    
    data = {
        'secret': settings.RECAPTCHA_SECRET_KEY,
        'response': token
    }
    
    try:
        response = requests.post(
            'https://www.google.com/recaptcha/api/siteverify',
            data=data,
            timeout=10
        )
        result = response.json()
        return result.get('success', False)
    except Exception as e:
        logger.error(f"reCAPTCHA verification failed: {e}")
        return False


@api_view(['POST'])
@permission_classes([AllowAny])
@ratelimit(key='ip', rate='10/m', method='POST')
@ratelimit(key='email', rate='10/m', method='POST')
def contact_form(request):
    """Handle contact form submission with rate limiting and reCAPTCHA"""
    serializer = ContactSerializer(data=request.data)
    
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # Verify reCAPTCHA
    recaptcha_token = request.data.get('recaptcha_token')
    if not verify_recaptcha(recaptcha_token):
        return Response(
            {'error': 'reCAPTCHA doğrulaması başarısız'}, 
            status=status.HTTP_400_BAD_REQUEST
        )
    
    # Get client IP
    ip_address = request.META.get('HTTP_X_FORWARDED_FOR', request.META.get('REMOTE_ADDR'))
    if ',' in ip_address:
        ip_address = ip_address.split(',')[0].strip()
    
    # Check for duplicate submissions in the last hour
    recent_submissions = Contact.objects.filter(
        Q(email=serializer.validated_data['email']) | Q(ip_address=ip_address),
        created_at__gte=timezone.now() - timezone.timedelta(hours=1)
    ).count()
    
    if recent_submissions > 0:
        return Response(
            {'error': 'Çok sık mesaj gönderiyorsunuz. Lütfen bir saat bekleyin.'}, 
            status=status.HTTP_429_TOO_MANY_REQUESTS
        )
    
    # Create contact record
    contact = serializer.save(ip_address=ip_address)
    
    # Send email notification
    try:
        subject = f"Yeni İletişim Formu: {contact.full_name}"
        message = f"""
Ad Soyad: {contact.full_name}
E-posta: {contact.email}
Telefon: {contact.phone or 'Belirtilmemiş'}
IP Adresi: {contact.ip_address}

Mesaj:
{contact.message}

Tarih: {contact.created_at.strftime('%d.%m.%Y %H:%M')}
        """
        
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            [settings.DEFAULT_FROM_EMAIL],
            fail_silently=False,
        )
        
        logger.info(f"Contact form submitted successfully: {contact.email}")
        
    except Exception as e:
        logger.error(f"Failed to send contact email: {e}")
        # Don't fail the request if email fails
    
    return Response(
        {'message': 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'},
        status=status.HTTP_201_CREATED
    )
