<template>
    <div class="app-layout">
        <NavBar />
        <div class="app-layout-content p-20">
            <router-view />
        </div>
        <Footer />
    </div>
</template>

<script>

import CardEvent from '@/components/CardEvent.vue';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue'

export default {
    components: {
        CardEvent,
        NavBar,
        Footer
    },
    data() {
        return {
            events: [
                {
                    id: 1,
                    title: "Evento 1",
                    date: "01/01/2023",
                    image: "caminho/para/imagem1.jpg"
                    // Outras informações do evento aqui
                },
                {
                    id: 2,
                    title: "Evento 2",
                    date: "02/01/2023",
                    image: "caminho/para/imagem2.jpg"
                    // Outras informações do evento aqui
                },
                {
                    id: 2,
                    title: "Evento 2",
                    date: "02/01/2023",
                    image: "caminho/para/imagem2.jpg"
                    // Outras informações do evento aqui
                },
                {
                    id: 2,
                    title: "Evento 2",
                    date: "02/01/2023",
                    image: "caminho/para/imagem2.jpg"
                    // Outras informações do evento aqui
                },
                {
                    id: 2,
                    title: "Evento 2",
                    date: "02/01/2023",
                    image: "caminho/para/imagem2.jpg"
                    // Outras informações do evento aqui
                },
                {
                    id: 2,
                    title: "Evento 2",
                    date: "02/01/2023",
                    image: "caminho/para/imagem2.jpg"
                    // Outras informações do evento aqui
                },
                // Adicione mais eventos conforme necessário
            ]
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
</style>