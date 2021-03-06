import { createRouter, createWebHistory } from "vue-router";
import Welcome from "@/components/Welcome.vue";
import Name from "@/components/Name.vue";
import Account from "@/components/Account.vue";
import Appearance from "@/components/Appearance.vue";
import Avatar from "@/components/Avatar.vue";
import Success from "@/components/Success.vue";
import Video from "@/components/Video.vue";
import Complete from "@/components/Complete.vue";

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
  {
    path: "/settings",
    name: "Settings",
    component: Appearance,
  },
  {
    path: "/avatar",
    name: "Avatar",
    component: Avatar,
  },
  {
    path: "/success",
    name: "Success",
    component: Success,
  },
  {
    path: "/video",
    name: "Video",
    component: Video,
  },
  {
    path: "/complete",
    name: "Complete",
    component: Complete,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
