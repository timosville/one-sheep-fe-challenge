import { createRouter, createWebHistory } from "vue-router";
import Welcome from "@/components/Welcome.vue";
import Name from "@/components/Name.vue";
import Account from "@/components/Account.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Welcome,
  },
  {
    path: "/start",
    name: "Start",
    component: Name,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
