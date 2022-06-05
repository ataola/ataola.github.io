<template>
  <div class="container">
    <Cover :isSquareBg="configData.isSquareBg" :bgColor="configData.bgColor" />
    <transition name="slide">
      <WordOperator v-show="isShowPanel" :initData="configData" @operator="onOperatorAction" />
    </transition>
    <div class="sentence">
      <p ref="wordRef" class="word" :class="wordClass">
        {{ configData.text }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  computed,
  toRefs,
  onMounted,
  getCurrentInstance,
  ComponentInternalInstance,
} from 'vue'
import Hammer from 'hammerjs'
import WordOperator from '@views/lab/LED-light-word/components/WordOperator.vue'
import Cover from '@views/lab/LED-light-word/components/Cover.vue'
import MyScreen from '@utils/screen'
import { createDebugLogger, getCurrentUrlInfo } from '@utils/tool'

export default defineComponent({
  name: 'LEDLightWord',
  components: {
    [Cover.name]: Cover,
    [WordOperator.name]: WordOperator,
  },
  setup(props, { emit, slots, attrs }) {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance
    const myScreen = new MyScreen()
    const logger = createDebugLogger(getCurrentUrlInfo())
    const wordRef = ref<HTMLElement>()

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
        type: 'roll', // 类型 blink闪烁, roll滚动
        text: '谭松韵，你真棒', // 文本
        size: '3rem', // 尺寸 中杯, 大杯, 特大杯 ====> 致敬罗永浩的梗！
        direction: 'left', // 方向, left, right, up, down
        speed: 1, // 速度 0.5, 1, 1.5, 2
        count: 'infinite', // 次数 1, 2, 3, infinite
        isSquareBg: false, // 是否显示方格背景
        isFullScreen: false, // 是否全屏
        color: '#ffffff', // 文字颜色
        bgColor: '#5091dd', // 背景颜色
      },
      wordWidth: wordRef.value?.offsetWidth || 2000,
      bodyheight: `${document.body.clientHeight + 170 || 600}px`,
      bodyWidth: `${document.body.clientWidth - 200 || 300}px`,
      wordClass: 'roll-play',
    })

    const swipeInfoKeys = computed(() => {
      return Object.keys(state.swipeInfo)
    })

    const wordRefSpeend = computed(() => {
      return state.wordWidth / 100 / state.configData.speed + 's'
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
        proxy?.$message({ text: '配置成功', type: 'success' })
        Object.assign(state.configData, data)
        if (state.configData.isFullScreen) {
          if (!myScreen.isFullScreen) {
            myScreen.fullScreen()
          }
        }
        state.wordClass =
          data.type === 'blink' ? data.type : state.wordClass === 'roll-play' ? 'roll-restart' : 'roll-play'
        logger(`type: ${type}, data: ${JSON.stringify(data)}`)
        setTimeout(() => {
          state.wordWidth = wordRef.value?.offsetWidth || 2000
          state.bodyheight = `${document.body.clientHeight + 170 || 600}px`
          state.bodyWidth = `${document.body.clientWidth - 200 || 300}px`
        }, 1000)
      }
    }

    onMounted(() => {
      state.wordWidth = wordRef.value?.offsetWidth || 2000
      state.bodyheight = `${document.body.clientHeight + 170 || 600}px`
      state.bodyWidth = `${document.body.clientWidth - 200 || 300}px`
      const container = document.querySelector('.container')
      const hammer = new Hammer(container)
      // 开启所有方向的滑动配置
      hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL })

      // 向左滑动
      hammer.on('swipeleft', function (e) {
        syncSwipeInfo(e)
        state.isShowPanel = true
        const { type = '', deltaX = '', deltaY = '', deltaTime = '', distance = '', direction = '' } = state.swipeInfo
        logger(
          `info: type ${type}, direction ${state.DIRECTION_MAP[direction]}, delat ${deltaX}, deltaY: ${deltaY}, distance ${distance}, deltaTime, ${deltaTime}`
        )
      })

      // 向右滑动
      hammer.on('swiperight', function (e) {
        syncSwipeInfo(e)
        state.isShowPanel = false
        const { type = '', deltaX = '', deltaY = '', deltaTime = '', distance = '', direction = '' } = state.swipeInfo
        logger(
          `info: type ${type}, direction ${state.DIRECTION_MAP[direction]}, delat ${deltaX}, deltaY: ${deltaY}, distance ${distance}, deltaTime, ${deltaTime}`
        )
      })

      // 向上滑动
      hammer.on('swipeup', function (e) {
        syncSwipeInfo(e)
        const { type = '', deltaX = '', deltaY = '', deltaTime = '', distance = '', direction = '' } = state.swipeInfo
        logger(
          `info: type ${type}, direction ${state.DIRECTION_MAP[direction]}, delat ${deltaX}, deltaY: ${deltaY}, distance ${distance}, deltaTime, ${deltaTime}`
        )
      })
    })

    return {
      wordRef,
      ...toRefs(state),
      wordRefSpeend,
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
  height: auto;
  min-height: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // https://learnvue.co/2021/05/how-to-use-vue-css-variables-reactive-styles-rfc/#css-variables-are-not-available-in-the-child-component
  /* expressions (wrap in quotes) */
  display: flex;
  align-items: center;
  overflow: hidden;
  .word {
    display: inline-block;
    min-width: 100%;
    width: fit-content;
    word-break: keep-all;
    white-space: nowrap;
    color: v-bind('configData.color');
    font-size: v-bind('configData.size');
    font-weight: 700;
    margin: 0;
    box-sizing: border-box;
  }
}

.roll-play,
.roll-restart {
  animation: v-bind(wordRefSpeend) roll linear infinite normal;
  // animation-iteration-count: v-bind('configData.count');
}

.roll-pause {
  animation-play-state: paused;
}

.blink {
  animation: blink 1s linear infinite;
}

@media screen and (orientation: portrait) {
  .sentence {
    transform: rotate(90deg) translate(0, 220%);
    width: v-bind(bodyheight);
    height: v-bind(bodyWidth);
  }
}

@keyframes roll {
  0% {
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
}

@-webkit-keyframes roll {
  0% {
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
}

@keyframes blink {
  0% {
    text-shadow: 0 0 4px #c0c0c0;
    opacity: 1;
  }
  50% {
    text-shadow: 0 0 40px #c0c0c0;
    opacity: 1;
  }
  50.01% {
    text-shadow: 0 0 40px #c0c0c0;
    opacity: 0;
  }
  100% {
    text-shadow: 0 0 4px #c0c0c0;
    opacity: 0;
  }
}

@-webkit-keyframes blink {
  0% {
    text-shadow: 0 0 4px #c0c0c0;
    opacity: 1;
  }
  50% {
    text-shadow: 0 0 40px #c0c0c0;
    opacity: 1;
  }
  50.01% {
    text-shadow: 0 0 40px #c0c0c0;
    opacity: 0;
  }
  100% {
    text-shadow: 0 0 4px #c0c0c0;
    opacity: 0;
  }
}
</style>
