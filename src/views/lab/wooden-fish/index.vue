<template>
  <div class="container">
    <div class="woodfish-container" @click="knock">
      <img class="woodfish" :class="{ 'woodfish-active': isKnocking }" :src="woodenFish" alt="木魚" />
      <transition-group name="slide" tag="div" class="blessings">
        <div v-for="blessing in blessings" :key="blessing.id" class="blessing">{{ blessing.text }}</div>
      </transition-group>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import woodenFish from '@static/lab/wooden-fish.png'
import MyWoodfishSound from '@static/lab/woodfish-sound.mp3'

const woodfishSound = new Audio(MyWoodfishSound)
woodfishSound.preload = 'auto'
const blessingTexts = [
  '功德 +1',
  '財富 +1',
  '平安 +1',
  '健康 +1',
  '智慧 +1',
  '長壽 +1',
  '和諧 +1',
  '快樂 +1',
  '幸福 +1',
  '自由 +1',
  '幸福 +1',
  '漂亮 +1',
  '帥氣 +1',
  '偉人 +1',
  '勇氣 +1',
  '聰明 +1',
  '聖者 +1',
  '英雄 +1',
  '勝利 +1',
  '成功 +1',
]
const isKnocking = ref(false)
const blessings = ref<any>([])

let audioContext
let audioBuffer

const loadAudio = async () => {
  audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  const response = await fetch(MyWoodfishSound) // 替换为你的音频路径
  const arrayBuffer = await response.arrayBuffer()
  audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
}

const playSound = () => {
  const source = audioContext.createBufferSource()
  source.buffer = audioBuffer
  source.connect(audioContext.destination)
  source.start(0)
}

const knock = () => {
  woodfishSound.currentTime = 0
  woodfishSound.play()
  // if (!audioContext) return // 确保音频上下文已初始化
  // playSound()

  isKnocking.value = true
  setTimeout(() => {
    isKnocking.value = false
  }, 200)

  const id = Date.now()
  const randomBlessing = blessingTexts[Math.floor(Math.random() * blessingTexts.length)]
  blessings.value.push({ id, text: randomBlessing })
  setTimeout(() => {
    blessings.value = blessings.value.filter((b) => b.id !== id)
  }, 1000)
}

onMounted(() => {
  loadAudio()
})
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background-color: #f2be45;
  display: flex;
  justify-content: center;
  align-items: center;
}

.woodfish-container {
  position: relative;
  cursor: pointer;
  touch-action: manipulation;
}

.woodfish {
  width: 4.1rem;
  height: 2.8rem;
  transition: transform 0.2s ease;
}

.woodfish-active {
  transform: scale(1.2);
}

.blessings {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
}

.blessing {
  position: absolute;
  color: #ff5722;
  font-size: 16px;
  font-weight: bold;
  animation: slide-up 1s ease-out forwards;
}

@keyframes slide-up {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-50px);
    opacity: 0;
  }
}
</style>
