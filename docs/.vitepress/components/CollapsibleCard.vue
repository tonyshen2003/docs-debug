<template>
  <div class="platform-card" :class="{ expanded: isExpanded }">
    <h3 @click="toggle">
      <slot name="icon"></slot>
      <slot name="title"></slot>
    </h3>
    <div class="platform-card-content" v-if="isExpanded">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isExpanded = ref(false)
const toggle = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<style scoped>
.platform-card {
  margin: 20px 0;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  border-left: 4px solid var(--vp-c-brand);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.platform-card h3 {
  cursor: pointer;
  position: relative;
  user-select: none;
  margin-top: 0;
  color: var(--vp-c-brand);
  display: flex;
  align-items: center;
}

.platform-card h3:after {
  content: "+";
  position: absolute;
  right: 0;
  font-size: 1.2rem;
  font-weight: bold;
}

.platform-card.expanded h3:after {
  content: "−";
}

.platform-card .platform-icon {
  font-size: 1.5rem;
  margin-right: 12px;
}

.platform-card-content {
  padding-top: 15px;
  margin-top: 10px;
  border-top: 1px solid rgba(128, 128, 128, 0.2);
}
</style>