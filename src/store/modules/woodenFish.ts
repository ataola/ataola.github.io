// stores/modules/woodenFish.ts
import { defineStore } from 'pinia'

const STORAGE_KEY = 'wooden-fish-merit'

export const useWoodenFishStore = defineStore('woodenFish', {
  state: () => ({
    meritCount: 0,
    isMusicPlaying: false,
  }),
  getters: {
    getMeritCount: (state) => state.meritCount,
  },
  actions: {
    // 初始化从 localStorage 读取数据
    initFromStorage() {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        try {
          this.meritCount = parseInt(stored, 10) || 0
        } catch (e) {
          console.error('Failed to parse merit count from localStorage', e)
          this.meritCount = 0
        }
      }
    },
    // 增加功德
    incrementMerit() {
      this.meritCount++
      this.saveToStorage()
    },
    // 保存到 localStorage
    saveToStorage() {
      localStorage.setItem(STORAGE_KEY, this.meritCount.toString())
    },
    // 重置功德
    resetMerit() {
      this.meritCount = 0
      this.saveToStorage()
    },
    // 切换音乐播放状态
    toggleMusic() {
      this.isMusicPlaying = !this.isMusicPlaying
    },
    // 回向功德
    dedicateMerit(amount: number): boolean {
      if (amount <= 0 || amount > this.meritCount) {
        return false
      }
      this.meritCount -= amount
      this.saveToStorage()
      return true
    },
  },
})
