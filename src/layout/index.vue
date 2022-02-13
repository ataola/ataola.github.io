<template>
  <Navbar :items="stateList.navItems"/>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import Navbar from '@/layout/NavBar.vue';

export default defineComponent({
  name: 'Layout',
  components: {
    Navbar,
  },
  setup(props, { emit, slots, attrs }) {
    const stateList = reactive({
      navItems: [
        {
          text: '首页', value: 'Home', router: 'Home', children: []
        },
        {
          text: '通用', value: 'Common', router: 'Home', children: [
            { text: '数据结构和算法', value: 'DataStructureAndAlgorithm', link: 'https://github.com/ataola/coding-ts' },
            { text: '设计模式', value: 'DesignMode', link: 'https://github.com/ataola/coding/' },
          ]
        },
        {
          text: '前端', value: 'Frontend', router: 'Home', children: []
        },
        {
          text: '博客', value: 'Blog', link: 'https://www.cnblogs.com/cnroadbridge/', children: []
        },
        {
          text: '实验室', value: 'Laboratory', router: 'Home', children: []
        },
        {
          text: '友链', value: 'FriendsLinks', router: 'Home', children: []
        }
      ]
    });

    return {
      stateList
    };
  }
});
</script>

<style scoped>

</style>
