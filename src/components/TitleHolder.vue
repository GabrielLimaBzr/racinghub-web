<template>
    <div>
        <div class="mb-5">
            <p class="apr">
                <span class="apr-title">
                    <VaIcon size="large"><ion-icon name="caret-forward-outline"></ion-icon></VaIcon>
                    {{ title }}
                </span>
            </p>
            <VaDivider />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(['title']);
</script>
  
<style scoped lang="scss">

.apr {
    height: 40px;
    line-height: 60px;
    vertical-align: middle;
    color: var(--va-primary);

    .apr-title {
        font-weight: 700;
        font-size: 1em;
    }
}
</style>
  