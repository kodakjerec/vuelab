<template>
  <div class="counter">
    <h1>Counter</h1>
    <p>Counter:{{countNum}}</p>
    <div>
        <button @click="countNum -= 1">減一</button>
        <button @click="countNum += 1">加一</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.counter span {
  text-align: center;
}
</style>

<script>
export default {
  name: 'Counter',
  data () {
    return {
      countNum: 0
    }
  }
}
</script>
