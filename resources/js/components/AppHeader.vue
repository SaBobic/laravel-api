<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" :to="{ name: 'home' }">{{
            title
        }}</router-link>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link class="nav-link" :to="{ name: 'home' }"
                    >Home</router-link
                >
            </div>
            <div class="navbar-nav">
                <router-link class="nav-link" :to="{ name: 'about' }"
                    >About</router-link
                >
            </div>
            <div class="navbar-nav">
                <router-link class="nav-link" :to="{ name: 'contacts' }"
                    >Contacts</router-link
                >
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "AppHeader",
    props: {
        title: String,
    },
};
</script>
