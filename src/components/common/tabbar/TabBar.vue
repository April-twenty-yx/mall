<template>
  <div>
    <!-- 这个组件只管理有关 TabBar 相关的内容，而 TabBarItem 的内容完全可以不用管理 -->
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
@import '~assets/css/base.css';
#tab-bar {
  display: flex;
  background: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
}

</style>