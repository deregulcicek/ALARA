# 🔍 Railway Build Logs - Hata Analizi

## 📋 Build Logs'u Nasıl Göreceğiz?

### Adım 1: Railway'de Build Logs'a Erişim

1. Railway Dashboard'da **Deployments** sekmesine gidin
2. Son (kırmızı/başarısız) deployment'a tıklayın
3. **Build Logs** sekmesine tıklayın
4. Tüm log'u kopyalayın veya son 20-30 satırı paylaşın

### Adım 2: Hata Mesajını Paylaşın

Build logs'u paylaşırken özellikle şunları arayın:
- `ERROR` kelimesi içeren satırlar
- `FAILED` kelimesi içeren satırlar
- `npm` ile ilgili hatalar
- `Dockerfile` ile ilgili hatalar
- Son 10-20 satır

## 🔧 Yapılan Düzeltmeler

### Dockerfile Güncellendi

PORT değişkenini Railway için optimize ettim:
- `EXPOSE $PORT` - Railway otomatik port atar
- `CMD sh -c "serve -s dist -l ${PORT:-3000}"` - PORT yoksa 3000 kullanır

### Kontrol Edilmesi Gerekenler

1. **GitHub'a Push Edildi mi?**
   - Dockerfile değişiklikleri commit edildi mi?
   - Push edildi mi?

2. **Railway Ayarları:**
   ```
   Root Directory: /frontend
   Builder: Dockerfile
   Dockerfile Path: Dockerfile
   Start Command: (boş bırakın veya serve -s dist -l $PORT)
   ```

## 🐛 Yaygın Hatalar

### Hata 1: "npm install" hatası
**Çözüm:** `package-lock.json` güncel mi kontrol edin

### Hata 2: "Dockerfile not found"
**Çözüm:** Root Directory `/frontend` olduğundan emin olun

### Hata 3: "Port already in use"
**Çözüm:** Start Command'da `$PORT` kullanın

### Hata 4: "Cannot find module"
**Çözüm:** `npm install` başarılı oluyor mu kontrol edin

## 📝 Build Logs Örneği

Paylaşırken şu formatta olabilir:
```
[1/6] FROM docker.io/library/node:18-alpine
[2/6] WORKDIR /app
[3/6] COPY package*.json ./
[4/6] RUN npm install --legacy-peer-deps
ERROR: npm install failed
...
```

## 🚀 Sonraki Adımlar

1. **Build Logs'u paylaşın** - Hata mesajını görelim
2. **GitHub'a push edin** - Dockerfile değişikliklerini
3. **Redeploy yapın** - Railway'de
4. **Sonuçları kontrol edin**

**Build logs'u paylaşın, birlikte çözelim!** 🔍
