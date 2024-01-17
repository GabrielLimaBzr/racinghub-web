<template>
    <VaCard :to="`event/${event.id}`" class="m-4 transition ease-in-out delay-50 hover:scale-110 duration-300">
        <VaImage src="https://picsum.photos/400/200" class="h-32" />
        <VaCardTitle class="title">
            <div class="flex items-center w-full">
                <span class="info">
                    <VaIcon size="small" color="primary"><ion-icon name="calendar-outline"></ion-icon></VaIcon> {{
                        event.date }}
                </span>

                <VaDivider :vertical="true" color="primary" :inset="true" />

                <span class="info">
                    <VaIcon size="small" color="primary"><ion-icon name="location-outline"></ion-icon></VaIcon> {{
                        event.local }}
                </span>
            </div>
        </VaCardTitle>

        <VaDivider :vertical="false" color="primary" :inset="true" />

        <VaCardContent class="mt-[-15px]">
            <span>{{ event.title }}</span>
        </VaCardContent>
    </VaCard>
</template>

<script setup lang="ts">
defineProps({
    event: {
        required: true,
        type: Object
    }
})

</script>
  
<style scoped>
.title {
    color: var(--va-primary);
    font-size: 2vh;
}


.info {
    font-size: 0.9rem;
}

.va-card-title{
    padding-bottom: 0.1rem;
    padding-top: 0.5rem;
}

.va-card__content{
    padding-bottom: 0.9rem;
    padding-top: 0.9rem; 
}

</style>