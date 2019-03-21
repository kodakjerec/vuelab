<template>
  <div id="app">
    <div id="nav">
      <menuList :items="itemsA"/>
    </div>
    <router-view/>
    <div class="footer">
      <span>© 2019 Thinkpower.</span>
    </div>
  </div>
</template>

<script>
import MenuList from '@/components/Menu/index.vue'

export default {
  components: {
    MenuList
  },
  data: function () {
    return {
      itemsA: [
        { id: '/', content: 'Home' },
        { id: '/about', content: 'About' },
        { id: '/practice', content: 'Practice' }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
#app {
  text-align: center;
  color: #2c3e50;
  padding-bottom: 50px;
}

// #nav { //移至componentMenu裡面
//   padding: 30px;
//   margin-bottom: 10px;
//   background-color: #eee;
// }

// #nav a {
//   font-weight: bold;
//   color: #2c3e50;
// }

// #nav a.router-link-exact-active {
//   color: #42b983;
// }
.footer {
  position: fixed;
  height: 50px;
  width: 100%;
  background-color: #eee;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & span {
    color: #333;
    font-size: 12px;
    padding-right: 10px;
  }
}
</style>
