<template>
  <div class="container">
    <div id="grid"></div>
    <marquee id="sentence">我真的好想你 在每一个的雨季</marquee>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// 方向是向上的：direction="up"，左右下用left、right、down

// scrollamount="1" 表示速度，1特别慢，具体要怎样的速度可以自己多试几次

// loop="1" 表示只播放一次

// behavior="alternate" 表示在左右来回滑行

// behavior="slide" 表示滑行至左停止

export default defineComponent({
  name: 'TrashMarquee',
  setup(props, { emit, slots, attrs }) {
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

#sentence {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}

@media screen and (orientation: portrait) {
  #sentence {
    transform: rotate(90deg) translate(0, 300%);
  }
}
</style>
