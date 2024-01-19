<template>
    <div>
        <VaCarousel v-model="value" :items="item" arrows indicators autoscroll stateful infinite title="home">
        </VaCarousel>
    </div>
</template>
  
<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const value = ref(0);
const item = ["https://picsum.photos/1500",
    "https://picsum.photos/1501",
    "https://picsum.photos/1502",]

defineProps({
    event: {
        required: true,
        type: Object
    }
})

</script>