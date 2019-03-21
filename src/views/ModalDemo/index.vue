<template>
  <div class="modalDemo">
    <h1>Modal Demo</h1>
        <button type="button" class="btn" @click="showModal">Open PopupModal</button>
        <popup-modal :title="title" :isOpen="isOpen" v-show="isOpen" @close="closeModal">

            <div class="modal-body">
                <p>Woohoo, you're reading this text in a model!</p>
                <button class="modal-default-button" @click="closeModal">
                  Close PopupModel
                </button>
            </div>
            <!-- <p>xxxxx</p>
            <p>xxxxx</p> -->
            <!-- <template v-slot:header>
                <p>header!!</p>
            </template> -->
            <!-- <p slot="header">header!!!!</p> -->
        </popup-Modal>

  </div>
</template>

<script>
import PopupModal from '@/components/PopupModal/index.vue'

export default {
  name: 'ModalDemo',
  components: {
    PopupModal
  },
  data () {
    return {
      title: 'Demo Model',
      isOpen: false
    }
  },
  methods: {
    showModal: function () {
      this.isOpen = true
    },
    closeModal: function () {
      this.isOpen = false
    }
  }
}
</script>

<style scoped>

.modal-default-button {
  float: center;
}

</style>
