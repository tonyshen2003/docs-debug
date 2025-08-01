---
title: 导出设置基础
prev:
  text: '色彩理论基础'
  link: '/guide/digital-video-post-production/color/theory'
next:
  text: '平台导出模板'
  link: '/guide/digital-video-post-production/output/platform-optimization'
---

# 导出设置基础

视频制作的最后环节是导出与分发，正确的导出设置可以确保你的作品在保持高质量的同时适合目标平台。本文介绍导出设置的基础知识和关键参数。

## 导出前的准备工作

### 项目检查清单
- **媒体链接检查**：确认时间线上所有媒体资源都已正确链接
- **轨道状态确认**：检查视频和音频轨道是否有意外静音
- **效果渲染**：确保色彩校正和特效已渲染预览
- **音频电平监测**：检查音频电平，确保符合目标平台标准（通常峰值不超过 -6dB，最大值不超过 -3dB）
- **文本与图形检查**：最终审核字幕、标题和图形的拼写、位置和可读性

::: tip 小贴士
在最终导出前，在全屏模式下完整预览一遍项目，可以发现许多容易被忽视的问题。
:::

### 导出预设管理
- **使用内置预设**：熟悉编辑软件提供的预设模板
- **创建自定义预设**：为常用导出配置创建自定义预设，提高效率
- **预设更新**：定期更新预设以适应平台规格变化和新标准

## 常见视频格式与编解码器

### 视频容器格式
| 格式 | 扩展名 | 应用场景 | 兼容性 |
|------|--------|----------|--------|
| MP4 | .mp4 | 网络视频、社交媒体 | 极高 |
| MOV | .mov | 专业视频制作、苹果生态系统 | 高 |
| MKV | .mkv | 高质量存储、多音轨 | 中等 |
| WebM | .webm | 网页视频 | 中等（新浏览器支持良好） |

### 主要编解码器

#### H.264 (AVC)
**最佳用途**：网络视频、社交媒体平台、流媒体服务

**特点**：
- 高压缩率与良好的画质平衡
- 几乎所有设备和平台都支持
- 适合 1080p 及以下分辨率

**推荐设置**：
- 比特率：1080p 内容约 8-12 Mbps
- 编码模式：VBR，2 遍编码
- 关键帧距离：自动或 90-120 帧
- 配置文件：High
- 级别：4.1 或 4.2

#### H.265 (HEVC)
**最佳用途**：4K 内容、高质量流媒体、存储空间有限时

**特点**：
- 比 H.264 更高的压缩效率（约 30-50%）
- 支持 HDR 内容
- 需要更多处理能力编码解码

**推荐设置**：
- 比特率：4K 内容约 15-25 Mbps
- 编码模式：VBR，2 遍编码
- 配置文件：Main10（支持 HDR）

#### ProRes
**最佳用途**：专业制作、中间格式、广播内容

**特点**：
- 低压缩，高质量
- 适合进一步编辑和处理
- 文件尺寸较大

**变种选择**：
- ProRes 422 Proxy：离线编辑（轻量级）
- ProRes 422 LT：空间受限情况
- ProRes 422：标准制作环境
- ProRes 422 HQ：高质量主版本
- ProRes 4444：含 Alpha 通道需求

#### DNxHD/DNxHR
**最佳用途**：Avid 系统、专业制作、广播内容

**特点**：
- 与 Avid 编辑系统兼容性好
- 质量与 ProRes 相似
- 支持不同分辨率和比特深度

## 关键导出参数详解

### 分辨率选择

根据目标平台和用途选择合适的分辨率：

- **1080p (1920×1080)**：目前网络视频和社交媒体的标准分辨率
- **2K (2048×1080)**：电影制作标准
- **4K UHD (3840×2160)**：高端内容、电视、流媒体平台
- **8K (7680×4320)**：特殊用途、未来格式

::: warning 注意
更高的分辨率不一定意味着更好的观看体验。要考虑目标受众的设备和带宽条件。
:::

### 帧率设置

| 帧率 | 适用场景 | 特点 |
|------|---------|------|
| 24fps | 电影、纪录片 | 电影感观，自然运动模糊 |
| 25fps | 欧洲电视标准 | PAL 制式标准 |
| 30fps | 网络视频、北美电视 | 平滑动作，NTSC 标准 |
| 50/60fps | 体育、动作内容 | 更流畅的动作，可制作半速慢动作 |
| 120fps+ | 慢动作专用 | 超平滑慢动作效果 |

**重要原则**：导出帧率应与项目帧率一致，避免帧率转换导致的画面不流畅。

### 比特率设置

