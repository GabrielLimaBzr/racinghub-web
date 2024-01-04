<template>
    <VaModal v-model="showModal" @ok="onConfirmed" @close="onCanceled" stateful close-button hideDefaultActions blur
        max-height="500px" fixed-layout size="small">
        <div class="flex justify-center">
            <h4 class="va-h5">
                CRIAR CONTA DE {{ currentTab.title }}
            </h4>
        </div>
        <va-tabs v-model="tabIndex" grow center class="w-full" style="background-color: var(--va-background-primary);">
            <template #tabs>
                <va-tab v-for="tab in tabs" :key="tab.title" :name="tab.title"> {{ tab.title }}</va-tab>
            </template>
            <template #default style="width: 100%;">
                <div class="w-[430px]">
                    <VaCard outlined :bordered="true" class="my-3">
                        <VaCardTitle>
                            <VaIcon size="small" color="#262824"><ion-icon :name="currentTab.icon" class="mr-2"></ion-icon>
                            </VaIcon>
                            {{ currentTab.title }}
                        </VaCardTitle>
                        <VaCardContent>
                            <VaForm tag="form" @submit.prevent="handleSubmit" class="flex flex-col gap-3 w-full">
                                <VaInput v-model="username" label="Username" />

                                <VaInput v-model="password" type="password" label="Password" />

                                <VaInput v-model="password" type="password" label="Password" />

                                <VaInput v-model="password" type="password" label="Password" />

                                <VaInput v-model="password" type="password" label="Password" />

                                <VaInput v-model="password" type="password" label="Password" />

                                <VaSelect v-model="value" label="Role" :options="options" clearable />

                                <VaButton type="submit">
                                    Criar Conta
                                </VaButton>
                            </VaForm>
                        </VaCardContent>
                    </VaCard>
                </div>
            </template>
        </va-tabs>
        <VaCard>
        </VaCard>

    </VaModal>
</template>

<script>
const TABS = [
    { title: 'PARTICIPANTE', icon: 'person' },
    { title: 'ORGANIZADOR', icon: 'desktop' },
];

export default {
    data() {
        return {
            showModal: false,
            tabs: TABS,
            tabIndex: TABS[0].title
        };
    },
    computed: {
        currentTab() {
            return this.tabs.find(({ title }) => title === this.tabIndex);
        },
    },
    props: {
        isActive: {
            type: Boolean,
            required: true
        }
    },
    watch: {
        isActive: function (newVal) {
            this.showModal = newVal;
        },
        showModal: function (newVal) {
            // Emitir eventos para o componente pai quando a modal for fechada
            if (!newVal) {
                this.$emit('canceled');
            }
        },
    },
    methods: {
        onConfirmed() {
            // Emitir evento para o componente pai quando a ação for confirmada
            this.$emit('confirmed');
        },
        onCanceled() {
            // Emitir evento para o componente pai quando a ação for cancelada
            this.$emit('canceled');
        },
        handleSubmit() {
            alert("-- form submit --");
        },
    },
};
</script>

<style scoped>
.va-card__title {
    justify-content: center;
}

</style>
