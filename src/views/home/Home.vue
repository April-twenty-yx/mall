<template>
  <!-- Home 视图唯一，此处可以用 id -->
  <div id="home">
    <nav-bar class="header">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .header {
    background: var(--color-tint);
    color: #fff;
  }
</style>
