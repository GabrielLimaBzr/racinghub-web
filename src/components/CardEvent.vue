<template>
    <VaCard>
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
    data() {
        return {
            search: ""
        }
    },
    props: {
        event: {
            type: Object,
            required: true
        }
    }
}

</script>
  
<style scoped></style>