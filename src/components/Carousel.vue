<template>
    <VaCarousel v-model="value" :items="item" arrows indicators autoscroll stateful infinite>
    </VaCarousel>
</template>
  
<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const value =  ref(0);
const item = ["https://picsum.photos/1500",
        "https://picsum.photos/1501",
        "https://picsum.photos/1502",
        "https://picsum.photos/1503",
        "https://picsum.photos/1504",]

defineProps({
    event:{
        required: true,
        type: Object
    }
})

</script>