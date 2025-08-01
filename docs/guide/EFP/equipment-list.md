---
title: 设备清单
prev:
  text: '制作需求'
  link: '/guide/EFP/production-requirements'
next:
  text: '摄影摄像'
  link: '/guide/EFP/Photography'
---

# 多机位制作设备清单

## 概述

多机位制作是现代影视制作的重要技术手段，能够同时从多个角度记录活动内容，提供丰富的画面选择和更好的观看体验。

::: info 适用场景
本设备清单适用于：直播、会议、演出、影视拍摄、体育赛事等多种场景
:::

### 设备分类

多机位制作所需设备可分为以下几个核心类别：
- **摄影摄像设备**
- **导播切换设备**
- **音频采集设备**
- **信号传输设备**
- **监看设备**
- **录制存储设备**
- **通讯协调设备**

## 1. 基础摄像设备

### 相机/摄像机选型

::: tip 设备选择原则
- **专业摄像机**：信号输出稳定，适合长时间录制
- **微单相机**：画质优秀，成本相对较低
- **单反相机**：性价比高，但录制时间有限制
:::

| 设备类型 | 推荐型号 | 特点 | 资料下载 |
|----------|----------|------|----------|
| **Sony 微单** | α7S3, FX3 | 低光性能优秀，4K 录制 | [索尼服务支持](https://service.sony.com.cn/index.html) |
| **Sony 专业设备** | FX6, Z280, FS7 | 专业级信号输出，稳定性强 | [专业产品资料](https://www.sonystyle.com.cn/professional/downloadcenter/index.html) |
| **尼康相机** | Z9, Z7II, D850 | 色彩还原准确，操作便捷 | [产品说明书](https://downloadcenter.nikonimglib.com/zh-cn/index.html) |

### 支撑设备

| 设备类型 | 用途 | 推荐规格 |
|----------|------|----------|
| **固定机位三脚架** | 稳定支撑，精确构图 | 承重≥5kg，碳纤维材质 |
| **手持云台** | 移动拍摄，画面稳定 | 3 轴稳定，续航≥8 小时 |
| **电控云台** | 远程操控，精确控制 | 支持 PTZ 控制，网络接口 |

### 辅助设备

- **运动相机**：GoPro Hero 系列，用于特殊角度拍摄
- **无人机**：DJI Air 系列，航拍视角（需要飞行许可）

### 耗材计算

::: details 电池需求计算公式
```
总电池需求 = 单设备功耗(W) × 拍摄时长(h) ÷ 电池容量(Wh) × 安全系数(1.5)
```
**示例**：Sony FX3 功耗约 15W，拍摄 8 小时，使用 50Wh 电池
需要电池数量 = 15 × 8 ÷ 50 × 1.5 = 3.6 ≈ 4 块
:::

::: details 存储卡容量计算
```
单机存储需求(GB) = 码率(Mbps) × 拍摄时长(秒) ÷ 8 × 安全系数(1.2)
```
**示例**：4K 100Mbps 码率，拍摄 2 小时
存储需求 = 100 × 7200 ÷ 8 × 1.2 = 108GB
:::

## 2. 音频采集设备

### 麦克风系统

| 麦克风类型 | 适用场景 | 推荐型号 | 特点 |
|------------|----------|----------|------|
| **领夹麦克风** | 主持人、嘉宾 | Rode Wireless GO II | 隐蔽性好，移动自由 |
| **枪式麦克风** | 舞台表演 | Sennheiser MKE 600 | 指向性强，抗噪好 |
| **吊麦** | 影棚录制 | Audio-Technica AT4053b | 音质优秀，悬挂安装 |

### 音频处理设备

- **混音器/调音台**：Yamaha MG 系列，多路输入混合
- **音频接口**：Focusrite Scarlett 系列，AD/DA 转换
- **监听耳机**：Sony MDR-7506，专业监听标准

## 3. 导播切换设备

### 视频切换台

| 类型 | 推荐型号 | 输入通道 | 特点 |
|------|----------|----------|------|
| **硬件切换台** | ATEM Mini Pro | 4 路 HDMI | 稳定性高，操作直观 |
| **软件切换台** | OBS Studio | 无限制 | 成本低，功能丰富 |
| **专业切换台** | ATEM Constellation | 40 路输入 | 广播级，功能全面 |

### 监看设备

- **监视器**：7-17 寸专业监视器，色彩准确
- **多画面分割器**：同时监看多路信号
- **波形监视器**：监控视频技术参数

### 同步设备

::: warning 重要提醒
多机位拍摄必须确保时间同步，避免后期对齐困难
:::

- **同步信号发生器**：提供统一时钟信号
- **时码同步器**：SMPTE 时码同步
- **网络时钟**：通过网络实现精确同步

## 4. 信号传输设备

### 线材系统

| 线材类型 | 传输距离 | 适用场景 | 注意事项 |
|----------|----------|----------|----------|
| **HDMI 线** | ≤15 米 | 短距离高清传输 | 版本要匹配设备 |
| **SDI 线** | ≤100 米 | 专业长距离传输 | 需要专业设备支持 |
| **光纤线** | ≤10 公里 | 超长距离传输 | 成本高，需要转换器 |
| **网线** | ≤100 米 | IP 传输，成本低 | 需要编码器支持 |

### 信号转换设备

- **HDMI 转 SDI**：Blackmagic Micro Converter
- **SDI 转 HDMI**：适配不同设备接口
- **光纤转换器**：长距离传输必备
- **信号分配器**：一路信号分配多路输出

### 无线传输系统

::: tip 无线图传优势
- 减少线缆布设工作量
- 提高移动机位灵活性
- 适合复杂环境拍摄
:::

- **专业无线图传**：Teradek Bolt 系列
- **经济型方案**：Hollyland Mars 系列
- **手机图传**：通过 APP 实现低延迟传输

## 5. 电源供电系统

### 移动电源解决方案

| 设备类型 | 容量规格 | 适用设备 | 续航时间 |
|----------|----------|----------|----------|
| **V-Mount 电池** | 95-150Wh | 专业摄像机 | 4-8 小时 |
| **移动电源** | 20000-50000mAh | 小型设备 | 8-24 小时 |
| **便携电站** | 500-1500Wh | 多设备供电 | 全天候 |

### 电源管理设备

- **电源分配器（PDU）**：多路输出，过载保护
- **不间断电源（UPS）**：关键设备备用电源
- **电源延长线**：合理规划供电距离

::: danger 安全提醒
- 所有电源线路必须做好绝缘保护
- 避免电源线与信号线并行布设
- 准备足够的备用电源
:::

## 6. 录制存储设备

### 录制设备

| 设备类型 | 录制格式 | 通道数 | 适用场景 |
|----------|----------|--------|----------|
| **多轨录机** | ProRes/DNxHD | 4-16 路 | 专业制作 |
| **便携录机** | H.264/H.265 | 1-4 路 | 小型项目 |
| **网络录制** | 流媒体格式 | 无限制 | 直播录制 |

### 存储介质

**高速存储卡**：
- **CFexpress**：读写速度 1700MB/s，适合 8K 录制
- **SD 卡 V90**：写入速度 90MB/s，适合 4K 录制
- **SSD 硬盘**：大容量，高速读写

### 备份策略

::: tip 3-2-1 备份原则
- **3 份数据**：原始数据 + 2 份备份
- **2 种介质**：不同类型的存储设备
- **1 份异地**：防止现场意外损失
:::

- **NAS 网络存储**：自动备份，多用户访问
- **移动硬盘**：便携备份，成本较低
- **云存储**：异地备份，安全可靠

## 7. 网络直播设备（可选）

### 编码推流设备

| 设备类型 | 编码格式 | 推流协议 | 适用场景 |
|----------|----------|----------|----------|
| **硬件编码器** | H.264/H.265 | RTMP/SRT | 专业直播 |
| **软件编码器** | 多种格式 | 多种协议 | 灵活配置 |
| **一体机** | 集成编码推流 | RTMP | 简单易用 |

### 网络优化方案

**网络需求计算**：
```
上行带宽需求 = 视频码率 × 1.2（安全系数）
```

**网络保障措施**：
- **双线路备份**：主备网络切换
- **4G/5G备份**：移动网络应急
- **网络监控**：实时监测网络状态

::: warning 直播注意事项
- 提前测试网络稳定性
- 准备多种推流备案
- 设置合适的缓冲时间
:::