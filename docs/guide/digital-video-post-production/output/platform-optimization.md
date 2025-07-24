---
title: 平台导出模板
prev:
  text: '导出设置基础'
  link: '/guide/digital-video-post-production/output/export-settings'
---

# 平台导出模板

不同的视频平台对上传内容有各自的技术要求和最佳实践。本文提供主流平台的优化导出模板，帮助你的内容在各平台获得最佳效果。

## 为什么需要平台特定的导出设置？

每个视频平台都有自己的转码系统、播放器技术和带宽考虑。使用平台优化的导出设置可以：

- **减少平台二次转码**导致的质量损失
- **加快上传和处理时间**
- **提高观众的观看体验**
- **确保内容在各种设备上正常播放**

::: tip 实用建议
将这些导出模板保存在你的编辑软件中，可以显著提高工作效率。
:::

## 社交媒体平台

<CollapsibleCard>
  <template #icon><i class="fab fa-youtube platform-icon"></i></template>
  <template #title>YouTube</template>

#### 推荐设置
- **容器格式**：MP4
- **视频编码**：H.264（标准内容）/ H.265（HDR 内容）
- **分辨率**：1080p (1920×1080)，4K (3840×2160)
- **帧率**：与源材料匹配（最高 60fps）
- **比特率**：
  - 1080p SDR：8-12 Mbps
  - 4K SDR：35-45 Mbps
  - HDR 内容：提高 20-30%
- **音频编码**：AAC-LC
- **音频比特率**：384 kbps
- **采样率**：48 kHz
- **音频声道**：立体声

#### 特殊考虑
- 使用双遍 VBR 编码获得最佳质量
- 上传高分辨率可提高推荐算法评分
- 最大支持上传 12 小时，文件大小不限（已验证账户）
- 支持章节标记、字幕和端点卡片

</CollapsibleCard>

<CollapsibleCard>
  <template #icon><i class="fab fa-instagram platform-icon"></i></template>
  <template #title>Instagram</template>

#### Feed 视频
- **容器格式**：MP4
- **视频编码**：H.264
- **分辨率**：
  - 横屏：1080×608
  - 方形：1080×1080
  - 竖屏：1080×1350
- **帧率**：30fps（推荐）
- **比特率**：3.5-5 Mbps
- **最大文件大小**：4GB
- **最大时长**：60 秒
- **音频编码**：AAC，128kbps

#### Reels/Stories
- **分辨率**：1080×1920（9:16 垂直视频）
- **最大时长**：
  - Stories：15 秒/片段
  - Reels：90 秒
- **其他参数同 Feed 视频**

#### 特殊考虑
- Instagram 会重新压缩视频，适当提高上传质量
- 避免使用颜色过渡渐变，容易产生色带
- 为重要内容预留安全区域，避免被界面元素遮挡

