<script setup lang="ts">
import ContactFooter from '#/common/ContactFooter.vue';
import HomeAboutCreditsCard from '#/components/home/about/HomeAboutCreditsCard.vue';
import { GlitchText } from '#/text';
</script>

<template>
    <div class="fullBlock">
        <GlitchText text="WWPPC Team" class="aboutTitle" font-size="var(--font-title)" color="#0CF" shadow glow :steps=2 :delay=10 random on-visible></GlitchText>
        <div class="aboutCreditsTable">
            <HomeAboutCreditsCard name="Rishikesh Anabathula" username="wwppc-rishikesh" roles="Project Lead<br>Problemsetter" img="/img/rishikesh-anabathula.jpg" codeforces="CutSandstone" github="CutSandstone" discord="559131662143979534" bio="USACO Platinum, running enjoyer, AIME qualifier, leetcoder. Also likes short biographies, so I made this long sentence for him." external></HomeAboutCreditsCard>
            <HomeAboutCreditsCard name="Jie Gao" username="spsquared" roles="Development Lead<br>Website Developer<br>Contest Backend Developer" img="/img/jie-gao.jpg" github="spsquared" discord="587770060462882854" youtube="@sp-squared?sub_confirmation=1" bio="Full stack JavaScript main and robotics nerd. 2x WRO Future Engineers Internationals Top 4 (Team SPARK) and Battlecode 2024 HS 3rd place. Made and maintains most of the website frontend and servers." external></HomeAboutCreditsCard>
        </div>
        <ContactFooter></ContactFooter>
    </div>
</template>

<style scoped>
.aboutTitle {
    transform-origin: top;
    transform: translate3D(0px, -20vh, -50px) scale(150%);
    z-index: -1;
    text-align: center;
}

.aboutCreditsTable {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    width: 100%;
    justify-items: center;
    row-gap: 24px;
    column-gap: 24px;
}
</style>