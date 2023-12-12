<template>
    <div>
        <div>
            <h3 class="va-h2">
                APP
            </h3>
            <p>Page content must be wrapped in main tag. You must do it manually. Here you can place any blocks you need
                in
                your application.</p>

            <p>For example, you can place here your router view, add sidebar with navigation in #left slot.</p>
            <p>If you're using VaSidebar for page navigation don't forget to wrap it in nav tag.</p>
        </div>
        <div class="my-4">
            <VaDivider />
        </div>
        <div>
            <h2 class="va-h6">
                Principais Eventos:
            </h2>
            <div class="flex flex-wrap">
                <div v-for="event in events" :key="event.id" class="w-full md:w-1/2 lg:w-1/4 p-4">
                    <CardEvent :event="event" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import CardEvent from '@/components/CardEvent.vue';

export default {
    components: {
        CardEvent,
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

<style lang="scss" scoped></style>