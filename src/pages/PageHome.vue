<script setup lang="ts">
import { isDev } from '#/index';
import { PanelBody, PanelHeader, PanelMain, PanelNavButton, PanelNavList, PanelRightList, PanelView, PanelNavLargeLogo } from '#/panels';
import UserDisp from '@/components/common/UserDisp.vue';
import PagePanelHomeHome from '@/pages/home/PagePanelHomeHome.vue';
import PagePanelHomeAbout from '@/pages/home/PagePanelHomeAbout.vue';
</script>

<template>
    <PanelView name="home" title="WWPPC Math" is-default>
        <PanelHeader>
            <PanelNavLargeLogo></PanelNavLargeLogo>
            <PanelNavList>
                <PanelNavButton text="Home" for="/home/home" is-default></PanelNavButton>
                <PanelNavButton text="WWPPC Home" :for="isDev ? 'http://localhost:5173' : 'https://wwppc.tech'" link></PanelNavButton>
                <PanelNavButton text="About Us" for="/home/about"></PanelNavButton>
            </PanelNavList>
            <PanelRightList>
                <UserDisp></UserDisp>
            </PanelRightList>
        </PanelHeader>
        <PanelMain>
            <PanelBody name="home" title="Home" is-default scroll-snap>
                <PagePanelHomeHome></PagePanelHomeHome>
            </PanelBody>
            <PanelBody name="about" title="About">
                <PagePanelHomeAbout></PagePanelHomeAbout>
            </PanelBody>
        </PanelMain>
    </PanelView>
</template>

<style scoped></style>