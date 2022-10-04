<template>
    <div class="content">
        <AppHeader :title="title" />
        <AppMain />
    </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppMain from "./AppMain.vue";
export default {
    name: "App",
    data() {
        return {
            title: "Boolpress",
        };
    },
    components: { AppHeader, AppMain },
};
</script>
