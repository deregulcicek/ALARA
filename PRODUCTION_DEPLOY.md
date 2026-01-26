# 🚀 Production Deployment - Hızlı Başlangıç

## Local'den Production'a Deployment

Local'deki değişiklikleri (http://192.168.1.174:3000) production domain'ine (https://www.okulpsikoloji.com.tr) bağlamak için:

### Yöntem 1: Production Sunucusunda Deploy (Önerilen)

#### 1. Projeyi Production Sunucusuna Yükleyin

```bash
# Local makineden production sunucusuna kopyalayın
scp -r /Users/alaraokul/Desktop/Site user@production-server:/opt/psychologist-site

# Production sunucusuna bağlanın
ssh user@production-server
cd /opt/psychologist-site
```

#### 2. Environment Dosyasını Hazırlayın

```bash
cp env.production .env
nano .env
```

`.env` dosyasında şunları güncelleyin:
- `DJANGO_SECRET_KEY`: Güçlü bir secret key
- `POSTGRES_PASSWORD`: Güçlü veritabanı şifresi  
- `RECAPTCHA_SECRET_KEY`: Google reCAPTCHA secret key
- `RECAPTCHA_SITE_KEY`: Google reCAPTCHA site key
- `CLOUDFLARE_API_TOKEN`: Cloudflare DNS token (SSL için)

#### 3. Deploy Script'ini Çalıştırın

```bash
chmod +x deploy-to-production.sh
./deploy-to-production.sh
```

Bu script:
- ✅ Frontend'i build eder
- ✅ Build dosyalarını Docker volume'a kopyalar
- ✅ Backend'i build eder
- ✅ Tüm servisleri başlatır (Caddy, Django, PostgreSQL)
- ✅ Database migration'ları çalıştırır
- ✅ SSL sertifikalarını otomatik oluşturur

### Yöntem 2: Sadece Frontend Build'i Kopyalama

Eğer sadece frontend değişikliklerini güncellemek istiyorsanız:

```bash
# Local'de build edin
cd frontend
npm run build

# Production sunucusuna kopyalayın
scp -r dist/* user@production-server:/opt/psychologist-site/frontend/dist/

# Production sunucusunda static volume'u güncelleyin
ssh user@production-server
cd /opt/psychologist-site
docker run --rm \
    -v static_volume:/target \
    -v "$(pwd)/frontend/dist:/source:ro" \
    alpine sh -c "rm -rf /target/* && cp -r /source/* /target/"

# Caddy'yi yeniden başlatın
docker compose -f docker-compose.prod.yml restart caddy
```

## 🔍 DNS Ayarları

Production sunucunuzun IP adresine domain'leri yönlendirin:

**www.okulpsikoloji.com:**
- Type: A
- Name: www
- Value: [Sunucu IP]
- TTL: 3600

**www.okulpsikoloji.com.tr:**
- Type: A
- Name: www  
- Value: [Sunucu IP]
- TTL: 3600

## 🔒 SSL Sertifikaları

Caddy otomatik olarak Let's Encrypt ile SSL sertifikaları oluşturacaktır. Cloudflare DNS token'ı `.env` dosyasında `CLOUDFLARE_API_TOKEN` olarak ayarlanmalıdır.

## 📊 Servis Durumu Kontrolü

```bash
# Tüm servislerin durumu
docker compose -f docker-compose.prod.yml ps

# Logları görüntüle
docker compose -f docker-compose.prod.yml logs -f

# Belirli bir servisin logları
docker compose -f docker-compose.prod.yml logs -f caddy
docker compose -f docker-compose.prod.yml logs -f web
```

## 🐛 Sorun Giderme

### Port 80/443 zaten kullanımda
```bash
sudo lsof -i :80
sudo lsof -i :443
# Gerekirse diğer servisleri durdurun
```

### SSL sertifikası oluşturulamıyor
- DNS kayıtlarının doğru olduğundan emin olun
- Cloudflare API token'ı kontrol edin
- Caddy loglarını kontrol edin: `docker compose -f docker-compose.prod.yml logs caddy`

### Frontend görüntülenmiyor
- Static volume'a dosyaların kopyalandığını kontrol edin:
  ```bash
  docker run --rm -v static_volume:/target alpine ls -la /target/
  ```
- Caddy loglarını kontrol edin

## ✅ Deployment Sonrası Kontroller

1. ✅ https://www.okulpsikoloji.com.tr açılıyor mu?
2. ✅ "Bize Ulaşın" butonu görünüyor mu? (05457109311)
3. ✅ SSL sertifikası geçerli mi?
4. ✅ API çalışıyor mu? (https://www.okulpsikoloji.com.tr/api/posts/)
5. ✅ Admin panel erişilebilir mi?

## 🔄 Güncelleme

Değişiklik yaptıktan sonra:

```bash
# Frontend'i yeniden build et
cd frontend
npm run build
cd ..

# Deploy script'ini çalıştır
./deploy-to-production.sh
```

Veya sadece frontend güncellemesi için Yöntem 2'yi kullanın.
