<script setup lang="ts">
import { FullscreenModal, globalModal } from '#/modal';
import NotFound from '#/common/NotFound.vue';
import PageHome from '@/pages/PageHome.vue';
import PageInformatics from './pages/PageInformatics.vue';
import PageUserView from '@/pages/PageUserView.vue';
import PageLogin from '#/common-pages/PageLogin.vue';
import { ref, watch } from 'vue';
import { useLoginEnforcer } from '#/modules/LoginEnforcer';
import { useServerState } from '#/modules/ServerState';
import { useAccountManager } from '#/modules/AccountManager';
import { useContestManager } from '#/modules/ContestManager';

const modalComponent = ref<InstanceType<typeof FullscreenModal>>();

const loginEnforcer = useLoginEnforcer();
const serverState = useServerState();
const accountManager = useAccountManager();
const contestManager = useContestManager();
loginEnforcer.init();
serverState.init();
accountManager.init();
contestManager.init();

const modal = globalModal();
watch(() => modalComponent.value, () => {
    if (modalComponent.value != undefined) modal.setModal(modalComponent.value);
});

window.addEventListener('error', (err) => {
    modal.showModal({ title: 'An Error Occured', content: `<span style="color: red;">${err.message}<br>${err.filename} ${err.lineno}:${err.colno}</span>`, color: 'red' });
});
</script>

<template name="app">
    <NotFound></NotFound>
    <PageHome></PageHome>
    <PageInformatics></PageInformatics>
    <PageUserView></PageUserView>
    <PageLogin></PageLogin>
    <FullscreenModal ref="modalComponent"></FullscreenModal>
</template>