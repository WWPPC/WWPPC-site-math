<script setup lang="ts">
import { PanelBody, PanelHeader, PanelMain, PanelNavButton, PanelNavList, PanelRightList, PanelView, PanelNavLargeLogo } from '#/panels';
import UserDisp from '#/common-components/UserDisp.vue';
import { useRoute } from 'vue-router';
import PagePanelInformaticsInfo from './informatics/PagePanelInformaticsInfo.vue';
import { ref, watch } from 'vue';
import { useConnectionEnforcer } from '#/scripts/ConnectionEnforcer';

const route = useRoute();
const ignoreServer = ref(route.query.ignore_server !== undefined);
watch(() => route.query.ignore_server, () => {
    ignoreServer.value = route.query.ignore_server !== undefined;
});

const connectionEnforcer = useConnectionEnforcer();

connectionEnforcer.connectionInclude.add('/informatics');
connectionEnforcer.loginInclude.add('/informatics');
connectionEnforcer.connectionExcludeExact.add('/informatics/home');
connectionEnforcer.loginExcludeExact.add('/informatics/home');
connectionEnforcer.connectionExcludeExact.add('/informatics');
connectionEnforcer.loginExcludeExact.add('/informatics');
</script>

<template>
    <PanelView name="informatics" title="WWPMI">
        <PanelHeader>
            <PanelNavLargeLogo></PanelNavLargeLogo>
            <PanelNavList>
                <PanelNavButton text="Home" for="/home"></PanelNavButton>
                <PanelNavButton text="WWPMI" for="/informatics/home" is-default></PanelNavButton>
            </PanelNavList>
            <PanelRightList>
                <UserDisp></UserDisp>
            </PanelRightList>
        </PanelHeader>
        <PanelMain>
            <PanelBody name="home" title="Home" is-default scroll-snap>
                <PagePanelInformaticsInfo></PagePanelInformaticsInfo>
            </PanelBody>
        </PanelMain>
    </PanelView>
</template>

<style scoped></style>