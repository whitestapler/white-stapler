import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import Error from "../components/404.vue";
import Organic_Fractals from "../components/Projects/Organic_Fractals.vue"
import Shaders from "../components/Projects/Shaders.vue"
import Bird_Sketch from "../components/Projects/Bird_Sketch.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects/organic_fractals",
    name: "Organic_Fractals",
    component: Organic_Fractals,
  },
  {
    path: "/projects/shaders",
    name: "Shaders",
    component: Shaders,
  },
  {
    path: "/projects/bird_sketch",
    name: "Bird_Sketch",
    component: Bird_Sketch,
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: Error
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;