import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL

export const blogAPI = axios.create({
  baseURL: `${BASE_URL}/blog`,
})

export const contactAPI = axios.create({
  baseURL: `${BASE_URL}/contact`,
})

// ✅ BLOG FONKSİYONLARI
export const getPosts = (params = {}) => {
  return blogAPI.get('/', { params })
}

export const getPostBySlug = (slug) => {
  return blogAPI.get(`/${slug}/`)
}

export const getTags = () => {
  return blogAPI.get('/tags/')
}
