import { Helmet } from 'react-helmet-async'

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Gizlilik Politikası - Psikolog | KVKK ve Veri Koruma</title>
        <meta name="description" content="Gizlilik politikamız ve kişisel verilerin korunması hakkında bilgiler. KVKK uyumlu veri işleme süreçleri." />
        <meta property="og:title" content="Gizlilik Politikası - Psikolog | KVKK ve Veri Koruma" />
        <meta property="og:description" content="Gizlilik politikamız ve kişisel verilerin korunması hakkında bilgiler. KVKK uyumlu veri işleme süreçleri." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gizlilik Politikası
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Kişisel verilerinizin korunması bizim için önemlidir
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>1. Giriş</h2>
            <p>
              Bu gizlilik politikası, web sitemizi ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda 
              kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır. 
              6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu olarak 
              kişisel verilerinizi işlerken yükümlülüklerimizi yerine getirmekteyiz.
            </p>

            <h2>2. Toplanan Kişisel Veriler</h2>
            <p>Hizmetlerimizi sunarken aşağıdaki kişisel verilerinizi toplayabiliriz:</p>
            <ul>
              <li><strong>Kimlik Verileri:</strong> Ad, soyad, doğum tarihi</li>
              <li><strong>İletişim Verileri:</strong> E-posta adresi, telefon numarası, adres</li>
              <li><strong>Sağlık Verileri:</strong> Danışmanlık sürecinde paylaştığınız sağlık bilgileri</li>
              <li><strong>Teknik Veriler:</strong> IP adresi, çerez bilgileri, tarayıcı bilgileri</li>
              <li><strong>İletişim Kayıtları:</strong> E-posta ve telefon görüşmeleri</li>
            </ul>

            <h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
            <p>Kişisel verilerinizi aşağıdaki amaçlarla işlemekteyiz:</p>
            <ul>
              <li>Psikolojik danışmanlık hizmetlerinin sunulması</li>
              <li>Randevu planlaması ve takibi</li>
              <li>Hasta dosyası oluşturma ve güncelleme</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>Hizmet kalitesinin artırılması</li>
              <li>İletişim ve bilgilendirme faaliyetleri</li>
            </ul>

            <h2>4. Kişisel Verilerin Paylaşılması</h2>
            <p>
              Kişisel verilerinizi, yasal zorunluluklar dışında üçüncü kişilerle paylaşmayız. 
              Ancak aşağıdaki durumlarda verileriniz paylaşılabilir:
            </p>
            <ul>
              <li>Yasal zorunluluklar gereği yetkili kurumlarla</li>
              <li>Hastanın hayatını tehdit eden acil durumlarda</li>
              <li>Hastanın açık rızası ile</li>
              <li>Hizmet sağlayıcılarımızla (sadece gerekli olan veriler)</li>
            </ul>

            <h2>5. Veri Güvenliği</h2>
            <p>
              Kişisel verilerinizin güvenliğini sağlamak için aşağıdaki önlemleri almaktayız:
            </p>
            <ul>
              <li>Teknik güvenlik önlemleri (şifreleme, güvenli sunucular)</li>
              <li>Fiziksel güvenlik önlemleri (güvenli ofis ortamı)</li>
              <li>İdari güvenlik önlemleri (personel eğitimi, erişim kontrolü)</li>
              <li>Düzenli güvenlik denetimleri</li>
            </ul>

            <h2>6. Veri Saklama Süreleri</h2>
            <p>
              Kişisel verilerinizi, işleme amacının gerektirdiği süre boyunca saklarız:
            </p>
            <ul>
              <li>Hasta dosyaları: 20 yıl (Sağlık Bakanlığı mevzuatı gereği)</li>
              <li>İletişim kayıtları: 3 yıl</li>
              <li>Web sitesi verileri: 2 yıl</li>
              <li>Muhasebe kayıtları: 10 yıl</li>
            </ul>

            <h2>7. Haklarınız</h2>
            <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
            <ul>
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenen verileriniz hakkında bilgi talep etme</li>
              <li>İşleme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmişse bunların düzeltilmesini isteme</li>
              <li>Belirtilen şartlar çerçevesinde verilerin silinmesini veya yok edilmesini isteme</li>
              <li>Düzeltme, silme veya yok edilme işlemlerinin üçüncü kişilere bildirilmesini isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması halinde zararın giderilmesini talep etme</li>
            </ul>

            <h2>8. Çerezler (Cookies)</h2>
            <p>
              Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanmaktayız. 
              Çerezler, web sitesinin düzgün çalışması için gerekli olan küçük metin dosyalarıdır. 
              Çerez ayarlarınızı tarayıcınızdan değiştirebilirsiniz.
            </p>

            <h2>9. Üçüncü Taraf Bağlantılar</h2>
            <p>
              Web sitemizde üçüncü taraf web sitelerine bağlantılar bulunabilir. 
              Bu sitelerin gizlilik politikalarından sorumlu değiliz. 
              Bu siteleri ziyaret etmeden önce gizlilik politikalarını incelemenizi öneririz.
            </p>

            <h2>10. Değişiklikler</h2>
            <p>
              Bu gizlilik politikasını gerektiğinde güncelleyebiliriz. 
              Önemli değişiklikler durumunda size e-posta yoluyla bilgi vereceğiz.
            </p>

            <h2>11. İletişim</h2>
            <p>
              Kişisel verilerinizle ilgili sorularınız veya haklarınızı kullanmak için 
              aşağıdaki iletişim bilgilerinden bize ulaşabilirsiniz:
            </p>
            <ul>
              <li><strong>E-posta:</strong> psk.alaraokul@gmail.com</li>
              <li><strong>Adres:</strong> Kocaeli, Türkiye</li>
            </ul>

            <p className="text-sm text-gray-600 mt-8">
              <strong>Son güncelleme:</strong> {new Date().toLocaleDateString('tr-TR')}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Privacy