[Instagram 视频规格](https://help.instagram.com/1631821640426723)
</CollapsibleCard>

<CollapsibleCard>
  <template #icon><i class="fab fa-tiktok platform-icon"></i></template>
  <template #title>TikTok</template>

#### 推荐设置
- **容器格式**：MP4
- **视频编码**：H.264
- **分辨率**：竖屏 1080×1920
- **帧率**：30fps 或 60fps
- **比特率**：4 - 8 Mbps
- **音频编码**：AAC
- **音频比特率**：128 kbps
- **采样率**：44.1 kHz 或 48 kHz

#### 特殊考虑
- 竖屏视频优先推荐
- 短视频内容（15 - 60 秒）更易传播
- 支持特效和音乐库
</CollapsibleCard>

<CollapsibleCard>
  <template #icon><i class="fab fa-vimeo-v platform-icon"></i></template>
  <template #title>Vimeo</template>

#### 推荐设置
- **容器格式**：MP4
- **视频编码**：H.264
- **分辨率**：
  - 标准账户：1080p
  - 专业账户：最高 8K
- **帧率**：与源材料匹配（最高 60fps）
- **比特率**：
  - 1080p：10 - 20 Mbps
  - 4K：30 - 60 Mbps
- **音频编码**：AAC - LC
- **音频比特率**：320 kbps
- **采样率**：48 kHz
#### 特殊考虑
- Vimeo 使用高质量转码，建议上传高比特率视频
- 支持 ProRes、DNxHR 等专业编解码器上传
- 提供详细的隐私和分享控制
- 支持自定义播放器和嵌入选项

[Vimeo 编码指南](https://vimeo.com/help/compression)
</CollapsibleCard>


<CollapsibleCard>


<template #icon><i class="platform-icon" style="font-style:normal;">B 站</i></template>
<template #title>Bilibili</template>

#### 推荐设置
- **容器格式**：MP4/FLV
- **视频编码**：H.264
- **分辨率**：
  - 推荐：1080p (1920×1080)
  - 最高支持：4K
- **帧率**：24fps 或 30fps
- **比特率**：
  - 1080p：6 - 12 Mbps
  - 4K：15 - 30 Mbps
- **音频编码**：AAC
- **音频比特率**：192 kbps
- **最大文件大小**：8GB（普通用户）

#### 特殊考虑
- 支持分 P 上传
- 弹幕文化下，避免画面过于复杂
- 保持字幕清晰可见
- 视频开头的前 5 秒尤为重要

[Bilibili 创作中心](https://member.bilibili.com/platform/upload/video/frame)
</CollapsibleCard>

## 企业与教育平台

<CollapsibleCard>
<template #icon><i class="fab fa-microsoft platform-icon"></i></template>
<template #title>Microsoft Stream / SharePoint</template>

#### 推荐设置
- **容器格式**：MP4
- **视频编码**：H.264
- **分辨率**：1080p（最高）
- **帧率**：30fps
- **比特率**：6 - 10 Mbps
- **音频编码**：AAC
- **音频比特率**：128 kbps
- **最大文件大小**：10GB
- **最大时长**：4 小时

#### 特殊考虑
- 企业网络常有带宽限制，考虑创建多个质量版本
- 加入清晰字幕提高可访问性
- 可利用自动转写功能
- 考虑内容权限设置

[Microsoft Stream 指南](https://support.microsoft.com/zh-cn/office/upload-a-video-to-microsoft-stream-4c1370cb-7c5b-4c07-a4e5-b4c2c23c7d84)
</CollapsibleCard>

<CollapsibleCard>
<template #icon><i class="fas fa-video platform-icon"></i></template>
<template #title>Zoom Webinar / Meetings</template>

#### 视频分享设置
- **容器格式**：MP4
- **视频编码**：H.264
- **分辨率**：720p 或 1080p
- **帧率**：30fps
- **比特率**：3-6 Mbps
- **音频编码**：AAC
- **音频比特率**：128 kbps

#### 特殊考虑
- Zoom 会自动调整质量以适应网络条件
- 优化文字可读性，使用大字体
- 避免快速动画和复杂转场
- 考虑参会者可能使用的各种设备大小

[Zoom 视频分享最佳实践](https://support.zoom.us/hc/en-us/articles/202000163-Sharing-Computer-Sound-During-Screen-Sharing)
</CollapsibleCard>

## 广播与专业分发

<CollapsibleCard>
<template #icon><i class="fas fa-tv platform-icon"></i></template>
<template #title>广播电视标准</template>

#### 标准交付规格
- **容器格式**：MXF / MOV
- **视频编码**：
  - ProRes 422 HQ
  - DNxHD 145/220
  - XDCAM HD422
- **分辨率**：
  - HD：1920×1080
  - UHD：3840×2160
- **帧率**：
  - 25fps（欧洲 PAL）
  - 29.97fps（美国 NTSC）
- **音频编码**：PCM
- **音频规格**：
  - 48kHz，24 位
  - 通常要求多轨（分离对白、音乐、效果）

#### 特殊考虑
- 严格遵循各广播机构的技术交付规范
- 通常需要特定的音频响度标准（如 EBU R128、ATSC A/85）
- 需要满足特定的色彩空间要求（Rec.709/Rec.2020）
- 可能需要提供无字幕的干净版本

[EBU 交付规范](https://tech.ebu.ch/publications)
</CollapsibleCard>

<CollapsibleCard>
<template #icon><i class="fas fa-film platform-icon"></i></template>
<template #title>DCP（数字电影包）</template>

#### 电影院 DCP 标准
- **容器格式**：MXF（SMPTE 或 InterOp）
- **视频编码**：JPEG 2000
- **分辨率**：
  - 2K：2048×1080
  - 4K：4096×2160
- **帧率**：24fps（标准）
- **色彩空间**：XYZ
- **比特率**：约 250 Mbps
- **音频编码**：PCM，24 位，48kHz 或 96kHz
- **音频声道**：5.1 或 7.1 环绕声

#### 特殊考虑
- 需要专业 DCP 创建软件或服务
- 每个影院可能需要特定的 KDM（密钥传递消息）
- 建议在真实影院环境测试
- 可能需要不同的字幕版本

[DCP 创建指南](https://www.dcinematools.com)
</CollapsibleCard>

## 导出模板使用指南

### 在 Premiere Pro 中创建导出预设

1. 打开导出设置对话框（文件 > 导出 > 媒体）
2. 配置所需的导出参数
3. 点击预设旁边的保存图标
4. 命名预设（建议包含平台名称和主要参数）
5. 选择预设保存位置

### 在 DaVinci Resolve 中创建交付预设

1. 切换到"交付"页面
2. 在"渲染设置"中配置所需参数
3. 点击"添加到渲染队列"旁边的下拉菜单
4. 选择"保存为新预设"
5. 命名并保存预设

### 批量处理多平台导出

为提高工作效率，建议使用批量导出工具：

- **Adobe Media Encoder**：设置多个输出预设并同时处理
- **DaVinci Resolve 交付页面**：添加多个渲染作业到队列
- **FFmpeg 脚本**：对于高级用户，可创建自动处理多个预设的脚本

## 跟踪平台规格变化

视频平台的技术规格经常更新，建议：

1. 定期检查平台官方文档
2. 关注平台创作者社区
3. 测试新的编码技术和设置
4. 更新你的导出预设库

## 相关文档
- [导出设置基础](/guide/digital-video-post-production/output/export-settings)
- [视频格式与编码](/guide/digital-video-post-production/basics/video-formats)
- [Adobe Premiere Pro 教程](/guide/digital-video-post-production/software/premiere-pro)
- [DaVinci Resolve 教程](/guide/digital-video-post-production/software/davinci-resolve)

---
本文提供的导出模板仅作为起点，最佳设置可能因具体内容和目标平台的更新而变化。始终进行测试并收集反馈，以不断优化你的导出设置。