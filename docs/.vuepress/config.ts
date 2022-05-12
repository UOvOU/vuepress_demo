import {
  defineUserConfig
} from '@vuepress/cli'
import { searchPlugin } from '@vuepress/plugin-search'
import * as path from 'path'

export default defineUserConfig({
  // 站点配置
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Cloud API',
    },
    '/cn/': {
      lang: 'zh-CN',
      title: '上云API',
    },
  },

  // 主题和它的配置
  theme: path.resolve(__dirname, '../../theme/index.ts'),
  themeConfig: {
    sidebarLangPath: path.resolve(__dirname, 'sidebar.yml'),
    versionPath: path.resolve(__dirname, 'versions.yml'),
    docsRepo: "https://github.com/noralinlll/vuepress_demo",
    docsBranch: "doc-release",
    docsDir: "docs",
    editLinkPattern: ":repo/edit/:branch/:path",
    editLinkText: "Github Edit",
  },
  editLnk: true,
  plugins: [
    searchPlugin({}),
  ]
})

