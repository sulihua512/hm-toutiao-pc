// 导入路由
import VueRouter from 'vue-router'
// 导入vue
import Vue from 'vue'
// 准备路由配置对象
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'

// 注册路由
Vue.use(VueRouter)

// 定义路由规则
const routes = [
  // 登录
  { path: '/login', component: Login },
  // 首页
  {
    path: '/',
    component: Home,
    // 二级路由规则
    children: [
      // 欢迎页面
      { path: '/', component: Welcome }
    ]
  }
]

// 初始化路由实例
const router = new VueRouter({ routes })

// 导出路由实例
export default router
