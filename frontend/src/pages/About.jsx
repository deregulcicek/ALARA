import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <Helmet>
        <title>Hakkımda - Psikolog | Uzman Psikolog Dr. Ayşe Yılmaz</title>
        <meta name="description" content="Uzman Psikolog Dr. Ayşe Yılmaz hakkında bilgi. 15 yıllık deneyim, uzmanlık alanları ve terapi yaklaşımları." />
        <meta property="og:title" content="Hakkımda - Psikolog | Uzman Psikolog Dr. Ayşe Yılmaz" />
        <meta property="og:description" content="Uzman Psikolog Dr. Ayşe Yılmaz hakkında bilgi. 15 yıllık deneyim, uzmanlık alanları ve terapi yaklaşımları." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hakkımda
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Ruh sağlığı alanında 15 yıllık deneyimimle yanınızdayım
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Dr. Ayşe Yılmaz
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Uzman Psikolog olarak 15 yıldır ruh sağlığı alanında hizmet veriyorum. 
                İstanbul Üniversitesi Psikoloji Bölümü'nden mezun olduktan sonra, 
                aynı üniversitede Klinik Psikoloji alanında yüksek lisans ve doktora yaptım.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Bilişsel Davranışçı Terapi (BDT), Şema Terapi ve EMDR gibi kanıta dayalı 
                terapi yöntemlerini kullanarak, danışanlarımla birlikte çalışıyorum. 
                Her bireyin kendine özgü olduğuna inanır, terapi sürecini kişiselleştiririm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn-primary"
                >
                  Randevu Al
                </Link>
                <Link
                  to="/blog"
                  className="btn-secondary"
                >
                  Blog Yazılarım
                </Link>
              </div>
            </div>
            <div className="lg:order-first">
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Fotoğraf Alanı</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Eğitim ve Deneyim
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">
                Eğitim
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <div>
                    <strong>Doktora:</strong> İstanbul Üniversitesi - Klinik Psikoloji (2015)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <div>
                    <strong>Yüksek Lisans:</strong> İstanbul Üniversitesi - Klinik Psikoloji (2010)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <div>
                    <strong>Lisans:</strong> İstanbul Üniversitesi - Psikoloji (2008)
                  </div>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">
                Sertifikalar
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <div>
                    <strong>BDT Sertifikası:</strong> Beck Institute (2012)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <div>
                    <strong>EMDR Sertifikası:</strong> EMDR Institute (2014)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <div>
                    <strong>Şema Terapi:</strong> International Society for Schema Therapy (2016)
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Uzmanlık Alanları
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Çalıştığım ana konular ve terapi yaklaşımları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Anksiyete Bozuklukları</h3>
              <p className="text-gray-600 text-sm">
                Panik bozukluk, sosyal anksiyete, yaygın anksiyete bozukluğu tedavisi
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Depresyon</h3>
              <p className="text-gray-600 text-sm">
                Majör depresyon, distimi ve duygudurum bozuklukları tedavisi
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Aile ve Çift Terapisi</h3>
              <p className="text-gray-600 text-sm">
                İlişki sorunları, aile içi çatışmalar ve iletişim problemleri
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Çocuk ve Ergen</h3>
              <p className="text-gray-600 text-sm">
                Çocukluk çağı problemleri, ergenlik dönemi sorunları
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Travma ve EMDR</h3>
              <p className="text-gray-600 text-sm">
                Travma sonrası stres bozukluğu ve EMDR terapisi
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Kişilik Bozuklukları</h3>
              <p className="text-gray-600 text-sm">
                Borderline, narsisistik ve diğer kişilik bozuklukları
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Birlikte Çalışalım
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Ruh sağlığınız için doğru adımları atmaya hazır mısınız? 
            Size en uygun terapi yöntemini birlikte belirleyelim.
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
