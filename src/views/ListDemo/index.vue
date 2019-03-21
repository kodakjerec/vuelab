<template>
  <div class="listDemo">
    <list :lists="listFromListDemo" @clickFromChild="actFromFather"/>
  </div>
</template>

<script>
import List from '@/components/List/index.vue'

export default {
  name: 'ListDemo',
  components: {
    List
  },
  data () {
    return {
      listFromListDemo: ['AAA', 'BBB', 'CCC', 'DDD']
    }
  },
  methods: {
    actFromFather: function (index, name) {
      alert('"index":' + index + ', "value":' + name)
    }
  }
}
</script>
