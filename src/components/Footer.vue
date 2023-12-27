<template>
    <div class="footer">
        <div class="footer-content px-20">
            <div class="my-10">
                <VaDivider />
            </div>
            <div class="grid grid-cols-5 gap-4 mb-5">
                <div class="col-span-3">
                    <RouterLink class="logo" to="/">LOGO</RouterLink>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat
                        pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque cumque
                        eum delectus sint!</p>
                </div>
                <div class="col-span-1">
                    <VaList fit>
                        <VaListLabel> Links Úteis </VaListLabel>

                        <VaListItem style="color: aliceblue;">
                            <VaListItemSection>
                                <VaListItemLabel caption>
                                    <RouterLink to="/">Test 1</RouterLink>
                                </VaListItemLabel>
                            </VaListItemSection>
                        </VaListItem>

                        <VaListItem>
                            <VaListItemSection>
                                <VaListItemLabel caption>
                                    <RouterLink to="/">Test 1</RouterLink>
                                </VaListItemLabel>
                            </VaListItemSection>
                        </VaListItem>

                        <VaListItem>
                            <VaListItemSection>
                                <VaListItemLabel caption>
                                    <RouterLink to="/">Test 1</RouterLink>
                                </VaListItemLabel>
                            </VaListItemSection>
                        </VaListItem>
                    </VaList>
                </div>
                <div class="col-span-1">
                    <VaList fit>
                        <VaListLabel> Links Úteis </VaListLabel>

                        <VaListItem>
                            <VaListItemSection>
                                <VaListItemLabel :lines="true">
                                    <RouterLink to="/">Test 1</RouterLink>
                                </VaListItemLabel>
                            </VaListItemSection>
                        </VaListItem>

                        <VaListItem>
                            <VaListItemSection>
                                <VaListItemLabel>
                                    <RouterLink to="/">Test 1</RouterLink>
                                </VaListItemLabel>
                            </VaListItemSection>
                        </VaListItem>

                        <VaListItem>
                            <VaListItemSection>
                                <VaListItemLabel>
                                    <RouterLink to="/">Test 1</RouterLink>
                                </VaListItemLabel>
                            </VaListItemSection>
                        </VaListItem>
                    </VaList>
                </div>
            </div>
        </div>
        <div class="footer-end">
            <span>© All Rights Reserved 2023</span>
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

    .footer-end {
        width: 100%;
        background-color: var(--va-primary);
        text-align: center;
    }
}

.logo {
    font-weight: 600;
    font-size: 1.5rem;
}
</style>