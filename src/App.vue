<template>
  <div id="App">
    <header>
      <Navbar />

    </header>
  </div>
  <router-view/>
</template>

<script>
//import Home from './components/Home.vue'
import Navbar from './components/Navbar'


export default {
  name: 'App',
  components: {
    Navbar,
    //Home
  }
}
</script>

<style>
#app {

  font-family: 'Rubik Mono One', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:white;
  margin-top: 20px;

}
body{
  background: black;
}

header{
  width: 100%;
}

</style>
