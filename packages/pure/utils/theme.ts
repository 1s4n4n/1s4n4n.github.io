export function getTheme() {
  try {
    return localStorage.getItem('theme')
  } catch {
    return 'system'
  }
}
let listening = false
export function listenThemeChange() {
  if (listening) return
  listening = true
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (!getTheme() || getTheme() === 'system') setTheme('system')
  })
}
export function setTheme(theme?: string, save = false) {
  const themes = ['system', 'dark', 'light']
  const current = getTheme() || 'system'
  const next = theme || (save ? themes[(themes.indexOf(current) + 1) % themes.length] : current)
  if (!themes.includes(next)) return
  if (save) {
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* Storage is optional. */
    }
  }
  const dark =
    next === 'dark' ||
    (next === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', dark)
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', dark ? '#0f0f15' : '#fbfaf8')
  return next
}
