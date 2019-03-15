<template>
    <div class="menu">
        <template v-for="(item) in items">
            <router-link :to="item.id" :key="item.index">{{item.content}}
            </router-link>
            <template v-if="isShow(items.indexOf(item), items)"> | </template>
        </template>
    </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    items: Array
  },
  methods: {
    isShow: function (itemIndex, items) {
      if ((itemIndex + 1) === items.length) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
