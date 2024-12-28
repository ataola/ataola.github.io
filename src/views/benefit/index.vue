<template>
  <div class="container">
    <div class="main">
      <div class="main-left">
        <div class="sidebar-box">
          <side-bar :items="sideBarItems" :value="sideBarItem.value" @input="changeSideBar"></side-bar>
        </div>
      </div>
      <div class="main-right">
        <NeteaseMusic v-show="sideBarItem.value === 'NetEaseMusic'" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { TItem } from '@/types/components/sidebar'
import NeteaseMusic from './component/netease-music.vue'

declare type stateType = {
  sideBarItem: TItem
  sideBarItems: TItem[]
}

export default defineComponent({
  name: 'Benefit',
  components: {
    NeteaseMusic,
  },
  setup(props, { emit, slots, attrs }) {
    const state = reactive<stateType>({
      sideBarItem: {
        text: '網易雲音樂',
        value: 'NetEaseMusic',
      },
      sideBarItems: [
        {
          text: '網易雲音樂',
          value: 'NetEaseMusic',
        },
      ],
    })

    const changeSideBar = (value: string | number) => {
      state.sideBarItem = state.sideBarItems.find((item: any) => item.value === value) || {
        text: '網易雲音樂',
        value: 'NetEaseMusic',
      }
    }

    return {
      ...toRefs(state),
      changeSideBar,
    }
  },
})
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .top {
    width: 100%;
    height: 1rem;
    display: flex;
    padding: 0.2rem;
    justify-content: flex-end;
    box-sizing: border-box;
    button {
      display: flex;
      justify-content: space-around;
      margin: 0.1rem;
      min-width: 1.2rem;
      &:last-child {
        margin-right: 0.5rem;
      }
    }
  }

  .main {
    padding: 0.2rem;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    &-left {
      display: flex;
      flex-shrink: 0;
      .sidebar-box {
        display: block;
      }
    }

    &-right {
      display: flex;
      flex-grow: 1;
      padding: 0.2rem 0.3rem;
      justify-content: center;
      background-color: #fff;

      a {
        display: flex;
        img {
          display: flex;
          width: 6rem;
          height: 8rem;
        }
      }
    }
  }
}

@media screen and (max-width: 414px) {
  img {
    width: 4rem !important;
    height: 6rem !important;
  }
}
</style>
