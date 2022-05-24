<template>
  <div class="container">
    <Cover />
    <transition name="slide">
      <WordOperator v-show="isShowPanel" :initData="configData" @operator="onOperatorAction" />
    </transition>
    <marquee class="sentence">{{ configData.text }}</marquee>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  toRefs,
  onMounted,
  getCurrentInstance,
  ComponentInternalInstance,
} from 'vue'
import Hammer from 'hammerjs'
import WordOperator from '@/views/lab/LED-light-word/components/WordOperator.vue'
import Cover from '@/views/lab/LED-light-word/components/Cover.vue'
import MyScreen from '@/utils/screen'

export default defineComponent({
  name: 'LEDLightWord',
  components: {
    [Cover.name]: Cover,
    [WordOperator.name]: WordOperator,
  },
  setup(props, { emit, slots, attrs }) {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance
    const myScreen = new MyScreen()

    const state = reactive({
      swipeInfo: {
        type: void 0, // Name of the event, like swipe
        deltaX: void 0, // Movement of the X axis.
        deltaY: void 0, // Movement of the Y axis.
        deltaTime: void 0, //	Total time in ms since the first input.
        distance: void 0, // Distance moved.
        angle: void 0, //	Angle moved.
        velocityX: void 0, //	Velocity on the X axis, in px/ms.
        velocityY: void 0, //	Velocity on the Y axis, in px/ms
        velocity: void 0, //	Highest velocityX/Y value.
        direction: void 0, //	Direction moved. Matches the DIRECTION constants.
        offsetDirection: void 0, //	Direction moved from it’s starting point. Matches the DIRECTION constants.
        scale: void 0, //	Scaling that has been done when multi-touch. 1 on a single touch.
        rotation: void 0, //	Rotation (in deg) that has been done when multi-touch. 0 on a single touch.
        center: void 0, //	Center position for multi-touch, or just the single pointer.
        srcEvent: void 0, //	Source event object, type TouchEvent, MouseEvent or PointerEvent.
        target: void 0, //	Target that received the event.
        pointerType: void 0, //	Primary pointer type, could be touch, mouse, pen or kinect.
        eventType: void 0, //	Event type, matches the INPUT constants.
        isFirst: void 0, //	true when the first input.
        isFinal: void 0, //	true when the final (last) input.
        pointers: void 0, //	Array with all pointers, including the ended pointers (touchend, mouseup).
        changedPointers: void 0, //Array with all new/moved/lost pointers.
        preventDefault: void 0, //	Reference to the srcEvent.preventDefault() method. Only for experts!
      },
      DIRECTION_MAP: {
        1: 'NONE', // DIRECTION_NONE
        2: 'LEFT', // DIRECTION_LEFT
        4: 'RIGHT', // DIRECTION_RIGHT
        6: 'HORIZONTAL', //  DIRECTION_HORIZONTAL
        8: 'UP', // DIRECTION_UP
        16: 'DOWN', // DIRECTION_DOWN
        24: 'VERTICAL', // DIRECTION_VERTICAL
        30: 'ALL', // DIRECTION_ALL
      },
      INPUT_EVENT_MAP: {
        1: 'START', // INPUT_START
        2: 'MOVE', // INPUT_MOVE
        4: 'END', // INPUT_END
        8: 'CANCEL', // INPUT_CANCEL
      },
      RECOGNIZER_STATES_MAP: {
        1: 'POSSIBLE', //STATE_POSSIBLE
        2: 'BEGAN', // STATE_BEGAN
        4: 'CHANGED', // STATE_CHANGED
        8: 'ENDED', // STATE_ENDED
        STATE_ENDED: 'RECOGNIZED', // STATE_RECOGNIZED
        16: 'CANCELLED', //STATE_CANCELLED
        32: 'FAILED', // STATE_FAILED
      },
      isShowPanel: false,
      configData: {
        type: 'slide', // 类型 blink闪烁, slide滑动
        text: '谭松韵，你真棒', // 文本
        size: 'large', // 尺寸 中杯, 大杯, 特大杯 ====> 致敬罗永浩的梗！
        direction: 'left', // 方向, left, right, up, down
        speed: 1, // 速度 0.5, 1, 1.5, 2
        count: 'n', // 次数 1, 2, 3, n
        isSquareBg: true, // 是否显示方格背景
        isFullScreen: false, // 是否全屏
        color: '#fff', // 文字颜色
        bgColor: '#c0c0c0', // 背景颜色
      },
    })

    const swipeInfoKeys = computed(() => {
      return Object.keys(state.swipeInfo)
    })

    const syncSwipeInfo = (e: any) => {
      for (const key of swipeInfoKeys.value) {
        state.swipeInfo[key] = e[key]
      }
    }

    const onOperatorAction = (ret: any) => {
      const { type, data } = ret
      if (type === 'close') {
        state.isShowPanel = false
      } else if (type === 'confirm') {
        state.isShowPanel = false
        proxy?._$message({ text: '配置成功', type: 'success' })
        Object.assign(state.configData, data)
        state.configData.isFullScreen ? myScreen.fullScreen() : myScreen.exitFullScreen()
      }
    }

    onMounted(() => {
      const container = document.querySelector('.container')
      const hammer = new Hammer(container)
      // 开启所有方向的滑动配置
      hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL })

      // 向左滑动
      hammer.on('swipeleft', function (e) {
        syncSwipeInfo(e)
        state.isShowPanel = true
        const { type = '', deltaX = '', deltaY = '', deltaTime = '', distance = '', direction = '' } = state.swipeInfo
        console.log(
          `info: type ${type}, direction ${state.DIRECTION_MAP[direction]}, delat ${deltaX}, deltaY: ${deltaY}, distance ${distance}, deltaTime, ${deltaTime}`
        )
      })

      // 向右滑动
      hammer.on('swiperight', function (e) {
        syncSwipeInfo(e)
        state.isShowPanel = false
        const { type = '', deltaX = '', deltaY = '', deltaTime = '', distance = '', direction = '' } = state.swipeInfo
        console.log(
          `info: type ${type}, direction ${state.DIRECTION_MAP[direction]}, delat ${deltaX}, deltaY: ${deltaY}, distance ${distance}, deltaTime, ${deltaTime}`
        )
      })

      // 向上滑动
      hammer.on('swipeup', function (e) {
        syncSwipeInfo(e)
        const { type = '', deltaX = '', deltaY = '', deltaTime = '', distance = '', direction = '' } = state.swipeInfo
        console.log(
          `info: type ${type}, direction ${state.DIRECTION_MAP[direction]}, delat ${deltaX}, deltaY: ${deltaY}, distance ${distance}, deltaTime, ${deltaTime}`
        )
      })
    })

    return {
      ...toRefs(state),
      onOperatorAction,
    }
  },
})
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
}
.slide-enter,
.slide-leave-active {
  right: -100%;
}

.sentence {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}

@media screen and (orientation: portrait) {
  .sentence {
    transform: rotate(90deg) translate(0, 9rem);
    width: 18rem;
  }
}
</style>
