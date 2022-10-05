<template>
    <div class="content">
        <AppHeader :title="title" />
        <HomePage :posts="posts" />
    </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import HomePage from "./pages/HomePage.vue";
import Axios from "axios";
export default {
    name: "App",
    data() {
        return {
            title: "Boolpress",
            posts: null,
        };
    },
    methods: {
        fetchPosts() {
            Axios.get("http://127.0.0.1:8000/api/posts").then((res) => {
                this.posts = res.data.data;
            });
        },
    },
    created() {
        this.fetchPosts();
    },
    components: { AppHeader, HomePage },
};
</script>
