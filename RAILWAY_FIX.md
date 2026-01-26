# 🔧 Railway Build Hatası Çözümü

## ❌ Mevcut Sorun

Railway'de build hatası alıyorsunuz:
- `npm ci --only=production` komutu başarısız oluyor
- Root Dockerfile backend için ama frontend build edilmeye çalışılıyor

## ✅ Çözüm: İki Ayrı Service Oluşturun

Railway'de **backend** ve **frontend** için **ayrı service'ler** oluşturmanız gerekiyor.

### Adım 1: Mevcut Service'i Silin veya Düzenleyin

1. Railway dashboard'da mevcut service'e gidin
2. Settings > Delete Service (veya yeni service ekleyin)

### Adım 2: Backend Service Oluşturun

1. **New Service** > **GitHub Repo** seçin
2. Repository'nizi seçin
3. **Settings** > **Root Directory**: `/backend` (boş bırakın, root'ta)
4. **Settings** > **Dockerfile Path**: `Dockerfile` (root'taki)
5. **Variables** ekleyin:
   - `DJANGO_SECRET_KEY`
   - `DEBUG=False`
   - `ALLOWED_HOSTS=*`
   - `DATABASE_URL` (Railway PostgreSQL service'inden)
   - Diğer environment variables

### Adım 3: Frontend Service Oluşturun

1. **New Service** > **GitHub Repo** seçin
2. Aynı repository'yi seçin
3. **Settings** > **Root Directory**: `/frontend`
4. **Settings** > **Dockerfile Path**: `Dockerfile` (frontend klasöründeki)
5. **Variables** ekleyin:
   - `VITE_API_URL=https://[backend-service-url]/api`

### Adım 4: PostgreSQL Service (İsteğe Bağlı)

1. **New Service** > **Database** > **PostgreSQL**
2. Backend service'e bağlayın
3. `DATABASE_URL` otomatik oluşturulacak

## 🎯 Alternatif: Tek Service ile Monorepo

Eğer tek service kullanmak istiyorsanız:

### Option 1: Backend + Static Frontend

1. Frontend'i local'de build edin
2. Build dosyalarını backend'e kopyalayın
3. Django static files olarak serve edin

### Option 2: Nginx ile Reverse Proxy

Daha karmaşık ama tam kontrol sağlar.

## 📝 Hızlı Çözüm: Railway.json'u Güncelleyin

Root'taki `railway.json` backend için. Frontend için ayrı bir service oluşturun veya şu yapılandırmayı kullanın:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "DOCKERFILE",
    "dockerfilePath": "Dockerfile"
  },
  "deploy": {
    "startCommand": "gunicorn psychologist_site.wsgi:application --bind 0.0.0.0:$PORT",
    "healthcheckPath": "/",
    "healthcheckTimeout": 100
  }
}
```

## 🚀 Önerilen Yapılandırma

### Service 1: Backend (Django)
- **Root Directory**: `/` (root)
- **Dockerfile**: `Dockerfile` (root'taki)
- **Port**: Railway otomatik atar
- **Start Command**: `gunicorn psychologist_site.wsgi:application --bind 0.0.0.0:$PORT`

### Service 2: Frontend (React)
- **Root Directory**: `/frontend`
- **Dockerfile**: `Dockerfile` (frontend klasöründeki)
- **Port**: Railway otomatik atar
- **Start Command**: `serve -s dist -l $PORT`

### Service 3: PostgreSQL (Database)
- Railway'den PostgreSQL service ekleyin
- Backend service'e otomatik bağlanır

## 🔧 Frontend Dockerfile Düzeltmesi

`frontend/Dockerfile` dosyasını kontrol edin. `npm ci` yerine `npm install` kullanın:

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (ci yerine install)
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Install serve
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
```

## 📋 Adım Adım Railway Setup

1. **Mevcut service'i silin** veya düzenleyin
2. **Backend service oluşturun**:
   - GitHub repo seçin
   - Root directory: `/` (boş)
   - Dockerfile: `Dockerfile`
3. **Frontend service oluşturun**:
   - Aynı GitHub repo
   - Root directory: `/frontend`
   - Dockerfile: `Dockerfile`
4. **PostgreSQL service ekleyin** (isteğe bağlı)
5. **Environment variables ekleyin**
6. **Domain bağlayın**

## ✅ Kontrol Listesi

- [ ] Mevcut service silindi veya düzenlendi
- [ ] Backend service oluşturuldu
- [ ] Frontend service oluşturuldu
- [ ] PostgreSQL service eklendi (isteğe bağlı)
- [ ] Environment variables eklendi
- [ ] Domain bağlandı
- [ ] Build başarılı oldu

## 🐛 Sorun Giderme

### npm ci hatası
- `package-lock.json` dosyası güncel mi kontrol edin
- `npm install` kullanmayı deneyin (ci yerine)

### Build hatası
- Railway logs'u kontrol edin
- Root directory doğru mu?
- Dockerfile path doğru mu?

### Port hatası
- Railway otomatik port atar (`$PORT` environment variable)
- Start command'da `$PORT` kullanın

## 📞 Destek

- **Railway Docs**: https://docs.railway.app
- **Railway Discord**: https://discord.gg/railway
