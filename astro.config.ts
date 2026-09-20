import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import AstroPureIntegration from 'astro-pure'
import { defineConfig, fontProviders, svgoOptimizer } from 'astro/config'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

import rehypeAutolinkHeadings from './src/plugins/rehype-auto-link-headings.ts'
import {
  addCollapse,
  addCopyButton,
  addLanguage,
  addTitle,
  updateStyle
} from './src/plugins/shiki-custom-transformers.ts'
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerRemoveNotationEscape
} from './src/plugins/shiki-official/transformers.ts'
import config from './src/site.config.ts'

export default defineConfig({
  devToolbar: {
    enabled: false
  },
  site: 'https://1s4n4n.github.io',
  trailingSlash: 'never',
  server: { host: true },
  prefetch: {
    defaultStrategy: 'viewport'
  },
  output: 'static',
  image: {
    responsiveStyles: true,
    remotePatterns: [{ protocol: 'https' }]
  },
  fonts: [
    {
      provider: fontProviders.fontshare(),
      name: 'Satoshi',
      cssVariable: '--font-satoshi',
      styles: ['normal', 'italic'],
      weights: [400, 500],
      subsets: ['latin']
    }
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [rehypeKatex, {}],
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: { className: ['anchor'] },
          content: { type: 'text', value: '#' }
        }
      ]
    ],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      },
      transformers: [
        // @ts-ignore
        transformerNotationDiff(),
        // @ts-ignore
        transformerNotationHighlight(),
        // @ts-ignore
        transformerRemoveNotationEscape(),
        // @ts-ignore
        updateStyle(),
        // @ts-ignore
        addTitle(),
        // @ts-ignore
        addLanguage(),
        // @ts-ignore
        addCopyButton(2000),
        // @ts-ignore
        addCollapse(15)
      ]
    }
  },
  integrations: [
    AstroPureIntegration(config)
  ],
  experimental: {
    contentIntellisense: true,
    svgOptimizer: svgoOptimizer(),
    clientPrerender: true,
    queuedRendering: {
      enabled: true
    }
  }
})