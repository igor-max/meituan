import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from "@/layout/Default.vue"
import Index from "@/page/Index.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "default",
    component: Default,
    redirect: '/index',
    children: [
      {
        path: "/index",
        name: "index",
        component: Index
      },
      {
        path: "/changeCity",
        name: "changeCity",
        component: () => import("@/page/changeCity.vue")
      },
      {
        path: "/s/:name",
        name: "s",
        component: () => import("@/page/search.vue") 
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../page/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/page/Register.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
