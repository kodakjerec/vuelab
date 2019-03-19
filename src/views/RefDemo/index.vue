<template>
    <div class="refDemo">
        <h1>Ref Demo</h1>
            <input type="text"  ref="inFocus"><br>
            <button type="submit" @click="setFocus">Set Focus</button>
    </div>
</template>

<script>
export default {
  name: 'RefDemo',
  data: function () {
    return {

    }
  },
  methods: {
    setFocus: function () {
      // console.log(this.$refs)
      this.$refs.inFocus.focus()
    }
  }
}
</script>
