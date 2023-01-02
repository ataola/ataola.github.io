<template>
  <div class="bg">
    <div v-if="isSquareBg" id="grid"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Cover',
  props: {
    isSquareBg: {
      type: Boolean,
      default: true,
    },
    bgColor: {
      type: String,
      default: '#5091dd',
    },
  },
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

.bg {
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at bottom, v-bind('bgColor') 0%, #030617 100%);
  position: absolute;
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
