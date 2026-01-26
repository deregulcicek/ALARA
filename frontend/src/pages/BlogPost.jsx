import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { blogAPI } from '../lib/api'
import { formatDate, generateMetaDescription } from '../lib/utils'

const BlogPost = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPost()
  }, [slug])

  const fetchPost = async () => {
    try {
      setLoading(true)
      const response = await blogAPI.getPost(slug)
      setPost(response.data)
    } catch (error) {
      console.error('Error fetching post:', error)
      setError('Yazı bulunamadı')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          <p className="mt-4 text-gray-600">Yazı yükleniyor...</p>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Yazı Bulunamadı</h1>
          <p className="text-gray-600 mb-8">Aradığınız yazı mevcut değil veya kaldırılmış olabilir.</p>
          <Link to="/blog" className="btn-primary">
            Blog'a Dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Psikolog Alara Okul Blog</title>
        <meta name="description" content={post.excerpt || generateMetaDescription(post.content)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || generateMetaDescription(post.content)} />
        <meta property="og:type" content="article" />
        {post.cover_image && (
          <meta property="og:image" content={post.cover_image} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://yourdomain.com/blog/${post.slug}`} />
      </Helmet>

      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Link to="/blog" className="hover:text-primary-600 transition-colors">
                Blog
              </Link>
              <span className="mx-2">•</span>
              <time dateTime={post.published_at}>
                {formatDate(post.published_at)}
              </time>
              <span className="mx-2">•</span>
              <span>{post.reading_time} dk okuma</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-xl text-gray-600 mb-6">
                {post.excerpt}
              </p>
            )}

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </header>

          {/* Cover Image */}
          {post.cover_image && (
            <div className="mb-12">
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{ __html: post.content_html }}
              className="prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-600 prose-strong:text-gray-900 prose-code:text-primary-600 prose-code:bg-primary-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
            />
          </div>

          {/* Author Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-primary-600 font-semibold text-lg">AY</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Psikolog Alara Okul</h3>
                <p className="text-gray-600"> Psikolog</p>
                <p className="text-sm text-gray-500 mt-1">
                  
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">İlgili Yazılar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* This would typically show related posts based on tags */}
              <div className="card">
                <h3 className="text-lg font-semibold mb-2">
                  <Link to="/blog" className="text-gray-900 hover:text-primary-600 transition-colors">
                    Diğer Blog Yazıları
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  Daha fazla ruh sağlığı yazısı için blog sayfamızı ziyaret edin.
                </p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold mb-2">
                  <Link to="/contact" className="text-gray-900 hover:text-primary-600 transition-colors">
                    Randevu Alın
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  Profesyonel destek almak için bizimle iletişime geçin.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-primary-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ruh Sağlığınız İçin Destek Alın
            </h2>
            <p className="text-gray-600 mb-6">
              Bu yazıda ele alınan konular hakkında daha fazla bilgi almak veya 
              profesyonel destek almak için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Randevu Al
              </Link>
              <Link to="/blog" className="btn-secondary">
                Diğer Yazılar
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default BlogPost
