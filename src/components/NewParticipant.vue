<template>
    <div>
        <VaForm tag="form" @submit.prevent="handleSubmit" class="flex flex-col gap-3 w-full">
            <VaInput v-model="form.email" label="Email" />

            <VaInput v-model="form.pass" type="password" label="Password" />

            <VaInput v-model="form.passConfirm" type="password" label="Confirm Password" />

            <VaButton type="submit">
                Criar Conta
            </VaButton>
        </VaForm>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {}
        }
    },
    methods:{
        handleSubmit() {
            alert("-- form submit --");
        },
    }
}

</script>

<style lang="scss" scoped></style>