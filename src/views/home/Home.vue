<template>
  <!-- Home 视图唯一，此处可以用 id -->
  <div id="home">
    <nav-bar class="header">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommends :recommends="recommends" />
    <home-feather />
    <tab-control class="tab-control" :control="['流行', '流行', '流行']" />
    <ul>
      <li>2</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar' 
import TabControl from 'components/content/tabControl/TabControl'

import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommends from './childComps/HomeRecommend'
import HomeFeather from './childComps/HomeFeather'

import { getHomeMultidata } from 'network/home'
export default {
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  components: {
    NavBar,
    TabControl,

    HomeSwiper,
    HomeRecommends,
    HomeFeather
  },
  created () {
    getHomeMultidata()
      .then(res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
  }
}
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .header {
    background: var(--color-tint);
    color: #fff;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    right: 0;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    background: #fff;
  }
</style>
