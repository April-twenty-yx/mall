<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
      // isActive: false
    }
  },
  methods: {
    itemClick () {
      // console.log('aa')
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive? { color: this.activeColor } : {}
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  /* 一般导航栏高度都设置为49px */
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  /* vertical-align 属性用于去除图片下面的空间 */
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}
</style>