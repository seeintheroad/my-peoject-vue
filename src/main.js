import Vue from 'vue'
import App from './App'
import {router} from './router/index'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)
axios.defaults.baseURL = 'api'
// 添加请求拦截器，在请求头中加token
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.interceptors.request.use(
  config => {
    // config.headers['Content-Type'] = 'text/plain' // 关键所在
    if (sessionStorage.getItem('Authorization')) {
      config.headers.Authorization = sessionStorage.getItem('Authorization')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  })

axios.interceptors.response.use(
  response => {
    if (response.data.code == 403) {
      window.vm.$message.error(response.data.msg);
    } else if (response.data.code == 1403) {
      window.vm.$message.error(response.data.msg)
      window.vm.$router.push('/')
    }
    return response
  }, error => {
    if (error.response.data.code == 1403) {
      window.vm.$message.error(error.response.data.msg)
      window.vm.$router.push('/').catch();
    }
    return Promise.reject(error)
  }
)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

window.vm = new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
