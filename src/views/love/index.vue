<script lang="ts">
import { defineComponent, inject, onBeforeUnmount, reactive, toRefs } from 'vue'
// vue-fullpage: https://github.com/alvarotrigo/vue-fullpage.js

export default defineComponent({
  name: 'Love',
  components: {},
  setup(props, { emit, slots, attrs }) {
    const myAudioInfo: any = inject('myAudioInfo')
    let footerDom: any = null
    const state = reactive({
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        // menu: '#menu',
        anchors: [
          '/ZJT-LOVE-YUER-FOREVER#quzhou',
          '/ZJT-LOVE-YUER-FOREVER#xishuangbanna',
          // '/ZJT-LOVE-YUER-FOREVER#page3',
        ],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
        scrollOverflow: true,
        bigSectionsDestination: 'top',
      },
    })

    const playNuan2 = () => {
      if (!myAudioInfo.isPlay) {
        myAudioInfo.replay()
      }
    }

    onBeforeUnmount(() => {
      myAudioInfo.finish()
    })

    return {
      playNuan2,
      ...toRefs(state),
    }
  },
})
</script>

<template>
  <ul id="menu">
    <li><a href="#/ZJT-LOVE-YUER-FOREVER#quzhou">衢州</a></li>
    <li><a href="#/ZJT-LOVE-YUER-FOREVER#xishuangbanna">西双版纳</a></li>
    <!-- <li><a href="#/ZJT-LOVE-YUER-FOREVER#page3">Page 3</a></li> -->
  </ul>
  <full-page :options="options" id="fullpage" ref="fullpage">
    <div class="section">
      <div class="slide">
        <h3>浙江·衢州</h3>
      </div>
      <div class="slide">
        <h3>政治</h3>
      </div>
      <div class="slide">
        <h3>经济</h3>
      </div>
      <div class="slide">
        <h3>文化</h3>
      </div>
      <div class="slide">
        <h3>交通</h3>
      </div>
      <!-- <button style="font-size: 18px; padding: 20px" @click="$refs.fullpage.api.moveSectionDown()">Next</button> -->
    </div>
    <div class="section">
      <div class="slide">
        <h3>云南·西双版纳</h3>
      </div>
      <div class="slide">
        <h3>政治</h3>
      </div>
      <div class="slide">
        <h3>经济</h3>
      </div>
      <div class="slide">
        <h3>文化</h3>
      </div>
      <div class="slide">
        <h3>交通</h3>
      </div>
    </div>
    <!-- <div class="section">
      <h3>Section 3</h3>
      <button style="font-size: 18px; padding: 20px" @click="$refs.fullpage.api.moveSectionUp()">Prev</button>
    </div> -->
  </full-page>
</template>

<style lang="scss" scoped>
#menu li {
  display: flex;
  align-items: center;
  margin: 0.1rem;
  color: #000;
  background: rgba(255, 255, 255, 0.5);
  -webkit-border-radius: 0.1rem;
  border-radius: 0.1rem;
  font-size: 16px;
  padding: 0.14rem 0.18rem;
}

#menu li a {
  text-decoration: none;
  color: #000;
}

#menu li.active a:hover {
  color: #000;
}

#menu li:hover {
  background: rgba(255, 255, 255, 0.8);
}

#menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 0.6rem;
  z-index: 70;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
}
</style>
