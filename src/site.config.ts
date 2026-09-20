import type { CardListData, Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'

export const theme: ThemeUserConfig = {
  title: '1s4n4n',
  author: '1s4n4n',
  description: 'do it for my dream, my fam & my homies',
  favicon: '/favicon/favicon.ico',
  socialCard: '/images/social-card.png',
  locale: {
    lang: 'en-US',
    attrs: 'en_US',
    dateLocale: 'en-US',
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  logo: {
    src: '/src/assets/avatar.gif',
    alt: 'Avatar'
  },
  titleDelimiter: '•',
  prerender: true,
  npmCDN: 'https://cdn.jsdelivr.net/npm',
  head: [],
  customCss: [],
  header: {
    menu: [
      { title: 'Blog', link: '/blog' },
      { title: 'Projects', link: '/projects' },
      { title: 'About', link: '/about' }
    ]
  },
  footer: {
    year: `© ${new Date().getFullYear()}`,
    links: [
      {
        title: 'Site Policy',
        link: '/terms',
        pos: 2
      }
    ],
    credits: false,
    social: [
      { icon: 'github', label: 'GitHub', href: 'https://github.com/1s4n4n' },
      { icon: 'rss', label: 'RSS', href: '/rss.xml' }
    ]
  },
  content: {
    externalLinks: {
      content: ' ↗',
      properties: { style: 'user-select:none' }
    },
    blogPageSize: 8,
    share: ['x']
  }
}

export const integ: IntegrationUserConfig = {
  waline: {
    enable: false,
    server: ''
  },
  pagefind: true,
  quote: {
    server: 'https://dummyjson.com/quotes/random',
    target: `(data) => (data.quote.length > 80 ? \`\${data.quote.slice(0, 80)}...\` : data.quote || 'Error')`
  },
  links: {
    logbook: [],
    applyTip: []
  },
  typography: {
    class: 'prose text-base',
    blockquoteStyle: 'italic',
    inlineCodeBlockStyle: 'modern'
  },
  mediumZoom: {
    enable: true,
    selector: '.prose .zoomable',
    options: {
      className: 'zoomable'
    }
  }
}

export const terms: CardListData = {
  title: 'Terms content',
  list: [
    {
      title: 'Privacy Policy',
      link: '/terms/privacy-policy'
    },
    {
      title: 'Terms and Conditions',
      link: '/terms/terms-and-conditions'
    },
    {
      title: 'Copyright',
      link: '/terms/copyright'
    },
    {
      title: 'Disclaimer',
      link: '/terms/disclaimer'
    }
  ]
}

const config = { ...theme, integ } as Config
export default config