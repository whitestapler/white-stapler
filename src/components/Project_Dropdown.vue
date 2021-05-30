<template>
<div class="menu-item" @click="isOpen =!isOpen">>>
    <transition name="open" appear>
        <div class="sub-menu" v-if="isOpen">
            <div class="menu-item"><router-link to="/projects/organic_fractals" tag="button">Organic Fractals</router-link></div>
            <div class="menu-item"><router-link to="/projects/shaders" tag="button">Shaders and More</router-link></div>
            <div class="menu-item"><router-link to="/projects/bird_sketch" tag="button">Bird Sounds</router-link></div>
        </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  data () {
      return {
          isOpen: false
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

nav .menu-item .sub-menu {
    position: absolute;
    top: calc(100% + 18px);
    left: 50%;
    transform: translateX(-80%);
    width: max-content;
    border-radius: 0px 0px 16px;
    text-align: center;

}

</style>