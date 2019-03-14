<template>
  <div class="list">
    <h1>List Demo</h1>
    <div v-for="list in lists" :key="list">
      <div v-on:click="clickitem(lists.indexOf(list), list)">{{ list }}</div>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>

<script>
export default {
  name: 'List',
  props: {
    lists: Array
  },
  methods: {
    clickitem: function (index, name) {
      alert('"index":' + index + ', "value":' + name)
    }
  }
}
</script>
