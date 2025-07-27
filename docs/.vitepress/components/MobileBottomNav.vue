<template>
  <div class="mobile-bottom-nav" v-if="isMobile">
    <!-- 首页 -->
    <a href="/" class="nav-item" :class="{ active: isActive('/') }">
      <div class="icon">🏠</div>
      <div class="text">首页</div>
    </a>

    <!-- 技术指南 -->
    <a href="/guide/" class="nav-item" :class="{ active: isActive('/guide/') }">
      <div class="icon">📚</div>
      <div class="text">指南</div>
    </a>

    <!-- 多机位制作 -->
    <a href="/guide/EFP/" class="nav-item" :class="{ active: isActive('/guide/EFP/') }">
      <div class="icon">🎬</div>
      <div class="text">多机位</div>
    </a>

    <!-- 后期制作 -->
    <a href="/guide/digital-video-post-production/" class="nav-item" :class="{ active: isActive('/guide/digital-video-post-production/') }">
      <div class="icon">🎞️</div>
      <div class="text">后期</div>
    </a>

    <!-- 快速操作 -->
    <div class="nav-item quick-action" @click="showQuickMenu">
      <div class="icon">⚡</div>
      <div class="text">工具</div>
    </div>
  </div>

  <!-- 快速操作菜单 -->
  <div v-if="showMenu" class="quick-menu-overlay" @click="hideQuickMenu">
    <div class="quick-menu" @click.stop>
      <div class="quick-menu-header">
        <h3>快速工具</h3>
        <button @click="hideQuickMenu" class="close-btn">✕</button>
      </div>
      <div class="quick-menu-content">
        <a href="/about/team" class="menu-item">
          <div class="icon">👥</div>
          <div class="text">团队介绍</div>
        </a>
        <a href="/club-library/" class="menu-item">
          <div class="icon">📖</div>
          <div class="text">社团文库</div>
        </a>
        <a href="mailto:contact@szzxshumei.com" class="menu-item">
          <div class="icon">📧</div>
          <div class="text">联系我们</div>
        </a>
        <div class="menu-item" @click="toggleTheme">
          <div class="icon">{{ isDark ? '☀️' : '🌙' }}</div>
          <div class="text">{{ isDark ? '浅色' : '深色' }}模式</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useData, useRoute } from 'vitepress'

const route = useRoute()
const { isDark } = useData()

const isMobile = ref(false)
const showMenu = ref(false)

// 检查是否为移动设备
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

// 检查当前路径是否激活
const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

// 显示快速菜单
const showQuickMenu = () => {
  showMenu.value = true
  document.body.style.overflow = 'hidden'
}

// 隐藏快速菜单
const hideQuickMenu = () => {
  showMenu.value = false
  document.body.style.overflow = ''
}

// 切换主题
const toggleTheme = () => {
  const html = document.documentElement
  const currentTheme = html.classList.contains('dark') ? 'dark' : 'light'
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  
  html.classList.remove(currentTheme)
  html.classList.add(newTheme)
  
  // 保存主题设置
  localStorage.setItem('vitepress-theme-appearance', newTheme)
  
  hideQuickMenu()
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* 快速菜单遮罩 */
.quick-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

/* 快速菜单 */
.quick-menu {
  background-color: var(--vp-c-bg);
  border-radius: 16px 16px 0 0;
  width: 100%;
  max-width: 400px;
  max-height: 60vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

/* 快速菜单头部 */
.quick-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid var(--vp-c-border);
}

.quick-menu-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.close-btn {
  background: none;
  border: none;
  font-size: 20px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.close-btn:hover {
  background-color: var(--vp-c-bg-soft);
}

/* 快速菜单内容 */
.quick-menu-content {
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 12px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: all 0.2s ease;
  cursor: pointer;
  min-height: 80px;
}

.menu-item:hover {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  transform: translateY(-2px);
}

.menu-item .icon {
  font-size: 24px;
  margin-bottom: 8px;
}

.menu-item .text {
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
}

/* 响应式调整 */
@media (max-width: 480px) {
  .quick-menu-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 12px;
  }
  
  .menu-item {
    padding: 12px 8px;
    min-height: 70px;
  }
  
  .menu-item .icon {
    font-size: 20px;
    margin-bottom: 6px;
  }
  
  .menu-item .text {
    font-size: 12px;
  }
}
</style>