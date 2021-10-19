import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/dashboard",
    name: "dashboard",
    component: () => import("./components/Dashboard.vue"),
  },
  {
    path: "/messages",
    name: "messages",
    component: () => import("./components/MessageList.vue"),
  },
  {
    path: "/messages/:id",
    name: "message-details",
    component: () => import("./components/MessageDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
