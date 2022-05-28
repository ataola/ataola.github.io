<template>
  <div class="sidebar">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="sidebar-item"
      :class="{ active: isActive(item) }"
      @click="emit('input', item.value)"
    >
      <div class="word" :title="item.title">{{ item.text }}</div>
      <div v-if="item.isBeta" class="beta">
        <img
          src="data:image/png;base64,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"
          alt="beta"
          class="beta-img"
        />
      </div>
      <div v-if="item.isNew" class="beta">
        <img :src="NewImg" alt="new" class="beta-img" />
      </div>
      <div v-if="item.isHot" class="beta">
        <img :src="HotImg" alt="hot" class="beta-img" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TItem } from '@/types/components/sidebar'
import NewImg from '@static/icons/new.svg'
import HotImg from '@static/icons/hot.svg'

export default defineComponent({
  name: 'SideBar',
  props: {
    value: {},
    items: {
      type: Array as PropType<Array<TItem>>,
      default: () => [],
    },
  },
  setup(props, { emit, slots, attrs }) {
    const isActive = (item) => {
      return props.value === item.value
    }

    return {
      emit,
      isActive,
      NewImg,
      HotImg,
    }
  },
})
</script>

<style lang="scss" scoped>
.sidebar {
  min-width: 1.2rem;
  padding: 0.2rem 0;
  border-radius: 0.1rem;
  background-color: #fff;
  margin: 0 0.3rem;
  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.2rem;
    font-weight: 700;
    padding: 0.1rem;
    box-sizing: border-box;
    cursor: pointer;
    border-left: 2px solid transparent;
    &:hover {
      color: #5287ff;
    }
    .word {
      display: flex;
      padding: 0 0.1rem;
    }

    .beta {
      display: flex;
      padding: 0 0.1rem;
      &-img {
        width: 0.4rem;
      }
    }
  }
}

.active {
  background-color: rgba(82, 134, 255, 0.2);
  border-left: 2px solid #5286ff;
  color: #5287ff;
}
</style>
