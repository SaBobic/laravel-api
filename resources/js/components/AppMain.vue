<template>
    <main class="container py-5">
        <div class="row">
            <div class="col-4">
                <PostCard />
            </div>
        </div>
    </main>
</template>

<script>
import PostCard from "./PostCard.vue";
export default {
    name: "AppMain",
    components: { PostCard },
};
</script>
