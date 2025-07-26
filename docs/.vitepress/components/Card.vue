<template>
  <a class="card" :href="link" @click="handleClick">
    <article class="box">
      <div class="card-icon" v-if="icon">
        <span class="icon-emoji">{{ icon }}</span>
      </div>
      <h2 class="card-title" v-if="title">{{ title }}</h2>
      <p class="card-description" v-if="description">{{ description }}</p>
      <slot></slot>
      
      <div class="card-footer" v-if="link || $slots.footer">
        <slot name="footer">
          <span v-if="link" class="card-link">
            {{ linkText || '了解更多' }}
            <span class="arrow">→</span>
          </span>
        </slot>
      </div>
    </article>
  </a>
</template>

<script>
export default {
  name: 'Card',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    linkText: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick() {
      // VitePress会自动处理内部链接的路由导航
      // 无需手动干预，让浏览器使用默认的链接行为
    }
  }
}
</script>

<style scoped>
.card {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
  text-decoration: none;
  color: inherit;
}

.card:hover {
  border-color: var(--vp-c-brand-1);
}

.box {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
}

.card-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 6px;
  background-color: var(--vp-c-default-soft);
  width: 48px;
  height: 48px;
  font-size: 24px;
  color: var(--vp-c-text-1);
}

.icon-emoji {
  font-size: 24px;
  line-height: 1;
}

.card-title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 12px 0;
}

.card-description {
  flex-grow: 1;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  margin: 0;
}

.card-footer {
  margin-top: 16px;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: color 0.25s;
}

.card-link:hover {
  color: var(--vp-c-brand-2);
}

.card-link:hover .arrow {
  transform: translateX(2px);
}

.arrow {
  transition: transform 0.25s;
  font-size: 14px;
}

@media (max-width: 768px) {
  .box {
    padding: 20px;
  }
  
  .card-icon {
    width: 40px;
    height: 40px;
    font-size: 20px;
    margin-bottom: 16px;
  }
  
  .icon-emoji {
    font-size: 20px;
  }
}
</style>