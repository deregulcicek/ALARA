import { Helmet } from 'react-helmet-async'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Psikolog - Ruh Sağlığı ve Terapi Hizmetleri</title>
        <meta name="description" content="Profesyonel psikolog hizmetleri, bireysel terapi, aile terapisi ve ruh sağlığı danışmanlığı." />
        <meta property="og:title" content="Psikolog - Ruh Sağlığı ve Terapi Hizmetleri" />
        <meta property="og:description" content="Profesyonel psikolog hizmetleri, bireysel terapi, aile terapisi ve ruh sağlığı danışmanlığı." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout
