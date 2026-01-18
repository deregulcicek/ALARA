from django.contrib import admin
from .models import Contact


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'phone', 'created_at', 'is_processed']
    list_filter = ['is_processed', 'created_at']
    search_fields = ['full_name', 'email', 'message']
    readonly_fields = ['ip_address', 'created_at']
    ordering = ['-created_at']
    
    fieldsets = (
        ('İletişim Bilgileri', {
            'fields': ('full_name', 'email', 'phone')
        }),
        ('Mesaj', {
            'fields': ('message',)
        }),
        ('Sistem Bilgileri', {
            'fields': ('ip_address', 'created_at', 'is_processed')
        }),
    )
