<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in control"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="changeTab(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    control: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    changeTab (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 35px;
    line-height: 35px;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control .active {
    color: var(--color-high-text);
    
  }
  .active span {
    border-bottom: 3px solid var(--color-tint);
    padding: 0 3px 3px;
  }
</style>