<template>
    <div>
        <div>
            <div class="mb-5">
                <p class="apr">
                    <span class="apr-title">
                        <VaIcon size="large"><ion-icon name="caret-forward-outline"></ion-icon></VaIcon>
                        Principais Eventos
                    </span>
                </p>
                <VaDivider />
            </div>
            <div class="px-2">
                <Carousel />
            </div>
        </div>
        <div>
            <div class="mb-5">
                <p class="apr">
                    <span class="apr-title">
                        <VaIcon size="large"><ion-icon name="caret-forward-outline"></ion-icon></VaIcon>
                        Confira os próximos eventos!
                    </span>
                </p>
                <VaDivider />
            </div>
            <div class="flex flex-wrap">
                <div v-for="event in events" :key="event.id" class="w-full md:w-1/2 lg:w-1/4">
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

export default {
    components: {
        CardEvent,
        Carousel
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

.apr {
    height: 40px;
    line-height: 60px;
    vertical-align: middle;
    color: var(--va-primary);

    .apr-title {
        font-weight: 700;
        font-size: 1rem;
    }
}
</style>