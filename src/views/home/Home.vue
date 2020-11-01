<template>
  <!-- Home 视图唯一，此处可以用 id -->
  <div id="home">
    <nav-bar class="header">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar' 
import { getHomeMultidata } from 'network/home'
import HomeSwiper from './childComps/HomeSwiper'
export default {
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  components: {
    NavBar,
    HomeSwiper
  },
  created () {
    getHomeMultidata()
      .then(res => {
        console.log(res.data.data)
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
  }
}
</script>

<style scoped>
  .header {
    background: var(--color-tint);
    color: #fff;
  }
</style>
