<template>
    <div>
        <div>
            <TitleHolder title="Principais Eventos"/>
            <div class="px-2">
                <Carousel />
            </div>
        </div>
        <div>
            <TitleHolder title="Confira os próximos eventos!"/>
            <div class="flex flex-wrap">
                <div v-for="event in events" :key="event.id" class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                    <CardEvent :event="event" />
                </div>
            </div>

            <div class="pag">
                <VaPagination v-model="pageCurrent" :visible-pages="3" :total="100" :page-size="10" boundary-numbers gapped
                    class="mb-3 justify-center sm:justify-start">
                    <template #prevPageLink="{ onClick, disabled }">
                        <VaButton preset="primary" :disabled="disabled" aria-label="go prev page" @click="onClick">
                            Anterior
                        </VaButton>
                    </template>
                    <template #nextPageLink="{ onClick, disabled }">
                        <VaButton preset="primary" :disabled="disabled" aria-label="go next page" @click="onClick">
                            Próximo
                        </VaButton>
                    </template>
                </VaPagination>
            </div>
        </div>
    </div>
</template>

<script>

import CardEvent from '@/components/CardEvent.vue';
import eventos from '../assets/eventsMock'
import Carousel from '../components/Carousel.vue';
import TitleHolder from '@/components/TitleHolder.vue';

export default {
    components: {
        CardEvent,
        Carousel,
        TitleHolder
    },
    data() {
        return {
            events: eventos,
            pageCurrent: 0,
            pageSize: 10,
        };
    }
}

</script>

<style lang="scss" scoped>
.pag {
    display: flex;
    justify-content: center;
    margin-top: 7vh;
}

</style>