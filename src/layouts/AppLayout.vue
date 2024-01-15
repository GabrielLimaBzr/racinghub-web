<template>
    <div class="app-layout">
        <NavBar/>
        <div class="app-layout-content pt-[90px] pb-10  max-w-custom mx-auto sm:px-4 md:px-8 lg:px-12 xl:px-20">
            <router-view />
        </div>
        <Footer/>
    </div>
</template>

<script>

import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue'

export default {
    components: {
        NavBar,
        Footer
    },
    data() {
        return {
        };
    }
}

</script>

<style lang="scss">
.app-layout {
    width: 100%;
    display: flex;
    flex-direction: column;

    .app-layout-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 95vh;
    }

}

.max-w-custom {
    max-width: 1500px; /* ou qualquer outro valor desejado */
}
</style>