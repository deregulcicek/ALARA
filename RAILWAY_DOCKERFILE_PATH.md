# 📝 Railway Dockerfile Path - Ne Yazılacak?

## ✅ Dockerfile Path Alanına Yazılacak

### Root Directory: `/frontend` ise

**Dockerfile Path alanına:**
```
Dockerfile
```

**Açıklama:**
- Root Directory `/frontend` olarak ayarlandığında
- Railway zaten `/frontend` klasöründe çalışıyor
- Dockerfile `frontend/Dockerfile` konumunda
- Bu yüzden sadece `Dockerfile` yazmanız yeterli (relative path)

## 📋 Doğru Ayarlar

```
Root Directory: /frontend
Dockerfile Path: Dockerfile
```

## ⚠️ Önemli Notlar

1. **Sadece `Dockerfile` yazın**
   - `/Dockerfile` değil
   - `frontend/Dockerfile` değil
   - Sadece: `Dockerfile`

2. **Neden?**
   - Root Directory `/frontend` olarak ayarlandı
   - Railway otomatik olarak `/frontend` klasörüne gider
   - Dockerfile Path relative path olarak çalışır
   - Bu yüzden sadece dosya adı yeterli

3. **Büyük/Küçük Harf**
   - `Dockerfile` (D büyük, f küçük)
   - `dockerfile` veya `DOCKERFILE` değil

## ✅ Kontrol

Ayarları yaptıktan sonra:

1. **"Apply 1 change"** butonuna tıklayın (sol üstte)
2. Veya **"Deploy ⇧+Enter"** butonuna tıklayın
3. Build başarılı olmalı

## 🎯 Özet

**Dockerfile Path alanına sadece şunu yazın:**
```
Dockerfile
```

Başka bir şey yazmanıza gerek yok! 🚀
