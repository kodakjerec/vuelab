<template>
    <div id="app">
        <input :value="value" @input="updateValue">
    </div>
</template>

<script>
export default {
  name: 'testChild',
  props: {
    value: Number
  },
  methods: {
    updateValue: function (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
