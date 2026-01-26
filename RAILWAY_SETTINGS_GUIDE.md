# 🎯 Railway Settings - Nereye Ne Yazılacak?

## 📋 Railway Settings Sayfasında Yapılacaklar

### 1. Root Directory Ekleme (EN ÖNEMLİ!)

**Nerede:** Settings sayfasında, **Source** bölümünün altında

**Ne yazılacak:**
```
/frontend
```

**Nasıl:**
1. Settings sayfasında aşağı kaydırın
2. **"Add Root Directory"** butonuna tıklayın (veya mevcut Root Directory alanını düzenleyin)
3. `/frontend` yazın
4. **Save** butonuna tıklayın

### 2. Builder Ayarları

**Nerede:** Settings > **Build** bölümü

**Ne yapılacak:**
- **Builder** seçeneğinde: **"Default"** yerine **"Dockerfile"** seçin
- Veya **"Railpack"** yerine **"Dockerfile"** seçin

**Nasıl:**
1. **Build** bölümüne gidin
2. **Builder** dropdown'ını açın
3. **"Dockerfile"** seçeneğini seçin

### 3. Start Command (İsteğe Bağlı)

**Nerede:** Settings > **Deploy** bölümü

**Ne yazılacak:**
```
serve -s dist -l $PORT
```

**Veya boş bırakın** (Dockerfile'daki CMD kullanılacak)

**Nasıl:**
1. **Deploy** bölümüne gidin
2. **"Start Command"** alanına yukarıdaki komutu yazın
3. Veya boş bırakın

### 4. Healthcheck Path (İsteğe Bağlı)

**Nerede:** Settings > **Deploy** bölümü

**Ne yazılacak:**
```
/
```

**Nasıl:**
1. **Deploy** bölümünde aşağı kaydırın
2. **"Healthcheck Path"** alanına `/` yazın

## ✅ Doğru Ayarlar Özeti

```
Root Directory: /frontend
Builder: Dockerfile
Start Command: serve -s dist -l $PORT (veya boş)
Healthcheck Path: / (isteğe bağlı)
```

## 📸 Adım Adım Görsel Rehber

### Adım 1: Root Directory Ekleme

1. Settings sayfasında **Source** bölümünü bulun
2. **"Add Root Directory"** linkine/butonuna tıklayın
3. Açılan alana `/frontend` yazın
4. **Save** veya **✓** işaretine tıklayın

### Adım 2: Builder Seçimi

1. **Build** bölümüne gidin
2. **Builder** dropdown'ını açın
3. **"Dockerfile"** seçeneğini seçin
4. Otomatik kaydedilir

### Adım 3: Start Command (İsteğe Bağlı)

1. **Deploy** bölümüne gidin
2. **"Start Command"** alanını bulun
3. `serve -s dist -l $PORT` yazın
4. Veya boş bırakın

### Adım 4: Deploy

1. Ayarları kaydettikten sonra
2. Üst menüden **"Deployments"** sekmesine gidin
3. **"Redeploy"** butonuna tıklayın
4. Veya yeni bir commit push edin

## ⚠️ Önemli Notlar

1. **Root Directory MUTLAKA `/frontend` olmalı**
   - Eğer boş veya `/` ise, Railway root'taki Dockerfile'ı kullanır
   - Frontend Dockerfile'ı `/frontend` klasöründe

2. **Builder Dockerfile olmalı**
   - Railpack veya Default değil
   - Dockerfile seçeneğini seçin

3. **Değişiklikler otomatik kaydedilir**
   - Bazı ayarlar otomatik kaydedilir
   - Root Directory değişikliği için Save butonuna tıklayın

## 🔍 Kontrol

Ayarları yaptıktan sonra:

1. **Deployments** sekmesine gidin
2. Yeni bir deployment başlatın
3. Build logs'u kontrol edin
4. Artık `frontend/Dockerfile` kullanılmalı
5. `npm install` komutu çalışmalı (ci değil)

## 🐛 Sorun Giderme

### Hala `npm ci` hatası alıyorsanız:

1. Root Directory'nin `/frontend` olduğundan emin olun
2. Builder'ın `Dockerfile` olduğundan emin olun
3. **Clear Build Cache** yapın (Settings > Advanced)
4. Yeniden deploy edin

### Dockerfile bulunamıyor:

1. Root Directory: `/frontend` kontrol edin
2. Repository'de `frontend/Dockerfile` dosyası var mı kontrol edin
3. GitHub'a push edildi mi kontrol edin

## ✅ Başarı Kriterleri

Build başarılı olduğunda:
- ✅ Build logs'da `npm install` görünecek (ci değil)
- ✅ `npm run build` başarılı olacak
- ✅ `serve -s dist` komutu çalışacak
- ✅ Service çalışır durumda olacak

Bu ayarları yaptıktan sonra build başarılı olmalı! 🚀
