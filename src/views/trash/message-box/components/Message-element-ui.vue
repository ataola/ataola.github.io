<template>
  <transition name="down">
    <div v-show="isShow" class="cp-message" :style="style[type]">
      <img :src="style[type].icon" />
      <span class="text">{{ text }}</span>
    </div>
  </transition>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import error from '@/static/icons/error.svg'
import warn from '@/static/icons/warn.svg'
import info from '@/static/icons/info.svg'
import success from '@/static/icons/success.svg'

export default defineComponent({
  name: 'CPMessage',
  props: {
    text: {
      type: String,
      default: '吃个桃桃好凉凉',
    },
    type: {
      type: String,
      default: 'warn', // warn 警告  error 错误  success 成功 info信息
    },
  },
  setup(props, { emit, slots, attrs }) {
    const style = {
      warn: {
        icon: warn,
        color: '#E6A23C',
        backgroundColor: 'rgb(253, 246, 236)',
        borderColor: 'rgb(250, 236, 216)',
      },
      error: {
        icon: error,
        color: '#F56C6C',
        backgroundColor: 'rgb(254, 240, 240)',
        borderColor: 'rgb(253, 226, 226)',
      },
      success: {
        icon: success,
        color: '#67C23A',
        backgroundColor: 'rgb(240, 249, 235)',
        borderColor: 'rgb(225, 243, 216)',
      },
      info: {
        icon: info,
        color: '#909399',
        backgroundColor: 'rgb(244,244,245)',
        borderColor: 'rgb(250, 236, 216)',
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
.cp-message {
  min-width: 2rem;
  height: 0.4rem;
  position: fixed;
  left: 50%;
  top: 0.2rem;
  z-index: 9999;
  margin-left: -2rem;
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
