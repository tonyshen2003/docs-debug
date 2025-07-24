<template>
  <!-- 平台卡片组件 -->
  <div class="platform-card" :class="{ expanded: isExpanded }">
    <!-- 点击标题时，切换展开状态 -->
    <h3 @click="toggle">
      <!-- 插槽，用于插入图标 -->
      <slot name="icon"></slot>
      <!-- 插槽，用于插入标题 -->
      <slot name="title"></slot>
    </h3>
    <!-- 如果展开状态为 true，则显示内容 -->
    <div class="platform-card-content" v-if="isExpanded">
      <!-- 插槽，用于插入内容 -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// 引入 ref 函数，用于创建响应式数据
import { ref } from 'vue'

// 创建响应式数据，用于控制展开状态
const isExpanded = ref(false)
// 切换展开状态的函数
const toggle = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<style scoped>
/* 平台卡片样式 */
.platform-card {
  margin: 20px 0;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  border-left: 4px solid var(--vp-c-brand);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* 标题样式 - 优化版 */
.platform-card h3 {
  cursor: pointer;
  position: relative;
  user-select: none;
  margin-top: 0;
  color: var(--vp-c-brand);
  display: flex;
  align-items: center;
  gap: 16px; /* 使用 gap 属性统一控制间距 */
  line-height: 1.4;
}


/* 标题后面的符号样式 */
.platform-card h3:after {
  content: "+";
  position: absolute;
  right: 0;
  font-size: 1.2rem;
  font-weight: bold;
}

/* 展开状态下的标题后面的符号样式 */
.platform-card.expanded h3:after {
  content: "−";
}

/* 图标样式 - 优化版 */
.platform-card .platform-icon {
  font-size: 1.5rem;
  margin-right: 16px; /* 从 12px 增加到 16px */
  flex-shrink: 0; /* 防止图标被压缩 */
  display: inline-flex;
  align-items: center;
}

/* 内容样式 */
.platform-card-content {
  padding-top: 15px;
  margin-top: 10px;
  border-top: 1px solid rgba(128, 128, 128, 0.2);
}
</style>