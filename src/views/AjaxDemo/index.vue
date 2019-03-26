<template>
    <div class="ajaxDemo">
        <h1>Ajax Demo</h1>
        <p v-if="noPro">{{ info }}</p>
        <div>

            <!-- 可在這邊印list出來看看response到底接到怎樣的list
            <div>
                {{list}}
            </div> -->
            <ul>
                <template v-for="(item, index) in list">
                    <li :key="index">
                        <img :src="item.prodImg" :id="item.prodId" @click="showModal">
                        <span @click="showModal" :id="item.prodId">{{ item.prodName }}</span>
                    </li>
                </template>
            </ul>
            <popup-modal :title="vtitle" :isOpen="isOpen" v-show="isOpen" @close="closeModal">

            <div class="modal-body">
                <img :src="listDetail.prodImg">
                <p>產品id: {{ listDetail.prodId }} </p>
                <p>品名: {{ listDetail.prodName }} </p>
                <p>售價: {{ listDetail.amount }} </p>
                <p>寬: {{ listDetail.width }} </p>
                <p>高: {{ listDetail.height }} </p>
                <p>重量:{{ listDetail.weight }} </p>
                <p>說明: {{ listDetail.description }} </p>
                <button class="modal-default-button" @click="closeModal">
                  Close PopupModel
                </button>
            </div>

            </popup-modal>

        </div>
    </div>
</template>

<script>

import PopupModal from '@/components/PopupModal/index.vue'
import CallService from '@/services/ajaxService.js'

export default {
  name: 'AjaxDemo',
  components: {
    PopupModal
  },
  data: function () {
    return {
      list: [],
      noPro: false,
      info: '查無資料',
      vtitle: '產品明細資料',
      isOpen: false,
      listDetail: []
    }
  },
  mounted: function () {
    CallService.getProList()
      .then(
        value => { // console.log(value.data.data)
          if (value.data.isSuccess && (value.data.data.length !== 0)) {
            this.list = value.data.data
            if (this.list.length === 0) {
              this.noPro = true
            }
          } else {
            this.noPro = true
          }
        }
      )
    // CallService.getProList().then((value) => console.log(value))
  },
  methods: {
    showModal: function (event) {
      CallService.getProDetail(event.target.id)
        .then(
          value => { // console.log(value)
            if (value.data.isSuccess) {
              this.isOpen = true
              this.listDetail = value.data.data
            } else {
              alert(value.data.message)
            }
          }
        )
      // if (CallService.getProDetail().data.isSuccess) {
      //   this.isOpen = true
      //   this.listDetail = CallService.getProDetail().data.data
      // } else {
      //   alert(CallService.getProDetail().data.message)
      // }
    },
    closeModal: function () {
      this.isOpen = false
    }
  }

}
</script>

<style scoped>
.ajaxDemo li{
    text-align: center;
}
</style>
