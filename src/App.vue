<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabbar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  /* 使用 import 引入 css 文件时要在路径前面加一个 ~ */
  @import '~assets/css/base.css';
</style>
