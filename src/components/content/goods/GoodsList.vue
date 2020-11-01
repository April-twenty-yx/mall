<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goodsList.list" :key="item.id" :good-item="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  props: {
    goodsList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
  
</style>
