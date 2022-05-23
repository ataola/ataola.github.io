<template>
  <div class="panel">
    <button class="btn-close" @click="() => close()">
      <font-awesome-icon :icon="['fas', 'angle-double-right']" />
    </button>
    <div class="title">liú yīng panel</div>
    <div class="content">
      <div class="item">
        <div class="item-title">类型:</div>
        <RadioBox
          :value="wordAttr.type"
          :options="typeOptions"
          @input="(value: string) => handleInput('type', value)"
        />
      </div>
      <div class="item">
        <div class="item-title">文字:</div>
        <input
          class="item-input"
          :value="wordAttr.text"
          placeholder="请输入文字"
          @input="(event: any) => (wordAttr.text = event.target.value)"
        />
      </div>
      <div class="item">
        <div class="item-title">文字颜色:</div>
        <input
          class="item-color"
          :value="wordAttr.color"
          type="color"
          @input="(event: any) => (wordAttr.color = event.target.value)"
        />
      </div>
      <div class="item">
        <div class="item-title">背景颜色:</div>
        <input
          class="item-color"
          :value="wordAttr.bgColor"
          type="color"
          @input="(event: any) => (wordAttr.bgColor = event.target.value)"
        />
      </div>
      <div class="item">
        <div class="item-title">尺寸:</div>
        <RadioBox
          :value="wordAttr.size"
          :options="sizeOptions"
          @input="(value: string) => handleInput('size', value)"
        />
      </div>
      <div class="item">
        <div class="item-title">方向:</div>
        <RadioBox
          :value="wordAttr.direction"
          :options="directionOptions"
          @input="(value: string) => handleInput('direction', value)"
        />
      </div>
      <div class="item">
        <div class="item-title">速度:</div>
        <RadioBox
          :value="wordAttr.speed"
          :options="speedOptions"
          @input="(value: string) => handleInput('speed', value)"
        />
      </div>
      <div class="item">
        <div class="item-title">次数:</div>
        <RadioBox
          :value="wordAttr.count"
          :options="countOptions"
          @input="(value: string) => handleInput('count', value)"
        />
      </div>
      <div class="item">
        <div class="item-title">是否格子化:</div>
        <SingleRadioBox :value="wordAttr.isSquareBg" @input="(value: boolean) => handleInput('isSquareBg', value)" />
      </div>
      <div class="item">
        <button class="button" @click="confirm">确认</button>
        <button class="button" @click="() => close()">取消</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  PropType,
  onBeforeMount,
  getCurrentInstance,
  ComponentInternalInstance,
} from 'vue'
import { TWordAttr, TRadioItem } from '@/types/views/LED-light-word'
import RadioBox from './RadioBox.vue'
import SingleRadioBox from './SingleRadioBox.vue'

declare type stateType = {
  wordAttr: TWordAttr
  typeOptions: TRadioItem[]
  sizeOptions: TRadioItem[]
  directionOptions: TRadioItem[]
  speedOptions: TRadioItem[]
  countOptions: TRadioItem[]
}

export default defineComponent({
  name: 'WordOperator',
  components: {
    [RadioBox.name]: RadioBox,
    [SingleRadioBox.name]: SingleRadioBox,
  },
  emits: ['operator'],
  props: {
    initData: {
      type: Object as PropType<TWordAttr>,
      default: () => ({
        type: 'slide', // 类型 blink闪烁, slide滑动
        text: '谭松韵，你真棒', // 文本
        size: 'large', // 尺寸 中杯, 大杯, 特大杯 ====> 致敬罗永浩的梗！
        direction: 'left', // 方向, left, right, up, down
        speed: 1, // 速度 0.5, 1, 1.5, 2
        count: 'n', // 次数 1, 2, 3, n
        isSquareBg: true, // 是否显示方格背景
        color: '#fff', // 文字颜色
        bgColor: '#c0c0c0', // 背景颜色
      }),
    },
  },
  setup(props, { emit, slots, attrs }) {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance

    const state = reactive<stateType>({
      wordAttr: {
        type: 'slide', // 类型 blink闪烁, slide滑动
        text: '谭松韵，你真棒', // 文本
        size: 'large', // 文本尺寸
        direction: 'left', // 方向, left, right, up, down
        speed: 1, // 速度 0.5, 1, 1.5, 2
        count: 'n', // 次数 1, 2, 3, n
        isSquareBg: true, // 是否显示方格背景
        color: '#fff', // 文字颜色
        bgColor: '#c0c0c0', // 背景颜色
      },
      typeOptions: [
        { text: '闪烁', value: 'blink' },
        { text: '滑动', value: 'slide' },
      ],
      sizeOptions: [
        { text: '中杯', value: 'middle' },
        { text: '大杯', value: 'large' },
        { text: '特大杯', value: 'heavy' },
      ],
      directionOptions: [
        { text: '左', value: 'left' },
        { text: '右', value: 'right' },
        { text: '上', value: 'up' },
        { text: '下', value: 'down' },
      ],
      speedOptions: [
        { text: '0.5', value: 0.5 },
        { text: '1', value: 1 },
        { text: '1.5', value: 1.5 },
        { text: '2', value: 2 },
      ],
      countOptions: [
        { text: '1', value: '1' },
        { text: '2', value: '2' },
        { text: '3', value: '3' },
        { text: 'n', value: 'n' },
      ],
    })

    const close = (type = 'close', data: TWordAttr | undefined = undefined): void => {
      emit('operator', { type, data })
    }

    const handleInput = (type: string, value: string | number | boolean) => {
      state.wordAttr[type] = value
    }

    const confirm = () => {
      if (!state.wordAttr.text) {
        // https://sweetalert2.github.io/#usage
        return proxy?.$Swal.fire('错误提示', '请输入文字再提交！', 'error')
        // return proxy?.$Swal
        //   .mixin({
        //     toast: true,
        //     position: 'center',
        //     showConfirmButton: false,
        //     timer: 1000,
        //     timerProgressBar: false,
        //   })
        //   .fire({
        //     icon: 'error',
        //     title: '请输入文字再提交！',
        //   })
      }
      close('confirm', state.wordAttr)
    }

    onBeforeMount(() => {
      Object.assign(state.wordAttr, props.initData)
    })

    return {
      ...toRefs(state),
      close,
      handleInput,
      confirm,
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

  .content {
    .item {
      display: flex;
      align-items: center;
      margin: 0.2rem 0;
      .item-title {
        display: flex;
        font-size: 0.24rem;
        font-weight: 700;
        color: #fff;
        padding: 0.15rem;
      }
      .item-input {
        display: flex;
        width: 4rem;
        height: 0.32rem;
        font-size: 0.18rem;
        appearance: none;
        outline: 0;
        border: 1px solid transparent;
        border-radius: 4px;
      }
      &:last-child {
        justify-content: center;
        button {
          margin: 0.2rem;
        }
      }
      .item-color {
        display: flex;
        width: 1rem;
        height: 0.32rem;
        font-size: 0.18rem;
        appearance: none;
        outline: 0;
        border: 1px solid transparent;
        border-radius: 4px;
      }
    }
  }
}

input:focus {
  outline: 0;
  border: 1px solid rgba(82, 135, 255, 1);
  box-shadow: 0px 0px 10px 0px rgba(82, 135, 255, 1);
}

.button {
  background: rgba(82, 135, 255, 1);
  border-radius: 2px;
  box-shadow: rgba(82, 135, 255, 1) 0 0.15rem 0.2rem -0.15rem;
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