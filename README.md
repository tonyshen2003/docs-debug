<div align="center">
  <img src="docs/public/images/Shumei_docs_loge.jpg" alt="数媒文档 Logo" width="300">
  
  <h1>苏州中学树莓社技术文档</h1>
  
  <p><strong>🎬 专业级数字媒体制作技术知识库 | 从理论到实践的完整学习体系</strong></p>
  
  <p>
    <a href="https://vitepress.dev/"><img src="https://img.shields.io/badge/VitePress-1.0+-646CFF?style=flat&logo=vite" alt="VitePress"></a>
    <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/Vue.js-3.0+-4FC08D?style=flat&logo=vue.js" alt="Vue.js"></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg" alt="License"></a>
    <a href="https://github.com/Digital-Media-Association-of-SHS"><img src="https://img.shields.io/github/stars/Digital-Media-Association-of-SHS/Shumei-Tech-Docs?style=social" alt="GitHub Stars"></a>
  </p>
</div>

## 🌟 项目概述

本项目是苏州中学树莓社精心打造的**专业技术文档库**，汇集了数字媒体制作领域的核心知识与实践经验。

**关于树莓社**：[树莓社](https://szzxshumei.com)即"苏州中学数字媒体艺术社"，英文名称为 Digital Media Association of Suzhou High School，创立于 2018 年 9 月。"树莓"谐音"数媒"，意为数字媒体。树莓社是一个关注于新时代数字媒体的社团，一个以影视创作为核心的艺术创作交流平台。

**核心业务**：
- 🎬 **微电影制作** - 独立制作电影短片，浸润式学习影视创作过程
- 📺 **校园电视台与新闻** - 运营校园电视台及校内新闻拍摄
- 🎞️ **纪录片创作** - 原创纪录片《苏迷》等项目，展现苏州文化魅力

我们致力于为社团成员和数字媒体爱好者提供：

- 📚 **系统化学习路径** - 从基础概念到高级应用的完整知识体系
- 🛠️ **实战操作指南** - 详细的软件使用教程和项目制作流程
- 🔬 **前沿技术探索** - AIGC、虚拟制片等新兴技术的深度解析
- 💡 **最佳实践分享** - 来自实际项目的经验总结和技巧分享

## 🏗️ 项目架构

```
📁 Shumei-Tech-Docs/
├── 📁 .trae/                    # Trae AI 配置目录
│   └── 📁 rules/                # 项目规则配置
├── 📁 docs/                     # 文档根目录
│   ├── 📁 .vitepress/           # VitePress 配置与主题
│   │   ├── 📄 config.mjs        # 站点配置文件
│   │   ├── 📁 theme/            # 自定义主题组件
│   │   └── 📁 components/       # Vue 组件
│   ├── 📁 guide/                # 核心技术指南
│   │   ├── 📁 EFP/              # 多机位制作 (Electronic Field Production)
│   │   ├── 📁 digital-video-post-production/  # 数字后期制作
│   │   ├── 📁 digital-media-tech/  # 数字媒体技术
│   │   ├── 📄 api-examples.md   # API 示例文档
│   │   └── 📄 index.md          # 指南首页
│   ├── 📁 about/                # 团队介绍
│   ├── 📁 club-library/         # 社团文库
│   ├── 📁 public/               # 静态资源
│   │   ├── 📁 images/           # 图片素材
│   │   ├── 📁 icons/            # 图标文件
│   │   ├── 📁 fonts/            # 字体文件 (22MB+ 专业字体)
│   │   └── 📄 *.png/*.webp      # Logo 和吉祥物图片
│   ├── 📄 index.md              # 文档首页
│   └── 📄 导播术语.md            # 导播专业术语词典
├── 📄 .gitignore                # Git 忽略文件配置
├── 📄 package.json              # 项目依赖配置
├── 📄 yarn.lock                 # Yarn 锁定文件
└── 📄 README.md                 # 项目说明文档
```

## 📖 内容体系

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin: 30px 0;">
  
  <div style="padding: 25px; border-radius: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
    <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">🎬 多机位制作</h3>
    <p style="opacity: 0.9; margin-bottom: 15px;"><em>Electronic Field Production</em></p>
    <ul style="list-style: none; padding: 0; margin: 0;">
      <li>📋 专业设备与系统搭建</li>
      <li>🎯 项目管理与团队协作</li>
      <li>📸 现场制作与导播技术</li>
    </ul>
  </div>
  
  <div style="padding: 25px; border-radius: 12px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
    <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">🎞️ 数字后期制作</h3>
    <p style="opacity: 0.9; margin-bottom: 15px;"><em>Post-production Workflow</em></p>
    <ul style="list-style: none; padding: 0; margin: 0;">
      <li>📊 项目管理与素材整理</li>
      <li>🛠️ DaVinci • Premiere • AE</li>
      <li>🎨 调色 • 音频 • 特效合成</li>
    </ul>
  </div>
  
  <div style="padding: 25px; border-radius: 12px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
    <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">💻 数字媒体技术</h3>
    <p style="opacity: 0.9; margin-bottom: 15px;"><em>Digital Media Technology</em></p>
    <ul style="list-style: none; padding: 0; margin: 0;">
      <li>🔧 编解码 • 存储 • 传输</li>
      <li>🚀 虚拟制片 • AIGC • 实时渲染</li>
      <li>🔒 版权保护 • 容灾备份</li>
    </ul>
  </div>
  
</div>

## ⚡ 技术栈

### 核心框架
- **🏗️ VitePress 1.6.3** - 基于 Vue.js 3 和 Vite 的现代文档框架
- **⚡ Vite** - 极速的前端构建工具，支持局域网访问
- **💚 Vue.js 3** - 渐进式 JavaScript 框架
- **📦 Yarn 1.22.22** - 快速、可靠、安全的依赖管理工具

### 功能增强插件
- **📐 KaTeX 0.16.22** - 高质量数学公式渲染 (`@mdit/plugin-katex`)
- **📊 Mermaid 10.9.1** - 流程图与思维导图支持 (`vitepress-plugin-mermaid`)
- **🧠 Mermaid Mindmap** - 思维导图扩展 (`@mermaid-js/mermaid-mindmap`)
- **🔗 内联链接预览** - 增强的链接体验 (`@nolebase/vitepress-plugin-inline-link-preview`)
- **📝 脚注支持** - 学术级引用功能 (`markdown-it-footnote`)
- **🎨 Font Awesome 7.0** - 丰富的图标库 (SVG Core + Vue 组件)
- **🔍 本地搜索** - 全文搜索功能

### 专业字体系统
- **Inter** - 现代无衬线字体 (英文主体)
- **Noto Sans SC** - Google 开源中文字体 (中文主体)
- **Noto Sans** - 多语言支持字体
- **枫叶体 (MapleMono)** - 等宽编程字体
- **方正汉真广标** - 专业中文标题字体 (22MB)
- **Adobe Fonts** - TypeKit 字体服务集成

### 开发特性
- **📝 Markdown 增强** - 支持 KaTeX、脚注、内联预览
- **🖼️ 图片懒加载** - 性能优化的图片加载
- **🌐 多语言支持** - 中英文混排优化
- **📱 响应式设计** - 移动端友好的界面
- **🎨 暗色主题** - 护眼的深色模式
- **⚡ 热重载开发** - 实时预览更改
- **🔧 自定义组件** - Vue 组件扩展支持

## 🚀 快速开始

### 环境要求
```bash
# 推荐使用最新 LTS 版本
Node.js >= 18.0.0
npm >= 8.0.0 或 yarn >= 1.22.0
```

### 克隆项目
```bash
# 克隆项目
git clone https://github.com/Digital-Media-Association-of-SHS/Shumei-Tech-Docs.git
cd Shumei-Tech-Docs
```

### 安装依赖
```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

### 本地开发
```bash
# 启动开发服务器 (支持热重载)
npm run docs:dev

# 服务器将在 http://localhost:5173 启动
# 支持局域网访问，便于移动端测试
```

### 构建部署
```bash
# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview

# 清理缓存 (解决构建问题时使用)
npm run clean
```

## 🤝 贡献指南

我们热烈欢迎社团成员和社区贡献者参与文档建设！

### 贡献流程
1. **🍴 Fork** 本仓库到你的 GitHub 账户
2. **🌿 创建分支** `git checkout -b feature/your-amazing-feature`
3. **✍️ 编写内容** 遵循我们的文档规范
4. **💾 提交更改** `git commit -m 'Add: 新增某某功能文档'`
5. **📤 推送分支** `git push origin feature/your-amazing-feature`
6. **🔄 创建 PR** 提交 Pull Request 并描述你的更改

### 文档规范
- **📝 格式**: 使用 Markdown 语法编写
- **🖼️ 图片**: 统一存放在 `docs/public/images/` 目录
- **📁 结构**: 遵循现有的目录层次结构
- **🏷️ 元数据**: 为文档添加适当的标题和描述
- **🔗 链接**: 使用相对路径引用内部资源

### 内容要求
- **准确性**: 确保技术内容的准确性和时效性
- **完整性**: 提供完整的操作步骤和示例
- **可读性**: 使用清晰的语言和合理的结构
- **实用性**: 注重实际应用价值

## 📊 项目统计

- **📄 文档数量**: 50+ 篇专业技术文档
- **🎯 覆盖领域**: 3 大核心技术方向
- **💾 项目体积**: ~25MB (包含专业字体)
- **🔧 依赖包**: 20+ 专业工具库
- **🌐 支持语言**: 中文 + 英文
- **🏛️ 社团历史**: 创立于 2018 年 9 月，7 年发展历程
- **🎬 核心项目**: 《洱沐苏中》校园电视台、《苏迷》纪录片系列

## 🔗 相关链接

### 官方渠道
- **🏠 官方网站**: [szzxshumei.com](https://szzxshumei.com)
- **📺 Bilibili**: [@苏州中学树莓社](https://space.bilibili.com/275501702)
- **💬 微信公众号**: [扫码关注](https://szzxshumei.com/wechat/)
- **💻 GitHub**: [Digital-Media-Association-of-SHS](https://github.com/Digital-Media-Association-of-SHS)

### 技术支持
- **📖 VitePress 文档**: [vitepress.dev](https://vitepress.dev/)
- **💚 Vue.js 文档**: [vuejs.org](https://vuejs.org/)
- **⚡ Vite 文档**: [vitejs.dev](https://vitejs.dev/)

## 📄 许可证

本项目采用 [Creative Commons CC BY-NC-ND 4.0 许可证](LICENSE) - 这意味着你可以分享本项目的内容，但需要署名，禁止商业用途和修改。

## 🙏 致谢

感谢所有为本项目贡献内容和代码的社团成员，以及开源社区提供的优秀工具和库。

---

<div style="text-align: center; padding: 40px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 15px; margin: 30px 0;">
  <h2 style="margin: 0 0 15px 0; font-size: 1.5em;">🎬 流动的影像传承历史，不变的温度记录人文 🎬</h2>
  <h3 style="margin: 0 0 10px 0; font-size: 1.2em;">苏州中学树莓社</h3>
  <p style="margin: 0 0 20px 0; font-size: 1em; opacity: 0.9;"><em>Digital Media Association of Suzhou High School</em></p>
  
  <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
    <img src="https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge" alt="Made with Love">
    <img src="https://img.shields.io/badge/Powered%20by-VitePress-646CFF?style=for-the-badge&logo=vite" alt="Powered by VitePress">
  </div>
</div>
 