<template>
  <div class="error">
    Sorry, page not found :(
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
    padding: 50px;
}
</style>
