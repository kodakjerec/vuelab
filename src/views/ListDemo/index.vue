<template>
  <div class="listDemo">
    <list :lists="listFromListDemo"/>
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
  }
}
</script>
