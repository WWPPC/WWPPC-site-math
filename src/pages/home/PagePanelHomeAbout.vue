<script setup lang="ts">
import ContactFooter from '#/common/ContactFooter.vue';
import HomeAboutCreditsCard from '#/common-components/home/about/HomeAboutCreditsCard.vue';
import { GlitchText } from '#/text';
</script>

<template>
    <div class="fullBlock">
        <GlitchText text="WWPPC Math Team" class="aboutTitle" font-size="var(--font-title)" color="#0CF" shadow glow :steps=2 :delay=10 random on-visible></GlitchText>
        <div class="aboutCreditsTable">
            <HomeAboutCreditsCard name="Rishikesh Anabathula" username="wwppc-rishikesh" roles="WWPPC & WWPMI Lead<br>Problemsetter<br>Logistics & Outreach" img="/img/rishikesh-anabathula.png" grade="Rising Senior (HSS)" codeforces="CutSandstone" github="CutSandstone" discord="559131662143979534" bio="USACO Platinum, running enjoyer, AIME qualifier, leetcoder. Also likes short biographies, so I made this long sentence for him." external></HomeAboutCreditsCard>
            <HomeAboutCreditsCard name="Suvanth Erranki" username="susvant" roles="Problemsetter<br>Logistics & Outreach" img="/img/suvanth-erranki.jpg" grade="Rising Junior (HSS)" codeforces="susvant" github="Suvanth-Erranki" discord="812014506724556820" bio="omg susvant! Usaco Silver, CF expert and enthusiast, Battlecode 2024 HS 3rd place"></HomeAboutCreditsCard>
            <HomeAboutCreditsCard name="Suhas Kondapalli" username="sklent" roles="Problemsetter" img="/img/suhas-kondapalli.jpg" grade="Rising Senior (HSS)" aops="393427" github="sukon767" discord="709464594812239872" bio="Suhas is an avid problem solver and rising senior at High School South. He has attended many college competitions, including HMMT, PuMaC, and ARML, and qualified for and scored a 9 on the AIME. In his free time, you can find him playing Chopin or listening to weird music." external></HomeAboutCreditsCard>
            <HomeAboutCreditsCard name="Erik Ji" username="erikji" roles="Problemsetter<br>Logistics & Outreach" img="/img/erik-ji.jpg" grade="Rising Junior (HSS)" codeforces="passwordisa" github="erikji" discord="688018118492291080" bio="Candidate Master on Codeforces and qualified for AIME in 8th grade. (Still stuck in Silver despite that) Battlecode 2024 HS 3rd place."></HomeAboutCreditsCard>
            <HomeAboutCreditsCard name="Jie Gao" username="spsquared" roles="Development Lead<br>Website Developer<br>Contest Backend Developer" img="/img/jie-gao.jpg" grade="Rising Senior (HSS)" github="spsquared" discord="587770060462882854" youtube="@sp-squared?sub_confirmation=1" bio="Full stack JavaScript main and robotics nerd. 2x WRO Future Engineers Internationals Top 4 (Team SPARK) and Battlecode 2024 HS 3rd place. Made and maintains most of the website frontend and servers." external></HomeAboutCreditsCard>
            <HomeAboutCreditsCard name="Ishan Raghavendra" username="isr" roles="Problemsetter" img="/img/ishan-raghavendra.jpg" grade="Rising Senior (HSS)" aops="" discord="558768553768255529" bio="He was the secretary of math club last year and has participated in many competitions - achieving numerous high placements, including a 141 on the AMC12 in the top 0.5%. He will be taking courses at Princeton next year." external></HomeAboutCreditsCard>
            <HomeAboutCreditsCard name="Vikram Karamsetty" username="vikramk" roles="Logistics & Outreach" img="/img/vikram-karamsetty.jpeg" grade="Rising Junior (HSS)" github="VikramKaramsetty" discord="660497297074814976" bio="avid programmer (usaco silver), dedicated roboticist (First Tech Challenge #14481), track runner, problem solver, and engineer!"></HomeAboutCreditsCard>
            
            <!-- <HomeAboutCreditsCard name="asdf" username="asdf" roles="insert roles here" img="/img/asdf.jpg" grade="Rising asdf" codeforces="asdf" aops="adsf" github="asdf" discord="asdf" bio="" external></HomeAboutCreditsCard> -->
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