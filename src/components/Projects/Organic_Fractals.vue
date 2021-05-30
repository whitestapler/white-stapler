<template>
    <div class="root"> 
          <img class='foreground f2' src='../../../assets/organic_fractals/emd12549_XProj-min.jpeg'> 
          <img class='foreground f1' src='../../../assets/organic_fractals/emd11963_Y-min.jpeg'>
        <img class='background' ref='background' src='../../../assets/organic_fractals/MutaGenE32A00BE136A41C0034A_-min.png'>
        <img class='background' ref='background' src='../../../assets/organic_fractals/2kspeditedmuted-min.jpg'> 
    </div>

    <div class="organic_fractals">
      <h1> FRACTALS</h1>
    </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.background {
    width:100%;
    background-size: cover;
}

.foreground {
  position: absolute;
  top: 100px;
  width: 30%;
  max-width: 13vw;
  height: auto;
}

.f1 {
  position: absolute;
  top: 200px;
  left: 50px;
  width: 30%;
  max-width: 13vw;
  height: auto;
}

.f2 {
  position: absolute;
  top: 30%;
  left: 200px;
  width: 30%;
  height: auto;
}

.img {
    margin:0px !important;
    padding:0px !important;
}

.organic_fractals {
  font-family: 'Benne', serif;
}

</style>
