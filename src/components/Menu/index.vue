<template>
    <div class="menu">
      <div id="nav">
        <template v-for="(item, index) in items">
            <router-link :to="item.id" :key="index">{{item.content}}
            </router-link>
            <template v-if="isShow(index, items)"> | </template>
        </template>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    items: Array
  },
  methods: {
    isShow: function (index, items) {
      if ((index + 1) === items.length) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style scoped>
#nav {
  padding: 30px;
  margin-bottom: 10px;
  background-color: #eee;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
