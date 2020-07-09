import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.less'
// 导入路由实例
import router from './router/index.js'
// 导入配置好的axios
// 完整路径：./api/index.js
// 简写  ./api  index.js是默认索引文件可以省略
// 使用相对路径要根据目录结构进行书写，如果目录结构一旦发生改变，线路路径的层级也会改变。
// 使用绝对路径就没问题，@ 代表src的绝对路径。补充：vue-cli下才可使用。
import axios from '@/api'

// 使用自己封装的插件
import plugin from '@/utils/plugin'
Vue.use(plugin)

// 挂载axios
Vue.prototype.$http = axios

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载路由实例到vue实例上
  router
}).$mount('#app')
