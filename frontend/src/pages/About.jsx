// src/pages/About.jsx
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <Helmet>
        <title>Hakkımda - Psikolog | Psikolog Alara Okul</title>
        <meta
          name="description"
          content=" Psikolog Alara Okul hakkında bilgi. 6 yıllık deneyim, uzmanlık alanları ve terapi yaklaşımları."
        />
        <meta property="og:title" content="Hakkımda - Psikolog | Uzman Alara Okul" />
        <meta
          property="og:description"
          content="Psikolog Alara Okul hakkında bilgi. 6 yıllık deneyim, uzmanlık alanları ve terapi yaklaşımları."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hakkımda</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Ruh sağlığı alanında 6 yıllık deneyimimle yanınızdayım
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Psikolog Alara Okul</h2>
              <p className="text-lg text-gray-600 mb-6">
                Psikolog olarak 6 yıldır ruh sağlığı alanında hizmet veriyorum. İstanbul Arel Üniversitesi
                Psikoloji Bölümü'nden mezun olduktan sonra, IMDAT (Intiharla Mücadelede Danışmanlık Ağına
                Tutun) projesi İl Koordinatörlüğü, KAÇUV 'Sanatla Hayata Renk Kat' projesi Cerrahpaşa ve
                Çapa Onkoloji servisleri gönüllü psikoloğu, İş Sağlığı ve Güvenliği Alanında Kurumsal
                Farkındalık Eğitimleri, Milli Eğitim'e bağlı okullarda Psikolojik danışmanlık ve YKS Koçluğu,
                IB CAS projeleri koordinatörlüğü, Kadına Şiddet gibi toplumsal konularda seminerler, Yaşlı
                Bakım Merkezlerinde psikolojik destek gibi çeşitli alanlarda çalıştım.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Bilişsel Davranışçı Terapi (BDT), Şema Terapi ve EMDR gibi kanıta dayalı yöntemlerini
                kullanarak, danışanlarımla birlikte çalışıyorum. Ayrıca sertifikalı IB Psikoloji öğretmeni
                olarak öğrencilere eğitim veriyorum. Her bireyin kendine özgü olduğuna inanır, psikolojik
                danışmanlık sürecini kişiselleştiririm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Randevu Al
                </Link>
                <Link to="/blog" className="btn-secondary">
                  Blog Yazılarım
                </Link>
              </div>
            </div>
            <div className="lg:order-first">
              <div className="relative">
                <img
                  src="/images/alara-okul.jpg"
                  alt="Psikolog Alara Okul"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg shadow-lg flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-primary-800 mb-2">Psikolog Alara Okul</h3>
                    <p className="text-primary-600">Profesyonel Fotoğraf</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hizmetlerim</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kanıta dayalı terapi yöntemleri ile ruh sağlığınızı destekliyorum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Bilişsel Davranışçı Terapi (BDT)</h3>
              <p className="text-gray-600">
                Düşünce, duygu ve davranışlarınız arasındaki bağlantıları keşfederek olumsuz düşünce kalıplarını değiştirme
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Şema Terapi</h3>
              <p className="text-gray-600">
                Erken yaşam deneyimlerinden kaynaklanan olumsuz şemaları iyileştirme ve sağlıklı başa çıkma yöntemleri geliştirme
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">EMDR Terapisi</h3>
              <p className="text-gray-600">
                Travmatik deneyimlerin işlenmesi ve iyileştirilmesi için göz hareketleri ile duyarsızlaştırma tekniği
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Bireysel Terapi</h3>
              <p className="text-gray-600">
                Kişiye özel yaklaşımla ruh sağlığı sorunlarınızı ele alma ve iyileşme sürecinizi destekleme
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Aile Terapisi</h3>
              <p className="text-gray-600">
                Aile içi iletişim problemlerini çözme ve sağlıklı aile dinamikleri oluşturma
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Psikolojik Danışmanlık</h3>
              <p className="text-gray-600">
                Yaşam dönemlerindeki zorluklarla başa çıkma ve kişisel gelişim sürecinizi destekleme
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Eğitim ve Deneyim</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Eğitim</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <div>
                    <strong>IB Psikoloji Öğretmeni</strong> (2023)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <div>
                    <strong>EMDR Eğitimi, BDT Eğitimi</strong> (2022)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <div>
                    <strong>Lisans:</strong> İstanbul Arel Üniversitesi - Psikoloji (2019)
                  </div>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Sertifikalar</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <div>
                    <strong>BDT Sertifikası</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <div>
                    <strong>EMDR Sertifikası</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <div>
                    <strong>Şema Terapi</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <div>
                    <strong>Çocuk ve Ergen BDT</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <div>
                    <strong>Nöropsikolojik Değerlendirme Testleri</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Uzmanlık Alanlarım</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Çalıştığım ana konular 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Bireysel Psikolojik Danışmanlık</h3>
              <p className="text-gray-600 text-sm">Kişisel sorunlarınızı çözmek için birebir danışmanlık</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Kurumsal Danışmanlık</h3>
              <p className="text-gray-600 text-sm">Kurumsak Eğitim ve Seminerler</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Çocuk ve Ergen BDT</h3>
              <p className="text-gray-600 text-sm">Çocuk ve ergenler için özel BDT teknikleri</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Nöropsikolojik Değerlendirme Testleri</h3>
              <p className="text-gray-600 text-sm">Bilişsel işlevlerin değerlendirilmesi</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Travma ve EMDR</h3>
              <p className="text-gray-600 text-sm">Travma sonrası iyileşme ve EMDR protokolleri</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">IB Psikoloji Eğitimi</h3>
              <p className="text-gray-600 text-sm">Uluslararası Bakalorya Psikoloji dersleri</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kullandığım Yöntemler</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kanıta dayalı psikolojik danışmanlık yaklaşımları ve değerlendirme yöntemleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Terapi Yöntemleri</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong>Bilişsel Davranışçı Terapi (BDT)</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong>Şema Terapi</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong>EMDR</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong>Çocuk ve Ergen BDT</strong>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Değerlendirme Testleri</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong>Nöropsikolojik Testler</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong>Bilişsel Değerlendirme</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong>Dikkat ve Konsantrasyon Testleri</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong>Hafıza Değerlendirmesi</strong>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Eğitim ve Danışmanlık</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong>IB Psikoloji Eğitimi</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong>Kurumsal Eğitimler</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong>YKS Koçluğu</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong>Toplumsal Seminerler</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Birlikte Çalışalım</h2>
          <p className="text-xl text-primary-100 mb-8">
            Ruh sağlığınız için doğru adımları atmaya hazır mısınız? Size en uygun psikolojik danışmanlık
            yöntemini birlikte belirleyelim.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            İletişime Geçin
          </Link>
        </div>
      </section>
    </>
  )
}

export default About