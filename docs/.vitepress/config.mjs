import { defineConfig } from "vitepress";
import { katex } from '@mdit/plugin-katex'
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'
import footnote from 'markdown-it-footnote'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config

export default withMermaid(defineConfig({
  title: "树莓技术库",
  description: "流动的影像传承历史，不变的温度记录人文",

  base: "/",
  lang: "zh-CN",
  cleanUrls: true, // 从 URL 中删除 .html 后缀
  lastUpdated: true, // 时间戳
  appearance: "dark",
  sitemap: { hostname: "https://docs.szzxshumei.com/" },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/shumei-logo.webp',
    footer: {
      copyright:
        "Copyright ©  2018-2025 苏州中学树莓社 Digital Media Association of SHS. All Rights Reserved.",
    },


    nav: [
      // 顶部菜单
      { text: "Home", link: "/" },
      { text: "技术文档", link: "/guide/" },
      { text: "社团文库", link: "/club-library/" },
      { text: "O.S.", link: "https://szzxshumei.com/" },
      { text: "WebDrive", link: "https://webdrive.szzxshumei.com/" },
      { text: "云协作", link: "https://hcn3kru1zxon.feishu.cn/drive/home/" },
        { component: "FontSwitcher" },
      ],

    sidebar: {
      // 技术文档侧边栏
      '/guide/': [
        {text: "多机位制作 / EFP",
        collapsed: false,
        items: [
          {
            text: "前期准备",
            collapsed: true,
            items: [
              { text: "多机位制作策划与准备", link: "/guide/EFP/event-planning/" },
              { text: "岗位分工", link: "/guide/EFP/production-requirements/" },
              { text: "多机位制作设备清单", link: "/guide/EFP/equipment-list/" },
            ],
          },
          {
            text: "现场制作",
            collapsed: true,
            items: [
              { text: "现场系统搭建", link: "/guide/EFP/system-setup/" },
              { text: "摄影摄像", link: "/guide/EFP/Photography/" },
              { text: "机位设计", link: "/guide/EFP/camera-layout/" },
              { text: "导播切换技术指南", link: "/guide/EFP/live-switching/" },
              { text: "收声方案", link: "/guide/EFP/audio-capture-plan/" },
            ],
          },
          {
            text: "后期参考",
            collapsed: true,
            items: [
              { text: "后期制作", link: "/guide/EFP/post-production/" },
              { text: "活动案例", link: "/guide/EFP/EFP-examples/" },
              { text: "参考资料", link: "/guide/EFP/reference-materials/" },
            ],
          },
        ],
      },

      {
        text: "数字后期制作 / Post-production Workflow",
        collapsed: false,
        items: [
          {
            text: "基础知识",
            collapsed: true,
            items: [
              { text: "后期制作流程概述", link: "/guide/digital-video-post-production/basics/workflow-overview" },
              { text: "视频格式与编码", link: "/guide/digital-video-post-production/basics/video-formats" },
              { text: "项目管理与素材整理", link: "/guide/digital-video-post-production/basics/project-management" },
            ],
          },
          {
            text: "软件教程",
            collapsed: true,
            items: [
              { text: "Adobe Premiere Pro", link: "/guide/digital-video-post-production/software/premiere-pro" },
              { text: "DaVinci Resolve", link: "/guide/digital-video-post-production/software/davinci-resolve" },
              { text: "After Effects (即将推出)", link: "#" },
              { text: "Audition (即将推出)", link: "#" },
            ],
          },
          {
            text: "视频编辑技巧",
            collapsed: true,
            items: [
              { text: "剪辑理论与节奏", link: "/guide/digital-video-post-production/editing/theory" },
              { text: "转场与效果 (即将推出)", link: "#" },
              { text: "多机位剪辑 (即将推出)", link: "#" },
            ],
          },
          {
            text: "调色技术",
            collapsed: true,
            items: [
              { text: "色彩理论基础", link: "/guide/digital-video-post-production/color/theory" },
              { text: "LUT与预设使用 (即将推出)", link: "#" },
              { text: "场景匹配与风格化 (即将推出)", link: "#" },
            ],
          },
          {
            text: "音频处理",
            collapsed: true,
            items: [
              { text: "音频清理与修复", link: "/guide/digital-video-post-production/audio/cleanup" },
              { text: "混音基础 (即将推出)", link: "#" },
              { text: "音效与配乐 (即将推出)", link: "#" },
            ],
          },
          {
            text: "特效制作 (即将推出)",
            collapsed: true,
            items: [
              { text: "基础视觉效果", link: "#" },
              { text: "动态图形设计", link: "#" },
              { text: "合成技术", link: "#" },
            ],
          },
          {
            text: "输出与发布",
            collapsed: true,
            items: [
              { text: "导出设置基础", link: "/guide/digital-video-post-production/output/export-settings" },
              { text: "平台导出模板", link: "/guide/digital-video-post-production/output/platform-optimization" },
            ],
          },
        ],
      },

      {
        text: "数字媒体技术 / Digital-Media-Tech",
        collapsed: false,
        items: [
          {
            text: "一、数字媒体底层逻辑",
            collapsed: true,
            items: [
              { text: "信号数字化原理", link: "/guide/digital-media-tech/01-principles-of-signal-digitization" },
              { text: "色彩科学核心", link: "/guide/digital-media-tech/02-core-color-science" },
              { text: "时间码与同步技术", link: "/guide/digital-media-tech/03-timecode-and-synchronization-technologies" }
            ]
          },
          {
            text: "二、硬件与技术适配",
            collapsed: true,
            items: [
              { text: "存储架构与性能", link: "/guide/digital-media-tech/04-storage-architecture-and-performance" },
              { text: "显示技术与校色", link: "/guide/digital-media-tech/05-display-technologies-and-calibration" },
              { text: "采集设备技术解析", link: "/guide/digital-media-tech/06-capture-device-technology-analysis" }
            ]
          },
          {
            text: "三、编码与流传输技术",
            collapsed: true,
            items: [
              { text: "视频编码算法", link: "/guide/digital-media-tech/07-video-encoding-algorithms" },
              { text: "容器格式设计", link: "/guide/digital-media-tech/08-container-format-design" },
              { text: "流媒体传输体系", link: "/guide/digital-media-tech/09-streaming-media-transmission-systems" }
            ]
          },
          {
            text: "四、交互媒体技术应用",
            collapsed: true,
            items: [
              { text: "互动视频技术", link: "/guide/digital-media-tech/10-interactive-video-technologies" },
              { text: "AR/VR技术架构", link: "/guide/digital-media-tech/11-ar-vr-technical-architecture" },
              { text: "虚拟制片技术", link: "/guide/digital-media-tech/12-virtual-production-technologies" }
            ]
          },
          {
            text: "五、AI融合媒体生产",
            collapsed: true,
            items: [
              { text: "AIGC辅助技术", link: "/guide/digital-media-tech/13-aigc-assistant-technologies" },
              { text: "修复与增强技术", link: "/guide/digital-media-tech/14-restoration-and-enhancement-technologies" },
              { text: "虚拟人技术体系", link: "/guide/digital-media-tech/15-virtual-human-technology-systems" }
            ]
          },
          {
            text: "六、技术标准与安全保障",
            collapsed: true,
            items: [
              { text: "行业技术规范", link: "/guide/digital-media-tech/16-industry-technical-standards" },
              { text: "版权与加密技术", link: "/guide/digital-media-tech/17-copyright-and-encryption-technologies" },
              { text: "容灾与备份方案", link: "/guide/digital-media-tech/18-disaster-recovery-and-backup-solutions" }
            ]
          }
        ],
      },

      {
        text: "About",
        items: [{ text: "Our Team", link: "/about/team" }],
      },

      /*{
        text: "Template",
        items: [
          { text: "Runtime API Examples", link: "/guide/api-examples" },
        ],
      },*/
      ],

      // 社团文库侧边栏
      '/club-library/': [
        {
          text: "社团文库",
          collapsed: false,
          items: [
            { text: "总览", link: "/club-library/" },
          ],
        },
        {
          text: "设计规范",
          collapsed: false,
          items: [
            { text: "字体规范", link: "/club-library/design-specs/font-specification" },
            { text: "Markdown 示例", link: "/club-library/design-specs/markdown-examples" },
          ],
        },
      ],
     },

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="400" viewBox="0 0 512 512"><path fill="currentColor" d="M488.6 104.1c16.7 18.1 24.4 39.7 23.3 65.7v202.4c-.4 26.4-9.2 48.1-26.5 65.1c-17.2 17-39.1 25.9-65.5 26.7H92.02c-26.45-.8-48.21-9.8-65.28-27.2C9.682 419.4.767 396.5 0 368.2V169.8c.767-26 9.682-47.6 26.74-65.7C43.81 87.75 65.57 78.77 92.02 78h29.38L96.05 52.19c-5.75-5.73-8.63-13-8.63-21.79c0-8.8 2.88-16.06 8.63-21.797C101.8 2.868 109.1 0 117.9 0q13.2 0 21.9 8.603L213.1 78h88l74.5-69.397C381.7 2.868 389.2 0 398 0q13.2 0 21.9 8.603c5.7 5.737 8.6 12.997 8.6 21.797c0 8.79-2.9 16.06-8.6 21.79L394.6 78h29.3c26.4.77 48 9.75 64.7 26.1m-38.8 69.7c-.4-9.6-3.7-17.4-10.7-23.5c-5.2-6.1-14-9.4-22.7-9.8H96.05c-9.59.4-17.45 3.7-23.58 9.8c-6.14 6.1-9.4 13.9-9.78 23.5v194.4c0 9.2 3.26 17 9.78 23.5s14.38 9.8 23.58 9.8H416.4c9.2 0 17-3.3 23.3-9.8s9.7-14.3 10.1-23.5zm-264.3 42.7c6.3 6.3 9.7 14.1 10.1 23.2V273c-.4 9.2-3.7 16.9-9.8 23.2c-6.2 6.3-14 9.5-23.6 9.5s-17.5-3.2-23.6-9.5s-9.4-14-9.8-23.2v-33.3c.4-9.1 3.8-16.9 10.1-23.2s13.2-9.6 23.3-10c9.2.4 17 3.7 23.3 10m191.5 0c6.3 6.3 9.7 14.1 10.1 23.2V273c-.4 9.2-3.7 16.9-9.8 23.2s-14 9.5-23.6 9.5s-17.4-3.2-23.6-9.5c-7-6.3-9.4-14-9.7-23.2v-33.3c.3-9.1 3.7-16.9 10-23.2s14.1-9.6 23.3-10c9.2.4 17 3.7 23.3 10"/></svg>',
        },
        link: "https://space.bilibili.com/275501702",
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M31.385 16.995c-.807-1.839-2.344-3.297-4.12-4.198c-3.141-1.589-7.042-1.583-10.172.042c-2.177 1.115-3.99 3.115-4.505 5.547c-.427 1.792-.047 3.719.906 5.281c1.417 2.349 3.974 3.849 6.63 4.328c1.922.391 3.911.161 5.781-.375c1.125.432 2.125 1.135 3.214 1.661a67 67 0 0 0-.906-2.807c1.224-.865 2.328-1.948 2.995-3.302c.99-1.885 1.052-4.229.177-6.177M18.156 4.375c-3.328-1.87-7.469-2.151-11.047-.859c-2.354.849-4.479 2.422-5.797 4.563C.119 10.011-.329 12.423.249 14.631c.573 2.453 2.281 4.51 4.349 5.885a106 106 0 0 0-1.141 3.406c1.297-.677 2.599-1.391 3.901-2.078c1.557.5 3.219.745 4.88.688c-.443-1.255-.542-2.62-.339-3.932c.297-1.828 1.297-3.5 2.656-4.74c2.302-2.156 5.563-3.063 8.661-2.844c-.583-2.844-2.583-5.25-5.099-6.641zm2.313 13.318c-.281.87-1.542 1.13-2.156.469c-.672-.609-.411-1.891.474-2.161c.979-.411 2.109.714 1.682 1.693zm6.39.125c-.339.781-1.521.964-2.099.359c-.281-.255-.359-.641-.458-.974c.135-.609.557-1.245 1.24-1.271c.938-.13 1.781 1.031 1.297 1.885zm-9.541-8.604c.01 1.281-1.698 2.078-2.656 1.208c-1-.714-.714-2.448.453-2.807c1.047-.417 2.286.458 2.203 1.583zm-8.078.322c-.229 1.115-1.719 1.651-2.594.906c-1.01-.714-.729-2.484.458-2.844c1.167-.448 2.49.734 2.135 1.938z"/></svg>',
        },
        link: "https://szzxshumei.com/wechat/",
      },
      {
        icon: "github",
        link: "https://github.com/Digital-Media-Association-of-SHS",
      },
    ],
    search: {
      provider: "local",
    },
    
    // 自定义右侧大纲标题
    outline: {
      label: '本页目录'
    },
    
    // 自定义移动端菜单按钮文本
    sidebarMenuLabel: '目录',
  },

  /*
  transformHead({ assets }) {
    // 相应地调整正则表达式以匹配字体
    const myFontFile = assets.find(file => /font-name\.\w+\.woff2/)
    if (myFontFile) {
      return [
        [
          'link',
          {
            rel: 'preload',
            href: myFontFile,
            as: 'font',
            type: 'font/woff2',
            crossorigin: ''
          }
        ]
      ]
    }
  },
  */

  head: [
    ["link", { rel: "icon", href: "/shumei-logo.webp" }],
    ["link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" }],
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
       [
         "link",
         { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
       ],
       [
         "link",
         {
           rel: "stylesheet",
           href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans+SC:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap",
         },
       ],
    [
      "link",
      { rel: "stylesheet", href: "https://use.typekit.net/ytd1lqa.css" },
    ],
  ],

  markdown: {
    config: (md) => {
      md.use(katex, {
        strict: false,
        throwOnError: false,
        errorColor: '#cc0000',
        displayMode: false,
        output: 'html'
      });
      md.use(InlineLinkPreviewElementTransform);
      md.use(footnote);
      // Mermaid 由 vitepress-plugin-mermaid 自动处理
    },
    image: {
      lazyLoading: true
    }
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  },
  
  vite: { 
    server: {
      host: '0.0.0.0', // 允许局域网访问
      port: 5173
    },
    optimizeDeps: { 
      exclude: [ 
        '@nolebase/vitepress-plugin-inline-link-preview/client',
        'vitepress'
      ], 
    }, 
    ssr: { 
      noExternal: [ 
        // If there are other packages that need to be processed by Vite, you can add them here. //
        '@nolebase/*'
      ], 
    }, 
  }
}));

const customElements = [
  'collapsible-card',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml'
]
