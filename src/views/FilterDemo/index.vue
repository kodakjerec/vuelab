<template>
  <div class="filterDemo">
    <h1>Filter Demo</h1>
    <div>
        <input v-model="message" placeholder="請輸入數字" type="number">
        <p>轉換後的結果 => {{ message|commafy }} </p>
    </div>
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

.filterDemo div {
  margin-left: auto;
  margin-right: auto;
  padding: 2%;
  background-color:#eee;
  text-align: center;
}
</style>
