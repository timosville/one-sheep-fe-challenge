import { createRouter, createWebHistory } from "vue-router";
import Welcome from "@/components/Welcome.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Welcome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
