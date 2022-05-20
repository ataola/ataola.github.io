<template>
  <div class="panel">
    <button class="btn-close" @click="() => close()">
      <font-awesome-icon :icon="['fas', 'angle-double-right']" />
    </button>
    <div class="title">liú yīng panel</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, PropType } from 'vue'
import { TWordAttr } from '@/types/views/LED-light-word'

declare type stateType = {
  wordAttr: TWordAttr
}

export default defineComponent({
  name: 'WordOperator',
  components: {},
  emits: ['operator'],
  props: {
    initData: {
      type: Object as PropType<TWordAttr>,
      default: () => ({
        type: 'slide', // 类型 blink闪烁, slide滑动
        text: '谭松韵，你真棒', // 文本
        fontSize: 2, // 文本尺寸
        direction: 'left', // 方向, left, right, up, down
        speed: 1, // 速度 0.5, 1, 1.5, 2
        count: 'n', // 次数 1, 2, 3, n
        isSquareBg: true, // 是否显示方格背景
      }),
    },
  },
  setup(props, { emit, slots, attrs }) {
    const state = reactive<stateType>({
      wordAttr: {
        type: 'slide', // 类型 blink闪烁, slide滑动
        text: '谭松韵，你真棒', // 文本
        fontSize: 2, // 文本尺寸
        direction: 'left', // 方向, left, right, up, down
        speed: 1, // 速度 0.5, 1, 1.5, 2
        count: 'n', // 次数 1, 2, 3, n
        isSquareBg: true, // 是否显示方格背景
      },
    })

    const close = (type = 'close', data: TWordAttr | undefined = undefined): void => {
      emit('operator', { type, data })
    }

    return {
      ...toRefs(state),
      close,
    }
  },
})
</script>
<style lang="scss" scoped>
.panel {
  width: 6rem;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  // 毛玻璃
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.5s ease-in-out;
  .btn-close {
    border: none;
    font-size: 0.32rem;
    background: transparent;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 0;
  }

  .title {
    color: #fff;
    font-size: 0.32rem;
    font-weight: 700;
    padding: 0.3rem 0.1rem;
  }
}
</style>
