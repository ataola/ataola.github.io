<template>
  <div class="container">
    <!-- 暂时不做这些功能了 -->
    <!-- <div class="top">
      <button class="button"><font-awesome-icon :icon="['fas', 'plus-circle']" />新增</button>
      <button class="button"><font-awesome-icon :icon="['fas', 'file-upload']" />导入</button>
      <button class="button"><font-awesome-icon :icon="['fas', 'file-download']" />导出</button>
    </div> -->
    <div class="main">
      <div class="main-left">
        <div class="sidebar-box">
          <side-bar :items="sideBarItems" :value="sideBarItem.value" @input="changeSideBar"></side-bar>
        </div>
      </div>
      <div class="main-right">
        <NavigationItem
          v-for="navigationItem in navigationFilterItems"
          :key="navigationItem.id"
          :value="navigationItem"
        />
        <div
          v-for="navigationItemRestItem in navigationItemRestArr"
          :key="navigationItemRestItem"
          class="flex-space-fix"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import SideBar from '@/components/SideBar.vue'
import NavigationItem from './components/NavigationItem.vue'
import { TNavigationItem } from '@/types/views/navigation'
import { NAVIGATION_SHORT_MAP } from '@/constant'
import navigationItems from '@/data/navigation.json'

export default defineComponent({
  name: 'Navigation',
  components: {
    [SideBar.name]: SideBar,
    [NavigationItem.name]: NavigationItem,
  },
  setup(props, { emit, slots, attrs }) {
    const state = reactive({
      sideBarItem: {
        text: 'Design',
        value: 'design',
      },
      navigationItems,
    })

    const sideBarItems = computed(() => {
      const { navigationItems } = state
      return [
        ...new Set(
          navigationItems.map((item: TNavigationItem) => {
            const { type } = item
            return type
          })
        ),
      ].map((value: string) => {
        return {
          text: NAVIGATION_SHORT_MAP[value] || value,
          title: value,
          value: value,
        }
      })
    })

    const navigationItemRestArr = computed(() => {
      const len = navigationFilterItems.value.length % 3
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

    const changeSideBar = (value: string | number) => {
      state.sideBarItem = sideBarItems.value.find((item: any) => item.value === value) || {
        text: 'Design',
        value: 'design',
      }
    }

    return {
      ...toRefs(state),
      sideBarItems,
      navigationItemRestArr,
      navigationFilterItems,
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
    }
  }
}

.button {
  background: #5e5df0;
  border-radius: 0.2rem;
  box-shadow: #5e5df0 0 0.15rem 0.2rem -0.15rem;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-family: Inter, Helvetica, 'Apple Color Emoji', 'Segoe UI Emoji', NotoColorEmoji, 'Noto Color Emoji',
    'Segoe UI Symbol', 'Android Emoji', EmojiSymbols, -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue',
    'Noto Sans', sans-serif;
  font-size: 0.2rem;
  font-weight: 700;
  line-height: 1;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 0.1rem 0.2rem;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
}
</style>
