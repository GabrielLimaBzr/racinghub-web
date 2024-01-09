<template>
    <div>
        <VaForm tag="form" @submit.prevent="handleSubmit" class="flex flex-col gap-3 w-full">
            <VaInput v-model="email" label="Email" />

            <VaInput v-model="password" type="password" label="Password" />

            <VaInput v-model="password" type="password" label="Confirm Password" />

            <VaButton type="submit">
                Criar Conta
            </VaButton>
        </VaForm>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>