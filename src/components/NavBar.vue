<template>
    <VaNavbar :bordered="false" class="h-18 px-20 mb-5 nav-bar" :shadowed="true" :fixed="true">
        <template #left>
            <VaNavbarItem class="logo">
                <RouterLink to="/">LOGO</RouterLink>
            </VaNavbarItem>

            <VaDivider class="mr-5 hidden sm:block" :vertical="true"></VaDivider>

            <VaNavbarItem class="logo hidden md:block">
                <VaInput v-model="search" class="text-base" placeholder="Procure eventos..." :clearable="true">
                    <template #prependInner>
                        <VaIcon color="secondary"><ion-icon name="search-circle-outline"></ion-icon></VaIcon>
                    </template>
                </VaInput>
            </VaNavbarItem>
        </template>
        <template #right>
            <VaNavbarItem class="hidden sm:block">
                <VaButton preset="secondary" color="textPrimary">Criar Evento</VaButton>
            </VaNavbarItem>
            <VaNavbarItem class="hidden sm:block">
                <VaButton preset="secondary" color="textPrimary">Acessar Perfil</VaButton>
            </VaNavbarItem>
            <VaNavbarItem class="hidden sm:block">
                <VaButton :gradient="true" @click="abrirModalSingup">Cadastre-se</VaButton>
                <ModalSingup :is-active="modalSingup" @canceled="fecharModalSingup"/>
            </VaNavbarItem>

            <VaDivider class="mr-5 hidden sm:block" :vertical="true"></VaDivider>

            <VaNavbarItem class="hidden sm:flex flex justify-center content-center">
                <VaSwitch v-model="currentTheme" color="#5123a1" size="small" true-value="dark" false-value="light"
                    off-color="#ffd300" style="--va-switch-checker-background-color: #252723;">
                    <template #innerLabel>
                        <div class="va-text-center">
                            <VaIcon :name="currentTheme === 'dark' ? 'dark_mode' : 'light_mode'" />
                        </div>
                    </template>
                </VaSwitch>
            </VaNavbarItem>
            <VaNavbarItem class="hidden sm:flex flex justify-center content-center">
                <VaPopover message="Acessar minha conta" color="primary">
                    <RouterLink to="/">
                        <VaButton :gradient="true">
                            <VaIcon color="#FFFFFF"><ion-icon name="person"></ion-icon></VaIcon>
                        </VaButton>
                    </RouterLink>
                </VaPopover>
            </VaNavbarItem>
        </template>
    </VaNavbar>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useColors } from 'vuestic-ui'
import ModalSingup from '../components/modal/ModalSingup.vue'

const { presets, applyPreset, colors } = useColors()
const search = ref('');
const currentTheme = ref('light')
const modalSingup = ref(false)

const abrirModalSingup = () => {
  modalSingup.value = true;
}

const fecharModalSingup = () => {
    modalSingup.value = false
}

watchEffect(() => {
    applyPreset(currentTheme.value)
})


</script>
  
<style scoped>
.nav-bar {
    z-index: 4;
    /* border-top: 3px solid var(--va-gradient); */
    border-top-width: 4px;
    border-style: solid;
    border-image: linear-gradient(to right, #0D6E6E, #1cdfdf) 1;
}

.logo {
    font-weight: 600;
    font-size: 1.5rem;
}
</style>