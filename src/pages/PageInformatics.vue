<script setup lang="ts">
import { PanelBody, PanelHeader, PanelMain, PanelNavButton, PanelNavList, PanelRightList, PanelView, PanelNavLargeLogo } from '#/panels';
import UserDisp from '#/common-components/UserDisp.vue';
import { useRoute } from 'vue-router';
import PagePanelInformaticsInfo from './informatics/PagePanelInformaticsInfo.vue';
import PagePanelContestContest from '#/common-pages/contest/PagePanelContestContest.vue';
import PagePanelContestProblemList from '#/common-pages/contest/PagePanelContestProblemList.vue';
import PagePanelContestProblemView from '#/common-pages/contest/PagePanelContestProblemView.vue';
import PagePanelContestLeaderboard from '#/common-pages/contest/PagePanelContestLeaderboard.vue';
import ContestTimer from '#/common-components/contest/ContestTimer.vue';
import { ref, watch } from 'vue';
import { useContestManager } from '#/modules/ContestManager';
import { useLoginEnforcer } from '#/modules/LoginEnforcer';

const route = useRoute();
const ignoreServer = ref(route.query.ignore_server !== undefined);
watch(() => route.query.ignore_server, () => {
    ignoreServer.value = route.query.ignore_server !== undefined;
});

const loginEnforcer = useLoginEnforcer();
const contestManager = useContestManager();

loginEnforcer.include.add('/contest');
loginEnforcer.excludeExact.add('/contest/home');
loginEnforcer.excludeExact.add('/contest');
</script>

<template>
    <PanelView name="contest" title="WWPMI">
        <PanelHeader>
            <PanelNavLargeLogo></PanelNavLargeLogo>
            <PanelNavList>
                <PanelNavButton text="Home" for="/home"></PanelNavButton>
                <PanelNavButton text="WWPMI" for="/contest/home" is-default></PanelNavButton>
                <div v-if="contestManager.contests.WWPMI != null || ignoreServer" style="display: flex;">
                    <PanelNavButton text="Contest" for="/contest/contest"></PanelNavButton>
                    <PanelNavButton text="Problems" for="/contest/problemList"></PanelNavButton>
                    <PanelNavButton text="Leaderboard" for="/contest/leaderboard"></PanelNavButton>
                </div>
            </PanelNavList>
            <PanelRightList>
                <UserDisp></UserDisp>
                <ContestTimer contest="WWPMI"></ContestTimer>
            </PanelRightList>
        </PanelHeader>
        <PanelMain>
            <PanelBody name="home" title="Home" is-default scroll-snap>
                <PagePanelInformaticsInfo></PagePanelInformaticsInfo>
            </PanelBody>
            <PanelBody name="contest" title="Contest" scroll-snap>
                <PagePanelContestContest contest="WWPMI"></PagePanelContestContest>
            </PanelBody>
            <PanelBody name="problemList" title="Problem List">
                <PagePanelContestProblemList contest="WWPMI"></PagePanelContestProblemList>
            </PanelBody>
            <PanelBody name="problemView" title="Problem">
                <PagePanelContestProblemView contest="WWPMI"></PagePanelContestProblemView>
            </PanelBody>
            <PanelBody name="leaderboard" title="Leaderboard">
                <PagePanelContestLeaderboard contest="WWPMI"></PagePanelContestLeaderboard>
            </PanelBody>
        </PanelMain>
    </PanelView>
</template>

<style scoped></style>