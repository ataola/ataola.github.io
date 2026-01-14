<template>
  <div class="container">
    <div class="header">
      <div class="merit-display">
        <span class="merit-label">功德</span>
        <div class="merit-value-container">
          <span class="merit-value" :style="{ color: meritColor }">{{ woodenFishStore.meritCount }}</span>
          <div class="buddha-light"></div>
        </div>
      </div>
      <div class="button-group">
        <button
          class="action-btn music-btn"
          @click="toggleMusic"
          :title="woodenFishStore.isMusicPlaying ? '關閉音樂' : '播放音樂'"
        >
          {{ woodenFishStore.isMusicPlaying ? '🔇' : '🎵' }}
        </button>
        <button class="action-btn dedicate-btn" @click="openDedicateModal">回向</button>
        <button class="action-btn reset-btn" @click="resetMerit">歸零</button>
      </div>
    </div>
    <div class="woodfish-container" @click="knock">
      <img class="woodfish" :class="{ 'woodfish-active': isKnocking }" :src="woodenFish" alt="木魚" />
      <transition-group name="slide" tag="div" class="blessings">
        <div v-for="blessing in blessings" :key="blessing.id" class="blessing">{{ blessing.text }}</div>
      </transition-group>
    </div>

    <!-- ��零確認彈窗 -->
    <div v-if="showResetModal" class="modal-overlay" @click.self="closeResetModal">
      <div class="modal-content confirm-modal" @click.stop>
        <h2 class="modal-title">確認歸零</h2>
        <div class="modal-body">
          <p class="confirm-text">確定要將功德歸零嗎？</p>
        </div>
        <div class="modal-footer">
          <button class="modal-btn cancel-btn" @click="closeResetModal">取消</button>
          <button class="modal-btn confirm-btn" @click="confirmReset">確定</button>
        </div>
      </div>
    </div>

    <!-- 回向彈窗 -->
    <div v-if="showDedicateModal" class="modal-overlay" @click.self="closeDedicateModal">
      <div class="modal-content" @click.stop>
        <h2 class="modal-title">功德回向</h2>
        <div class="modal-body">
          <div class="current-merit">
            <span>當前功德：</span>
            <span class="merit-number">{{ woodenFishStore.meritCount }}</span>
          </div>
          <div class="form-group">
            <label>回向對象：</label>
            <input
              ref="dedicateTargetInput"
              v-model="dedicateTarget"
              type="text"
              placeholder="請輸入回向對象"
              class="input-field"
              @touchstart.stop
              @click.stop
            />
          </div>
          <div class="form-group">
            <label>回向功德數：</label>
            <input
              ref="dedicateAmountInput"
              v-model.number="dedicateAmount"
              type="number"
              inputmode="numeric"
              min="1"
              :max="woodenFishStore.meritCount"
              placeholder="請輸入功德數"
              class="input-field"
              @touchstart.stop
              @click.stop
            />
          </div>
          <div class="modal-hint">
            回向是將個人善業功德轉向更廣大目標的修行，功德不會因分享而減少，反而因願力加持而增長。
          </div>
        </div>
        <div class="modal-footer">
          <button class="modal-btn cancel-btn" @click.stop="closeDedicateModal">取消</button>
          <button class="modal-btn confirm-btn" @click.stop="confirmDedicate">確定</button>
        </div>
      </div>
    </div>

    <!-- 回向成功彈窗 -->
    <div v-if="showSuccessModal" class="modal-overlay" @click.self="closeSuccessModal">
      <div class="modal-content success-modal" @click.stop>
        <h2 class="modal-title success-title">回向成功</h2>
        <div class="modal-body">
          <div class="success-icon">✨</div>
          <p class="success-text">已將 {{ successAmount }} 功德回向給</p>
          <p class="success-target">{{ successTarget }}</p>
          <p class="success-blessing">願此功德，莊嚴佛淨土</p>
        </div>
        <div class="modal-footer">
          <button class="modal-btn confirm-btn full-width" @click="closeSuccessModal">確定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import woodenFish from '@static/lab/wooden-fish.png'
