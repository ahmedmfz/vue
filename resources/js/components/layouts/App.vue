<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <router-link :to="{ name : 'site.index'}" class="navbar-brand">Vue Project </router-link>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                 <router-link :to="{ name : 'categories.index'}" class="nav-link active">Categories</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name : 'posts.index'}" class="nav-link">Posts</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>

    <div class="container mt-5">
        <h2 class="text-center my-4 border border-dark">{{ currentTitlePage }}</h2>
        <router-view></router-view>
    </div>
    
</template>
<script >
export default {
    computed :{
        currentTitlePage(){
            return this.$route.meta.title;
        },

    }
    }
</script>