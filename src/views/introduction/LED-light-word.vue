<template>
  <div class="container envelope-border">
    <h2>
      <router-link :to="{ name: 'LEDLightWord' }" active-class="link-active" class="waveline">
        LED Light Word
      </router-link>
    </h2>
    <p></p>
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

.container {
  width: 100%;
  height: 100%;
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
