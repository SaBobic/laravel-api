<template>
    <main class="container py-5">
        <div class="row">
            <div v-for="post in posts" :key="post.id" class="col-4">
                <PostCard :post="post" />
            </div>
        </div>
    </main>
</template>

<script>
import PostCard from "./PostCard.vue";
export default {
    name: "AppMain",
    components: { PostCard },
    props: {
        posts: Array,
    },
};
</script>
