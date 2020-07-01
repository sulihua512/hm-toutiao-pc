// 导入路由
import VueRouter from 'vue-router'
// 导入vue
import Vue from 'vue'
// 准备路由配置对象
import Login from '../views/Login.vue'

// 注册路由
Vue.use(VueRouter)

// 定义路由规则
const routes = [
  // 登录
  { path: '/login', component: Login }
]

// 初始化路由实例
const router = new VueRouter({ routes })

// 导出路由实例
export default router
