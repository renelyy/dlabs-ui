import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'DlabsUI',
  description: 'A UI library',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' }
    ],
    sidebar: {
      '/guide/': [
        { 
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速上手', link: '/guide/quick-start' }
          ]
        }
      ],
      '/components/': [
        { text: 'DlTable', link: '/components/dl-table' },
        { text: 'DlForm', link: '/components/dl-form' }
      ]
    }
  }
})
