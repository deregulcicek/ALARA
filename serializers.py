from rest_framework import serializers
from .models import Contact


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['full_name', 'email', 'phone', 'message']
        extra_kwargs = {
            'full_name': {'required': True},
            'email': {'required': True},
            'message': {'required': True},
        }

    def validate_full_name(self, value):
        if len(value.strip()) < 2:
            raise serializers.ValidationError("Ad soyad en az 2 karakter olmalıdır.")
        return value.strip()

    def validate_message(self, value):
        if len(value.strip()) < 10:
            raise serializers.ValidationError("Mesaj en az 10 karakter olmalıdır.")
        return value.strip()

    def validate_phone(self, value):
        if value and len(value.strip()) < 10:
            raise serializers.ValidationError("Telefon numarası geçerli değil.")
        return value.strip() if value else value
