module.exports = {
  // 站点配置
  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    docsRepo: "https://github.com/noralinlll/vuepress_demo",
    docsBranch: "doc-release",
    docsDir: "docs",
    editLinkPattern: ":repo/-/edit/:branch/:path",
    editLinkText: "Github EditLink",
  },
  base: "/vuepress_demo/",
  editLnk: true,
  extractHeaders: true,
  toc: true,
};