<template>
    <div>
        <TitleHolder title="Principais Eventos" />
        <div class="grid w-full grid-cols-3 py-2 items-stretch gap-3">
            <div class="col-span-3 lg:col-span-2 p-2">
                <Carousel />
            </div>
            <div class="col-span-3 lg:col-span-1 p-2">
                <VaCard color="primary" :gradient="true">
                    <VaCardTitle>A maior plataforma do Brasil <br> e a mais fácil de usar</VaCardTitle>
                    <VaCardContent>
                        <div>
                            <span style="font-size: 1rem;">
                                Junte-se a mais de 300 mil produtores na Sympla.<br> Crie, publique e venda eventos ou conteúdos
                                digitais
                                <VaDivider></VaDivider>
                            </span>
                        </div>
                    </VaCardContent>
                    <VaCardActions align="stretch">
                        <VaButton text-color="primary" color="#f2f7f7">
                            Action Card
                        </VaButton>
                        <VaButton preset="secondary" border-color="#f2f7f7" text-color="#f2f7f7">
                            Action
                        </VaButton>
                    </VaCardActions>
                </VaCard>
            </div>
        </div>
        <div>
            <TitleHolder title="Confira os próximos eventos!" />
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

.va-card__title {
    font-size: 1.3rem;
}

.va-card{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>