<script setup lang="ts">
import ContactFooter from '#/common/ContactFooter.vue';
import HomeAboutCreditsCard from '#/components/home/about/HomeAboutCreditsCard.vue';
import { GlitchText } from '#/text';
</script>

<template>
    <div class="fullBlock">
        <GlitchText text="WWPPC Math Team" class="aboutTitle" font-size="var(--font-title)" color="#0CF" shadow glow :steps=2 :delay=10 random on-visible></GlitchText>
        <div class="aboutCreditsTable">
            <HomeAboutCreditsCard name="Rishikesh Anabathula" username="wwppc-rishikesh" roles="Project Lead<br>Problemsetter" img="/img/rishikesh-anabathula.png" grade="Rising Senior (HSS)" codeforces="CutSandstone" github="CutSandstone" discord="559131662143979534" bio="USACO Platinum, running enjoyer, AIME qualifier, leetcoder. Also likes short biographies, so I made this long sentence for him." external></HomeAboutCreditsCard>
            <HomeAboutCreditsCard name="Likhith Malipati" username="idk" roles="insert roles here" img="/img/likhith-malipati.png" grade="Rising Junior (HSS)" codeforces="likmcamc" aops="391258" discord="758663726248361995" bio="USACO Silver and made AIME since 7th grade, Qualified for USAMO and USAJMO. HSS Math club president. Loves to play tennis in his free time. Can't write a description so rishikesh had to do it for him" external></HomeAboutCreditsCard>
            <HomeAboutCreditsCard name="Ishan Raghavendra" username="idk" roles="insert roles here" img="/img/ishan-raghavendra.jpg" grade="Rising Senior (HSS)" aops="" discord="558768553768255529" bio="Ishan is a rising senior at High School South. He was the secretary of math club last year and has participated in many competitions - achieving numerous high placements, including a 141 on the AMC12 in the top 0.5%. He will be taking courses at Princeton next year. Outside of academics, you can probably find him playing video games." external></HomeAboutCreditsCard>
            <HomeAboutCreditsCard name="Arav Maheria" username="amaheria" roles="insert roles here" img="/img/arav-maheria.jpg" grade="Rising Junior (HSS)" aops="502360" discord="713520364893765693" bio="A rising junior at High School South. Participated in math competitions like AMC, AIME, MMATHS, and CMIMC, and also attend coding competitions like PClassic and Cornell. For fun, spends time outdoors and loves taking photos for fun." external></HomeAboutCreditsCard>
            <HomeAboutCreditsCard name="Sujay Konda" username="kondasujay2" roles="insert roles here" img="/img/sujay-konda.jpg" grade="Rising Senior (HSN)" codeforces="kondasujay2" discord="459441516943900685" bio="USACO Finalist and FTC Team don't blink member. type shi someone finish this bio for me" external></HomeAboutCreditsCard>
            <HomeAboutCreditsCard name="Maitian Sha" username="sp" roles="Problemsetter" img="/img/maitian-sha.jpg" grade="Rising Junior (HSS)" codeforces="spuh" aops="452171" github="SampleProvider" discord="706967946198777867" youtube="watch?v=dQw4w9WgXcQ" bio="sp confirmed! Probably qualified for AIME in 6th grade. Also 2x WRO Future Engineers Internationals Top 4 (Team SPARK) and USACO gold. Battlecode 2024 HS 3rd place and made USAJMO as well." external></HomeAboutCreditsCard>
            <HomeAboutCreditsCard name="Suhas Kondapalli" username="sklent" roles="insert roles here" img="/img/suhas-kondapalli.jpg" grade="Rising Senior" aops="393427" github="sukon767" discord="709464594812239872" bio="Suhas is an avid problem solver and rising senior at High School South. He has attended many college competitions, including HMMT, PuMaC, and ARML, and qualified for and scored a 9 on the AIME. In his free time, you can find him playing Chopin or listening to weird music." external></HomeAboutCreditsCard>
            <HomeAboutCreditsCard name="Jie Gao" username="spsquared" roles="Development Lead<br>Website Developer<br>Contest Backend Developer" img="/img/jie-gao.jpg" grade="Rising Senior (HSS)" github="spsquared" discord="587770060462882854" youtube="@sp-squared?sub_confirmation=1" bio="Full stack JavaScript main and robotics nerd. 2x WRO Future Engineers Internationals Top 4 (Team SPARK) and Battlecode 2024 HS 3rd place. Made and maintains most of the website frontend and servers." external></HomeAboutCreditsCard>

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