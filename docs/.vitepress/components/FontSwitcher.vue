<template>
  <div class="font-switcher">
    <button 
      @click="toggleFont" 
      class="font-switch-btn"
      :title="currentFont === 'songti' ? '切换到黑体' : '切换到宋体'"
    >
      <span class="font-icon">{{ currentFont === 'songti' ? '黑' : '宋' }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const currentFont = ref('songti')

// 从 localStorage 读取字体设置
onMounted(() => {
  const savedFont = localStorage.getItem('vitepress-font-family')
  if (savedFont) {
    currentFont.value = savedFont
    applyFont(savedFont)
  }
})

// 切换字体
const toggleFont = () => {
  currentFont.value = currentFont.value === 'songti' ? 'heiti' : 'songti'
  applyFont(currentFont.value)
  localStorage.setItem('vitepress-font-family', currentFont.value)
}

// 应用字体
const applyFont = (fontType) => {
  const root = document.documentElement
  if (fontType === 'songti') {
    root.style.setProperty('--vp-font-family-base', '"Noto Serif SC", "SimSun", serif')
  } else {
    root.style.setProperty('--vp-font-family-base', '"Noto Sans", "Noto Sans SC", "SimHei", sans-serif')
  }
}

// 监听字体变化
watch(currentFont, (newFont) => {
  applyFont(newFont)
})
</script>

<style scoped>
.font-switcher {
  display: flex;
  align-items: center;
  margin-left: 8px;
}

.font-switch-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  font-weight: 500;
}

.font-switch-btn:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}

.font-icon {
  line-height: 1;
}

/* 暗色模式适配 */
.dark .font-switch-btn {
  border-color: var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
}

.dark .font-switch-btn:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}
</style>