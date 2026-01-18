from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from unittest.mock import patch
from .models import Contact


class ContactModelTest(TestCase):
    def setUp(self):
        self.contact = Contact.objects.create(
            full_name='Test User',
            email='test@example.com',
            phone='+905551234567',
            message='Test message',
            ip_address='127.0.0.1'
        )

    def test_contact_creation(self):
        self.assertEqual(self.contact.full_name, 'Test User')
        self.assertEqual(self.contact.email, 'test@example.com')
        self.assertFalse(self.contact.is_processed)

    def test_contact_str(self):
        self.assertEqual(str(self.contact), 'Test User - test@example.com')


class ContactAPITest(APITestCase):
    def setUp(self):
        self.url = reverse('contact-form')
        self.valid_data = {
            'full_name': 'Test User',
            'email': 'test@example.com',
            'phone': '+905551234567',
            'message': 'This is a test message',
            'recaptcha_token': 'test_token'
        }

    @patch('contact.views.verify_recaptcha')
    @patch('contact.views.send_mail')
    def test_contact_form_success(self, mock_send_mail, mock_verify_recaptcha):
        mock_verify_recaptcha.return_value = True
        mock_send_mail.return_value = True
        
        response = self.client.post(self.url, self.valid_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(Contact.objects.filter(email='test@example.com').exists())

    def test_contact_form_invalid_data(self):
        invalid_data = {
            'full_name': '',  # Empty name
            'email': 'invalid-email',
            'message': 'Short'  # Too short message
        }
        
        response = self.client.post(self.url, invalid_data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    @patch('contact.views.verify_recaptcha')
    def test_contact_form_recaptcha_failure(self, mock_verify_recaptcha):
        mock_verify_recaptcha.return_value = False
        
        response = self.client.post(self.url, self.valid_data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
