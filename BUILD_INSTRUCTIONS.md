# Frontend'i Build Etmek İçin Talimatlar

## ⚠️ Önemli: Değişiklikleri Görmek İçin Frontend'i Yeniden Build Etmeniz Gerekiyor

"Bize Ulaşın" butonu kodu Header.jsx dosyasına eklendi, ancak değişiklikleri tarayıcıda görmek için frontend'i yeniden build etmeniz gerekiyor.

## 🚀 Hızlı Başlangıç

### 1. Node.js Kurulumu

#### Yöntem A: Homebrew ile (Önerilen)
```bash
# Homebrew yoksa önce Homebrew kurun
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Node.js kurun
brew install node
```

#### Yöntem B: NVM ile (Node Version Manager)
```bash
# NVM kurun (zaten kurulu görünüyor)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Node.js 18 kurun ve kullanın
nvm install 18
nvm use 18
```

#### Yöntem C: Resmi Web Sitesinden
1. https://nodejs.org adresine gidin
2. LTS versiyonunu indirin ve kurun

### 2. Frontend'i Build Etme

Node.js kurulduktan sonra:

```bash
cd frontend

# Bağımlılıkları yükleyin (ilk kez)
npm install

# Frontend'i build edin
npm run build

# Development modunda çalıştırmak için
npm run dev
```

### 3. Değişiklikleri Görmek

Build tamamlandıktan sonra:

- **Development modunda**: `npm run dev` çalıştırın, tarayıcıda http://localhost:3000 adresine gidin
- **Production build**: `npm run build` yaptıktan sonra `dist` klasöründeki dosyalar güncellenir

## 📋 Yapılan Değişiklikler

✅ Header'a "Bize Ulaşın" butonu eklendi (05457109311 numarasına yönlendiriyor)
✅ Desktop ve mobil menüde görünüyor
✅ Yeşil renkte, "Randevu Al" butonunun yanında

## 🔍 Değişiklikleri Kontrol Etme

Header.jsx dosyasında (satır 47-60 ve 98-105):
- "Bize Ulaşın" butonu: `href="tel:05457109311"`
- Yeşil renk: `bg-green-600 hover:bg-green-700`

## 🐛 Sorun Giderme

### "npm: command not found" hatası
- Node.js'in doğru kurulduğundan emin olun: `node --version`
- Terminal'i yeniden başlatın
- PATH'in doğru olduğundan emin olun

### Build hatası
```bash
# node_modules klasörünü silin ve yeniden yükleyin
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port zaten kullanımda
```bash
# Port 3000 kullanımdaysa, farklı bir port kullanın
npm run dev -- --port 3001
```

## 📱 Production Deployment

Production sunucusunda frontend'i build etmek için deploy script'ini kullanın:

```bash
./deploy.sh
```

Bu script otomatik olarak frontend'i build edip Docker container'larına kopyalar.
