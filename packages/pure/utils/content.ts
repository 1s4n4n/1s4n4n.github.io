export function getTagSlug(tag: string) {
  return tag
    .normalize('NFKC')
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
}
export function getTagUrl(tag: string) {
  return `/tags/${encodeURIComponent(getTagSlug(tag))}`
}
export function getContentLanguage(language?: string) {
  if (!language) return undefined
  const value = language.trim().toLowerCase()
  if (['tiếng việt', 'vietnamese', 'vi', 'vi-vn'].includes(value)) return 'vi'
  if (['english', 'en', 'en-us'].includes(value)) return 'en'
  return undefined
}
