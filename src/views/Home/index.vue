<template>
  <div class="home">
    <p>mode:{{env}}</p>
    <img alt="Vue logo" src="@/assets/img/logo.png">
    <hello-world :msg="demoText|demo"/>
  </div>
</template>

<script>
import constant from '@/constant'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld/index.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      demoText: 'Vue.js Labs',
      env: constant.env
    }
  }
}
</script>
