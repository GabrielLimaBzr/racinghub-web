<template>
    <VaNavbar color="backgroundSecondary" class="h-18 px-20 mb-5 nav-bar" :shadowed="false" :fixed="true">
        <template #left>
            <VaNavbarItem class="logo">
                <RouterLink to="/">LOGO</RouterLink>
            </VaNavbarItem>
            <VaNavbarItem class="logo hidden lg:block w-96">
                <VaInput v-model="search" class="w-96 text-base" placeholder="Procure eventos..." :clearable="true">
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
                <VaButton :gradient="true">Cadastre-se</VaButton>
            </VaNavbarItem>
            
            <VaDivider :vertical="true"></VaDivider>

            <VaNavbarItem>
                <VaSwitch v-model="currentTheme" color="#5123a1" size="small" true-value="dark" false-value="light"
                    off-color="#ffd300" style="--va-switch-checker-background-color: #252723;" class="ml-3">
                    <template #innerLabel>
                        <div class="va-text-center">
                            <VaIcon :name="currentTheme === 'dark' ? 'dark_mode' : 'light_mode'" />
                        </div>
                    </template>
                </VaSwitch>
            </VaNavbarItem>
            <VaNavbarItem class="hidden sm:block">
                <VaPopover message="Acessar minha conta" color="primary">
                    <RouterLink to="/">
                        <VaButton :gradient="true"><VaIcon color="#FFFFFF"><ion-icon name="person"></ion-icon></VaIcon></VaButton>
                    </RouterLink>
                </VaPopover>
            </VaNavbarItem>
        </template>
    </VaNavbar>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { VaDivider, useColors } from 'vuestic-ui'

const { presets, applyPreset, colors } = useColors()
const search = ref('');
const currentTheme = ref('light')

watchEffect(() => {
    applyPreset(currentTheme.value)
})


</script>
  
<style scoped>
.nav-bar {
    z-index: 2;
}

.logo {
    font-weight: 600;
    font-size: 1.5rem;
}
</style>