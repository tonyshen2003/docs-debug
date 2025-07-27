<template>
  <div class="responsive-container" :class="containerClasses">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 容器最大宽度
  maxWidth: {
    type: String,
    default: 'xl', // xs, sm, md, lg, xl, 2xl, full
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'].includes(value)
  },
  // 是否居中
  center: {
    type: Boolean,
    default: true
  },
  // 内边距大小
  padding: {
    type: String,
    default: 'responsive', // none, xs, sm, md, lg, xl, responsive
    validator: (value) => ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'responsive'].includes(value)
  },
  // 是否流式布局
  fluid: {
    type: Boolean,
    default: false
  }
})

// 计算容器类名
const containerClasses = computed(() => {
  const classes = ['container']
  
  // 添加最大宽度类
  if (!props.fluid) {
    classes.push(`max-w-${props.maxWidth}`)
  } else {
    classes.push('fluid')
  }
  
  // 添加居中类
  if (props.center) {
    classes.push('center')
  }
  
  // 添加内边距类
  if (props.padding !== 'none') {
    classes.push(`padding-${props.padding}`)
  }
  
  return classes
})
</script>

<style scoped>
/* 飞书设计规范容器系统 */
.responsive-container {
  width: 100%;
  box-sizing: border-box;
}

/* 居中对齐 */
.center {
  margin-left: auto;
  margin-right: auto;
}

/* 流式布局 */
.fluid {
  max-width: 100%;
}

/* 最大宽度系统 - 飞书设计规范 */
.max-w-xs {
  max-width: 320px;
}

.max-w-sm {
  max-width: 480px;
}

.max-w-md {
  max-width: 768px;
}

.max-w-lg {
  max-width: 1024px;
}

.max-w-xl {
  max-width: 1200px;
}

.max-w-2xl {
  max-width: 1440px;
}

.max-w-full {
  max-width: 100%;
}

/* 内边距系统 - 飞书设计规范 */
.padding-xs {
  padding: var(--spacing-xs, 4px);
}

.padding-sm {
  padding: var(--spacing-sm, 8px);
}

.padding-md {
  padding: var(--spacing-md, 16px);
}

.padding-lg {
  padding: var(--spacing-lg, 24px);
}

.padding-xl {
  padding: var(--spacing-xl, 32px);
}

/* 响应式内边距 - 飞书设计规范 */
.padding-responsive {
  padding: var(--margin-mobile, 16px);
}

/* 桌面端响应式内边距 */
@media (min-width: 1024px) {
  .padding-responsive {
    padding: var(--margin-desktop, 24px);
  }
}

/* 平板端响应式内边距 */
@media (min-width: 768px) and (max-width: 1023px) {
  .padding-responsive {
    padding: var(--margin-tablet, 16px);
  }
}

/* 移动端响应式内边距 */
@media (max-width: 767px) {
  .padding-responsive {
    padding: var(--margin-mobile, 16px);
  }
}

/* 安全区域适配 */
@supports (padding: max(0px)) {
  @media (max-width: 767px) {
    .padding-responsive {
      padding-left: max(var(--margin-mobile, 16px), env(safe-area-inset-left));
      padding-right: max(var(--margin-mobile, 16px), env(safe-area-inset-right));
    }
  }
}

/* 超小屏幕优化 */
@media (max-width: 320px) {
  .padding-responsive {
    padding: var(--spacing-sm, 8px);
  }
}

/* 大屏幕优化 */
@media (min-width: 1440px) {
  .max-w-xl {
    max-width: 1280px;
  }
  
  .max-w-2xl {
    max-width: 1536px;
  }
}
</style>