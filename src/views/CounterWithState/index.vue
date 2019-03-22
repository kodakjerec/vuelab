<template>
    <div class="counterWithState">
        <h1>Counter With State</h1>
        <!-- <p>Counter: {{ $store.state.count }}</p> -->
        <p>Counter: {{ ansState }}</p>
        <div>
            <button @click="decrement">減一</button>
            <button @click="increment">加一</button>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CounterWithState',
  data: function () {
    return {

    }
  },
  computed: {
    ...mapGetters(['ansState']) // 對應到store的getter，要取名字的話就要用{}...mapGetters({ xxx :'ansState'})
  },
  methods: {
    // console.log('increment in view')
    ...mapActions(['increment', 'decrement']) // 前往store的actions
  }
}
</script>
