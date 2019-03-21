<template>
  <div class="list">
    <h1>List Demo</h1>
    <div v-for="(item, key, index) in lists" :key="key">
      <div @click="clickitem(index, item)">{{ item }}</div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'List',
  props: {
    lists: Array
  },
  methods: {
    clickitem: function (index, item) {
      // alert('"childindex":' + index + ', "childvalue":' + item)
      this.$emit('clickFromChild', index, item)
    //   clickFromChild對應到view裡面的 @clickFromChild="???"這個方法
    }
  }
}
</script>

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
