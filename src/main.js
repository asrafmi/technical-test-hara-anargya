import { createApp } from "vue";
import "./style.css";
import "../src/assets/css/index.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import Home from './pages/Home/index.vue';
import Overview from './pages/Overview/index.vue';
import NotFound from './pages/NotFound/index.vue';
import { createRouter, createWebHistory } from "vue-router";

const router = new createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: Home },
      { path: '/overview', component: Overview },
      { path: '/:pathMatch(.*)*', component: NotFound }
    ]
  })

createApp(App).use(router).component("Icon", Icon).mount("#app");
