import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: 'Orfeo',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/graphics/logo/favicon.svg',

    sidebar: [
      {
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Syntax', link: '/syntax' },
          { text: 'API', link: '/api' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/orfeolang' }
    ]
  },
})
