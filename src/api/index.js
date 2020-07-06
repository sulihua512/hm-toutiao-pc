// 导出配置好的axios提供给main.js去使用
import axios from 'axios'
import auth from '../utils/auth'

// 进行axios的配置，将来这回又很多axios相关的配置
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'

// 请求头  配置token
axios.defaults.headers.Authorization = `Bearer ${auth.getUser().token}`

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const { token } = auth.getUser()
  // 做一个严谨的判断，本地存储了token就是追加
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {
// 对请求错误做些什么
  return Promise.reject(error)
})

export default axios
