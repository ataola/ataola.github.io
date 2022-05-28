<template>
  <transition name="down">
    <div v-show="isShow" class="message" :style="style[type]">
      <img :src="style[type].icon" />
      <span class="text">{{ text }}</span>
    </div>
  </transition>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import error from '@static/icons/error.svg'
import warn from '@static/icons/warn.svg'
import info from '@static/icons/info.svg'
import success from '@static/icons/success.svg'

export default defineComponent({
  name: 'Message',
  props: {
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'warn', // warn 警告  error 错误  success 成功 info 信息
    },
  },
  setup(props, { emit, slots, attrs }) {
    const style = {
      warn: {
        icon: warn,
        color: '#fff',
        backgroundColor: 'rgba(8,9,9, 0.8)',
        borderColor: 'rgb(0, 0, 0, 0.1)',
      },
      error: {
        icon: error,
        color: '#fff',
        backgroundColor: 'rgba(8,9,9, 0.8)',
        borderColor: 'rgb(0, 0, 0, 0.1)',
      },
      success: {
        icon: success,
        color: '#fff',
        backgroundColor: 'rgba(8,9,9, 0.8)',
        borderColor: 'rgb(0, 0, 0, 0.1)',
      },
      info: {
        icon: info,
        color: '#fff',
        backgroundColor: 'rgba(8,9,9, 0.8)',
        borderColor: 'rgb(255, 255, 255, 0.1)',
      },
    }
    const isShow = ref(false)

    onMounted(() => {
      isShow.value = true
    })

    return { style, isShow }
  },
})
</script>
<style scoped lang="scss">
.down {
  &-enter {
    &-from {
      transform: translate3d(0, -75px, 0);
      opacity: 0;
    }
    &-active {
      transition: all 0.5s;
    }
    &-to {
      transform: none;
      opacity: 1;
    }
  }
}
.message {
  height: 0.4rem;
  position: fixed;
  left: 50%;
  top: 0.2rem;
  z-index: 9999;
  transform: translateX(-50%);
  line-height: 0.4rem;
  padding: 0 0.1rem;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
  display: flex;
  align-items: center;
  img {
    width: 0.24rem;
    height: 0.24rem;
    margin-right: 0.1rem;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
    font-size: 0.16rem;
  }
}
</style>
