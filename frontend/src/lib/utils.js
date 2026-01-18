export const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

export const truncateText = (text, length = 100) =>
  text?.length > length ? text.slice(0, length) + '...' : text

export const generateMetaDescription = (text, maxLength = 160) => {
  if (!text) return ''
  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + '...'
    : text
}
