<template>
    <VaNavbar color="backgroundPrimary" class="h-18 px-20 mb-5 nav-bar" shadowed="true" fixed="true">
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
                <VaPopover message="Acessar minha conta">
                    <RouterLink to="/"><VaIcon color="secondary"><ion-icon name="person-outline"></ion-icon></VaIcon></RouterLink>
                </VaPopover>
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
.nav-bar{
    z-index: 2;
}
.logo {
    font-weight: 600;
    font-size: 1.5rem;
}
</style>