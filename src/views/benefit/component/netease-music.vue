<template>
  <div class="container">
    <div class="head breathing-text">「網易雲音樂黑膠VIP會員分享」</div>
    <div class="content">
      <div v-for="(item, index) in state.items" :key="index" class="year">
        <div
          class="item"
          v-for="(it, idx) in item"
          :class="it.value ? '' : 'grayscale-element'"
          :key="`${index}-${idx}`"
          @click="openLink(it.value)"
        >
          <img :src="NeteaseMusicPic" alt="it.alt" />
          <span :class="it.value ? 'breathing-text-size' : ''">{{ it.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import NeteaseMusicPic from '@static/benefit/netease.png'

const state = reactive({
  items: [
    [
      {
        label: '24年12月',
        alt: 'ataola送您一张会员礼品卡，快来看看TA的祝福吧! http://163cn.tv/An9669K (@网易云音乐)',
        value: 'http://163cn.tv/An9669K',
      },
    ],
    [
      {
        label: '25年1月',
        alt: '',
        value: '',
      },
      {
        label: '25年2月',
        alt: '',
        value: '',
      },
      {
        label: '25年3月',
        alt: '',
        value: '',
      },
      {
        label: '25年4月',
        alt: '',
        value: '',
      },
      {
        label: '25年5月',
        alt: '',
        value: '',
      },
      {
        label: '25年6月',
        alt: '',
        value: '',
      },
      {
        label: '25年7月',
        alt: '',
        value: '',
      },
      {
        label: '25年8月',
        alt: '',
        value: '',
      },
      {
        label: '25年9月',
        alt: '',
        value: '',
      },
      {
        label: '25年10月',
        alt: '',
        value: '',
      },
      {
        label: '25年11月',
        alt: '',
        value: '',
      },
      {
        label: '25年12月',
        alt: '',
        value: '',
      },
    ],
    [
      {
        label: '26年1月',
        alt: '',
        value: '',
      },
      {
        label: '26年2月',
        alt: '',
        value: '',
      },
      {
        label: '26年3月',
        alt: '',
        value: '',
      },
      {
        label: '26年4月',
        alt: '',
        value: '',
      },
      {
        label: '26年5月',
        alt: '',
        value: '',
      },
      {
        label: '26年6月',
        alt: '',
        value: '',
      },
      {
        label: '26年7月',
        alt: '',
        value: '',
      },
      {
        label: '26年8月',
        alt: '',
        value: '',
      },
      {
        label: '26年9月',
        alt: '',
        value: '',
      },
      {
        label: '26年10月',
        alt: '',
        value: '',
      },
      {
        label: '26年11月',
        alt: '',
        value: '',
      },
      {
        label: '26年12月',
        alt: '',
        value: '',
      },
    ],
    [
      {
        label: '27年1月',
        alt: '',
        value: '',
      },
      {
        label: '27年2月',
        alt: '',
        value: '',
      },
      {
        label: '27年3月',
        alt: '',
        value: '',
      },
      {
        label: '27年4月',
        alt: '',
        value: '',
      },
      {
        label: '27年5月',
        alt: '',
        value: '',
      },
      {
        label: '27年6月',
        alt: '',
        value: '',
      },
      {
        label: '27年7月',
        alt: '',
        value: '',
      },
      {
        label: '27年8月',
        alt: '',
        value: '',
      },
      {
        label: '27年9月',
        alt: '',
        value: '',
      },
      {
        label: '27年10月',
        alt: '',
        value: '',
      },
      {
        label: '27年11月',
        alt: '',
        value: '',
      },
      {
        label: '27年12月',
        alt: '',
        value: '',
      },
    ],
    [
      {
        label: '28年1月',
        alt: '',
        value: '',
      },
      {
        label: '28年2月',
        alt: '',
        value: '',
      },
      {
        label: '28年3月',
        alt: '',
        value: '',
      },
      {
        label: '28年4月',
        alt: '',
        value: '',
      },
      {
        label: '28年5月',
        alt: '',
        value: '',
      },
      {
        label: '28年6月',
        alt: '',
        value: '',
      },
      {
        label: '28年7月',
        alt: '',
        value: '',
      },
      {
        label: '28年8月',
        alt: '',
        value: '',
      },
      {
        label: '28年9月',
        alt: '',
        value: '',
      },
      {
        label: '28年10月',
        alt: '',
        value: '',
      },
      {
        label: '28年11月',
        alt: '',
        value: '',
      },
      {
        label: '28年12月',
        alt: '',
        value: '',
      },
    ],
  ],
})

const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .head {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.24rem;
    font-weight: bold;
    margin-bottom: 0.1rem;
    color: red;
  }

  .content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.2rem;
    .year {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }
  }

  .item {
    margin: 0.1rem 0.3rem;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    cursor: default;

    img {
      width: 0.6rem;
      height: 0.6rem;
      margin-top: 0.2rem;
      border-radius: 0.1rem;
      transition: all 0.5s;
      &:hover {
        transform: translateY(-0.1rem);
        box-shadow: 5px 8px 8px 5px rgba(0, 0, 0, 0.3);
      }
    }
    span {
      font-size: 0.14rem;
      font-weight: bold;
      color: #000;
      text-align: center;
      margin-top: 0.1rem;
    }
  }
}

.grayscale-element {
  filter: grayscale(100%);
}

@keyframes breathe {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

.breathing-text {
  animation: breathe 2s ease-in-out infinite;
}

@keyframes breathe-size {
  0%,
  100% {
    font-size: 0.1em;
  }
  50% {
    font-size: 0.2em;
  }
}

@media (min-width: 768px) {
  .breathing-text-size {
    animation: breathe-size 2s ease-in-out infinite;
  }
}
</style>
