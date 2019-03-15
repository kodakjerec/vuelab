<template>
    <form action="http://localhost:8080/register">
        身分証字號<input type="text" v-model="textID" v-validate="'required'" name="cusID">
        <br>
        <span>{{ errors.first('cusID') }}</span>
        <br>
        姓名<input type="text" v-model="textName" v-validate="'required'" name="cusName">
        <br>
        <span>{{ errors.first('cusName') }}</span>
        <br>
        性別
        <input type="radio" value="Boy" v-model="selected" name="sex">男
        <input type="radio" value="Girl" v-model="selected" name="sex">女
        <br>
        手機號碼<input type="text" v-model="textNumber" v-validate="'required'" name="cusNumber">
        <br>
        <span>{{ errors.first('cusNumber') }}</span>
        <br>
        <button type="submit">送出</button>
        <button type="reset">清除</button>
    </form>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'

const config = {
  aria: true,
  classNames: {},
  classes: false,
  delay: 0,
  dictionary: null,
  errorBagName: 'errors', // change if property conflicts
  events: 'input|blur',
  fieldsBagName: 'fields',
  i18n: null, // the vue-i18n plugin instance
  i18nRootKey: 'validations', // the nested key under which the validation messages will be located
  inject: true,
  locale: 'en',
  validity: false,
  useConstraintAttrs: true
}

Vue.use(VeeValidate, config)

export default {
  data: function () {
    return {

    }
  }
}
</script>
