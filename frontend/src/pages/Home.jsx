import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { blogAPI } from '../lib/api'
import { formatDate, truncateText } from '../lib/utils'

const Home = () => {
  const [featuredPosts, setFeaturedPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [galleryImages] = useState([
    '/images/gallery-8.jpg',
    '/images/gallery-9.jpg',
    '/images/gallery-10.jpg',
    '/images/gallery-11.jpg',
    '/images/gallery-12.jpg',
    '/images/gallery-13.jpg',
    '/images/gallery-14.jpg',
    '/images/gallery-15.jpg',
    '/images/gallery-16.jpg',
    '/images/gallery-17.jpg',
    '/images/gallery-18.jpg',
    '/images/gallery-19.jpg',
    '/images/gallery-20.jpg'
  ])

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        const response = await blogAPI.getPosts({ page_size: 3 })
        setFeaturedPosts(response.data.results)
      } catch (error) {
        console.error('Error fetching featured posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedPosts()
  }, [])

  return (
    <>
      <Helmet>
        <title>Ana Sayfa - Psikolog Alara Okul | Ruh Sağlığı ve Psikolojik Danışmanlık Hizmetleri</title>
        <meta name="description" content="Profesyonel psikolog hizmetleri ile ruh sağlığınızı destekliyoruz. Bireysel terapi, Eğitim ve danışmanlık hizmetleri." />
        <meta property="og:title" content="Ana Sayfa - Psikolog Alara Okul | Ruh Sağlığı ve Psikolojik Danışmanlık Hizmetleri" />
        <meta property="og:description" content="Profesyonel psikolog hizmetleri ile ruh sağlığınızı destekliyoruz. Bireysel terapi, Eğitim ve danışmanlık hizmetleri." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Ruh Sağlığınızı
                <span className="block text-primary-200">Destekliyoruz</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl">
                Profesyonel psikolog hizmetleri ile yaşam kalitenizi artırın. 
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
                >
                  Randevu Al
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
                >
                  Hakkımda
                </Link>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              {/* Main Psychology Icons */}
              <div className="grid grid-cols-2 gap-6">
                {/* Brain Icon */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Psikolojik Danışmanlık</h3>
                  <p className="text-primary-100 text-sm">Kişisel Gelişim ve Ruh Sağlığı</p>
                </div>

                {/* Heart Icon */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Kurumsal Danışmanlık</h3>
                  <p className="text-primary-100 text-sm"> Eğitim ve Seminerler</p>
                </div>

                {/* Users Icon */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">IB Psikoloji Eğitimi</h3>
                  <p className="text-primary-100 text-sm">Online ve Yüzyüze Dersler</p>
                </div>

                {/* Shield Icon */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Güvenli Ortam</h3>
                  <p className="text-primary-100 text-sm">Gizlilik ve Güven</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Size en uygun psikolojik danışmanlık yöntemini birlikte belirleyelim
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Bireysel Psikolojik Danışmanlık Görüşmeleri</h3>
              <p className="text-gray-600">
                Kişisel sorunlarınızı çözmek ve ruh sağlığınızı iyileştirmek için birebir psikolojik danışmanlık görüşmeleri.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Eğitim</h3>
              <p className="text-gray-600">
                IB Psikoloji Eğitimi ve Kurumsal Eğitimler
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Danışmanlık</h3>
              <p className="text-gray-600">
                Yaşam dönemlerindeki zorluklarla başa çıkmanız için profesyonel danışmanlılk, Kurumsal Danışmanlık Hizmetleri
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Son Blog Yazıları
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ruh sağlığı hakkında güncel bilgiler ve öneriler
            </p>
          </div>

          {loading ? (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="card hover:shadow-lg transition-shadow duration-200">
                  {post.cover_image && (
                    <img
                      src={post.cover_image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <time dateTime={post.published_at}>
                      {formatDate(post.published_at)}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{post.reading_time} dk okuma</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-gray-900 hover:text-primary-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {truncateText(post.excerpt, 120)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Devamını Oku →
                  </Link>
                </article>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="btn-primary"
            >
              Tüm Yazıları Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Etkinlik ve Seminerlerden Kareler
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ruh sağlığı alanındaki çalışmalarımızdan ve düzenlediğimiz etkinliklerden görüntüler
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Galeri</h3>
              <p className="text-gray-600 mb-6">Etkinlik ve seminerlerden kareler</p>
              <a 
                href="/gallery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                📷 Galeriyi Görüntüle →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ruh Sağlığınız İçin Hemen Başlayın
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Profesyonel destek almak için bugün randevu alın. 
            İlk adımı atmak her zaman en zorudur, ama en önemlisidir.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            Ücretsiz İlk Görüşme
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home