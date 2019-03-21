<template>
  <div class="filterDemo">
    <h1>Filter Demo</h1>
    <input v-model="message" placeholder="請輸入數字" type="number">
    <p>轉換後的結果 => {{ message|commafy }} </p>
  </div>
</template>

<script>

export default {
  name: 'FilterDemo',
  data () {
    return {
      message: ''
    }
  }
//  Filters: {
//    filteredCustomers: function () {
//      var self = this
//      return this.list.filter(function (cust) { console.log(cust); return cust.toLowerCase().indexOf(self.message.toLowerCase()) >= 0 })
//    }
//  }
}
</script>

<style lang="scss" scoped>
.filterDemo p {
  padding: 0 150px;
  text-align: center;
}
</style>
