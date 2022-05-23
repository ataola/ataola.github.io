<template>
  <div>
    <h6>{{ msg }}</h6>
    <h6>额，暂时没有灵感和想法首页放什么，先放句鸡汤吧</h6>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import debug from 'debug'
const logger = debug('zhengjiangtao.cn:views:Test:Test2')
const msg = ref('网站开发中。。。。。。')

fetch('https://v1.hitokoto.cn?c=k&c=d&max_length=10')
  .then((response: any) => response.json())
  .then((data: any) => {
    logger(data)
    msg.value = data.hitokoto
  })
  .catch(console.error)
</script>

<style lang="scss" scoped>
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

h6 {
  padding: 0.5rem;
  font-size: 0.6rem;
  &:last-child {
    text-align: right;
    font-size: 0.2rem;
  }
}
</style>