import MyWoodfishSound from '@static/lab/woodfish-sound.mp3'
import BackgroundMusic from '@static/music/dbz.mp3'
import { useWoodenFishStore } from '@/store/modules/woodenFish'

const woodenFishStore = useWoodenFishStore()

// 根据功德数计算颜色
const meritColor = computed(() => {
  const count = woodenFishStore.meritCount
  const tier = Math.floor(count / 100)

  // 定义颜色梯度（佛教色彩）
  const colors = [
    '#d32f2f', // 0-99: 红色（基础）
    '#ff6f00', // 100-199: 橙色
    '#fbc02d', // 200-299: 金黄色
    '#7cb342', // 300-399: 绿色
    '#0288d1', // 400-499: 蓝色
    '#5e35b1', // 500-599: 紫色
    '#c2185b', // 600-699: 玫红
    '#d84315', // 700-799: 深橙
    '#f57f17', // 800-899: 深金
    '#1976d2', // 900-999: 深蓝
    '#4a148c', // 1000+: 深紫（最高境界）
  ]

  return colors[Math.min(tier, colors.length - 1)]
})

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
const isSpacePressed = ref(false)

// 歸零確認彈窗狀態
const showResetModal = ref(false)

// 回向彈窗相關狀態
const showDedicateModal = ref(false)
const dedicateTarget = ref('')
const dedicateAmount = ref<number | null>(null)
const dedicateTargetInput = ref<HTMLInputElement | null>(null)
const dedicateAmountInput = ref<HTMLInputElement | null>(null)

// 回向成功彈窗狀態
const showSuccessModal = ref(false)
const successTarget = ref('')
const successAmount = ref(0)

// 使用 Audio 对象（在 iOS 上可以工作）
const woodfishSound = new Audio(MyWoodfishSound)
woodfishSound.preload = 'auto'

// 背景音乐
const bgMusic = new Audio(BackgroundMusic)
bgMusic.loop = true
bgMusic.volume = 0.4
bgMusic.preload = 'auto'

const playSound = () => {
  // 重置音频到开始位置
  woodfishSound.currentTime = 0
  // 重新加载音频，确保连续播放正常
  woodfishSound.load()
  // 播放音频
  woodfishSound.play().catch((error) => {
    console.error('Failed to play sound:', error)
  })
}

