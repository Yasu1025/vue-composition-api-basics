import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ViewStats from "@/views/ViewStats.vue";

const routes = [
  {
    path: "/",
    name: "Notes",
    component: HomeView,
  },
  {
    path: "/stats",
    name: "Stats",
    component: ViewStats,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
