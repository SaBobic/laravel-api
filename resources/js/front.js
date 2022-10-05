require("./bootstrap");

window.Vue = require("vue");

import router from "./router.js";
import App from "./components/App.vue";

const app = new Vue({
    router,
    el: "#app",
    render: (h) => h(App),
});
