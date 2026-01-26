# 🔧 Railway Builder Düzeltmesi

## ❌ Mevcut Sorun

Railway Settings'te:
- ✅ Root Directory: `/frontend` (DOĞRU)
- ✅ Start Command: `serve -s dist -l $PORT` (DOĞRU)
- ❌ Builder: **"Railpack"** (YANLIŞ - Dockerfile olmalı)

## ✅ Çözüm: Builder'ı Değiştirin

### Adım 1: Builder Dropdown'ını Açın

1. Settings sayfasında **Build** bölümüne gidin
2. **Builder** dropdown'ını bulun
3. Şu anda **"Railpack"** veya **"Default"** seçili

### Adım 2: Dockerfile Seçin

1. **Builder** dropdown'ını açın
2. **"Dockerfile"** seçeneğini seçin
3. Otomatik kaydedilir

### Adım 3: Deploy

1. **Deployments** sekmesine gidin
2. **Redeploy** butonuna tıklayın
3. Veya yeni bir commit push edin

## 📋 Doğru Ayarlar

```
✅ Root Directory: /frontend
✅ Builder: Dockerfile (Railpack değil!)
✅ Start Command: serve -s dist -l $PORT
```

## 🎯 Builder Seçenekleri

Railway'de Builder dropdown'ında şu seçenekler olabilir:
- ❌ **Railpack** - Railway'in otomatik builder'ı (kullanmayın)
- ❌ **Default** - Varsayılan (kullanmayın)
- ✅ **Dockerfile** - Dockerfile kullan (BUNU SEÇİN)

## ⚠️ Önemli

Builder "Dockerfile" olmadan:
- Railway `frontend/Dockerfile` dosyasını kullanmaz
- Railpack otomatik olarak npm ci çalıştırmaya çalışır
- Bu yüzden build hatası alıyorsunuz

Builder "Dockerfile" olduğunda:
- Railway `frontend/Dockerfile` dosyasını kullanır
- `npm install --legacy-peer-deps` komutu çalışır
- Build başarılı olur

## ✅ Kontrol

Builder'ı "Dockerfile" olarak değiştirdikten sonra:

1. **Deployments** sekmesine gidin
2. Yeni deployment başlatın
3. **Build Logs**'u kontrol edin
4. Artık şunları görmelisiniz:
   - `FROM node:18-alpine`
   - `npm install --legacy-peer-deps`
   - `npm run build`
   - Build başarılı!

## 🐛 Hala Sorun Varsa

Eğer Builder dropdown'ında "Dockerfile" seçeneği yoksa:

1. **Settings** > **Build** bölümünde
2. **"Custom Build Command"** seçeneğini kullanın
3. Veya **"Config-as-code"** ile `railway.json` kullanın

Builder'ı "Dockerfile" olarak değiştirin ve yeniden deploy edin! 🚀
