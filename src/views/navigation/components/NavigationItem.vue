<template>
  <div class="nav-box">
    <div class="left">
      <Icon :value="navItem.avatar" />
    </div>
    <div class="right">
      <div class="title">
        <a :href="navItem.url" target="_blank"> {{ navItem.name }}</a>
      </div>
      <div class="desc" :title="navItem.description">
        {{ display(navItem.description) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRef } from 'vue'
import { TNavigationItem } from '@/types/views/navigation'
import { subStr } from '@utils/str'

export default defineComponent({
  name: 'NavigationItem',
  props: {
    value: {
      type: Object as PropType<TNavigationItem>,
      default: () => ({}),
    },
  },
  setup(props, { emit, slots, attrs }) {
    const navItem = toRef(props, 'value')

    const display = (description: string): string => subStr(description)

    return {
      navItem,
      display,
    }
  },
})
</script>

<style lang="scss" scoped>
.nav-box {
  display: flex;
  width: 32%;
  height: 2rem;
  border-radius: 0.1rem;
  box-shadow: -0.1rem 0.25rem 0.5rem rgba(0, 0, 0, 0.3);
  margin: 0.2rem 0;
  box-sizing: border-box;
  .left {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    padding: 0 0.1rem;
    box-sizing: border-box;
  }

  .right {
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    box-sizing: border-box;
    .title {
      display: flex;
      flex-basis: 100%;
      flex-shrink: 0;
      justify-content: flex-start;
      padding: 0.1rem;
      align-items: flex-end;
      font-size: 0.24rem;
      white-space: nowrap;
      box-sizing: border-box;
      a {
        color: #000;
        text-decoration: none;
      }
    }

    .desc {
      display: flex;
      flex-basis: 100%;
      text-align: left;
      padding: 0.1rem;
      font-size: 0.14rem;
      color: #86909c;
      cursor: default;
      box-sizing: border-box;
    }
  }
}

@media screen and (max-width: 414px) {
  .nav-box {
    width: 100%;
  }
}
</style>
