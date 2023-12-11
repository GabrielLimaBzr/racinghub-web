<template>
    <VaNavbar color="backgroundPrimary" class="h-18 px-20 mb-5 nav-bar" :shadowed="true" :fixed="true">
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
                <RouterLink to="/">Home</RouterLink>
            </VaNavbarItem>
            <VaNavbarItem class="hidden sm:block">
                <RouterLink to="/">Participante</RouterLink>
            </VaNavbarItem>
            <VaNavbarItem class="hidden sm:block">
                <VaPopover message="Acessar minha conta">
                    <RouterLink to="/">
                        <VaIcon color="textPrimary"><ion-icon name="person"></ion-icon></VaIcon>
                    </RouterLink>
                </VaPopover>
            </VaNavbarItem>
            <VaNavbarItem>
                <VaSwitch v-model="currentTheme" color="#5123a1" size="small" true-value="dark" false-value="light"
                    off-color="#ffd300" style="--va-switch-checker-background-color: #252723;">
                    <template #innerLabel>
                        <div class="va-text-center">
                            <VaIcon :name="currentTheme === 'dark' ? 'dark_mode' : 'light_mode'" />
                        </div>
                    </template>
                </VaSwitch>
            </VaNavbarItem>
        </template>
    </VaNavbar>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useColors } from 'vuestic-ui'

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