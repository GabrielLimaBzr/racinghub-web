<template>
    <div>
        <div class="mb-5">
            <p class="apr">
                <span class="apr-title">
                    <VaIcon size="large"><ion-icon name="caret-forward-outline"></ion-icon></VaIcon>
                    Evento X
                </span>
            </p>
            <VaDivider />
        </div>
        <div>
            <div>
                <VaCard>
                    <VaImage src="https://picsum.photos/400/200" class="h-80" />
                    <VaCardContent>
                        <div>
                            <div class="mb-5">
                                <p class="apr">
                                    <span class="apr-title">
                                        <VaIcon size="large"><ion-icon name="caret-forward-outline"></ion-icon></VaIcon>
                                        Evento X
                                    </span>
                                </p>
                                <VaDivider />
                            </div>
                        </div>
                    </VaCardContent>
                </VaCard>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.apr {
    height: 40px;
    line-height: 60px;
    vertical-align: middle;
    color: var(--va-primary);

    .apr-title {
        font-weight: 700;
        font-size: 20px;
    }
}
</style>