<template>
  <div class="container">LED LIGHT</div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'LEDLightWord',
  setup(props, { emit, slots, attrs }) {
    return {}
  },
})
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: red;
}
</style>
