<template>
    <div class="container py-5">
        <div class="row">
            <div v-for="post in posts" :key="post.id" class="col-4 mb-4">
                <PostCard :post="post" />
            </div>
        </div>
    </div>
</template>

<script>
import Axios from "axios";
import PostCard from "../PostCard.vue";
export default {
    name: "HomePage",
    components: { PostCard },
    props: {
        posts: Array,
    },
    data() {
        return {
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
};
</script>