const knock = () => {
  playSound()

  // 增加功德计数
  woodenFishStore.incrementMerit()

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

const resetMerit = () => {
  showResetModal.value = true
}

// 關閉歸零確認彈窗
const closeResetModal = () => {
  showResetModal.value = false
}

// 確認歸零
const confirmReset = () => {
  woodenFishStore.resetMerit()
  closeResetModal()
}

// 切换背景音乐
const toggleMusic = () => {
  woodenFishStore.toggleMusic()
  if (woodenFishStore.isMusicPlaying) {
    bgMusic.currentTime = 13 // 从第13秒开始播放
    bgMusic.play().catch((error) => {
      console.error('Failed to play background music:', error)
      woodenFishStore.toggleMusic() // 播放失败则恢复状态
    })
  } else {
    bgMusic.pause()
  }
}

// 打開回向彈窗
const openDedicateModal = () => {
  if (woodenFishStore.meritCount === 0) {
    alert('當前功德為0，無法回向')
    return
  }
  showDedicateModal.value = true
  dedicateTarget.value = ''
  dedicateAmount.value = null

  // 延遲聚焦，確保彈窗已渲染
  setTimeout(() => {
    if (dedicateTargetInput.value) {
      dedicateTargetInput.value.focus()
    }
  }, 300)
}

// 關閉回向彈窗
const closeDedicateModal = () => {
  showDedicateModal.value = false
  // 確保輸入框失焦
  if (dedicateTargetInput.value) {
    dedicateTargetInput.value.blur()
  }
  if (dedicateAmountInput.value) {
    dedicateAmountInput.value.blur()
  }
}

// 關閉成功彈窗
const closeSuccessModal = () => {
  showSuccessModal.value = false
}

// 確認回向
const confirmDedicate = () => {
  // 驗證回向對象
  if (!dedicateTarget.value.trim()) {
    alert('請輸入回向對象')
    return
  }

  // 驗證功德數
  if (!dedicateAmount.value || dedicateAmount.value <= 0) {
    alert('請輸入有效的功德數（大於0）')
    return
  }

  if (dedicateAmount.value > woodenFishStore.meritCount) {
    alert('回向功德數不能超過當前功德總數')
    return
  }

  // 執行回向
  const success = woodenFishStore.dedicateMerit(dedicateAmount.value)
  if (success) {
    // 保存成功信息
    successTarget.value = dedicateTarget.value
    successAmount.value = dedicateAmount.value

    // 關閉回向彈窗
    closeDedicateModal()

    // 延遲顯示成功彈窗
    setTimeout(() => {
      showSuccessModal.value = true
    }, 200)
  } else {
    alert('回向失敗，請重試')
  }
}

// 处理空格键敲击
const handleKeyUp = (event: KeyboardEvent) => {
  if (event.code === 'Space' || event.key === ' ') {
    if (isSpacePressed.value) {
      knock()
      isSpacePressed.value = false
    }
  }
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.code === 'Space' || event.key === ' ') {
    if (!isSpacePressed.value) {
      isSpacePressed.value = true
      event.preventDefault() // 防止頁面滾動
    }
  }
  // ESC 鍵關閉彈窗
  if (event.key === 'Escape') {
    if (showSuccessModal.value) {
      closeSuccessModal()
    } else if (showDedicateModal.value) {
      closeDedicateModal()
    } else if (showResetModal.value) {
      closeResetModal()
    }
  }
}

onMounted(() => {
  // 从 localStorage 初始化功德计数
  woodenFishStore.initFromStorage()

  // 添加键盘事件监听器
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)
})

onUnmounted(() => {
  // 移除键盘事件监听器
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('keyup', handleKeyUp)

  // 停止背景音乐
  if (bgMusic) {
    bgMusic.pause()
  }
})
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  height: calc(100vh - 2rem); // 减去 NavBar(1rem) + Footer(1rem)
  background-color: #f2be45;
  display: flex;
  flex-direction: column;
  position: relative;
  touch-action: pan-y;
  overflow: hidden; // 防止内容溢出
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    padding: 20px;
    background: linear-gradient(180deg, rgba(139, 69, 19, 0.05) 0%, transparent 100%);
  }
}

.merit-display {
  display: flex;
  align-items: baseline;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
}

.merit-label {
  font-size: 18px;
  color: #8b4513;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.merit-value-container {
  position: relative;
  display: inline-block;
}

.merit-value {
  font-size: 48px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2), 0 0 20px currentColor;
  line-height: 1;
  min-width: 80px;
  text-align: center;
  position: relative;
  z-index: 2;
  transition: color 0.5s ease;

  @media (max-width: 768px) {
    font-size: 56px;
    min-width: auto;
  }
}

// 佛光效果
.buddha-light {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 215, 0, 0.4) 0%,
    rgba(255, 215, 0, 0.2) 30%,
    rgba(255, 215, 0, 0.1) 60%,
    transparent 100%
  );
  animation: buddha-glow 3s ease-in-out infinite;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
}

@keyframes buddha-glow {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.9;
  }
}

.button-group {
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 12px;
    width: 100%;
    justify-content: center;
  }
}

.action-btn {
  padding: 8px 20px;
  font-size: 14px;
  color: #8b4513;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(139, 69, 19, 0.3);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  white-space: nowrap;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    border-color: rgba(139, 69, 19, 0.5);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }

  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 14px;
    flex: 1;
    max-width: 100px;
  }
}

.music-btn {
  font-size: 18px;
  padding: 6px 12px;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 10px 14px;
    flex: 0 0 auto;
    max-width: none;
  }
}

