<template>
  <div>
    <button @click="handleClick('warn', 'warn')">warn</button>
    <button @click="handleClick('error', 'error', 2000)">error</button>
    <button @click="handleClick('success', 'success', 3000)">success</button>
    <button @click="handleClick('info', 'info')">info</button>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, ComponentInternalInstance } from 'vue'
const { proxy } = getCurrentInstance() as ComponentInternalInstance

const handleClick = (text: string, type: string, duration = 1000) => {
  proxy?.$message({ text, type, duration })
}
</script>

<style lang="scss" scoped></style>
