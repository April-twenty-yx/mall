module.exports = {
  configureWebpack: {
    resolve: {
      // extensions: [],
      // 配置别名
      alias: {
        '@': 'src',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}