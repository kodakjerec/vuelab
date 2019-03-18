<template>
  <div class="form-veeValidate">

    <form @submit.prevent="handleSubmit">
      <div>
        <p>身分証字號</p>
        <input type="text" v-model="user.textID" v-validate="'required|max:10|regex:[A-Z]{1}[0-9]'" name="cusID">
        <div v-show="errors.has('cusID')" class="red_danger">{{errors.first("cusID")}}</div>
      </div>

      <div>
        <p>姓名</p>
        <input type="text" v-model="user.textName" v-validate="'required|max:30'" name="cusName">
        <div v-show="errors.has('cusName')" class="red_danger">{{errors.first("cusName")}}</div>
      </div>

      <div>
        <p>性別</p>
        <input type="radio" v-model="user.selectedSex" v-validate="'required'" name="sex" value="boy">男
        <input type="radio" v-model="user.selectedSex" v-validate="'required'" name="sex" value="girl">女
        <div v-show="errors.has('sex')" class="red_danger">{{errors.first("sex")}}</div>
      </div>

      <div>
        <p>手機號碼</p>
        <input type="text" v-model="user.textNumber" v-validate="'required|max:10|numeric'" name="cusNumber">
        <div v-show="errors.has('cusNumber')" class="red_danger">{{errors.first("cusNumber")}}</div>
      </div>

      <div>
        <button type="submit">送出</button>
        <button type="reset" @click="clean">清除</button>
      </div>
    </form>

  </div>
</template>

<script>

export default {
  name: 'Form-veeValidate',
  data: function () {
    return {
      user: {
        textID: '',
        textName: '',
        selectedSex: '',
        textNumber: ''
      }
    }
  },
  methods: {
    handleSubmit (e) {
      this.submitted = true
      this.$validator.validate().then(valid => {
        if (valid) { // 通過審核
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user))
        } else {

        }
      })
    },
    clean: function () {
      this.textID = ''
      this.textName = ''
      this.selectedSex = ''
      this.textNumber = ''
      this.$validator.reset() // 清空所有錯誤訊息
    }
  }
}
</script>

<style>
.red_danger{
  color:red
}
</style>
