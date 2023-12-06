<template>
    <VaNavbar color="backgroundPrimary" class="h-18 px-20" shadowed="true" fixed="true">
        <template #left>
            <VaNavbarItem class="logo">
                <RouterLink to="/">LOGO</RouterLink>
            </VaNavbarItem>
            <VaNavbarItem class="logo hidden lg:block w-96">
                <VaInput v-model="search" class="w-96 text-base" placeholder="Procure eventos..." clearable="true">
                    <template #prependInner>
                        <VaIcon color="secondary"><ion-icon name="search-circle-outline"></ion-icon></VaIcon>
                    </template>
                </VaInput>
            </VaNavbarItem>
        </template>
        <template #right>
            <VaNavbarItem class="hidden sm:block">
                <RouterLink to="/">Home</RouterLink>
            </VaNavbarItem>
            <VaNavbarItem class="hidden sm:block">
                <RouterLink to="/">Participante</RouterLink>
            </VaNavbarItem>
            <VaNavbarItem class="hidden sm:block">
                <RouterLink to="/">Organizador</RouterLink>
            </VaNavbarItem>
        </template>
    </VaNavbar>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return{
            search: ""
        }
    }
}

</script>
  
<style scoped>
.logo {
    font-weight: 600;
    font-size: 1.5rem;
}
</style>