# 字体规范

基于飞书设计规范的字体体系，为项目提供统一的字体标准。

> 参考：[飞书设计规范 - 字体](https://open.feishu.cn/document/design-specification/design-language/font)

## 字体家族

项目中使用的字体家族定义：

```css
:root {
  /* 字体家族 */
  --vp-font-family-base: "Noto Sans", "Noto Sans SC", sans-serif;
  --vp-font-family-logo: "DFPHanziPen-GBW5", sans-serif;
  --vp-font-family-mono: "Maple Mono", monospace, "Noto Sans SC", sans-serif;
  --vp-font-family-serif: "Noto Serif SC", "SimSun", "宋体", serif;
```

## 字重规范

基于飞书设计标准的字重定义：

```css
  --font-weight-light: 300;     /* 细体 */
  --font-weight-regular: 400;   /* 常规 - 飞书主要使用 */
  --font-weight-medium: 500;    /* 中等 - 飞书主要使用 */
  --font-weight-semibold: 600;  /* 半粗 - 大标题加粗 */
  --font-weight-bold: 700;      /* 粗体 */
```

### 字重、字体大小、标题级别对应关系表

| 标题级别 | 字体大小 | 推荐字重 | 字重值 | 行高 | 使用场景 |
|---------|---------|---------|-------|------|----------|
| H1 | 32px | 半粗 | 600 | 1.25 | 页面主标题、重要章节标题 |
| H2 | 24px | 半粗 | 600 | 1.25 | 二级标题、章节标题 |
| H3 | 20px | 中等 | 500 | 1.4 | 三级标题、小节标题 |
| H4 | 18px | 中等 | 500 | 1.4 | 四级标题、段落标题 |
| 标准正文 | 14px | 常规 | 400 | 1.6 | 常规正文、主要内容 |
| 说明文字 | 12px | 常规 | 400 | 1.4 | 辅助说明、次要信息 |

### 字重效果演示

<div style="font-size: 16px; line-height: 2;">
  <p style="font-weight: 300;">字重 300 - 细体：这是细体字重的效果展示</p>
  <p style="font-weight: 400;">字重 400 - 常规：这是常规字重的效果展示（飞书主要使用）</p>
  <p style="font-weight: 500;">字重 500 - 中等：这是中等字重的效果展示（飞书主要使用）</p>
  <p style="font-weight: 600;">字重 600 - 半粗：这是半粗字重的效果展示（大标题加粗）</p>
  <p style="font-weight: 700;">字重 700 - 粗体：这是粗体字重的效果展示</p>
</div>

## 字体大小规范

统一的字体大小标准（所有平台一致）：

### 标题层级

```css
  --font-size-h1: 32px;         /* 一级标题 */
  --font-size-h2: 24px;         /* 二级标题 */
  --font-size-h3: 20px;         /* 三级标题 */
  --font-size-h4: 18px;         /* 四级标题 */
```

#### 标题效果演示

<div style="margin: 20px 0;">
  <h1 style="font-size: 32px; font-weight: 600; margin: 16px 0;">H1 一级标题 - 32px</h1>
  <h2 style="font-size: 24px; font-weight: 600; margin: 14px 0;">H2 二级标题 - 24px</h2>
  <h3 style="font-size: 20px; font-weight: 500; margin: 12px 0;">H3 三级标题 - 20px</h3>
  <h4 style="font-size: 18px; font-weight: 500; margin: 10px 0;">H4 四级标题 - 18px</h4>
</div>

### 正文内容

```css
  --font-size-body: 14px;        /* 标准正文 */
  --font-size-caption: 12px;     /* 说明文字 */
```

#### 正文效果演示

<div style="margin: 20px 0; line-height: 1.6;">
  <p style="font-size: 14px; font-weight: 400; margin: 12px 0;">标准正文 14px - 这是标准正文的效果展示，是最常用的正文字体大小</p>
  <p style="font-size: 12px; font-weight: 400; margin: 8px 0; color: #646A73;">说明文字 12px - 这是说明文字的效果展示，用于辅助说明和小字</p>
</div>

## 行高规范

不同内容类型的行高标准：

```css
  --line-height-tight: 1.25;     /* 紧密 - 大标题 */
  --line-height-normal: 1.4;     /* 正常 - 小标题 */
  --line-height-relaxed: 1.6;    /* 宽松 - 正文 */
  --line-height-loose: 1.8;      /* 松散 - 长文本 */
```

### 行高效果演示

<div style="margin: 20px 0; font-size: 14px;">
  <div style="margin-bottom: 20px; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px;">
    <strong>紧密行高 1.25：</strong>
    <p style="line-height: 1.25; margin: 8px 0;">这是紧密行高的效果展示。适用于大标题，行间距较小，视觉紧凑。这种行高让文字看起来更加紧密，适合标题使用。</p>
  </div>
  <div style="margin-bottom: 20px; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px;">
    <strong>正常行高 1.4：</strong>
    <p style="line-height: 1.4; margin: 8px 0;">这是正常行高的效果展示。适用于小标题，行间距适中，阅读舒适。这种行高在保持紧凑的同时，也确保了良好的可读性。</p>
  </div>
  <div style="margin-bottom: 20px; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px;">
    <strong>宽松行高 1.6：</strong>
    <p style="line-height: 1.6; margin: 8px 0;">这是宽松行高的效果展示。适用于正文内容，行间距宽松，阅读体验佳。这种行高为文字提供了充足的呼吸空间，让长时间阅读更加舒适。</p>
  </div>
  <div style="margin-bottom: 20px; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px;">
    <strong>松散行高 1.8：</strong>
    <p style="line-height: 1.8; margin: 8px 0;">这是松散行高的效果展示。适用于长文本阅读，行间距最大，视觉最为舒缓。这种行高特别适合需要长时间阅读的文档，能够有效减少视觉疲劳。</p>
  </div>
</div>

## 字间距规范

不同字体大小的字间距设置：

```css
  --letter-spacing-tight: -0.02em;  /* 大标题 */
  --letter-spacing-normal: -0.01em; /* 中标题 */
  --letter-spacing-wide: 0.01em;    /* 小文字 */
}
```

## 样式应用

### 标题层级

统一的标题样式定义：

```css
.vp-doc h1 {
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  margin: 0 0 24px;
}

.vp-doc h2 {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-normal);
  margin: 32px 0 16px;
}

.vp-doc h3 {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  margin: 24px 0 12px;
}

.vp-doc h4 {
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  margin: 20px 0 8px;
}
```

### 正文内容

正文和各种文本样式：

```css
.vp-doc p {
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  margin: 12px 0;
}

/* 小正文 */
.vp-doc .text-small {
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
}

/* 说明文字 */
.vp-doc .caption {
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  color: var(--vp-c-text-2);
}
```

## 特殊组件字体规范

### 导航栏

导航栏相关组件的字体样式：

```css
.VPNavBarTitle .title {
  font-size: 18px;
  font-weight: var(--font-weight-medium);
  font-family: var(--vp-font-family-base);
}

.VPNavBarMenuLink {
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  font-family: var(--vp-font-family-base);
}
```

### 侧边栏

侧边栏导航的字体样式：

```css
.VPSidebarItem .text {
  font-size: 16px;
  font-weight: var(--font-weight-regular);
}

.VPSidebarItem.is-active .text {
  font-weight: var(--font-weight-medium);
}
```

### 代码块

代码相关的字体样式：

```css
.vp-doc code {
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  font-weight: var(--font-weight-regular);
}

.vp-doc pre code {
  font-size: 14px;
  line-height: 1.5;
}
```

### 表格

表格内容的字体样式：

```css
.vp-doc table {
  font-size: 14px;
  font-weight: var(--font-weight-regular);
}

.vp-doc table th {
  font-size: 13px;
  font-weight: var(--font-weight-medium);
}
```

### 引用块、列表、链接和强调

其他内容元素的字体样式：

```css
.vp-doc blockquote {
  font-size: 14px;
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  font-style: italic;
}

/* 列表 */
.vp-doc ul, .vp-doc ol {
  font-size: 14px;
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
}

/* 链接 */
.vp-doc a {
  font-weight: var(--font-weight-medium);
}

/* 强调文本 */
.vp-doc strong {
  font-weight: var(--font-weight-semibold);
}

.vp-doc em {
  font-style: italic;
  font-weight: var(--font-weight-regular);
}
```

## 工具类

便于快速应用的 CSS 工具类：

### 字体大小工具类

```css
.text-sm { font-size: var(--font-size-caption); }    /* 12px - 说明文字 */
.text-base { font-size: var(--font-size-body); }     /* 14px - 标准正文 */
.text-xl { font-size: var(--font-size-h4); }         /* 18px - 四级标题 */
.text-2xl { font-size: var(--font-size-h3); }        /* 20px - 三级标题 */
.text-3xl { font-size: var(--font-size-h2); }        /* 24px - 二级标题 */
.text-4xl { font-size: var(--font-size-h1); }        /* 32px - 一级标题 */
```

### 字重工具类

```css
.font-light { font-weight: var(--font-weight-light); }
.font-normal { font-weight: var(--font-weight-regular); }
.font-medium { font-weight: var(--font-weight-medium); }
.font-semibold { font-weight: var(--font-weight-semibold); }
.font-bold { font-weight: var(--font-weight-bold); }
```

### 行高工具类

```css
.leading-tight { line-height: var(--line-height-tight); }
.leading-normal { line-height: var(--line-height-normal); }
.leading-relaxed { line-height: var(--line-height-relaxed); }
.leading-loose { line-height: var(--line-height-loose); }
```

### 工具类效果演示

<div style="margin: 20px 0; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #fafafa;">
  <h4 style="margin-top: 0; color: #1F2329;">工具类组合使用示例</h4>
  
  <div style="margin: 16px 0;">
    <p class="text-4xl font-bold text-primary" style="font-size: 32px; font-weight: 700; color: #1F2329; margin: 8px 0;">超大标题 - text-4xl font-bold</p>
    <p class="text-3xl font-semibold text-secondary" style="font-size: 24px; font-weight: 600; color: #646A73; margin: 8px 0;">大标题 - text-3xl font-semibold</p>
    <p class="text-2xl font-medium text-brand" style="font-size: 20px; font-weight: 500; color: #1456F0; margin: 8px 0;">中标题 - text-2xl font-medium</p>
  </div>
  
  <div style="margin: 16px 0;">
    <p class="text-base font-normal leading-relaxed" style="font-size: 14px; font-weight: 400; line-height: 1.6; margin: 8px 0;">标准正文 - text-base font-normal leading-relaxed</p>
    <p class="text-sm text-tertiary leading-normal" style="font-size: 12px; color: #8F959E; line-height: 1.4; margin: 8px 0;">小字说明 - text-sm text-tertiary leading-normal</p>
  </div>
  
  <div style="margin: 16px 0;">
    <p class="text-base text-success" style="font-size: 14px; color: #00C896; margin: 4px 0;">✓ 成功提示文字</p>
    <p class="text-base text-warning" style="font-size: 14px; color: #FF8800; margin: 4px 0;">⚠ 警告提示文字</p>
    <p class="text-base text-error" style="font-size: 14px; color: #F54A45; margin: 4px 0;">✗ 错误提示文字</p>
  </div>
</div>

## 字体颜色规范

基于飞书设计规范的颜色体系：

### 灰阶色系

```css
.text-primary { color: #1F2329; }      /* 一、二级主标题 */
.text-secondary { color: #646A73; }    /* 一级正文 */
.text-tertiary { color: #8F959E; }     /* 副标题、二级正文 */
.text-quaternary { color: #BBBFC4; }   /* Placeholder、次要信息 */
.text-disabled { color: #BBBFC4; }     /* Disable */
```

#### 灰阶色效果演示

<div style="margin: 20px 0; font-size: 14px; line-height: 1.6;">
  <p style="color: #1F2329; font-weight: 500; margin: 8px 0;">主要文字色 #1F2329 - 用于一、二级主标题，最深的文字颜色</p>
  <p style="color: #646A73; margin: 8px 0;">次要文字色 #646A73 - 用于一级正文，标准的正文颜色</p>
  <p style="color: #8F959E; margin: 8px 0;">辅助文字色 #8F959E - 用于副标题、二级正文，较浅的文字颜色</p>
  <p style="color: #BBBFC4; margin: 8px 0;">占位文字色 #BBBFC4 - 用于 Placeholder、次要信息</p>
  <p style="color: #BBBFC4; margin: 8px 0; opacity: 0.6;">禁用文字色 #BBBFC4 - 用于禁用状态的文字</p>
</div>

### 品牌色和功能色

```css
.text-brand { color: #1456F0; }        /* 主品牌色 - 链接、按钮文字 */

.text-success { color: #00C896; }      /* 成功 */
.text-warning { color: #FF8800; }      /* 警告 */
.text-error { color: #F54A45; }        /* 错误 */
.text-info { color: #1456F0; }         /* 信息 */
```

#### 品牌色和功能色效果演示

<div style="margin: 20px 0; font-size: 14px; line-height: 1.8;">
  <p style="color: #1456F0; font-weight: 500; margin: 8px 0;">品牌色 #1456F0 - 主品牌色，用于链接、按钮文字等重要交互元素</p>
  <p style="color: #00C896; margin: 8px 0;">✓ 成功色 #00C896 - 用于成功状态提示、确认操作等正面反馈</p>
  <p style="color: #FF8800; margin: 8px 0;">⚠ 警告色 #FF8800 - 用于警告提示、需要注意的信息</p>
  <p style="color: #F54A45; margin: 8px 0;">✗ 错误色 #F54A45 - 用于错误提示、失败状态等负面反馈</p>
  <p style="color: #1456F0; margin: 8px 0;">ℹ 信息色 #1456F0 - 用于一般信息提示、说明文字</p>
</div>

## 使用说明

### 基本用法

1. **标题使用**：直接使用 `h1` 到 `h6` 标签，样式会自动应用
2. **工具类使用**：通过添加对应的 CSS 类名来快速应用样式
3. **颜色应用**：使用颜色工具类来设置文本颜色

### 示例

```html
<!-- 使用工具类 -->
<p class="text-base font-medium text-primary">标准正文中等字重的主要文本</p>
<p class="text-sm text-secondary leading-relaxed">说明文字次要文本，宽松行高</p>

<!-- 直接使用标题 -->
<h1>一级标题 (32px)</h1>
<h2>二级标题 (24px)</h2>
<h3>三级标题 (20px)</h3>
<h4>四级标题 (18px)</h4>
```

## 简化说明

这套简化的字体规范将原有的 11 种字体大小精简为 **6 种核心尺寸**：

- **标题层级**：H1(32px)、H2(24px)、H3(20px)、H4(18px)
- **正文内容**：标准正文 (14px)、说明文字 (12px)

简化后的规范更易于使用和维护，同时保持了良好的视觉层次和可读性。