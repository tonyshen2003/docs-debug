import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTiktok, faVimeoV, faBilibili } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 将需要的图标添加到图标库
library.add(faTiktok, faVimeoV, faBilibili)

export default {
  enhanceApp({ app }) {
    // 注册 FontAwesomeIcon 组件
    app.component('font-awesome-icon', FontAwesomeIcon)
  }
}
