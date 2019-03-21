import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'

Vue.use(VeeValidate)
Validator.localize('zhTW', zhTW)
const dict = {
  zhTW: {
    messages: {
      required: '此欄位為必填欄位。',
      max: '輸入格式錯誤，請重新輸入。',
      numeric: '輸入格式錯誤，請重新輸入。',
      regex: '輸入格式錯誤，請重新輸入。'
    }
  }
}
Validator.localize(dict)
