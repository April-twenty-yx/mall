module.exports = {
  configureWebpack: {
    resolve: {
      // extensions: [],
      // 配置别名
      // 不需要配置 '@': 'src'，配置了这一项反而会报错
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}