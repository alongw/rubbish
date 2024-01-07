import sidebar from './config/sidebar'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Hypotension treatment',
  description: '低血压治疗',
  themeConfig: {
    sidebar: sidebar,
    editLink: {
      pattern: 'https://github.com/alongw/rubbish/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    }
  },
  base: '/',
  outDir: '../dist',
  cleanUrls: true,
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData:
            '@import "../../../src/assets/theme/theme.less"; @import "../theme/main.less";'
        }
      }
    }
  }
})
