# 🔍 Plesk Kontrol Paneli - SSH/Docker Kontrol Rehberi

## 📋 Bulunan Bilgiler

- **Kontrol Paneli**: Plesk
- **Domain**: okulpsikoloji.com
- **IP Adresi**: 89.19.30.73 (Plesk panelinde gösterilen)
- **Dosya Konumu**: httpdocs (web sitesi dosyaları buraya yüklenir)
- **Sistem Kullanıcısı**: u2544352

## 🔍 SSH Erişimi Kontrolü

### Adım 1: SSH Access Bölümüne Git

1. Plesk sol menüde **"Hesap"** (Account) bölümüne tıklayın
2. Veya **"Tools & Settings"** (Araçlar ve Ayarlar) bölümüne gidin
3. **"SSH Access"** veya **"Terminal"** seçeneğini arayın

### Adım 2: SSH Durumunu Kontrol Et

SSH Access bölümünde şunları göreceksiniz:
- ✅ **Enabled** (Etkin): SSH erişimi var
- ❌ **Disabled** (Devre Dışı): SSH erişimi yok

### Adım 3: SSH Bilgilerini Al (Eğer Enabled ise)

SSH erişimi varsa, şu bilgileri göreceksiniz:
- **SSH Host**: okulpsikoloji.com veya 89.19.30.73
- **SSH Port**: Genellikle 22
- **SSH User**: u2544352 veya Plesk kullanıcı adınız
- **SSH Password**: Plesk şifreniz

## 🐳 Docker Kontrolü

### Yöntem 1: Terminal/SSH Üzerinden

SSH erişimi varsa:

1. Terminal'de bağlanın:
   ```bash
   ssh u2544352@okulpsikoloji.com
   # veya
   ssh u2544352@89.19.30.73
   ```

2. Docker kontrolü yapın:
   ```bash
   # Docker kurulu mu?
   docker --version
   
   # Docker Compose var mı?
   docker-compose --version
   # veya
   docker compose version
   ```

### Yöntem 2: Plesk Terminal (Eğer Varsa)

1. Plesk'te **"Tools & Settings"** > **"Terminal"** bölümüne gidin
2. Web tabanlı terminal açılırsa, Docker komutlarını çalıştırın

### Yöntem 3: Applications/Extensions

1. Plesk sol menüde **"Başvurular"** (Applications) bölümüne bakın
2. Docker veya Container seçenekleri var mı kontrol edin

## 📊 Beklenen Sonuçlar

### Senaryo 1: Paylaşımlı Hosting (En Olası)
```
❌ SSH Erişimi: Yok veya Sınırlı
❌ Docker: Yok
📝 Çözüm: Railway veya VPS kullanın
```

**Neden?**
- "Süper Başlangıç Hosting" paylaşımlı hosting paketi
- Paylaşımlı hosting'de genellikle Docker yok
- SSH erişimi sınırlı olabilir

### Senaryo 2: SSH Var, Docker Yok
```
✅ SSH Erişimi: Var
❌ Docker: Yok
📝 Çözüm: Railway veya VPS kullanın
```

### Senaryo 3: SSH ve Docker Var (Nadir)
```
✅ SSH Erişimi: Var
✅ Docker: Var
🎉 Çözüm: deploy-to-production.sh script'ini kullanın
```

## 🎯 Hızlı Kontrol Adımları

### Plesk'te Kontrol Edilecek Yerler:

1. **SSH Access Kontrolü:**
   - Sol menü: **"Hesap"** (Account) > **"SSH Access"**
   - Veya: **"Tools & Settings"** > **"SSH Access"**

2. **Terminal Kontrolü:**
   - Sol menü: **"Tools & Settings"** > **"Terminal"**
   - Web tabanlı terminal var mı?

3. **Docker Kontrolü:**
   - SSH varsa terminal'de: `docker --version`
   - Veya: **"Başvurular"** (Applications) bölümünde Docker arayın

## 🚀 Önerilen Çözüm: Railway

Paylaşımlı hosting'de Docker genellikle yoktur. En kolay çözüm **Railway** kullanmaktır:

### Railway Avantajları:
- ✅ Ücretsiz başlangıç
- ✅ Otomatik deployment
- ✅ Docker desteği
- ✅ SSL otomatik
- ✅ SSH gerekmez

### Railway Deployment:
1. https://railway.app adresine gidin
2. GitHub ile giriş yapın
3. Projeyi import edin
4. Domain'i bağlayın (www.okulpsikoloji.com.tr)
5. Environment variables ekleyin

## 📝 Kontrol Listesi

Plesk'te şunları kontrol edin:

- [ ] "Hesap" > "SSH Access" bölümüne gidildi
- [ ] SSH durumu kontrol edildi (Enabled/Disabled)
- [ ] SSH erişimi varsa terminal'de `docker --version` çalıştırıldı
- [ ] "Başvurular" bölümünde Docker arandı
- [ ] Sonuçlar not edildi

## 🔄 Sonraki Adımlar

### SSH ve Docker Yoksa:
1. **Railway kullanın** (en kolay ve önerilen)
2. **VPS alın** (tam kontrol için)
3. **Natro'dan VPS paketi isteyin**

### SSH Var, Docker Yoksa:
1. **Railway kullanın** (Docker için)
2. **VPS'e geçiş yapın** (Docker desteği için)

### SSH ve Docker Varsa:
1. Sunucuya bağlanın: `ssh u2544352@okulpsikoloji.com`
2. Projeyi yükleyin
3. `./deploy-to-production.sh` script'ini çalıştırın

## 📞 Destek

- **Natro Destek**: https://www.natro.com/destek
- **Plesk Dokümantasyon**: https://docs.plesk.com

## ✅ Kontrol Sonrası

Lütfen şunları paylaşın:
1. SSH erişimi var mı? (Evet/Hayır)
2. Docker kurulu mu? (Evet/Hayır)
3. Hangi bölümlerde kontrol ettiniz?

Bu bilgilere göre en uygun deployment yöntemini belirleyelim! 🚀
