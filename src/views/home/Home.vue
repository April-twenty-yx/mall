<template>
  <!-- Home 视图唯一，此处可以用 id -->
  <div id="home">
    <nav-bar class="header">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommends :recommends="recommends" />
    <home-feather />
    <tab-control class="tab-control" :control="['流行', '新款', '精选']" />
    <goods-list :goods-list="goods['pop'].list"/>
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
import GoodsList from 'components/content/goods/GoodsList'

import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommends from './childComps/HomeRecommend'
import HomeFeather from './childComps/HomeFeather'

import { getHomeMultidata, getHomeData } from 'network/home'
export default {
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      }
    }
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,

    HomeSwiper,
    HomeRecommends,
    HomeFeather
  },
  created () {
    this.ggetHomeMultidata()
    this.ggetHomeData('pop')
    this.ggetHomeData('new')
    this.ggetHomeData('sell')
  },
  methods: {
    ggetHomeMultidata () {
      getHomeMultidata()
        .then(res => {
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
    },
    ggetHomeData (type) {
      console.log(this.goods[type].page + 1)
      const page = this.goods[type].page + 1
      getHomeData(type, page)
        .then(res => {
          this.goods[type].list.push(1,3)
          this.goods[type].page++
        })
    }
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
