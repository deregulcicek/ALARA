# Production Deployment Talimatları

## 🚀 www.okulpsikoloji.com ve www.okulpsikoloji.com.tr için Deployment

### Gereksinimler

1. **Docker ve Docker Compose** yüklü olmalı
2. **Node.js ve npm** yüklü olmalı (frontend build için)
3. **Python 3.11+** yüklü olmalı (isteğe bağlı, Django yönetimi için)
4. **Domain DNS ayarları** yapılmış olmalı:
   - `www.okulpsikoloji.com` → Sunucu IP
   - `www.okulpsikoloji.com.tr` → Sunucu IP

### Adım Adım Deployment

#### 1. Sunucuya Projeyi Yükleyin

```bash
# Git ile
git clone <repository-url>
cd Site

# Veya SCP ile
scp -r Site/ user@server:/opt/psychologist-site
ssh user@server
cd /opt/psychologist-site
```

#### 2. Environment Dosyasını Oluşturun

```bash
cp env.production .env
nano .env  # Veya vi .env
```

`.env` dosyasında şunları güncelleyin:
- `DJANGO_SECRET_KEY`: Güçlü bir secret key oluşturun
- `POSTGRES_PASSWORD`: Güçlü bir veritabanı şifresi
- `RECAPTCHA_SECRET_KEY`: Google reCAPTCHA secret key
- `RECAPTCHA_SITE_KEY`: Google reCAPTCHA site key
- `CLOUDFLARE_API_TOKEN`: Cloudflare DNS token (SSL için)

#### 3. Frontend'i Build Edin

```bash
cd frontend
npm install
npm run build
cd ..
```

#### 4. Deploy Script'ini Çalıştırın

```bash
chmod +x deploy.sh
./deploy.sh
```

Bu script:
- Frontend'i build eder
- Build dosyalarını static volume'a kopyalar
- Backend Docker image'ını oluşturur
- Tüm servisleri başlatır
- Database migration'ları çalıştırır
- Static dosyaları toplar

#### 5. Superuser Oluşturun

```bash
docker compose -f docker-compose.prod.yml exec web python manage.py createsuperuser
```

#### 6. İlk Verileri Yükleyin (İsteğe Bağlı)

```bash
docker compose -f docker-compose.prod.yml exec web python manage.py seed_data
```

### Servisleri Yönetme

#### Servisleri Başlatma
```bash
docker compose -f docker-compose.prod.yml up -d
```

#### Servisleri Durdurma
```bash
docker compose -f docker-compose.prod.yml down
```

#### Logları Görüntüleme
```bash
docker compose -f docker-compose.prod.yml logs -f
```

#### Belirli Bir Servisin Loglarını Görüntüleme
```bash
docker compose -f docker-compose.prod.yml logs -f web
docker compose -f docker-compose.prod.yml logs -f caddy
```

### DNS Ayarları

Her iki domain için DNS kayıtlarını ekleyin:

**www.okulpsikoloji.com:**
- Type: A
- Name: www
- Value: [Sunucu IP Adresi]
- TTL: 3600

**www.okulpsikoloji.com.tr:**
- Type: A  
- Name: www
- Value: [Sunucu IP Adresi]
- TTL: 3600

### SSL Sertifikaları

Caddy otomatik olarak Let's Encrypt ile SSL sertifikaları oluşturacaktır. 
Cloudflare DNS token'ı `.env` dosyasında `CLOUDFLARE_API_TOKEN` olarak ayarlanmalıdır.

### Servisler

- **Frontend**: Caddy üzerinden serve edilir (port 80/443)
- **Backend API**: http://[domain]/api/
- **Admin Panel**: https://www.okulpsikoloji.com/admin
- **API Dokümantasyonu**: https://www.okulpsikoloji.com/api/docs

### Sorun Giderme

#### Port 80/443 zaten kullanımda
```bash
# Kullanılan portu kontrol edin
sudo lsof -i :80
sudo lsof -i :443

# Gerekirse diğer servisleri durdurun
sudo systemctl stop apache2  # veya nginx
```

#### SSL sertifikası oluşturulamıyor
- DNS kayıtlarının doğru olduğundan emin olun
- Cloudflare API token'ın doğru olduğunu kontrol edin
- Caddy loglarını kontrol edin: `docker compose -f docker-compose.prod.yml logs caddy`

#### Database bağlantı hatası
- `.env` dosyasındaki database bilgilerini kontrol edin
- PostgreSQL container'ının çalıştığından emin olun: `docker compose -f docker-compose.prod.yml ps`

#### Frontend görüntülenmiyor
- Frontend build'inin yapıldığından emin olun
- Static volume'a dosyaların kopyalandığını kontrol edin
- Caddy loglarını kontrol edin

### Güncelleme

Projeyi güncelledikten sonra:

```bash
# Değişiklikleri çekin
git pull

# Frontend'i yeniden build edin
cd frontend
npm install
npm run build
cd ..

# Deploy script'ini çalıştırın
./deploy.sh
```

### Yedekleme

```bash
# Database yedeği
docker compose -f docker-compose.prod.yml exec db pg_dump -U postgres psychologist_site > backup.sql

# Media dosyaları yedeği
docker compose -f docker-compose.prod.yml exec web tar -czf /app/media_backup.tar.gz /app/media
```

### İletişim

Siteye "Bize Ulaşın" butonu eklendi - 05457109311 numarasına yönlendiriyor.

---

**Not**: Production deployment için Docker ve Docker Compose mutlaka yüklü olmalıdır.
