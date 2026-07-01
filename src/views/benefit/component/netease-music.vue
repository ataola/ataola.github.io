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
          <span>{{ it.label }}</span>
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
        alt: 'ataola送您一张会员礼品卡，快来看看TA的祝福吧! http://163cn.tv/AvpMQSd (@网易云音乐)',
        value: 'http://163cn.tv/AvpMQSd',
      },
      {
        label: '25年2月',
        alt: 'ataola送您一张会员礼品卡，快来看看TA的祝福吧! http://163cn.tv/BFZEqXW (@网易云音乐)',
        value: 'http://163cn.tv/BFZEqXW',
      },
      {
        label: '25年3月',
        alt: 'ataola送您一张会员礼品卡，快来看看TA的祝福吧! http://163cn.tv/Co2UksM (@网易云音乐)',
        value: 'http://163cn.tv/Co2UksM',
      },
      {
        label: '25年4月',
        alt: 'ataola送您一张会员礼品卡，快来看看TA的祝福吧! http://163cn.tv/DnhMfmv (@网易云音乐)',
        value: 'http://163cn.tv/DnhMfmv',
      },
      {
        label: '25年5月',
        alt: 'ataola送您一张会员礼品卡，快来看看TA的祝福吧! http://163cn.tv/Eu0y8Ye (@网易云音乐)',
        value: 'http://163cn.tv/Eu0y8Ye',
      },
      {
        label: '25年6月',
        alt: '',
        value: '',
      },
      {
        label: '25年7月',
        alt: 'ataola送您一张会员礼品卡，快来看看TA的祝福吧! http://163cn.tv/GL8yzx1 (@网易云音乐)',
        value: 'http://163cn.tv/GL8yzx1',
      },
      {
        label: '25年8月',
        alt: '1http:/$2MzuUr161db74d$【復淛整段文案并咑閞「网易云音乐」，领免费会员】 黑胶邀请官 a***a 送你网易云音乐会员卡，领取享20+会员权益。http://163cn.tv/H0UIa4Y',
        value: 'http://163cn.tv/H0UIa4Y',
      },
      {
        label: '25年9月',
        alt: '1http:/$fU3yiu1780bdda$【復淛整段文案并咑閞「网易云音乐」，领免费会员】 黑胶邀请官 a***a 送你网易云音乐会员卡，领取享20+会员权益。https://163cn.tv/Jkp6jOb',
        value: 'https://163cn.tv/Jkp6jOb',
      },
      {
        label: '25年10月',
        alt: '1http:/$fYF36j1946167c$【復淛整段文案并咑閞「网易云音乐」，领免费会员】 黑胶邀请官 a***a 送你网易云音乐10月黑胶会员卡，领取享20+会员权益。https://163cn.tv/KYgx08A',
        value: 'https://163cn.tv/KYgx08A',
      },
      {
        label: '25年11月',
        alt: '1http:/$3i2EZr1fe0b8b8$【復淛整段文案并咑閞「网易云音乐」，领免费会员】 黑胶邀请官 a***a 送你网易云音乐11月黑胶会员卡，领取享20+会员权益。https://163cn.tv/UeZKOpy',
        value: 'https://163cn.tv/UeZKOpy',
      },
      {
        label: '25年12月',
        alt: '1http:/$beANna215a421f$【復淛整段文案并咑閞「网易云音乐」，领免费会员】 黑胶邀请官 a***a 送你网易云音乐12月黑胶会员卡，领取享20+会员权益。https://163cn.tv/V4JvK0J',
        value: 'https://163cn.tv/V4JvK0J',
      },
    ],
    [
      {
        label: '26年1月',
        alt: '1http:/$Q3y2aq230f9f62$【復淛整段文案并咑閞「网易云音乐」，领免费会员】 黑胶邀请官 a***a 送你网易云音乐1月黑胶会员卡，领取享20+会员权益。https://163cn.tv/YYbHHOM',
        value: 'https://163cn.tv/YYbHHOM',
      },
      {
        label: '26年2月',
        alt: '1http:/$67n6jm24acc61b$【復淛整段文案并咑閞「网易云音乐」，领免费会员】 黑胶邀请官 a***a 送你网易云音乐2月黑胶会员卡，领取享20+会员权益。https://163cn.tv/0F5ANFr',
        value: 'https://163cn.tv/0F5ANFr',
      },
      {
        label: '26年3月',
        alt: '1http:/$uAby6b266431ed$【復淛整段文案并咑閞「网易云音乐」，领免费会员】 黑胶邀请官 a***a 送你网易云音乐3月黑胶会员卡，领取享20+会员权益。https://163cn.tv/2pLXKyl',
        value: 'https://163cn.tv/2pLXKyl',
      },
      {
        label: '26年4月',
        alt: '1http:/$vi6BBv285c70ed$【復淛整段文案并咑閞「网易云音乐」，领免费会员】 黑胶邀请官 a***a 送你网易云音乐4月黑胶会员卡，领取享20+会员权益。https://163cn.tv/4kSEL0K',
        value: 'https://163cn.tv/4kSEL0K',
      },
      {
        label: '26年5月',
        alt: '1http:/$3U3MRb2ab34daa$【復淛整段文案并咑閞「网易云音乐」，领免费会员】 黑胶邀请官 a***a 送你网易云音乐5月黑胶会员卡，领取享20+会员权益。https://163cn.tv/6wf8Xjo',
        value: 'https://163cn.tv/6wf8Xjo',
      },
      {
        label: '26年6月',
        alt: '1http:/$ArMRZj2bd6483e$【復淛整段文案并咑閞「网易云音乐」，领免费会员】 黑胶邀请官 a***a 送你网易云音乐6月黑胶会员卡，领取享20+会员权益。https://163cn.tv/8bEi079',
        value: 'https://163cn.tv/8bEi079',
      },
      {
        label: '26年7月',
        alt: '1http:/$r2uQVj2d2c2244$【復淛整段文案并咑閞「网易云音乐」，领免费会员】 黑胶邀请官 a***a 送你网易云音乐7月黑胶会员卡，领取享20+会员权益。https://163cn.tv/98WYp8a',
        value: 'https://163cn.tv/98WYp8a',
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
