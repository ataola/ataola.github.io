<template>
  <div class="container envelope-border">
    <div class="headline">
      <router-link :to="{ name: 'LEDLightWord' }" active-class="link-active"> 流萤(liú yīng) </router-link>
    </div>
    <div class="content">
      <div class="sentence">
        <router-link :to="{ name: 'LEDLightWord' }" active-class="link-active" class="waveline">
          流螢(liú yīng)</router-link
        >的靈感來自于演唱會的LED燈牌，就是那種在牌子上寫上❝歐豪， 妳是我滴神
        ❤❤❤❞，然後壹閃壹閃，或者像跑馬燈壹樣，來回潤來潤去的這麽壹個道具，我想下次在壹些特定的場合打開我的網站，輸入壹些文字，像螢火蟲壹樣壹閃壹閃地呼吸，抑或是像螢火蟲壹樣飛呀飛，美啊美啊真美啊。
      </div>
      <div class="sentence">
        哎呀，留白好長啊，編不下去了......
        要不再講個故事吧，曾經有壹份美好的愛情擺在我面前，我沒有去珍惜，等到失去後才後悔莫及，如果上天再給我壹次機會的話，我會拿起流螢(liú
        yīng)寫上❝喂， 對面的那個女孩，妳是我滴神
        我❤❤妳❞，如果壹定要對這個❤加壹個期限的話，我希望是壹萬年。。。。。。劇終
      </div>
      <div class="sentence">
        阿這🤔，怎麽還有這麽多留白啊，那要不再補點廣告詞吧。
        本産品綠色環保無公害，不添加任何防腐劑，純手工制作，建議搭配音樂壹起使用，氛圍更佳，來，走壹個，聽說下雨天，和巧克力更配哦，我壹開始還不相信，直到我遇見了妳，Oh，
        My Baby， Oh， Baby， 妳就是我的唯壹， 妳會不會唱小星星， emmmm，怎麽不會呢（浩存.jpg）
      </div>
      <div class="sentence">
        使用說明：已經做了PC和移動端兼容，鼠標或者手勢往左滑展示配置，
        往右邊滑動關閉配置，點擊》或者取消按鈕關閉配置，點擊保存生效配置 退出全屏請按ESC鍵
      </div>
      <div class="sentence">
        emmmmm, 爲啥要叫流螢，文藝呗，營造壹種浪漫主義氣息，之前叫LED Light Word感覺欠那麽點意思。
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LEDLightWordIntro',
  setup(props, { emit, slots, attrs }) {
    return {}
  },
})
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  white-space: nowrap;
}

.headline {
  width: 100%;
  font-size: 0.24rem;
  display: flex;
  padding: 0.2rem 0.2rem 0;
  justify-content: center;
}

.content {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.18rem;
  padding: 0.15rem;
  .sentence {
    display: inline-block;
    width: 100%;
    text-align: left;
    line-height: 1.8;
    text-indent: 2em;
    padding: 0.1rem;
    position: relative;
  }
}

.container {
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  align-content: flex-start;
}

.waveline {
  position: relative;
  // text-decoration: underline wavy; //实际上这样写就够了 MDN看到的
}

.waveline::after {
  content: '';
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(135deg, transparent, transparent 45%, red, transparent 55%, transparent 100%),
    linear-gradient(45deg, transparent, transparent 45%, red, transparent 55%, transparent 100%);
  background-size: 8px 8px;
}

.envelope-border {
  border: 0.16rem solid transparent;
  background: linear-gradient(white, white) padding-box,
    repeating-linear-gradient(
        -45deg,
        red 0,
        red 12.5%,
        transparent 0,
        transparent 25%,
        #58a 0,
        #58a 37.5%,
        transparent 0,
        transparent 50%
      )
      0 / 0.2rem 0.2rem;
}
</style>
