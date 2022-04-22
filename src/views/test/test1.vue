<template>
  <div>
    <h4>{{ msg }}</h4>
    <p>{{ count }}</p>
    <p><button @click="add">+</button></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/store/modules/counter'
import debug from 'debug'
const logger = debug('zhengjiangtao.cn:views:test:Test1')

logger('haha')
fetch('https://v1.hitokoto.cn')
  .then((response: any) => response.json())
  .then((data: any) => {
    logger(data)
  })
  .catch(console.error)

const msg = ref('网站开发中。。。。。。')

const counter = useCounterStore()

const { count } = storeToRefs(counter)

counter.count++
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 })
// or using an action instead
counter.increment()

const add = () => counter.increment()
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
