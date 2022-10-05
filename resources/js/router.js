// Import di Vue e Vue router

import Vue from "vue";
import VueRouter from "vue-router";

// Import delle "pagine"

import HomePage from "./components/pages/HomePage.vue";
import AboutPage from "./components/pages/AboutPage.vue";
import ContactsPage from "./components/pages/ContactsPage.vue";
import NotFoundPage from "./components/pages/NotFoundPage.vue";
import PostPage from "./components/pages/PostPage.vue";

// Vue usa VueRouter

Vue.use(VueRouter);

// Rotte

const routes = new VueRouter({
    mode: "history",
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/",
            component: HomePage,
            name: "home",
        },
        {
            path: "/about",
            component: AboutPage,
            name: "about",
        },
        {
            path: "/contacts",
            component: ContactsPage,
            name: "contacts",
        },
        {
            path: "/posts/:slug",
            component: PostPage,
            name: "post-single",
        },
        {
            path: "*",
            component: NotFoundPage,
        },
    ],
});

export default routes;
