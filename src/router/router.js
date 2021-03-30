import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import Lore from "../components/Lore.vue";
import Projects from "../components/Projects.vue";
import Error from "../components/404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/lore",
    name: "Lore",
    component: Lore,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
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