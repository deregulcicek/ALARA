# 🔍 Railway Build Hatası - Sorun Giderme

## 📋 Build Logs'u Kontrol Etme

### Adım 1: Build Logs'a Erişim

1. Railway Dashboard'da **Deployments** sekmesine gidin
2. Son (failed) deployment'a tıklayın
3. **Build Logs** sekmesine tıklayın
4. Hata mesajını kopyalayın ve paylaşın

### Adım 2: Yaygın Hatalar ve Çözümleri

## 🐛 Olası Hatalar

### Hata 1: "Cannot find module" veya "npm install" hatası

**Çözüm:**
- `package-lock.json` dosyasını kontrol edin
- Frontend klasöründe `npm install` çalıştırın
- Değişiklikleri commit ve push edin

### Hata 2: "Dockerfile not found"

**Çözüm:**
- Root Directory: `/frontend` olduğundan emin olun
- Dockerfile Path: `Dockerfile` olduğundan emin olun
- `frontend/Dockerfile` dosyasının var olduğundan emin olun

### Hata 3: "npm ci" hatası

**Çözüm:**
- Dockerfile'da `npm ci` yerine `npm install` kullanıldığından emin olun
- Dockerfile'ı kontrol edin

### Hata 4: Port hatası

**Çözüm:**
- Start Command: `serve -s dist -l $PORT` olduğundan emin olun
- `$PORT` environment variable Railway tarafından otomatik eklenir

## 🔧 Hızlı Kontrol

### 1. Dockerfile Kontrolü

`frontend/Dockerfile` dosyasını kontrol edin:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

### 2. Railway Ayarları Kontrolü

```
✅ Root Directory: /frontend
✅ Builder: Dockerfile
✅ Dockerfile Path: Dockerfile
✅ Start Command: serve -s dist -l $PORT
```

### 3. GitHub Repository Kontrolü

- `frontend/Dockerfile` dosyası commit edildi mi?
- `frontend/package.json` dosyası güncel mi?
- `frontend/package-lock.json` dosyası var mı?

## 📝 Build Logs Paylaşımı

Build logs'u paylaşırken:
1. Tüm hata mesajını kopyalayın
2. Özellikle son satırları paylaşın
3. "ERROR" veya "FAILED" içeren satırları paylaşın

## 🚀 Alternatif Çözümler

### Çözüm 1: Build Cache Temizleme

1. Settings > Advanced
2. Clear Build Cache
3. Redeploy

### Çözüm 2: Yeni Service Oluşturma

1. Mevcut service'i silin
2. New Service > GitHub Repo
3. Root Directory: `/frontend`
4. Builder: Dockerfile
5. Deploy

### Çözüm 3: Dockerfile'ı Güncelleme

Dockerfile'da `npm install` yerine `npm ci` kullanmayı deneyin (eğer package-lock.json varsa):

```dockerfile
RUN npm ci --legacy-peer-deps
```

## 📞 Yardım

Build logs'u paylaşın, birlikte çözelim! 🔍
