import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue'

const app = createApp(App);
app.use(router).mount('#app')
app.component('scroll-parallax', ScrollParallax);
