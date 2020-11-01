<template>
  <div class="good-item">
    <img :src="goodItem.img" alt="">
    <div>
      <p>{{ goodItem.title }}</p>
      <span>{{ goodItem.price }}</span>
      <span>{{ goodItem.collect }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodItem: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  
</style>
