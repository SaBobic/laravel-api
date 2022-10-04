<template>
    <div class="card mb-4">
        <img :src="post.image" class="card-img-top" :alt="post.title" />
        <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
                Scritto da {{ post.user.name }} il {{ formattedDate }}
            </h6>
            <p class="card-text">
                {{ post.content }}
            </p>
            <a href="#" class="btn btn-primary">Leggi articolo</a>
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
