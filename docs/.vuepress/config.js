module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  // 主题相关配置
  themeConfig: {
    // 导航
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    // 侧边栏
    sidebar: [
      '/',
      '/guide/',
      ['/zh/guide/', 'Explicit link text']
    ],
    lastUpdated: '最后更新时间',
  },
  // 多语言支持
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: '简体中文',
      title: 'VuePress中文',
      description: 'Vue 驱动的静态网站生成器'
    }
  }
}