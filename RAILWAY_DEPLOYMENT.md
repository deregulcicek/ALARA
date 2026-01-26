# Railway Deployment Guide

Bu rehber, ALARA projesini Railway.app'te deploy etmek için gereken adımları açıklar.

## 🚨 Önemli: "Unexposed Service" Sorunu

Railway'de deployment başarılı görünse bile, eğer "Unexposed service" uyarısı görüyorsanız, servisiniz public olarak erişilebilir değildir. Bu sorunu çözmek için aşağıdaki adımları izleyin:

## 📋 Railway'de Service'i Expose Etme

### 1. Railway Dashboard'da Service'i Expose Etme

1. **Railway Dashboard'a gidin** ve projenizi açın
2. **Service'inize tıklayın** (ALARA)
3. **Settings** sekmesine gidin
4. **Networking** bölümüne gidin
5. **"Generate Domain"** butonuna tıklayın veya **"Custom Domain"** ekleyin
   - Railway otomatik bir domain oluşturacak (örn: `alara-production.up.railway.app`)
   - Veya kendi domain'inizi (okulpsikoloji.com) ekleyebilirsiniz

### 2. Custom Domain Ekleme (okulpsikoloji.com)

1. Railway Dashboard'da service'inizin **Settings** > **Networking** bölümüne gidin
2. **"Custom Domain"** bölümünde **"Add Domain"** butonuna tıklayın
3. Domain'inizi girin: `okulpsikoloji.com`
4. Railway size DNS kayıtlarını gösterecek
5. Domain sağlayıcınızda (Namecheap, GoDaddy, vb.) bu DNS kayıtlarını ekleyin:
   - **CNAME** kaydı: `okulpsikoloji.com` → Railway'in verdiği CNAME değeri
   - Veya **A** kaydı: Railway'in verdiği IP adresi

### 3. Environment Variables Kontrolü

Railway'de aşağıdaki environment variable'ların ayarlandığından emin olun:

```env
DOMAIN=okulpsikoloji.com
ALLOWED_HOSTS=okulpsikoloji.com,www.okulpsikoloji.com,*.up.railway.app
PORT=80
```

**Not**: Railway otomatik olarak `PORT` environment variable'ını set eder. Caddyfile bu port'u kullanacak şekilde yapılandırılmıştır.

## 🔄 Frontend Değişikliklerini Güncelleme

Frontend'te yaptığınız değişikliklerin sitede görünmesi için:

### Otomatik Deployment (Önerilen)

1. **Değişikliklerinizi GitHub'a push edin**:
   ```bash
   git add .
   git commit -m "Frontend değişiklikleri"
   git push origin main
   ```

2. **Railway otomatik olarak deploy edecek** (GitHub entegrasyonu varsa)

3. **Deployment tamamlandıktan sonra**:
   - Railway Dashboard'da deployment'ın başarılı olduğundan emin olun
   - Service'in expose edildiğini kontrol edin
   - Tarayıcı cache'ini temizleyin (Ctrl+Shift+R veya Cmd+Shift+R)

### Manuel Rebuild (Gerekirse)

Eğer otomatik deployment çalışmıyorsa:

1. Railway Dashboard'da service'inize gidin
2. **"Deployments"** sekmesine gidin
3. **"Redeploy"** butonuna tıklayın
4. Veya **"Settings"** > **"Source"** bölümünden **"Redeploy"** yapın

## 🐛 Sorun Giderme

### Değişiklikler Sitede Görünmüyor

1. **Browser Cache**: Tarayıcı cache'ini temizleyin
   - Chrome/Edge: Ctrl+Shift+Delete (Windows) veya Cmd+Shift+Delete (Mac)
   - Hard refresh: Ctrl+Shift+R (Windows) veya Cmd+Shift+R (Mac)

2. **Service Expose Edilmiş mi?**: Railway Dashboard'da service'inizin expose edildiğini kontrol edin

3. **Deployment Başarılı mı?**: Railway Dashboard'da son deployment'ın başarılı olduğundan emin olun

4. **Environment Variables**: `DOMAIN` ve `ALLOWED_HOSTS` değişkenlerinin doğru ayarlandığından emin olun

5. **Logs Kontrolü**: Railway Dashboard'da **"Logs"** sekmesinden hata mesajlarını kontrol edin

### "Unexposed Service" Uyarısı

Bu uyarıyı görmüyorsanız ama hala erişemiyorsanız:

1. Service'in **Settings** > **Networking** bölümüne gidin
2. **"Generate Domain"** veya **"Custom Domain"** ekleyin
3. Domain'in aktif olduğunu kontrol edin (yeşil nokta)

### Frontend Build Hatası

Eğer frontend build hatası alıyorsanız:

1. Railway Dashboard'da **"Logs"** sekmesine gidin
2. Build log'larını kontrol edin
3. `package.json` ve `vite.config.js` dosyalarının doğru olduğundan emin olun
4. Gerekirse local'de test edin:
   ```bash
   cd frontend
   npm install
   npm run build
   ```

## 📝 Railway Yapılandırması

Railway, projenizin root dizinindeki `Dockerfile`'ı kullanarak otomatik olarak build eder. 

### Railway için Dockerfile Kullanımı

Railway'de deploy ederken, Railway otomatik olarak root dizinindeki `Dockerfile`'ı kullanır. Eğer Railway'e özel bir yapılandırma istiyorsanız:

1. **Option 1**: Mevcut `Dockerfile`'ı kullanın (Railway PORT environment variable'ını otomatik kullanır)
2. **Option 2**: Railway için `Dockerfile.railway` oluşturuldu, Railway Dashboard'da build command olarak belirtebilirsiniz

### Build Process

Railway'deki build process:

1. Frontend'i build eder (`npm run build`)
2. Build edilmiş dosyaları Caddy ile serve eder
3. Railway'in verdiği `PORT` environment variable'ını kullanır (genellikle dinamik port)

## 🔗 Faydalı Linkler

- [Railway Documentation](https://docs.railway.app/)
- [Railway Custom Domains](https://docs.railway.app/deploy/custom-domains)
- [Railway Environment Variables](https://docs.railway.app/deploy/environment-variables)

## ✅ Kontrol Listesi

Deployment'tan önce:

- [ ] GitHub'a push edildi
- [ ] Railway'de service expose edildi
- [ ] Custom domain eklendi (okulpsikoloji.com)
- [ ] DNS kayıtları yapıldı
- [ ] Environment variables ayarlandı
- [ ] Deployment başarılı
- [ ] Site erişilebilir
- [ ] Değişiklikler görünüyor
