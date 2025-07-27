<template>
  <div class="mobile-bottom-nav" v-if="isMobile">
    <!-- 主页 -->
    <a href="/" class="nav-item" :class="{ active: isActive('/') }">
      <div class="icon-wrapper">
        <svg class="icon" viewBox="0 0 24 24" fill="none">
          <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="text">主页</div>
    </a>

    <!-- 技术指南 -->
    <a href="/guide/" class="nav-item" :class="{ active: isActive('/guide/') }">
      <div class="icon-wrapper">
        <svg class="icon" viewBox="0 0 24 24" fill="none">
          <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="text">指南</div>
    </a>

    <!-- 社团文库 -->
    <a href="/club-library/" class="nav-item" :class="{ active: isActive('/club-library/') }">
      <div class="icon-wrapper">
        <svg class="icon" viewBox="0 0 24 24" fill="none">
          <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3ZM22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="text">文库</div>
    </a>

    <!-- 社团官网 -->
    <a href="https://szzxshumei.com" target="_blank" class="nav-item">
      <div class="icon-wrapper">
        <svg class="icon" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="text">官网</div>
    </a>
  </div>


</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

const isMobile = ref(false)

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

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
/* 移动端底部导航 - 符合飞书设计规范 */
.mobile-bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-divider);
  display: flex;
  justify-content: space-around;
  padding: 8px 16px 12px 16px; /* 增加左右边距，符合全局边距规范 */
  z-index: 1000;
  min-height: 64px; /* 符合移动端最小触控区域 */
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.04); /* 添加轻微阴影提升层次感 */
  backdrop-filter: blur(8px); /* 毛玻璃效果，符合现代设计趋势 */
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--vp-c-text-2);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); /* 使用飞书推荐的缓动函数 */
  padding: 8px 12px;
  border-radius: 8px; /* 增加圆角，符合飞书设计语言 */
  min-width: 48px; /* 确保最小触控区域 */
  position: relative;
}

.nav-item.active {
  color: var(--vp-c-brand);
  background: var(--vp-c-brand-soft); /* 激活状态背景 */
}

.nav-item:hover {
  color: var(--vp-c-brand);
  background: var(--vp-c-gray-soft); /* 悬停状态背景 */
  transform: translateY(-1px); /* 轻微上移效果 */
}

.nav-item:active {
  transform: translateY(0); /* 点击时回弹 */
  transition: transform 0.1s;
}

.icon-wrapper {
  margin-bottom: 4px; /* 增加图标与文字间距 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 22px; /* 稍微增大图标尺寸，提升可视性 */
  height: 22px;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-item:hover .icon {
  transform: scale(1.1); /* 悬停时图标轻微放大 */
}

.nav-item.active .icon {
  transform: scale(1.05); /* 激活状态图标轻微放大 */
}

.text {
  font-size: 11px; /* 稍微增大字体，提升可读性 */
  line-height: 1.2;
  font-weight: 500; /* 增加字重 */
  letter-spacing: 0.2px; /* 增加字间距 */
  text-align: center;
  white-space: nowrap; /* 防止文字换行 */
}

.nav-item.active .text {
  font-weight: 600; /* 激活状态字重更粗 */
}

/* 暗色模式优化 */
@media (prefers-color-scheme: dark) {
  .mobile-bottom-nav {
    background: rgba(var(--vp-c-bg-rgb), 0.8);
    border-top-color: var(--vp-c-divider-light);
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
  }
}

/* 适配安全区域 */
@supports (padding-bottom: env(safe-area-inset-bottom)) {
  .mobile-bottom-nav {
    padding-bottom: calc(12px + env(safe-area-inset-bottom));
  }
}

/* 响应式优化 */
@media (max-width: 375px) {
  .nav-item {
    padding: 6px 8px;
  }
  
  .icon {
    width: 20px;
    height: 20px;
  }
  
  .text {
    font-size: 10px;
  }
}

@media (min-width: 414px) {
  .nav-item {
    padding: 10px 16px;
  }
  
  .icon {
    width: 24px;
    height: 24px;
  }
  
  .text {
    font-size: 12px;
  }
}
</style>