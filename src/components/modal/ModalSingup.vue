<template>
    <VaModal v-model="showModal" @ok="onConfirmed" @close="onCanceled" stateful close-button hideDefaultActions>
        <h4 class="va-h4">
            Criar uma conta
        </h4>
        
    </VaModal>
</template>

<script>
export default {
    data() {
        return {
            showModal: false,
        };
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
    },
};
</script>

<style scoped></style>
