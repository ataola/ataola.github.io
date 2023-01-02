<template>
  <router-view v-slot="{ Component }" :key="$route.path">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <audio id="audio" loop controls :src="getStaticMusic('nuan2')" style="display: none"></audio>
</template>

<script lang="ts">
import { debounce } from 'lodash-es'
import { defineComponent, onBeforeMount, provide, readonly, reactive, onMounted } from 'vue'
import { getStaticMusic } from '@utils/file'

export default defineComponent({
  name: 'App',
  setup(props, { emit, slots, attrs }) {
    const computeRootFontSize = () => {
      const documentElement = document.documentElement
      let clientWidth = documentElement.clientWidth
      clientWidth = clientWidth < 750 ? clientWidth : 750
      documentElement.style.fontSize = clientWidth / 7.5 + 'px'
    }

    const myAudioInfo = reactive<any>({
      audioDom: null,
      isPlay: false,
      play: function () {
        this.audioDom.play()
        this.isPlay = true
      },
      pause: function () {
        this.audioDom.pause()
      },
      finish: function () {
        this.audioDom.pause()
        this.audioDom.currentTime = 0
      },
      replay: function () {
        this.audioDom.currentTime = 0
        this.audioDom.play()
      },
    })

    provide('myAudioInfo', myAudioInfo)

    onBeforeMount(() => {
      const debouncedComputeRootFontSize = debounce(computeRootFontSize, 1000)
      document.addEventListener('DOMContentLoaded', debouncedComputeRootFontSize)
      window.addEventListener(
        'orientationchange' in window ? 'orientationchange' : 'resize',
        debouncedComputeRootFontSize
      )
      computeRootFontSize()

      const {
        appCodeName = '',
        appName = '',
        appVersion = '',
        platform = '',
        product = '',
        productSub = '',
        userAgent,
        vendor,
        vendorSub = '',
      } = window.navigator
      provide(
        'navigatorInfo',
        readonly({
          appCodeName,
          appName,
          appVersion,
          platform,
          product,
          productSub,
          userAgent,
          vendor,
          vendorSub,
          isMobile: !!userAgent.match(/(iPhone|iPod|iPad|Android|ios)/i),
        })
      )
    })

    onMounted(() => {
      myAudioInfo.audioDom = document.getElementById('audio')
    })

    return {
      getStaticMusic,
    }
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
