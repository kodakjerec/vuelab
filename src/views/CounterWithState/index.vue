<template>
    <div class="counterWithState">
        <h1>Counter With State</h1>
        <p>Counter: {{ $store.state.count }}</p>
        <!-- <p>Counter: {{ countFromStore }}</p> -->
        <div>
            <button @click="decrement">減一</button>
            <button @click="increment">加一</button>
        </div>
    </div>
</template>

<script>

import store from '@/store/index.js'

export default {
  name: 'CounterWithState',
  data: function () {
    return {

    }
  },
  // computed: {
  //  countFromStore () {
  //    return store.state.count
  //  }
  // },
  methods: {
    increment: function () {
      // console.log('increment in view')
      store.dispatch('increment')// 前往store的actions
    },
    decrement: function () {
      // console.log('decrement in view')
      store.dispatch('decrement')// 前往store的actions
    }
  }
}
</script>
