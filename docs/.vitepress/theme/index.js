// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme-without-fonts'
import CollapsibleCard from '../components/CollapsibleCard.vue'
import FontSwitcher from '../components/FontSwitcher.vue'
import './style.css'

import { NolebaseInlineLinkPreviewPlugin } from '@nolebase/vitepress-plugin-inline-link-preview/client'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'

// Font Awesome 导入
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTiktok, faVimeoV, faBilibili } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './fonts.css'
import './customize.css'

// 添加图标到库
library.add(faTiktok, faVimeoV, faBilibili)

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 注册所有组件和插件
    app.use(NolebaseInlineLinkPreviewPlugin)
    app.component('CollapsibleCard', CollapsibleCard)
    app.component('FontSwitcher', FontSwitcher)
    app.component('FontAwesomeIcon', FontAwesomeIcon) // 添加这行
  }
}
