<template>
  <div class="container">
    <div class="main">
      <div class="main-left">
        <div class="sidebar-box">
          <side-bar :items="sideBarItems" :value="sideBarItem.value" @input="changeSideBar"></side-bar>
        </div>
      </div>
      <div class="main-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onBeforeMount } from 'vue'
import { useRouter, RouteRecordName, useRoute } from 'vue-router'
import { TItem } from '@/types/components/sidebar'

declare type stateType = {
  sideBarItem: TItem
  sideBarItems: TItem[]
}

export default defineComponent<stateType>({
  name: 'Laboratory',
  setup(props, { emit, slots, attrs }) {
    const router = useRouter()
    const route = useRoute()

    const state = reactive({
      sideBarItem: {
        text: '落雪',
        value: 'LaboratoryBootstrap',
      },
      sideBarItems: [
        {
          text: '落雪',
          value: 'LaboratoryBootstrap',
        },
        {
          text: '流萤',
          value: 'LEDLightWordIntro',
          isNew: true,
        },
      ],
    })

    const changeSideBar = (value: string | number) => {
      state.sideBarItem = state.sideBarItems.find((item: any) => item.value === value) || {
        text: '落雪',
        value: 'LaboratoryBootstrap',
      }

      const name = value as RouteRecordName
      router.push({
        name,
        params: {
          value,
        },
      })
    }

    onBeforeMount(() => {
      const {
        params: { value },
      } = route

      if (value) {
        changeSideBar(value as string)
      }
    })

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
      // padding: 0.2rem 0.3rem;
      justify-content: center;
      background-color: #fff;
      min-height: calc(100vh - 2.5rem);
    }
  }
}
</style>
