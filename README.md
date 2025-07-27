<div align="center">
  <img src="docs/public/images/Shumei_docs_loge.jpg" alt="数媒文档 Logo" width="300">
</div>

<div align="center">
  <img src="docs/public/shumei-logo.webp" alt="数媒 Logo" width="200">
</div>

# 苏州中学树莓社技术文档

> 🎬 专业级数字媒体制作技术知识库 | 从理论到实践的完整学习体系

[![VitePress](https://img.shields.io/badge/VitePress-1.0+-646CFF?style=flat&logo=vite)](https://vitepress.dev/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.0+-4FC08D?style=flat&logo=vue.js)](https://vuejs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/Digital-Media-Association-of-SHS/Shumei-Tech-Docs?style=social)](https://github.com/Digital-Media-Association-of-SHS)

## 🌟 项目概述

本项目是苏州中学树莓社精心打造的**专业技术文档库**，汇集了数字媒体制作领域的核心知识与实践经验。

**关于树莓社**：树莓社即"苏州中学数字媒体艺术社"，英文名称为 Digital Media Association of Suzhou High School，创立于 2018 年 9 月。"树莓"谐音"数媒"，意为数字媒体。树莓社是一个关注于新时代数字媒体的社团，一个以影视创作为核心的艺术创作交流平台。

**核心业务**：
- 🎬 **微电影制作** - 独立制作电影短片，浸润式学习影视创作过程
- 📺 **校园电视台** - 运营《洱沐苏中》节目，展现苏中学子风采
- 📰 **校园新闻** - 校内活动摄影摄像，传媒中心业务
- 🎞️ **纪录片创作** - 原创纪录片《苏迷》等项目，展现苏州文化魅力

我们致力于为社团成员和数字媒体爱好者提供：

- 📚 **系统化学习路径** - 从基础概念到高级应用的完整知识体系
- 🛠️ **实战操作指南** - 详细的软件使用教程和项目制作流程
- 🔬 **前沿技术探索** - AIGC、虚拟制片等新兴技术的深度解析
- 💡 **最佳实践分享** - 来自实际项目的经验总结和技巧分享

## 🏗️ 项目架构

```
📁 Shumei-Tech-Docs/
├── 📁 docs/                     # 文档根目录
│   ├── 📁 .vitepress/           # VitePress 配置与主题
│   │   ├── 📄 config.mjs        # 站点配置文件
│   │   ├── 📁 theme/            # 自定义主题组件
│   │   └── 📁 components/       # Vue 组件
│   ├── 📁 guide/                # 核心技术指南
│   │   ├── 📁 EFP/              # 多机位制作 (Electronic Field Production)
│   │   ├── 📁 digital-video-post-production/  # 数字后期制作
│   │   └── 📁 digital-media-tech/  # 数字媒体技术
│   ├── 📁 about/                # 团队介绍
│   ├── 📁 club-library/         # 社团文库
│   └── 📁 public/               # 静态资源
│       ├── 📁 images/           # 图片素材
│       └── 📁 fonts/            # 字体文件 (22MB+ 专业字体)
├── 📄 package.json              # 项目依赖配置
└── 📄 README.md                 # 项目说明文档
```

## 📖 内容体系

### 🎬 多机位制作 / EFP (Electronic Field Production)

专业级现场制作技术，涵盖大型活动和节目的完整制作流程：

- **📋 设备与系统**
  - 专业设备清单与选型指南
  - 播出传输系统搭建
  - 信号流程设计与优化
  
- **🎯 项目管理**
  - 活动策划与前期准备
  - 现场执行与应急处理
  - 团队协作与沟通机制
  
- **📸 制作技术**
  - 多机位拍摄技巧
  - 现场导播与切换
  - 后期制作与包装

### 🎞️ 数字后期制作 / Post-production Workflow

从素材到成片的完整后期制作流程，包含业界标准工作流程：

- **📊 项目管理**
  - 素材管理与版本控制
  - 工作流程标准化
  - 团队协作最佳实践
  
- **🛠️ 软件应用**
  - **DaVinci Resolve** - 专业调色与剪辑
  - **Adobe Premiere Pro** - 视频剪辑与合成
  - **After Effects** - 视觉特效与动画
  
- **🎨 技术专项**
  - 色彩科学与调色技术
  - 音频处理与混音
  - 视觉特效与合成

### 💻 数字媒体技术 / Digital Media Technology

深入技术底层，探索数字媒体的核心原理与前沿应用：

- **🔧 基础技术**
  - 视频编解码原理与优化
  - 存储架构与性能调优
  - 网络传输协议与流媒体
  
- **🚀 前沿应用**
  - 虚拟制片技术 (Virtual Production)
  - AIGC 辅助创作工具
  - 实时渲染与交互媒体
  
- **🔒 专业领域**
  - 版权保护与 DRM 技术
  - 容灾备份解决方案
  - 行业技术规范与标准

## ⚡ 技术栈

### 核心框架
- **🏗️ VitePress** - 基于 Vue.js 3 和 Vite 的现代文档框架
- **⚡ Vite** - 极速的前端构建工具
- **💚 Vue.js 3** - 渐进式 JavaScript 框架

### 功能增强
- **📐 KaTeX** - 高质量数学公式渲染
- **📊 Mermaid** - 流程图与思维导图支持
- **🎨 Font Awesome** - 丰富的图标库
- **🔍 本地搜索** - 全文搜索功能

### 专业字体
- **Inter** - 现代无衬线字体 (英文)
- **Noto Sans SC** - Google 开源中文字体
- **枫叶体 (MapleMono)** - 等宽编程字体
- **方正汉真广标** - 专业中文标题字体 (22MB)

### 开发工具
- **📝 Markdown** - 文档编写格式
- **🔗 内联链接预览** - 增强的链接体验
- **📝 脚注支持** - 学术级引用功能
- **🖼️ 懒加载** - 图片性能优化

## 🚀 快速开始

### 环境要求
```bash
# 推荐使用最新 LTS 版本
Node.js >= 18.0.0
npm >= 8.0.0 或 yarn >= 1.22.0
```

### 克隆项目
```bash
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

本项目采用 [MIT 许可证](LICENSE) - 这意味着你可以自由地使用、修改和分发本项目的代码。

## 🙏 致谢

感谢所有为本项目贡献内容和代码的社团成员，以及开源社区提供的优秀工具和库。

---

<div align="center">
  <h3>🎬 流动的影像传承历史，不变的温度记录人文 🎬</h3>
  <p><strong>苏州中学树莓社</strong></p>
  <p><em>Digital Media Association of Suzhou High School</em></p>
  
  <br>
  
  <img src="https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge" alt="Made with Love">
  <img src="https://img.shields.io/badge/Powered%20by-VitePress-646CFF?style=for-the-badge&logo=vite" alt="Powered by VitePress">
</div>
 