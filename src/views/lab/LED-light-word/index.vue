<template>
  <div class="container">
    <div id="grid"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, toRefs, onMounted } from 'vue'
import Hammer from 'hammerjs'

export default defineComponent({
  name: 'LEDLightWord',
  setup(props, { emit, slots, attrs }) {
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
    })

    const swipeInfoKeys = computed(() => {
      return Object.keys(state.swipeInfo)
    })

    const syncSwipeInfo = (e: any) => {
      for (const key of swipeInfoKeys.value) {
        state.swipeInfo[key] = e[key]
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
    return {}
  },
})
</script>
<style lang="scss" scoped>
$lineColor: #030617;
$step: 12;
$borderWeight: 1px;

@function borderShadow($n) {
  $value: '0px 0px #{$lineColor}';

  @for $i from 0 through $n {
    $value: '#{$value} , 0px #{($step)*$i}px #{$lineColor}';
  }

  @return unquote($value);
}

@function stripeShadow($n) {
  $value: '0px 0px #{$lineColor}';

  @for $i from 0 through $n {
    $value: '#{$value} , #{($step)*$i}px 0px #{$lineColor}';
  }

  @return unquote($value);
}

$border: borderShadow(1000);
$stripe: stripeShadow(1000);

.container {
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at bottom, #5091dd 0%, #030617 100%);
  position: relative;
}

#grid {
  width: 100%;
  height: $borderWeight;
  box-shadow: $border;
  &::after {
    content: '';
    position: absolute;
    left: -50%;
    width: $borderWeight;
    height: 100%;
    box-shadow: $stripe;
  }
}
</style>