.dedicate-btn {
  background-color: rgba(255, 87, 34, 0.15);
  color: #ff5722;
  border-color: rgba(255, 87, 34, 0.3);

  &:hover {
    background-color: rgba(255, 87, 34, 0.25);
    border-color: rgba(255, 87, 34, 0.5);
  }
}

.reset-btn {
  // 保持原有样式
}

.woodfish-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  min-height: 400px;

  @media (max-width: 768px) {
    min-height: 300px;
  }
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
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.blessing {
  position: absolute;
  color: #ff5722;
  font-size: 16px;
  font-weight: bold;
  animation: slide-up 1s ease-out forwards;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 14px;
  }
}

@keyframes slide-up {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100px);
    opacity: 0;
  }
}

// 回向弹窗样式
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background-color: #fff;
  border-radius: 16px;
  border: 3px solid #f2be45;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    max-width: 90%;
    border-radius: 12px;
  }
}

.modal-title {
  font-size: 24px;
  font-weight: bold;
  color: #8b4513;
  text-align: center;
  padding: 20px;
  margin: 0;
  border-bottom: 2px solid #f2be45;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 16px;
  }
}

.modal-body {
  padding: 24px;

  @media (max-width: 768px) {
    padding: 20px;
  }
}

.current-merit {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  color: #8b4513;
  margin-bottom: 20px;
  padding: 12px;
  background-color: rgba(242, 190, 69, 0.1);
  border-radius: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.merit-number {
  font-size: 24px;
  font-weight: bold;
  color: #d32f2f;

  @media (max-width: 768px) {
    font-size: 20px;
  }
}

.form-group {
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: #8b4513;
    margin-bottom: 8px;

    @media (max-width: 768px) {
      font-size: 13px;
    }
  }
}

.input-field {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #f2be45;
  border-radius: 8px;
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #ff5722;
    box-shadow: 0 0 0 3px rgba(255, 87, 34, 0.1);
  }

  &::placeholder {
    color: #bbb;
  }

  @media (max-width: 768px) {
    font-size: 16px; // 保持16px避免iOS自动缩放
    padding: 10px 14px;
  }
}

.modal-hint {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
  padding: 12px;
  background-color: rgba(255, 87, 34, 0.05);
  border-left: 3px solid #ff5722;
  border-radius: 4px;
  margin-top: 16px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px;
  }
}

.modal-footer {
  display: flex;
  gap: 12px;
  padding: 20px 24px;
  border-top: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    padding: 16px 20px;
    gap: 10px;
  }
}

.modal-btn {
  flex: 1;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 15px;
  }
}

.cancel-btn {
  background-color: #f5f5f5;
  color: #666;

  &:hover {
    background-color: #e0e0e0;
  }
}

.confirm-btn {
  background-color: #d32f2f;
  color: #fff;

  &:hover {
    background-color: #b71c1c;
  }

  &.full-width {
    flex: none;
    width: 100%;
  }
}

// 確認彈窗樣式
.confirm-modal {
  max-width: 400px;

  .confirm-text {
    text-align: center;
    font-size: 16px;
    color: #333;
    margin: 0;
    padding: 20px 0;

    @media (max-width: 768px) {
      font-size: 15px;
      padding: 16px 0;
    }
  }
}

// 成功彈窗樣式
.success-modal {
  max-width: 400px;

  .success-title {
    color: #ff5722;
  }

  .success-icon {
    font-size: 48px;
    text-align: center;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 40px;
      margin-bottom: 12px;
    }
  }

  .success-text {
    text-align: center;
    font-size: 16px;
    color: #666;
    margin: 8px 0;

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }

  .success-target {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #d32f2f;
    margin: 12px 0;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  .success-blessing {
    text-align: center;
    font-size: 14px;
    color: #8b4513;
    margin: 16px 0 8px;
    font-style: italic;

    @media (max-width: 768px) {
      font-size: 13px;
    }
  }
}
</style>
