<script lang="ts">
import { defineComponent, inject } from 'vue'
import { useRouter } from 'vue-router'

// vue-fullpage: https://github.com/alvarotrigo/vue-fullpage.js

export default defineComponent({
  name: 'Future',
  components: {},
  setup(props, { emit, slots, attrs }) {
    const myAudioInfo: any = inject('myAudioInfo')
    // let footerDom: any = null
    // const state = reactive({
    //   options: {
    //     licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    //     // menu: '#menu',
    //     anchors: ['/ZJT-LOVE-YUER-FOREVER#page1', '/ZJT-LOVE-YUER-FOREVER#page2', '/ZJT-LOVE-YUER-FOREVER#page3'],
    //     sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
    //     scrollOverflow: true,
    //     bigSectionsDestination: 'top',
    //   },
    // })
    const router = useRouter()

    const playNuan2 = () => {
      if (!myAudioInfo.isPlay) {
        myAudioInfo.replay()
        router.push({
          name: 'Love',
        })
      }
    }

    return {
      playNuan2,
      // ...toRefs(state),
    }
  },
})
</script>

<template>
  <div class="cover">
    <div @click="playNuan2()" class="btn-go"><span>♥</span></div>
  </div>
</template>

<style lang="scss" scoped>
.cover {
  width: 100%;
  height: 8.4rem;
  margin: 0;
  padding: 0;
  position: relative;
  box-sizing: border-box;
  background-image: url('../../static/cover/manting.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

  .btn-go {
    font-size: 18px;
    position: absolute;
    bottom: 0.1rem;
    width: 2.5rem;
    height: 3rem;
    left: 45%;
    transform: translate3d(5%, 0, 0);
    transition-property: all;
    transition-duration: 1s;
    transition-delay: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    span {
      color: pink;
      font-size: 66px;
      display: none;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    &:hover {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      transform: translate3d(5%, 0, 0);
      background-color: skyblue;
      left: 50%;
      span {
        display: block;
      }
    }
    &:hover::after {
      span {
        display: block;
      }
    }
  }
}

@media screen and (max-width: 414px) {
  .cover {
    height: 11.4rem;
    .btn-go {
      transform: translate3d(-17%, 0, 0);
      transition-delay: 0.1s;
    }
  }
}
</style>
