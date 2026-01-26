# 🚀 Railway Setup - Adım Adım

## ❌ Mevcut Sorun

Railway'de `npm ci --only=production` hatası alıyorsunuz. Bu, Railway'in yanlış Dockerfile veya yanlış root directory kullandığını gösteriyor.

## ✅ Çözüm: Railway Service Ayarlarını Düzeltin

### Adım 1: Railway Dashboard'da Service Ayarları

1. Railway'de **ALARA** service'ine gidin
2. **Settings** sekmesine tıklayın
3. Şu ayarları kontrol edin:

#### Root Directory
- **Root Directory**: `/frontend` olmalı
- Eğer `/` veya boşsa, `/frontend` yazın

#### Dockerfile Path
- **Dockerfile Path**: `Dockerfile` olmalı
- Eğer farklı bir path varsa, `Dockerfile` yazın

#### Build Command (Boş bırakın)
- Railway otomatik olarak Dockerfile kullanacak

### Adım 2: Service'i Yeniden Deploy Edin

1. **Deployments** sekmesine gidin
2. **Redeploy** butonuna tıklayın
3. Veya yeni bir commit push edin

### Adım 3: Cache Temizleme (Gerekirse)

Eğer hala eski Dockerfile kullanılıyorsa:

1. **Settings** > **Advanced**
2. **Clear Build Cache** seçeneğini kullanın
3. Yeniden deploy edin

## 📋 Doğru Railway Yapılandırması

### Frontend Service Ayarları:

```
Service Name: alara-frontend
Root Directory: /frontend
Dockerfile Path: Dockerfile
Start Command: (boş - Dockerfile'daki CMD kullanılacak)
```

### Environment Variables:

```
VITE_API_URL=https://[backend-service-url]/api
PORT=3000 (Railway otomatik ekler)
```

## 🔧 Alternatif: Railway.json Oluşturun

Frontend klasörüne `railway.json` ekleyin:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "DOCKERFILE",
    "dockerfilePath": "Dockerfile"
  },
  "deploy": {
    "startCommand": "serve -s dist -l $PORT"
  }
}
```

## 🎯 Hızlı Çözüm

### Yöntem 1: Service Ayarlarını Düzelt

1. Railway Dashboard > ALARA Service > Settings
2. **Root Directory**: `/frontend` yazın
3. **Dockerfile Path**: `Dockerfile` yazın
4. **Save** tıklayın
5. **Redeploy** yapın

### Yöntem 2: Yeni Service Oluştur

1. **New Service** > **GitHub Repo**
2. Repository seçin
3. **Root Directory**: `/frontend`
4. **Dockerfile Path**: `Dockerfile`
5. Deploy edin

## 📝 Kontrol Listesi

- [ ] Railway'de service ayarları kontrol edildi
- [ ] Root Directory: `/frontend` olarak ayarlandı
- [ ] Dockerfile Path: `Dockerfile` olarak ayarlandı
- [ ] Build cache temizlendi (gerekirse)
- [ ] Service yeniden deploy edildi
- [ ] Build başarılı oldu

## 🐛 Sorun Giderme

### Hala `npm ci` hatası alıyorsanız:

1. **Settings** > **Root Directory** kontrol edin
2. `/frontend` olduğundan emin olun
3. **Clear Build Cache** yapın
4. Yeniden deploy edin

### Dockerfile bulunamıyor hatası:

1. **Settings** > **Dockerfile Path** kontrol edin
2. `Dockerfile` (büyük D, küçük f) olduğundan emin olun
3. Root Directory `/frontend` olmalı

### Build başarılı ama çalışmıyor:

1. **Settings** > **Start Command** kontrol edin
2. Boş bırakın veya `serve -s dist -l $PORT` yazın
3. `$PORT` environment variable Railway tarafından otomatik eklenir

## ✅ Doğru Ayarlar Özeti

```
Service Name: alara-frontend
Root Directory: /frontend
Dockerfile Path: Dockerfile
Start Command: (boş veya serve -s dist -l $PORT)
```

Bu ayarlarla Railway doğru Dockerfile'ı kullanacak ve build başarılı olacak! 🚀
