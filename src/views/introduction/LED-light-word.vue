<template>
  <div class="container envelope-border">
    <h2>
      <router-link :to="{ name: 'LEDLightWord' }" active-class="link-active"> LED Light Word </router-link>
    </h2>
    <p>
      <router-link :to="{ name: 'LEDLightWord' }" active-class="link-active" class="waveline">
        LED Light Word </router-link
      >的灵感来自于演唱会的LED灯牌，就是那种在牌子上写上❝欧豪， 你是我滴神
      ❤❤❤❞，然后一闪一闪，或者像跑马灯一样，来回游动的这么一个东西，我想下次打开我的网站，然后在一些特定的场合，我输入一些文字，它们或许是blink
      blink的，或许是像河流一样在流动着，美啊美啊真美啊。<br /><br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;哎呀，留白好长啊，编不下去了......
      要不再讲个故事吧，曾经有一份美好的爱情摆在我面前，我没有去珍惜，等到失去后才后悔莫及，如果上天再给我一次机会的话，我会拿起LED
      Light Word写上❝喂， 对面的那个女孩，你是我滴神
      我❤❤你❞，如果一定要对这个❤加一个期限的话，我希望是一万年。。。。。。剧终<br /><br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;阿这🤔，怎么还有这么多留白啊，那要不再补点广告词吧。
      本产品绿色环保无公害，不添加任何防腐剂，纯手工制作，建议搭配音乐一起使用，来，走一个，听说下雨天，和巧克力更配哦，我一开始还不相信，直到我遇见了你，Oh，
      My Baby， Oh， Baby， 你就是我的唯一， 你会不会唱小星星， emmmm，怎么不会呢（浩存.jpg）
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

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
}

h2 {
  width: 100%;
  text-align: center;
  font-size: 0.24rem;
}

p {
  position: absolute;
  top: 0.6rem;
  font-size: 0.18rem;
  padding: 0.15rem;
  text-align: left;
  line-height: 1.44;
  text-indent: 2em;
}

.container {
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
}

.waveline {
  position: relative;
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
