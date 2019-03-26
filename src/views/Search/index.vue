<template>
  <div class="search">
    <h1>Search</h1>
    <input v-model="message" placeholder="請輸入關鍵字">
    <p>目前有筆 {{ filteredCustomers.length }} 資料</p>
    <div v-for="item in filteredCustomers" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      message: '',
      list: ['Ada', 'Aaliyah', 'Adela', 'Basia', 'Bonnie', 'Brook', 'Candice', 'Celeste', 'Cheryl', 'Ella', 'Eudora', 'Gemma']
    }
  },
  computed: {
    filteredCustomers: function () {
      var self = this
      return this.list.filter(function (cust) { console.log(cust); return cust.toLowerCase().indexOf(self.message.toLowerCase()) >= 0 })
    }
  }
}
</script>

<style lang="scss" scoped>
.search p {
  padding: 0 150px;
  text-align: center;
}
.search div {
  margin-left: auto;
  margin-right: auto;
  width: 10%;
  background-color:#eee;
  padding: 0 150px;
  text-align: center;
}
.search input {
  padding: 0 150px;
  text-align: center;
}
</style>
