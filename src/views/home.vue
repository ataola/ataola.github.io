<template>
  <div>
    <h6>{{ msg }}</h6>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import debug from 'debug'
const logger = debug('zhengjiangtao.cn:views:Home')
const msg = ref('网站开发中。。。。。。')

fetch('https://v1.hitokoto.cn')
  .then((response: any) => response.json())
  .then((data: any) => {
    logger(data)
    msg.value = data.hitokoto
  })
  .catch(console.error)
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
