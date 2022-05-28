<template>
  <div class="container">
    <div class="main">
      <div class="main-left">
        <div class="sidebar-box">
          <side-bar :items="sideBarItems" :value="sideBarItem.value" @input="changeSideBar"></side-bar>
        </div>
      </div>
      <div class="main-right">
        <NavigationItem v-for="navigationItem in curNavigationItems" :key="navigationItem.id" :value="navigationItem" />
        <div
          v-for="navigationItemRestItem in navigationItemRestArr"
          :key="navigationItemRestItem"
          class="flex-space-fix"
        ></div>
        <div v-if="navigationFilterItems.length > size" class="more">
          <button class="button" @click="loadMore">More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, inject, getCurrentInstance, ComponentInternalInstance } from 'vue'
import NavigationItem from './components/NavigationItem.vue'
import { TNavigationItem, TSideBarItem } from '@/types/views/navigation'
import { TNavigatorInfo } from '@/types/app'
import { NAVIGATION_SHORT_MAP } from '@/constant'
import navigationItems from '@/data/navigation.json'

declare type stateType = {
  sideBarItem: TSideBarItem
  navigationItems: TNavigationItem[]
  page: number
  size: number
}

export default defineComponent({
  name: 'Navigation',
  components: {
    [NavigationItem.name]: NavigationItem,
  },
  setup(props, { emit, slots, attrs }) {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance
    const state = reactive<stateType>({
      sideBarItem: {
        text: 'JS',
        value: 'javascript',
      },
      navigationItems,
      page: 1,
      size: 9,
    })

    const navigatorInfo: TNavigatorInfo | undefined = inject('navigatorInfo')
    if (navigatorInfo) {
      state.size = navigatorInfo.isMobile ? 4 : 9
    }

    const sideBarItems = computed(() => {
      let res: TSideBarItem[] = []
      const { navigationItems } = state
      const arr = [
        ...new Set(
          navigationItems.map((item: TNavigationItem) => {
            const { type } = item
            return type
          })
        ),
      ]
      arr
        .sort((a, b) => NAVIGATION_SHORT_MAP[a].length - NAVIGATION_SHORT_MAP[b].length)
        .forEach((value: string, index: number) => {
          const data = {
            text: NAVIGATION_SHORT_MAP[value] || value,
            title: value,
            value: value,
          }
          index % 2 === 0 ? res.unshift(data) : res.push(data)
        })
      const len = res.length
      const mid = len >> 1
      res.unshift(...res.splice(mid, len - mid))
      return res
    })

    const navigationItemRestArr = computed(() => {
      const len = curNavigationItems.value.length % 3
      const map: any = {
        '1': [1, 2],
        '2': [1],
        '3': [],
        '0': [],
      }
      return map[len]
    })

    const navigationFilterItems = computed(() => {
      return state.navigationItems.filter((item: TNavigationItem) => {
        return item.type === state.sideBarItem.value
      })
    })

    const curNavigationItems = computed(() => {
      return state.navigationItems
        .filter((item: TNavigationItem) => {
          return item.type === state.sideBarItem.value
        })
        .slice(0, state.page * state.size)
    })

    const changeSideBar = (value: string | number) => {
      state.sideBarItem = sideBarItems.value.find((item: any) => item.value === value) || {
        text: 'JS',
        value: 'javascript',
      }
      state.page = 1
    }

    const loadMore = () => {
      if (navigationFilterItems.value.length === curNavigationItems.value.length) {
        return proxy?.$message({ text: '＼(〇O〇)／没有更多了', type: 'warn' })
      }
      state.page++
    }

    return {
      ...toRefs(state),
      sideBarItems,
      navigationItemRestArr,
      navigationFilterItems,
      curNavigationItems,
      changeSideBar,
      loadMore,
    }
  },
})
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
      flex-wrap: wrap;
      flex-grow: 1;
      padding: 0.2rem 0.3rem;
      justify-content: space-between;
      align-content: flex-start;
      background-color: #fff;
      min-height: calc(100vh - 2.5rem);

      .flex-space-fix {
        display: flex;
        width: 30%;
      }

      .more {
        display: flex;
        justify-content: center;
        margin: 0.15rem auto;
        width: 100%;
        .button {
          background: rgba(82, 135, 255, 1);
          border-radius: 50%;
          box-shadow: rgba(82, 135, 255, 1) 0 0.15rem 0.2rem -0.15rem;
          box-sizing: border-box;
          color: #ffffff;
          cursor: pointer;
          font-family: Inter, Helvetica, 'Apple Color Emoji', 'Segoe UI Emoji', NotoColorEmoji, 'Noto Color Emoji',
            'Segoe UI Symbol', 'Android Emoji', EmojiSymbols, -apple-system, system-ui, 'Segoe UI', Roboto,
            'Helvetica Neue', 'Noto Sans', sans-serif;
          font-size: 0.18rem;
          font-weight: 700;
          line-height: 1;
          opacity: 1;
          outline: 0 solid transparent;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          width: 0.72rem;
          height: 0.72rem;
          white-space: nowrap;
          border: 0;
        }
      }
    }
  }
}
</style>
