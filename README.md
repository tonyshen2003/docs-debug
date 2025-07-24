# Shumei-Tech-Docs

本项目为树莓酱团队的技术文档站点，基于 [VitePress](https://vitepress.dev/) 构建，支持 Markdown 编写、插件扩展和静态资源管理。

## 项目结构

```
Shumei-Tech-Docs/
  ├─ docs/                # 文档主目录
  │   ├─ guide/           # 指南与技术文档
  │   ├─ about/           # 团队介绍
  │   ├─ public/          # 静态资源（字体、图片等）
  │   └─ index.md         # 首页
  ├─ package.json         # 项目依赖与脚本
  ├─ yarn.lock            # 依赖锁定文件
```

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

## 主要依赖
- [VitePress](https://vitepress.dev/)
- [@nolebase/vitepress-plugin-inline-link-preview](https://github.com/nolebase/vitepress-plugin-inline-link-preview)
- [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote)
- [markdown-it-katex](https://github.com/waylonflinn/markdown-it-katex)

## 贡献指南
如需补充或修改文档，请直接编辑对应的 Markdown 文件，或提交 Pull Request。

---

如有疑问请联系树莓酱团队。 