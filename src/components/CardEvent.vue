<template>
    <VaCard stripe-color="primary" stripe :to="`main/${event.id}`" class="hover-effect">
        <VaImage src="https://picsum.photos/400/200" class="h-52" />
        <VaCardTitle>{{ event.title }}</VaCardTitle>
        <VaCardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </VaCardContent>
    </VaCard>
</template>

<script>
export default {
    name: 'CardEvent',
    props: {
        event: {
            type: Object,
            required: true
        }
    }
}

</script>
  
<style scoped>
.hover-effect {
  transition: transform 0.3s ease;
}

.hover-effect:hover {
  transform: scale(1.1);
}
</style>