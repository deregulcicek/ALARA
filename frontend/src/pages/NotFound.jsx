import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Sayfa Bulunamadı | Psikolog Alara Okul</title>
        <meta name="description" content="Aradığınız sayfa bulunamadı. Ana sayfaya dönmek için tıklayın." />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary-600">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Sayfa Bulunamadı
            </h2>
            <p className="text-gray-600 mb-8">
              Aradığınız sayfa mevcut değil veya taşınmış olabilir. 
              Ana sayfaya dönmek için aşağıdaki butona tıklayın.
            </p>
          </div>

          <div className="space-y-4">
            <Link
              to="/"
              className="btn-primary inline-block"
            >
              Ana Sayfaya Dön
            </Link>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="btn-secondary"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="btn-secondary"
              >
                İletişim
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Popüler Sayfalar
            </h3>
            <div className="space-y-2">
              <Link
                to="/about"
                className="block text-primary-600 hover:text-primary-700 transition-colors"
              >
                Hakkımda
              </Link>
              <Link
                to="/blog"
                className="block text-primary-600 hover:text-primary-700 transition-colors"
              >
                Blog Yazıları
              </Link>
              <Link
                to="/contact"
                className="block text-primary-600 hover:text-primary-700 transition-colors"
              >
                Randevu Al
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
