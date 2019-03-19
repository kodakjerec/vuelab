import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      // console.log('increment in mutations')
      state.count++
    },
    decrement (state) {
      // console.log('decrement in mutations')
      state.count--
    }
  },
  actions: {
    increment (context) {
      // console.log('increment in action')
      context.commit('increment')// 前往store的mutations
    },
    decrement (context) {
      // console.log('decrement in action')
      context.commit('decrement')// 前往store的mutations
    }
  }
})
