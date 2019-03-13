import 'normalize.css/normalize.css'
import '@/assets/css/app.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// setup
import './setup/setupVueFilters'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
