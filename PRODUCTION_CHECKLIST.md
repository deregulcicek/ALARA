# 🚀 Production Deploy Checklist

## ✅ Pre-Deploy Checklist

### 1. **Domain & DNS**
- [ ] Domain satın alındı (psikologalaraokul.com)
- [ ] DNS kayıtları ayarlandı (A record → server IP)
- [ ] www subdomain ayarlandı
- [ ] SSL sertifikası otomatik olarak alınacak (Let's Encrypt)

### 2. **Server Setup**
- [ ] VPS/Server hazır (Ubuntu 20.04+ önerilen)
- [ ] Docker ve Docker Compose yüklendi
- [ ] Firewall ayarlandı (80, 443, 22 portları açık)
- [ ] Server güncellemeleri yapıldı

### 3. **Environment Configuration**
- [ ] `env.production` dosyası `.env` olarak kopyalandı
- [ ] Tüm environment variables güncellendi:
  - [ ] `DOMAIN=psikologalaraokul.com`
  - [ ] `DJANGO_SECRET_KEY` güvenli bir key ile değiştirildi
  - [ ] `POSTGRES_PASSWORD` güvenli bir şifre ile değiştirildi
  - [ ] Email ayarları doğrulandı
  - [ ] reCAPTCHA keys eklendi (opsiyonel)

### 4. **Content Preparation**
- [ ] Blog yazıları eklendi (en az 5-7 yazı)
- [ ] Profesyonel fotoğraf eklendi
- [ ] Hizmetler bölümü eklendi
- [ ] İletişim bilgileri güncellendi
- [ ] Tüm sayfalar test edildi

### 5. **Security**
- [ ] reCAPTCHA aktif edildi (production için)
- [ ] Rate limiting aktif edildi
- [ ] HTTPS zorunlu hale getirildi
- [ ] Security headers eklendi

## 🚀 Deploy Process

### 1. **Code Upload**
```bash
# Repository'yi server'a klonla
git clone https://github.com/deregulcicek/ALARA.git
cd ALARA

# Environment dosyasını ayarla
cp env.production .env
nano .env  # Gerekli değerleri güncelle
```

### 2. **Deploy Script Çalıştır**
```bash
./deploy.sh psikologalaraokul.com
```

### 3. **Post-Deploy Setup**
```bash
# Superuser oluştur
docker-compose -f docker-compose.prod.yml exec web python manage.py createsuperuser

# Logs kontrol et
docker-compose -f docker-compose.prod.yml logs -f
```

## 🔍 Post-Deploy Testing

### 1. **Website Tests**
- [ ] Ana sayfa yükleniyor
- [ ] Tüm sayfalar erişilebilir
- [ ] İletişim formu çalışıyor
- [ ] Blog yazıları görünüyor
- [ ] Galeri çalışıyor
- [ ] Mobile responsive

### 2. **Performance Tests**
- [ ] PageSpeed Insights test edildi
- [ ] GTmetrix test edildi
- [ ] Mobile performance kontrol edildi

### 3. **SEO Tests**
- [ ] Sitemap.xml erişilebilir
- [ ] Robots.txt erişilebilir
- [ ] Meta tags doğru
- [ ] Open Graph tags çalışıyor

### 4. **Security Tests**
- [ ] HTTPS zorunlu
- [ ] Security headers mevcut
- [ ] Admin panel korumalı
- [ ] Form validation çalışıyor

## 📊 Monitoring Setup

### 1. **Logs**
```bash
# Application logs
docker-compose -f docker-compose.prod.yml logs -f web

# Caddy logs
docker-compose -f docker-compose.prod.yml logs -f caddy

# Database logs
docker-compose -f docker-compose.prod.yml logs -f db
```

### 2. **Backup Strategy**
- [ ] Database backup scripti hazırlandı
- [ ] Media files backup ayarlandı
- [ ] Otomatik backup cron job eklendi

### 3. **Updates**
- [ ] Update scripti hazırlandı
- [ ] Monitoring alerts ayarlandı

## 🆘 Troubleshooting

### Common Issues:
1. **SSL Certificate Issues**: Caddy otomatik olarak halleder
2. **Database Connection**: Environment variables kontrol et
3. **Static Files**: `collectstatic` komutunu çalıştır
4. **Email Issues**: Gmail App Password kontrol et

### Useful Commands:
```bash
# Restart services
docker-compose -f docker-compose.prod.yml restart

# Check service status
docker-compose -f docker-compose.prod.yml ps

# Access container
docker-compose -f docker-compose.prod.yml exec web bash

# View logs
docker-compose -f docker-compose.prod.yml logs -f [service_name]
```

## 📞 Support

- **Documentation**: README.md
- **Issues**: GitHub Issues
- **Email**: psk.alaraokul@gmail.com
