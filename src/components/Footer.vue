<template>
    <div class="footer">
        <div class="footer-content px-20">
            <div class="my-4">
                <VaDivider />
            </div>
        </div>
        <div class="footer-end">
            <span>All Rights Reserved 2023</span>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
    background-color: var(--va-secondary);
    color: #fff;
    position: relative;
    bottom: 0;
    width: 100%;

    .footer-content {}

    .footer-end {
        width: 100%;
        background-color: var(--va-primary);
        text-align: center;
    }
}
</style>