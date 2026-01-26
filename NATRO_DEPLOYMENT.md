# 🚀 Natro Hosting Deployment Rehberi

## 📋 Mevcut Durum

- **Hosting Paketi**: Süper Başlangıç Hosting
- **Domain**: okulpsikoloji.com
- **Durum**: Aktif
- **Kontrol Paneli**: Natro panelinde "Kontrol Paneli" butonu mevcut

## ⚠️ Önemli Not

"Süper Başlangıç Hosting" genellikle **paylaşımlı hosting** paketidir ve **Docker desteği olmayabilir**. 

### Seçenekler:

1. **cPanel/Plesk Kontrol Paneli** (Eğer varsa)
   - FTP ile dosya yükleme
   - PHP/MySQL desteği
   - Docker yok

2. **VPS'e Geçiş** (Önerilen)
   - Docker desteği
   - Tam kontrol
   - Aylık ~$5-10

3. **Railway/Heroku** (En Kolay)
   - Otomatik deployment
   - Ücretsiz başlangıç
   - Docker desteği

## 🔍 Kontrol Paneline Erişim

### Adım 1: Kontrol Paneline Giriş

1. Natro panelinde **"Kontrol Paneli"** butonuna tıklayın
2. cPanel veya Plesk açılacak
3. Kullanıcı adı ve şifre ile giriş yapın

### Adım 2: SSH Erişim Bilgilerini Bulma

**cPanel'de:**
1. "Terminal" veya "SSH Access" bölümüne gidin
2. SSH bilgilerini görüntüleyin
3. Veya "File Manager" > "Terminal" kullanın

**Plesk'te:**
1. "Tools & Settings" > "SSH Access"
2. SSH bilgilerini görüntüleyin

## 📤 Deployment Yöntemleri

### Yöntem 1: FTP ile Dosya Yükleme (Paylaşımlı Hosting)

Eğer Docker yoksa, frontend build dosyalarını yükleyebilirsiniz:

```bash
# 1. Frontend'i build edin (local'de)
cd frontend
npm run build

# 2. FTP bilgilerini alın (cPanel'den)
# FTP Host: ftp.okulpsikoloji.com veya IP
# FTP User: cPanel kullanıcı adı
# FTP Password: cPanel şifresi

# 3. FileZilla veya başka FTP client ile bağlanın
# 4. frontend/dist/ klasöründeki dosyaları public_html/ klasörüne yükleyin
```

**Not**: Bu yöntem sadece frontend için çalışır. Backend için VPS veya Railway gerekir.

### Yöntem 2: Railway Deployment (Önerilen - Kolay)

Projenizde `railway.json` var, Railway kullanabilirsiniz:

1. **Railway'a Kayıt**
   - https://railway.app adresine gidin
   - GitHub ile giriş yapın

2. **Projeyi Import Et**
   - "New Project" > "Deploy from GitHub repo"
   - Repository'nizi seçin

3. **Domain Bağla**
   - Settings > Domains
   - `www.okulpsikoloji.com.tr` ekleyin
   - DNS kayıtlarını Railway'a yönlendirin

4. **Environment Variables**
   - `.env` dosyasındaki değişkenleri Railway'a ekleyin

5. **Otomatik Deployment**
   - Her push'ta otomatik deploy olur

### Yöntem 3: VPS'e Geçiş (Tam Kontrol)

Docker desteği için VPS alın:

**Önerilen VPS Sağlayıcıları:**
- **DigitalOcean**: $6/ay (1GB RAM)
- **Hetzner**: €4/ay (2GB RAM) - En uygun
- **Linode**: $5/ay (1GB RAM)
- **Natro VPS**: Natro'dan VPS paketi alın

**VPS Setup:**
```bash
# 1. VPS'e SSH ile bağlanın
ssh root@VPS_IP

# 2. Docker kurun
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# 3. Projeyi yükleyin
git clone [repository-url]
cd Site

# 4. Deploy edin
./deploy-to-production.sh
```

## 🎯 Hızlı Çözüm: Railway Kullanımı

### Railway Deployment Adımları

1. **Railway'a Giriş**
   ```
   https://railway.app
   GitHub ile giriş yap
   ```

2. **Projeyi Deploy Et**
   ```
   New Project > Deploy from GitHub repo
   Repository seç: [projeniz]
   ```

3. **Backend Service Oluştur**
   ```
   Add Service > Dockerfile
   Root Directory: /backend
   ```

4. **Frontend Service Oluştur**
   ```
   Add Service > Dockerfile  
   Root Directory: /frontend
   ```

5. **Domain Bağla**
   ```
   Settings > Domains
   Custom Domain: www.okulpsikoloji.com.tr
   DNS kayıtlarını Railway'a yönlendir
   ```

6. **Environment Variables**
   ```
   Settings > Variables
   .env dosyasındaki tüm değişkenleri ekle
   ```

## 📊 Natro Hosting Özellikleri

### Süper Başlangıç Hosting Paketi:
- ✅ PHP/MySQL desteği
- ✅ cPanel/Plesk kontrol paneli
- ✅ FTP erişimi
- ✅ Email hosting
- ❌ Docker desteği (muhtemelen yok)
- ❌ Root erişimi (muhtemelen yok)

### Kontrol Paneli Erişim:
1. Natro panelinde **"Kontrol Paneli"** butonuna tıklayın
2. cPanel/Plesk açılacak
3. Dosya yönetimi, veritabanı, email ayarları yapabilirsiniz

## 🔄 Önerilen Deployment Stratejisi

### Senaryo 1: Hızlı ve Kolay (Railway)
- ✅ Ücretsiz başlangıç
- ✅ Otomatik deployment
- ✅ SSL otomatik
- ✅ Docker desteği
- ⏱️ 15 dakikada hazır

### Senaryo 2: Tam Kontrol (VPS)
- ✅ Tam kontrol
- ✅ Docker desteği
- ✅ Özelleştirme
- 💰 Aylık maliyet (~$5-10)
- ⏱️ 1-2 saat setup

### Senaryo 3: Mevcut Hosting (Sınırlı)
- ✅ Ekstra maliyet yok
- ❌ Docker yok
- ❌ Sadece frontend (statik dosyalar)
- ⚠️ Backend için ayrı çözüm gerekir

## 📞 Destek

- **Natro Destek**: https://www.natro.com/destek
- **cPanel Dokümantasyon**: https://docs.cpanel.net
- **Railway Dokümantasyon**: https://docs.railway.app

## ✅ Sonraki Adımlar

1. **Kontrol paneline giriş yapın** (Natro panelinde "Kontrol Paneli" butonu)
2. **SSH erişimi var mı kontrol edin**
3. **Docker desteği var mı kontrol edin**
4. **Yoksa Railway veya VPS seçeneğini değerlendirin**

Hangi yöntemi tercih edersiniz?
