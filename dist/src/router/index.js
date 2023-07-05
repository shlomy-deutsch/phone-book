/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddNumber from "../components/add-number.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/addnumber",
    name: "add-number",
    component: AddNumber,
  },
  {
    path: "/phonelist",
    name: "Phone-List",
    component: () => import("../views/Phone-List.vue"),
  },
  {
    path: "/person/:person",
    name: "Person-Phone",
    component: () => import("../views/Person-Phone.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
