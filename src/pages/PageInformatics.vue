<script setup lang="ts">
import { PanelBody, PanelHeader, PanelMain, PanelNavButton, PanelNavList, PanelRightList, PanelView, PanelNavLargeLogo } from '#/panels';
import UserDisp from '#/common-components/UserDisp.vue';
import { useRoute } from 'vue-router';
import PagePanelInformaticsInfo from './informatics/PagePanelInformaticsInfo.vue';
import PagePanelContestContest from '#/common-pages/contest/PagePanelContestContest.vue';
import PagePanelContestProblemList from '#/common-pages/contest/PagePanelContestProblemList.vue';
import PagePanelContestProblemView from '#/common-pages/contest/PagePanelContestProblemView.vue';
import PagePanelContestLeaderboard from '#/common-pages/contest/PagePanelContestLeaderboard.vue';
import { ref, watch } from 'vue';
import { useConnectionEnforcer } from '#/scripts/ConnectionEnforcer';
import { useContestManager } from '#/scripts/ContestManager';

const route = useRoute();
const ignoreServer = ref(route.query.ignore_server !== undefined);
watch(() => route.query.ignore_server, () => {
    ignoreServer.value = route.query.ignore_server !== undefined;
});

const connectionEnforcer = useConnectionEnforcer();
const contestManager = useContestManager();

connectionEnforcer.connectionInclude.add('/informatics');
connectionEnforcer.loginInclude.add('/informatics');
connectionEnforcer.connectionExcludeExact.add('/informatics/home');
connectionEnforcer.loginExcludeExact.add('/informatics/home');
connectionEnforcer.connectionExcludeExact.add('/informatics');
connectionEnforcer.loginExcludeExact.add('/informatics');
setInterval(() => {
    console.log(contestManager.contests.WWPMI?.contest)
}, 1000)
</script>

<template>
    <PanelView name="informatics" title="WWPMI">
        <PanelHeader>
            <PanelNavLargeLogo></PanelNavLargeLogo>
            <PanelNavList>
                <PanelNavButton text="Home" for="/home"></PanelNavButton>
                <PanelNavButton text="WWPMI" for="/informatics/home" is-default></PanelNavButton>
                <div v-if="contestManager.contests.WWPMI?.contest != null || ignoreServer" style="display: flex;">
                    <PanelNavButton text="Contest" for="/informatics/contest"></PanelNavButton>
                    <PanelNavButton text="Problems" for="/informatics/problemList"></PanelNavButton>
                    <PanelNavButton text="Leaderboard" for="/informatics/leaderboard"></PanelNavButton>
                </div>
            </PanelNavList>
            <PanelRightList>
                <UserDisp></UserDisp>
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