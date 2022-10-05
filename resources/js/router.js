// Import di Vue e Vue router

import Vue from "vue";
import VueRouter from "vue-router";

// Import delle "pagine"

import HomePage from "./components/pages/HomePage.vue";
import AboutPage from "./components/pages/AboutPage.vue";
import ContactsPage from "./components/pages/ContactsPage.vue";
import NotFoundPage from "./components/pages/NotFoundPage.vue";

// Vue usa VueRouter

Vue.use(VueRouter);

// Rotte

const routes = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: HomePage,
        },
        {
            path: "/about",
            component: AboutPage,
        },
        {
            path: "/contacts",
            component: ContactsPage,
        },
        {
            path: "*",
            component: NotFoundPage,
        },
    ],
});

export default routes;
