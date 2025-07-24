# Shumei-Tech-Docs

本项目为树莓酱团队的技术文档站点，基于 [VitePress](https://vitepress.dev/) 构建，支持 Markdown 编写、插件扩展和静态资源管理。

## 项目结构

```
Shumei-Tech-Docs/
  ├─ docs/                # 文档主目录
  │   ├─ guide/           # 指南与技术文档
  │   │   ├─ EFP/         # 多机位制作教程
  │   │   └─ digital-video-post-production/ # 数字后期制作教程
  │   ├─ about/           # 团队介绍
  │   ├─ public/          # 静态资源（字体、图片等）
  │   └─ index.md         # 首页
  ├─ package.json         # 项目依赖与脚本
  ├─ yarn.lock            # 依赖锁定文件
```

## 内容板块

本文档站点包含以下主要内容板块：

1. **多机位制作 / EFP**：现场多机位制作的流程、设备和技术指南
2. **数字后期制作**：视频编辑、调色、音频处理和特效制作的系统教程
3. **数字媒体技术**：其他相关的媒体技术教程和资源

### 数字后期制作教程

数字后期制作板块系统性地介绍视频后期制作的各个方面，主要包括：

- **基础知识**：后期制作流程、视频格式与编码、项目管理等
- **软件教程**：Premiere Pro、DaVinci Resolve等主流编辑软件教程
- **视频编辑技巧**：剪辑理论、转场效果和多机位剪辑
- **调色技术**：色彩理论和实用调色技巧
- **音频处理**：音频清理、混音和音效制作
- **特效制作**：视觉效果和动态图形设计
- **输出与发布**：导出设置优化和平台适配指南

## 快速开始

1. **安装依赖**

   如未安装 yarn，请先执行：
   ```bash
   npm install -g yarn
   ```
   然后安装项目依赖：
   ```bash
   yarn
   ```

2. **本地开发**

   ```bash
   yarn docs:dev
   ```
   访问终端输出的本地地址预览文档。

3. **构建静态站点**

   ```bash
   yarn docs:build
   ```
   构建产物输出至 `docs/.vitepress/dist` 目录。

4. **本地预览构建结果**

   ```bash
   yarn docs:preview
   ```

## 文档编写规范

为确保内容的一致性和专业性，编写文档时请遵循以下规范：

### 1. 文件结构

每个文档应包含以下结构：

```markdown
---
title: 文档标题
prev:
  text: '上一页标题'
  link: '/上一页路径'
next:
  text: '下一页标题'
  link: '/下一页路径'
---

# 文档标题

简短介绍（1-2段）

## 第一部分标题

内容...

## 第二部分标题

内容...

## 相关文档
- [相关文档1](相对路径)
- [相关文档2](相对路径)

---

总结或注释信息
```

### 2. 文件命名

- 使用小写字母
- 单词之间用连字符("-")分隔
- 避免使用空格和特殊字符
- 命名应简洁且能反映内容

例如：`color-theory.md`, `camera-layout.md`

### 3. 内容格式

#### 标题层级

- 文档标题使用一级标题(`#`)
- 主要部分使用二级标题(`##`)
- 子部分使用三级标题(`###`)
- 尽量不超过四级标题

#### 列表和表格

- 使用无序列表(`-`)描述不需要特定顺序的项目
- 使用有序列表(`1.`, `2.`等)描述步骤或需要顺序的项目
- 使用表格整理比较性或结构化信息

#### 强调和提示

- 使用**粗体**强调重要概念和关键词
- 使用VitePress的自定义容器添加提示和警告：

```markdown
::: tip 提示
这是一个提示内容
:::

::: warning 注意
这是一个警告内容
:::
```

### 4. 图片和媒体

- 图片存放在`/docs/public/images/`对应子目录下
- 图片引用使用相对路径：`![图片描述](/images/子目录/image-name.jpg)`
- 控制图片大小，优化加载速度

## 主要依赖
- [VitePress](https://vitepress.dev/)
- [@nolebase/vitepress-plugin-inline-link-preview](https://github.com/nolebase/vitepress-plugin-inline-link-preview)
- [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote)
- [markdown-it-katex](https://github.com/waylonflinn/markdown-it-katex)

## 贡献指南

如需补充或修改文档，请按以下步骤操作：

1. 确保您了解并遵循上述编写规范
2. 编辑对应的Markdown文件或创建新文件
3. 提交前仔细检查格式和内容准确性
4. 在提交说明中清晰描述您的改动
5. 提交Pull Request或直接推送到仓库（根据您的权限）

---

如有疑问请联系树莓酱团队。
 