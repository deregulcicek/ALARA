# 🖥️ Sunucu Bilgileri

## Bulunan Sunucu Bilgileri

### Domain ve IP Adresi
- **Domain**: www.okulpsikoloji.com.tr
- **IP Adresi**: `85.159.66.93`
- **Hosting Sağlayıcısı**: Natro (Türk hosting sağlayıcısı)

### DNS Kayıtları
Domain'iniz şu anda Natro CDN üzerinden yönlendiriliyor:
- `redirect.natrocdn.com`
- `natroredirect.natrocdn.com`

## 🔍 Sunucu Bilgilerini Bulma Yöntemleri

### 1. DNS Sorgusu ile IP Bulma
```bash
# Terminal'de
dig +short www.okulpsikoloji.com.tr
# veya
nslookup www.okulpsikoloji.com.tr
```

**Sonuç**: `85.159.66.93`

### 2. Hosting Panelinden Kontrol
Natro hosting panelinden:
1. https://www.natro.com adresine giriş yapın
2. Hosting yönetim paneline girin
3. "Sunucu Bilgileri" veya "Server Info" bölümünden:
   - Sunucu IP adresini
   - SSH erişim bilgilerini
   - FTP bilgilerini görebilirsiniz

### 3. SSH Erişim Bilgileri
Natro hosting'de SSH erişimi genellikle şu şekildedir:

```bash
# SSH bağlantısı
ssh kullanici_adi@85.159.66.93
# veya
ssh kullanici_adi@www.okulpsikoloji.com.tr
```

**Kullanıcı adı**: Genellikle hosting panelinizde gösterilir veya cPanel'de "SSH Access" bölümünden bulabilirsiniz.

## 📋 Sunucuya Erişim Adımları

### Yöntem 1: Natro Hosting Paneli Üzerinden

1. **Natro'ya giriş yapın**
   - https://www.natro.com
   - Hosting hesabınıza giriş yapın

2. **SSH Erişim Bilgilerini Alın**
   - Hosting yönetim panelinde
   - "SSH Access" veya "Terminal" bölümüne gidin
   - Kullanıcı adı ve şifre bilgilerini alın

3. **SSH ile Bağlanın**
   ```bash
   ssh kullanici_adi@85.159.66.93
   # veya web terminal kullanın (Natro panelinde)
   ```

### Yöntem 2: cPanel Üzerinden (Eğer cPanel varsa)

1. cPanel'e giriş yapın
2. "Terminal" veya "SSH Access" bölümüne gidin
3. Web terminal üzerinden komutları çalıştırın

### Yöntem 3: FTP ile Dosya Yükleme

Eğer SSH erişiminiz yoksa, FTP ile dosyaları yükleyebilirsiniz:

```bash
# FTP bilgileri (Natro panelinden alın)
FTP Host: ftp.okulpsikoloji.com.tr veya 85.159.66.93
FTP User: [cPanel kullanıcı adınız]
FTP Password: [cPanel şifreniz]
FTP Port: 21
```

## ⚠️ Önemli Notlar

### Natro Hosting Özellikleri
- Natro, paylaşımlı hosting sağlayıcısıdır
- Docker kullanımı için VPS veya dedicated server gerekebilir
- Paylaşımlı hosting'de Docker çalışmayabilir

### Alternatif Çözümler

Eğer Natro paylaşımlı hosting kullanıyorsanız:

1. **VPS'e Geçiş** (Önerilen)
   - DigitalOcean, Hetzner, Linode gibi VPS sağlayıcıları
   - Docker desteği ile tam kontrol

2. **Railway/Heroku gibi Platformlar**
   - `railway.json` dosyanız var, Railway kullanabilirsiniz
   - Otomatik deployment ve SSL

3. **Natro VPS** (Eğer varsa)
   - Natro'dan VPS paketi alın
   - Docker desteği ile deployment yapın

## 🚀 Railway Deployment (Alternatif)

Projenizde `railway.json` dosyası var, Railway kullanabilirsiniz:

1. https://railway.app adresine gidin
2. GitHub ile giriş yapın
3. Projeyi import edin
4. Domain'i bağlayın (www.okulpsikoloji.com.tr)
5. Otomatik deployment başlar

## 📞 Destek

Sunucu bilgileriniz için:
- **Natro Destek**: https://www.natro.com/destek
- **Hosting Panel**: Hosting yönetim panelinizden SSH bilgilerini alabilirsiniz

## 🔐 Güvenlik

SSH bağlantısı için:
- Güçlü şifre kullanın
- SSH key authentication kullanın (önerilen)
- Firewall kurallarını kontrol edin
