<template>
    <div id="app">
        <p>總數：{{ total }}</p>
        <testChild v-model="total" ></testChild>
        <button @click="handeleReduce">-1</button>
    </div>
</template>

<script>

import TestChild from '@/components/Test/index.vue'

export default {
  name: 'testFather',
  components: {
    TestChild
  },
  data: function () {
    return {
      total: 0
    }
  },
  methods: {
    handeleReduce: function () {
      this.total--
    }
  }
}
</script>
