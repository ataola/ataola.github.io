<template>
  <img class="img-box" :src="getStaticIconFile(name)" :alt="name" />
</template>

<script lang="ts">
import { defineComponent, computed, toRef } from 'vue'
import { getStaticIconFile } from '@/utils/file'

export default defineComponent({
  name: 'Icon',
  props: {
    value: {
      type: String,
      default: 'img',
    },
  },
  setup(props, { emit, slots, attrs }) {
    const name = toRef(props, 'value')

    const url = computed(() => {
      const { value } = props
      return getStaticIconFile(value)
    })

    return {
      name,
      url,
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
