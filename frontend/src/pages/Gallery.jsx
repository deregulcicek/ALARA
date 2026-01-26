import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
// import GalleryModal from '../components/GalleryModal'
// import { Camera, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const Gallery = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  
  const [galleryImages] = useState([
    // İlk 7 "Etkinlik ve seminer karesi" kaldırıldı
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
    '/images/gallery-20.jpg', // 2. fotoğraf ile 4. fotoğraf yer değiştirdi (eski 4. fotoğraf)
    '/images/gallery-19.jpg',
    '/images/gallery-18.jpg' // 2. fotoğraf ile 4. fotoğraf yer değiştirdi (eski 2. fotoğraf)
  ])

  const getImageDescription = (index) => {
    const descriptions = [
      // İlk 7 "Etkinlik ve seminer karesi" kaldırıldı
      'İzmit Kültür ve Yaşam Derneği - Kadına Yönelik Psikolojik Şiddet ve Farkındalık semineri',
      'İzmit Kültür ve Yaşam Derneği - Kadına Yönelik Psikolojik Şiddet ve Farkındalık semineri',
      'İzmit Kültür ve Yaşam Derneği - Kadına Yönelik Psikolojik Şiddet ve Farkındalık semineri',
      'Sınav Kaygısı seminer',
      'Ebeveynlere Yönelik Ergenle İletişim semineri',
      'Ebeveynlere Yönelik Ergenle İletişim semineri',
      'Kadına Yönelik Psikolojik Şiddet Farkındalık poster',
      '17. IB Day',
      'IB Toplantısı İstanbul 2024',
      'KAÇUV Cerrahpaşa - Çapa Hastaneleri Çocuk Onkoloji servisi',
      'İş Sağlığı ve Güvenliği Farkındalık Eğitimleri görevliliği', // 2. fotoğraf ile 4. fotoğraf yer değiştirdi (eski 4. fotoğraf)
      'İş Sağlığı ve Güvenliği Farkındalık Eğitimleri görevliliği',
      'KAÇUV Cerrahpaşa - Çapa Hastaneleri Çocuk Onkoloji servisi' // 2. fotoğraf ile 4. fotoğraf yer değiştirdi (eski 2. fotoğraf)
    ]
    return descriptions[index] || 'Seminer ve etkinlik karesi'
  }

  const openGallery = (index) => {
    setSelectedImageIndex(index)
    setIsGalleryOpen(true)
  }

  return (
    <>
      <Helmet>
        <title>Galeri - Psikolog Alara Okul | Etkinlik ve Seminerlerden Kareler</title>
        <meta name="description" content="Psikolog Alara Okul'un düzenlediği etkinlik ve seminerlerden kareler. Ruh sağlığı alanındaki çalışmalarımızdan görüntüler." />
        <meta property="og:title" content="Galeri - Psikolog Alara Okul | Etkinlik ve Seminerlerden Kareler" />
        <meta property="og:description" content="Psikolog Alara Okul'un düzenlediği etkinlik ve seminerlerden kareler. Ruh sağlığı alanındaki çalışmalarımızdan görüntüler." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-primary-100 hover:text-white mb-6 transition-colors"
            >
              ← Blog'a Dön
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Galeri
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Bazı etkinlik ve seminerlerden kareler
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => openGallery(index)}
                className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image}
                    alt={`Galeri ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-90 rounded-full p-3">
                        <span className="text-primary-600 text-xl">📷</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-gray-600">
                    {getImageDescription(index)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal - Temporarily disabled */}
      {/* <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={galleryImages}
        initialIndex={selectedImageIndex}
      /> */}
    </>
  )
}

export default Gallery
