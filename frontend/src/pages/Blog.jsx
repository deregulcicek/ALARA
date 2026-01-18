import { Helmet } from 'react-helmet-async'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPosts, getTags } from '../lib/api'
import { formatDate, truncateText } from '../lib/utils'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [tags, setTags] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasNext, setHasNext] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedTag, setSelectedTag] = useState('')

  useEffect(() => {
    fetchPosts()
    fetchTags()
  }, [page, search, selectedTag])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const response = await getPosts({
        page,
        search,
        tags: selectedTag,
      })
      setPosts(response.data.results || [])
      setHasNext(!!response.data.next)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const fetchTags = async () => {
    try {
      const response = await getTags()
      setTags(response.data || [])
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <Helmet>
        <title>Blog | Ruh Sağlığı Yazıları</title>
      </Helmet>

      <section className="bg-primary-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Blog</h1>
        <p className="text-primary-100 mt-4">
          Ruh sağlığı üzerine yazılar ve öneriler
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag('')}
            className={`px-4 py-1 rounded-full ${
              selectedTag === ''
                ? 'bg-primary-600 text-white'
                : 'bg-white'
            }`}
          >
            Tümü
          </button>

          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setSelectedTag(tag.name)}
              className={`px-4 py-1 rounded-full ${
                selectedTag === tag.name
                  ? 'bg-primary-600 text-white'
                  : 'bg-white'
              }`}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="text-center">Yükleniyor...</div>
          ) : (
            <>
              <div className="grid md:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article key={post.id} className="card">
                    <h2 className="text-xl font-semibold mb-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-sm text-gray-500 mb-2">
                      {formatDate(post.published_at)}
                    </p>
                    <p>{truncateText(post.excerpt, 140)}</p>
                  </article>
                ))}
              </div>

              {hasNext && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setPage(page + 1)}
                    className="btn-primary"
                  >
                    Daha Fazla
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
