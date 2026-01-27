import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { blogAPI } from '../lib/api'
import { formatDate, truncateText } from '../lib/utils'
// import { Camera, Eye } from 'lucide-react'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasNext, setHasNext] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [tags, setTags] = useState([])

  useEffect(() => {
    fetchPosts()
    fetchTags()
  }, [page, searchTerm, selectedTag])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const params = {
        page,
        search: searchTerm,
        tags: selectedTag,
      }
      const response = await blogAPI.getPosts(params)
      setPosts(response.data.results)
      setHasNext(!!response.data.next)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchTags = async () => {
    try {
      const response = await blogAPI.getTags()
      setTags(response.data)
    } catch (error) {
      console.error('Error fetching tags:', error)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setPage(1)
    fetchPosts()
  }

  const handleTagFilter = (tagName) => {
    setSelectedTag(selectedTag === tagName ? '' : tagName)
    setPage(1)
  }

  const loadMore = () => {
    setPage(page + 1)
  }

  return (
    <>
      <Helmet>
        <title>Blog - Psikolog Alara Okul| Ruh Sağlığı Yazıları ve Öneriler</title>
        <meta name="description" content="Ruh sağlığı hakkında güncel yazılar, öneriler, araştırmalar ve IB psikoloji." />
        <meta property="og:title" content="Blog - Psikolog | Ruh Sağlığı Yazıları ve Öneriler" />
        <meta property="og:description" content="Ruh sağlığı hakkında güncel yazılar, öneriler, araştırmalar ve IB psikoloji." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Ruh sağlığı hakkında güncel yazılar, öneriler, araştırmalar ve IB psikoloji.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Yazılarda ara..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <svg
                  className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </form>

            {/* Tag Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleTagFilter('')}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTag === ''
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Tümü
              </button>
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => handleTagFilter(tag.name)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedTag === tag.name
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            </div>
          ) : (
            <>
              {posts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-xl text-gray-600">
                    Yazılarıma yakında buradan ulaşabilirsiniz.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
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
                    <h2 className="text-xl font-semibold mb-3">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-gray-900 hover:text-primary-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
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

              {/* Load More Button */}
              {hasNext && (
                <div className="text-center mt-12">
                  <button
                    onClick={loadMore}
                    className="btn-primary"
                    disabled={loading}
                  >
                    {loading ? 'Yükleniyor...' : 'Daha Fazla Yükle'}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default Blog
