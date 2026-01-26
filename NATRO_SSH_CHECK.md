# 🔍 Natro Kontrol Paneli - SSH/Docker Kontrol Rehberi

## 📋 Adım Adım Kontrol

### 1. Kontrol Paneline Giriş

1. **Natro panelinde** (şu anda açık olan sayfada)
2. **"Kontrol Paneli"** butonuna tıklayın
3. cPanel veya Plesk açılacak

### 2. SSH Erişimi Kontrolü

#### cPanel'de SSH Kontrolü:

**Yöntem A: Terminal/SSH Access**
1. cPanel ana sayfasında **"Terminal"** veya **"SSH Access"** bölümünü arayın
2. Varsa, SSH bilgilerini göreceksiniz:
   - SSH Host: `okulpsikoloji.com` veya IP adresi
   - SSH Port: Genellikle `22`
   - SSH User: cPanel kullanıcı adınız
   - SSH Password: cPanel şifreniz

**Yöntem B: File Manager Terminal**
1. **"File Manager"** bölümüne gidin
2. Sağ üstte **"Terminal"** veya **"Open Terminal"** butonunu arayın
3. Varsa, web tabanlı terminal açılacak

**Yöntem C: Advanced > SSH Access**
1. cPanel'de **"Advanced"** bölümüne gidin
2. **"SSH Access"** veya **"Terminal"** seçeneğini arayın

#### Plesk'te SSH Kontrolü:

1. **"Tools & Settings"** menüsüne gidin
2. **"SSH Access"** veya **"Terminal"** bölümünü arayın
3. SSH durumunu kontrol edin:
   - ✅ **Enabled**: SSH erişimi var
   - ❌ **Disabled**: SSH erişimi yok (etkinleştirmek için destek ile iletişime geçin)

### 3. Docker Desteği Kontrolü

#### Kontrol Yöntemleri:

**Yöntem 1: Terminal'de Komut Çalıştırma**
1. Terminal/SSH erişimi varsa, bağlanın:
   ```bash
   ssh kullanici@okulpsikoloji.com
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

**Yöntem 2: cPanel Software/Apps**
1. cPanel'de **"Software"** veya **"Applications"** bölümüne bakın
2. Docker veya Container seçenekleri var mı kontrol edin

**Yöntem 3: PHP Info Kontrolü**
1. cPanel'de **"PHP Selector"** veya **"Select PHP Version"** bölümüne gidin
2. Sistem bilgilerini kontrol edin

### 4. Sistem Bilgileri Kontrolü

#### cPanel'de:
1. **"System Information"** veya **"Server Information"** bölümüne gidin
2. Şunları kontrol edin:
   - Operating System
   - Kernel Version
   - Root erişimi var mı?

#### Plesk'te:
1. **"Tools & Settings"** > **"Server Information"**
2. Sistem detaylarını görüntüleyin

## 📊 Beklenen Sonuçlar

### Senaryo 1: SSH Var, Docker Yok (En Olası)
```
✅ SSH Erişimi: Var
❌ Docker: Yok
📝 Çözüm: Railway veya VPS kullanın
```

### Senaryo 2: SSH Var, Docker Var (Nadir)
```
✅ SSH Erişimi: Var
✅ Docker: Var
🎉 Çözüm: deploy-to-production.sh script'ini kullanın
```

### Senaryo 3: SSH Yok (Paylaşımlı Hosting)
```
❌ SSH Erişimi: Yok
❌ Docker: Yok
📝 Çözüm: Railway veya VPS kullanın
```

## 🔧 SSH Erişimi Yoksa

### Seçenekler:

1. **Natro Destek ile İletişim**
   - SSH erişimi isteyin
   - VPS paketi hakkında bilgi alın

2. **Railway Kullanın** (Önerilen)
   - Ücretsiz başlangıç
   - Otomatik deployment
   - SSH gerekmez

3. **VPS'e Geçiş**
   - Hetzner: €4/ay
   - DigitalOcean: $6/ay
   - Tam kontrol

## 📝 Kontrol Listesi

Kontrol panelinde şunları kontrol edin:

- [ ] Kontrol paneline giriş yapıldı (cPanel/Plesk)
- [ ] SSH/Terminal bölümü bulundu
- [ ] SSH erişimi var mı kontrol edildi
- [ ] Terminal'de `docker --version` komutu çalıştırıldı
- [ ] Docker kurulu mu kontrol edildi
- [ ] Sistem bilgileri görüntülendi
- [ ] Sonuçlar not edildi

## 🎯 Sonraki Adımlar

### SSH ve Docker Varsa:
```bash
# Sunucuya bağlanın
ssh kullanici@okulpsikoloji.com

# Projeyi yükleyin
git clone [repository] veya scp ile

# Deploy edin
./deploy-to-production.sh
```

### SSH veya Docker Yoksa:
1. **Railway kullanın** (en kolay)
2. **VPS alın** (tam kontrol)
3. **Natro'dan VPS paketi isteyin**

## 📞 Destek

- **Natro Destek**: https://www.natro.com/destek
- **Telefon**: 0 (212) 213 1 213
- **Canlı Destek**: Natro panelinde "Destek" butonu

## ✅ Kontrol Sonrası

Kontrol panelinde gördüklerinizi paylaşın:
- SSH erişimi var mı?
- Docker kurulu mu?
- Hangi kontrol paneli? (cPanel/Plesk)
- Sistem bilgileri neler?

Bu bilgilere göre en uygun deployment yöntemini belirleyelim! 🚀
