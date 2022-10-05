<template>
    <div class="card">
        <img :src="post.image" class="card-img-top" :alt="post.title" />
        <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
                Scritto da {{ post.user.name }} il {{ formattedDate }}
            </h6>
            <div>
                Postato in
                <span
                    class="badge badge-pill"
                    :class="`badge-${post.category.color}`"
                    >{{ post.category.label }}</span
                >
            </div>
            <p class="card-text">
                {{ post.content }}
            </p>
            <div class="mb-4">
                <span
                    v-for="tag in post.tags"
                    :key="tag.id"
                    class="badge badge-pill mr-2"
                    :class="`badge-${tag.color}`"
                    >{{ tag.label }}</span
                >
            </div>
            <router-link
                :to="{ name: 'post-single', params: { slug: post.slug } }"
                class="btn btn-primary"
                >Leggi articolo</router-link
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "PostCard",
    props: {
        post: Object,
    },
    computed: {
        formattedDate() {
            let date = new Date(this.post.updated_at);
            let day = date.getDate();
            if (day < 10) day = "0" + day;
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        },
    },
};
</script>
