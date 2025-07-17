import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'DlabsUI',
  description: 'A UI library',
  base: '/dlsbs-ui/',
  themeConfig: {
    logo: {
      light: '/logo-light.png', // 使用相对路径
      dark: '/logo-light.png',  // 使用相对路径
      text: 'DlabsUI',
      link: '/',
    },
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
        { text: '组件清单', link: '/components/' },
        { text: 'DlTable', link: '/components/dl-table' },
        { text: 'DlForm', link: '/components/dl-form' }
      ]
    }
  }
})
