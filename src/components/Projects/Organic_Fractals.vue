<template>
    <div class="root">
        <img class='background' ref='background' src='../../../assets/organic_fractals/MutaGenE32A00BE136A41C0034A_-min.png'>
        <img class='foreground' ref='foreground' src='../../../assets/organic_fractals/emd12549_XProj-min.jpeg'>
    </div>

  <div class="organic_fractals">
    Organic Fractals!
  </div>
</template>

<script>
export default {
  name: 'Organic_Fractals',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.background {
    width:100%;
    height: 100%;
    background-size: cover;
}

</style>