比特率直接影响视频质量和文件大小，需要根据内容类型和分发方式选择合适的比特率。

#### 比特率类型：
- **固定比特率 (CBR)**：每秒相同数据量，适合直播和流媒体
- **可变比特率 (VBR)**：根据内容复杂度调整数据量，适合本地播放和点播
- **恒定质量 (CQ/CRF)**：维持一致视觉质量，数据量不固定

#### H.264 编码比特率建议值：

| 分辨率 | 低动态内容 | 混合内容 | 高动态内容 |
|-------|-----------|---------|-----------|
| 720p  | 3-5 Mbps  | 5-7 Mbps | 7-10 Mbps |
| 1080p | 5-8 Mbps  | 8-12 Mbps | 12-16 Mbps |
| 4K    | 15-20 Mbps | 25-35 Mbps | 35-50 Mbps |

::: tip 提示
"低动态内容"指变化较少的画面（如讲座、访谈）；"高动态内容"指快速变化的画面（如体育、动作场景）。
:::

### 多遍编码选项
- **1 遍编码**：快速但质量较低，适合时间紧急的项目
- **2 遍编码**：推荐设置，平衡速度和质量
- **多遍编码**：特殊情况下使用，质量最高但速度最慢

## 音频导出参数

### 音频格式选择
- **AAC**：网络视频标准，良好的兼容性和压缩率
- **MP3**：老格式，兼容性好但质量较 AAC 差
- **PCM/WAV**：无损音频，适合进一步处理和专业制作

### 关键音频参数

| 参数 | 推荐设置 | 说明 |
|------|---------|------|
| **采样率** | 48kHz | 专业视频标准，提供足够的音频频率范围 |
| **位深度** | 16 位（网络）<br>24 位（专业） | 位深度决定动态范围，16 位足够大多数应用 |
| **声道** | 立体声 (2.0) | 大多数平台的标准，提供良好的空间感 |

### 音频比特率建议
- **音乐内容**：256-320 kbps（高质量音乐）
- **语音内容**：128-192 kbps（清晰对话）
- **背景音频**：96-128 kbps（简单背景音乐）

## 高级导出技术

### 导出帧序列
适用于需要进一步合成处理的场景，常见格式包括：
- **PNG**：支持 Alpha 通道，适合包含透明度的合成
- **TIFF**：高品质，无损格式
- **EXR**：专业制作，支持高动态范围

### 批量导出
- 使用 Adobe Media Encoder 或 DaVinci Resolve 的交付页面
- 设置多个输出格式同时渲染
- 利用队列功能在非工作时间进行渲染

### 代理文件导出
- 创建低分辨率版本，用于客户审核和反馈
- 添加水印保护未完成的作品
- 包含时间码以便接收精确的修改反馈

## 导出优化技巧

### 提高导出速度
- **关闭非必要应用**：释放系统资源
- **使用硬件加速**：启用 GPU 加速编码
- **优化缓存设置**：确保缓存位置有足够空间和读写速度
- **使用代理工作流**：在编辑时使用代理，导出时链接回原始素材

### 文件大小优化
- **使用两遍 VBR 编码**：平衡质量和文件大小
- **调整关键帧距离**：通常设置为 90-120 帧
- **合理设置比特率**：避免过高的比特率浪费空间
- **适当降低音频比特率**：人耳对音频质量的感知有限

### 质量控制流程
1. 在多个设备上预览导出结果（电脑、手机、平板）
2. 检查亮部和暗部细节保留情况
3. 确认音视频同步，特别是对话场景
4. 在目标平台上测试上传和播放质量

## 存档与备份策略

### 创建主文件
- 使用低压缩或无压缩格式（如 ProRes）存储主版本
- 确保包含完整分辨率和色彩信息
- 保存完整项目文件和媒体引用，以便将来编辑

### 导出文件管理
- 使用清晰的命名约定：`项目名称_版本_日期_格式`
- 将不同用途的导出文件分开存储（客户预览、社交媒体、存档等）
- 记录导出设置，便于将来参考和复制

## 相关文档
- [视频格式与编码](/guide/digital-video-post-production/basics/video-formats)
- [平台导出模板](/guide/digital-video-post-production/output/platform-optimization)
- [项目管理与素材整理](/guide/digital-video-post-production/basics/project-management)
- [Adobe Premiere Pro 教程](/guide/digital-video-post-production/software/premiere-pro)

---

掌握这些导出设置基础知识，将帮助你更有效地完成项目的最后阶段。记住，最佳的导出设置总是取决于你的具体内容和目标平台，需要不断实验和优化。

