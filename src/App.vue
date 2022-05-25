<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { debounce } from 'lodash-es'
import { defineComponent, onBeforeMount } from 'vue'

export default defineComponent({
  name: 'App',
  setup(props, { emit, slots, attrs }) {
    const computeRootFontSize = () => {
      const documentElement = document.documentElement
      let clientWidth = documentElement.clientWidth
      clientWidth = clientWidth < 750 ? clientWidth : 750
      documentElement.style.fontSize = clientWidth / 7.5 + 'px'
    }

    onBeforeMount(() => {
      const debouncedComputeRootFontSize = debounce(computeRootFontSize, 1000)
      document.addEventListener('DOMContentLoaded', debouncedComputeRootFontSize)
      window.addEventListener(
        'orientationchange' in window ? 'orientationchange' : 'resize',
        debouncedComputeRootFontSize
      )
      computeRootFontSize()
    })
    return {}
  },
})
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: 'Arial', 'Microsoft YaHei', '黑体', '宋体', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
