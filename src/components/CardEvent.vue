<template>
    <VaCard :to="`event/${event.id}`" class="hover-effect m-4">
        <VaImage src="https://picsum.photos/400/200" class="h-32" />
        <VaCardTitle class="title">
            <div>
                <span><VaIcon size="small" color="primary"><ion-icon name="calendar-outline"></ion-icon></VaIcon> {{ event.date }}</span>
                <VaDivider :vertical="true" color="primary"/>
                <span><VaIcon size="small" color="primary"><ion-icon name="location-outline"></ion-icon></VaIcon> {{ event.local }}</span>
            </div>
        </VaCardTitle>
        <VaCardContent class="mt-[-15px]">
            <span>{{ event.title }}</span>
        </VaCardContent>
    </VaCard>
</template>

<script setup lang="ts">
defineProps({
    event:{
        required: true,
        type: Object
    }
})

</script>
  
<style scoped>
.hover-effect {
  transition: transform 0.3s ease;
}

.hover-effect:hover {
  transform: scale(1.05);
}

.title{
    color: var(--va-primary);
    font-size: 2vh;
}
</style>
<!-- 
<VaIcon color="primary"><ion-icon name="person"></ion-icon></VaIcon>
{{ event.date }} <br> {{ event.local }} -->