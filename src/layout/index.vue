<template>
  <div class="layout">
    <NavBar :items="stateList.navItems" />
    <router-view #default="{ Component, route }">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import NavBar from '@/layout/NavBar.vue'
import Footer from '@/layout/Footer.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    [NavBar.name]: NavBar,
    [Footer.name]: Footer,
  },
  setup(props, { emit, slots, attrs }) {
    const stateList = reactive({
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
          text: '博客',
          value: 'Blog',
          link: 'https://www.cnblogs.com/cnroadbridge/',
          children: [],
        },
        {
          text: '专题',
          value: 'Topic',
          link: '#',
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
    })

    return {
      stateList,
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
