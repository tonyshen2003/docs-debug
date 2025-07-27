<template>
  <div class="responsive-grid" :class="gridClasses">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  // 桌面端列数 (12列栅格)
  desktop: {
    type: Number,
    default: 12
  },
  // 平板端列数 (8列栅格)
  tablet: {
    type: Number,
    default: 8
  },
  // 移动端列数 (4列栅格)
  mobile: {
    type: Number,
    default: 4
  },
  // 间距大小
  gap: {
    type: String,
    default: 'normal', // xs, sm, normal, lg, xl
    validator: (value) => ['xs', 'sm', 'normal', 'lg', 'xl'].includes(value)
  },
  // 是否自动适配
  autoFit: {
    type: Boolean,
    default: true
  }
})

const screenSize = ref('desktop')

// 检测屏幕尺寸
const checkScreenSize = () => {
  const width = window.innerWidth
  if (width <= 767) {
    screenSize.value = 'mobile'
  } else if (width <= 1023) {
    screenSize.value = 'tablet'
  } else {
    screenSize.value = 'desktop'
  }
}

// 计算栅格类名
const gridClasses = computed(() => {
  const classes = ['grid']
  
  // 添加间距类
  classes.push(`gap-${props.gap}`)
  
  // 添加响应式类
  if (props.autoFit) {
    classes.push('auto-fit')
  }
  
  // 添加当前屏幕尺寸类
  classes.push(`screen-${screenSize.value}`)
  
  return classes
})

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<style scoped>
/* 飞书设计规范栅格系统 */
.responsive-grid {
  display: grid;
  width: 100%;
  box-sizing: border-box;
}

/* 间距系统 - 飞书设计规范 */
.gap-xs {
  gap: var(--spacing-xs, 4px);
}

.gap-sm {
  gap: var(--spacing-sm, 8px);
}

.gap-normal {
  gap: var(--spacing-md, 16px);
}

.gap-lg {
  gap: var(--spacing-lg, 24px);
}

.gap-xl {
  gap: var(--spacing-xl, 32px);
}

/* 桌面端 - 12列栅格 */
@media (min-width: 1024px) {
  .screen-desktop {
    grid-template-columns: repeat(var(--grid-columns-desktop, 12), 1fr);
  }
  
  .gap-normal {
    gap: var(--gutter-desktop, 16px);
  }
}

/* 平板端 - 8列栅格 */
@media (min-width: 768px) and (max-width: 1023px) {
  .screen-tablet {
    grid-template-columns: repeat(var(--grid-columns-tablet, 8), 1fr);
  }
  
  .gap-normal {
    gap: var(--gutter-tablet, 8px);
  }
}

/* 移动端 - 4列栅格 */
@media (max-width: 767px) {
  .screen-mobile {
    grid-template-columns: repeat(var(--grid-columns-mobile, 4), 1fr);
  }
  
  .gap-normal {
    gap: var(--gutter-mobile, 16px);
  }
}

/* 自动适配模式 */
.auto-fit {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* 响应式断点优化 */
@media (max-width: 480px) {
  .responsive-grid {
    grid-template-columns: 1fr;
  }
}
</style>