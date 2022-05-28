<template>
  <img class="img-box" :src="getStaticIconFile(value)" :alt="value" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getStaticIconFile } from '@utils/file'

export default defineComponent({
  name: 'Icon',
  props: {
    value: {
      type: String,
      default: 'img',
    },
  },
  setup(props, { emit, slots, attrs }) {
    return {
      getStaticIconFile,
    }
  },
})
</script>

<style lang="scss" scoped>
.img-box {
  width: 0.4rem;
  height: 0.4rem;
}
</style>
