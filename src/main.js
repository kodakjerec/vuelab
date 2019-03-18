import 'normalize.css/normalize.css'
import '@/assets/css/app.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// GinaAdd-VeeValidate
import VeeValidate, { Validator } from 'vee-validate'
import zh_TW from 'vee-validate/dist/locale/zh_TW'
// GinaAdd-axios(ajax)
import axios from 'axios'

// setup
import './setup/setupVueFilters'

Vue.config.productionTip = false

// GinaAdd-VeeValidate
Vue.use(VeeValidate)
Validator.localize('zh_TW', zh_TW)
const dict = {
  zh_TW: {
    messages: {
      required: '此欄位為必填欄位。',
      max: '輸入格式錯誤，請重新輸入。',
      numeric: '輸入格式錯誤，請重新輸入。',
      regex: '輸入格式錯誤，請重新輸入。'
    }
  }
}
Validator.localize(dict)

// GinaAdd-axios(ajax)
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
