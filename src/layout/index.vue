<template>
  <div class="layout">
    <NavBar :items="state.navItems" />
    <router-view #default="{ Component, route }">
      <transition name="fade" mode="out-in">
        <!-- <keep-alive> -->
        <component :is="Component" :key="route.path" />
        <!-- </keep-alive> -->
      </transition>
    </router-view>
    <Footer />
    <!-- <Footer v-show="state.isShowFooter" /> -->
  </div>
  <!-- <audio id="audio" loop controls :src="getStaticMusic('nuan2')" style="display: none"></audio> -->
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, provide, watch } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '@layout/NavBar.vue'
import Footer from '@layout/Footer.vue'
// import { getStaticMusic } from '@utils/file'
import { TNavBarItems } from '@/types/layout/navbar'

declare type stateType = {
  navItems: TNavBarItems
  // isShowFooter: boolean
}

export default defineComponent({
  name: 'Layout',
  components: {
    [NavBar.name]: NavBar,
    [Footer.name]: Footer,
  },
  setup(props, { emit, slots, attrs }) {
    const state = reactive<stateType>({
      navItems: [
        {
          text: '首页',
          value: 'Home',
          router: 'Home',
          children: [],
        },
        {
          text: '导航',
          value: 'Navigation',
          router: 'Navigation',
          children: [],
        },
        {
          text: '玉の涛',
          value: 'Future',
          router: 'Future',
          children: [],
        },
        {
          text: '专题',
          value: 'Subject',
          router: 'Subject',
          children: [
            { text: '数据结构和算法', value: 'DataStructureAndAlgorithm', link: 'https://zhengjiangtao.cn/coding-ts' },
            { text: '设计模式', value: 'DesignMode', link: 'https://zhengjiangtao.cn/coding/' },
          ],
        },
        {
          text: '实验室',
          value: 'Laboratory',
          router: 'Laboratory',
          children: [],
        },
      ],
      // isShowFooter: true,
    })

    const route = useRoute()
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

    onMounted(() => {
      myAudioInfo.audioDom = document.getElementById('audio')
      // if (['/ZJT-LOVE-YUER-FOREVER'].includes(route.path)) {
      //   state.isShowFooter = false
      // } else {
      //   state.isShowFooter = true
      // }
    })

    // watch(
    //   () => route.path,
    //   (newPath, oldPath) => {
    //     console.log(newPath, oldPath)
    //     if (['/ZJT-LOVE-YUER-FOREVER'].includes(newPath)) {
    //       state.isShowFooter = false
    //     } else {
    //       state.isShowFooter = true
    //     }

    //     if (['/ZJT-LOVE-YUER-FOREVER'].includes(oldPath)) {
    //       window.location.reload()
    //     }
    //   }
    // )

    return {
      state,
      // getStaticMusic,
    }
  },
})
</script>

<style scoped>
.layout {
  width: 100%;
  min-height: 100%;
  position: relative;
  padding-bottom: 1rem;
  box-sizing: border-box;
  background-color: #f5f5f5;
}
</style>
