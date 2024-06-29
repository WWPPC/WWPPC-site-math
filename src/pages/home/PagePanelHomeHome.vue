<script setup lang="ts">
import ScrollIndicator from '#/common/ScrollIndicator.vue';
import { AnimateInContainer, CenteredContainer, DoubleCutCornerContainer } from '#/containers';
import { GlowText, GlitchText } from '#/text';
import { InputLinkButton, InputIconButton } from '#/inputs';
import LineDivider from '#/common/LineDivider.vue';
import HomeSponsorLogo from '@/components/home/home/HomeSponsorLogo.vue';
import ContactFooter from '#/common/ContactFooter.vue';
</script>

<template>
    <div class="fullBlock homeBlock">
        <GlitchText text="WWPPC Math" class="homeTitle" font-size="var(--font-huge-title)" color="#0CF" glow shadow :delay=10 :steps=2 random on-visible></GlitchText>
        <div class="homeColumns">
            <AnimateInContainer type="slideUp" show-on-screen :delay=100>
                <DoubleCutCornerContainer height="100%" hover-animation="lift">
                    <CenteredContainer height="100%">
                        <div class="homeVertical">
                            <div style="flex-grow: 1;">
                                <GlitchText text="WWPMI" font-size="var(--font-subtitle)" color="#0CF" glow shadow :steps=3 :delay=10 random></GlitchText>
                                <GlitchText text="06/27/2024" font-size="var(--font-subsubtitle)" color="#F0C" glow random flashing :delay=10 start-glitched></GlitchText>
                                <LineDivider color="#AAA"></LineDivider>
                                <p>
                                    WWPMI
                                </p>
                            </div>
                            <div style="display: flex; flex-direction: column;">
                                <GlowText text="" font-size="var(--font-28)" color="lime" glow flashing></GlowText>
                                <GlitchText text="Coming soon!" font-size="var(--font-28)" color="#F0C" glow flashing random></GlitchText>
                                <div class="centered" style="margin-top: 0.5em;">
                                    <AnimateInContainer type="fade" :delay=400>
                                        <RouterLink to="/informatics" no-deco>
                                            <InputLinkButton text="Contest Page" font-size="var(--font-large)" color="#0CF" disabled></InputLinkButton>
                                        </RouterLink>
                                    </AnimateInContainer>
                                </div>
                            </div>
                        </div>
                    </CenteredContainer>
                </DoubleCutCornerContainer>
            </AnimateInContainer>
            <AnimateInContainer type="slideUp" show-on-screen :delay=200>
                <DoubleCutCornerContainer height="100%" hover-animation="lift">
                    <CenteredContainer height="100%">
                        <div class="homeVertical">
                            <div style="flex-grow: 1;">
                                <GlitchText text="WWPMT" font-size="var(--font-subtitle)" color="#0CF" glow shadow :steps=3 :delay=10 random></GlitchText>
                                <GlitchText text="??/??/????" font-size="var(--font-subsubtitle)" color="#F0C" glow :steps=1 :delay=Infinity start-glitched></GlitchText>
                                <LineDivider color="#AAA"></LineDivider>
                                <p>
                                    WWPMT
                                </p>
                            </div>
                            <div style="display: flex; flex-direction: column;">
                                <GlitchText text="Coming soon!" font-size="var(--font-28)" color="#F0C" glow flashing random></GlitchText>
                                <div class="centered" style="margin-top: 0.5em;">
                                    <AnimateInContainer type="fade" :delay=400>
                                        <RouterLink to="tournament">
                                            <InputLinkButton text="Contest Page" font-size="var(--font-large)" color="#0CF" disabled></InputLinkButton>
                                        </RouterLink>
                                    </AnimateInContainer>
                                </div>
                            </div>
                        </div>
                    </CenteredContainer>
                </DoubleCutCornerContainer>
            </AnimateInContainer>
        </div>
        <ScrollIndicator anchor="a[name=pageHomeScrollTo]"></ScrollIndicator>
    </div>
    <div class="fullBlock homeBlock">
        <a name="pageHomeScrollTo"></a>
        <div class="centered">
            <GlitchText text="About WWPPC Math" font-size="var(--font-title)" color="#0CF" glow shadow random :steps=2 on-visible></GlitchText>
        </div>
        <!-- RESTRUCTURE THIS TO MAKE IT DIFFERENT -->
        <!-- RESTRUCTURE THIS TO MAKE IT DIFFERENT -->
        <!-- RESTRUCTURE THIS TO MAKE IT DIFFERENT -->
        <!-- RESTRUCTURE THIS TO MAKE IT DIFFERENT -->
        <!-- RESTRUCTURE THIS TO MAKE IT DIFFERENT -->
        <!-- RESTRUCTURE THIS TO MAKE IT DIFFERENT -->
        <!-- RESTRUCTURE THIS TO MAKE IT DIFFERENT -->
        <!-- RESTRUCTURE THIS TO MAKE IT DIFFERENT -->
        <!-- RESTRUCTURE THIS TO MAKE IT DIFFERENT -->
        <!-- RESTRUCTURE THIS TO MAKE IT DIFFERENT -->
        <div class="homeGeneralInfoColumns" style="font-size: var(--font-medium);">
            <AnimateInContainer type="slideUp" show-on-screen style="grid-row: span 2;">
                <DoubleCutCornerContainer height="100%" hover-animation="lift">
                    <div class="centered" style="height: 4em;">
                        <img src="/icon2.png">
                    </div>
                    <p style="text-wrap: balanced;">
                        about math stuff
                    </p>
                </DoubleCutCornerContainer>
            </AnimateInContainer>
            <AnimateInContainer type="slideUp" show-on-screen>
                <DoubleCutCornerContainer height="100%" hover-animation="lift">
                    <p style="text-wrap: balanced;">
                        link back to wwppc here
                    </p>
                    <p style="text-wrap: balanced; color: #0CF;">
                        WWPPC is a 501c3 nonprofit organization.
                    </p>
                </DoubleCutCornerContainer>
            </AnimateInContainer>
            <AnimateInContainer type="slideUp" show-on-screen style="grid-row: span 2;">
                <DoubleCutCornerContainer height="100%" hover-animation="lift">
                    <p style="text-wrap: balance; font-size: var(--font-20);">
                        <span style="color: #0CF;">WWPPC</span>:
                        West Windsor-Plainsboro Programming Contests
                    </p>
                    <LineDivider></LineDivider>
                    <p style="text-wrap: balance; font-size: var(--font-16);">
                        <i>WWPPC is not affiliated with or endorsed by the West Windsor-Plainsboro Regional School District</i>
                    </p>
                </DoubleCutCornerContainer>
            </AnimateInContainer>
            <AnimateInContainer type="slideUp" show-on-screen>
                <DoubleCutCornerContainer height="100%" hover-animation="lift">
                    <div style="text-align: center;">
                        <a href="https://discord.wwppc.tech" target="_blank" class="centered" style="text-decoration: none;">
                            <InputIconButton text="Join us on Discord!" img="/img/discord-logo.svg" color="#0CF" font-size="var(--font-medium)" img-hover-color="#5865F2"></InputIconButton>
                        </a>
                        <div style="height: 0.5em;"></div>
                        <a href="https://github.com/WWPPC" target="_blank" class="centered" style="text-decoration: none;">
                            <InputIconButton text="GitHub" img="/img/github-logo.svg" color="#0CF" font-size="var(--font-medium)" img-hover-color="#F05032"></InputIconButton>
                        </a>
                    </div>
                </DoubleCutCornerContainer>
            </AnimateInContainer>
        </div>
        <ScrollIndicator anchor="a[name=pageHomeScrollTo2]"></ScrollIndicator>
    </div>
    <div class="fullBlock homeBlock">
        <div class="centered">
            <a name="pageHomeScrollTo2"></a>
            <GlitchText text="Sponsors" font-size="var(--font-title)" color="#0CF" glow shadow random :steps=2 on-visible></GlitchText>
        </div>
        <div class="sponsorColumns">
            <div>
                <GlowText text="PARTNERS" font-size="var(--font-huge)" color="#0CF" shadow></GlowText>
                <!-- <HomeSponsorLogo src="/img/cpi-logo.svg" url="https://joincpi.org/" height="12vh"></HomeSponsorLogo> -->
            </div>
            <div>
                <GlowText text="GOLD" font-size="var(--font-huge)" color="#FD0" shadow></GlowText>
                <!-- <HomeSponsorLogo src="/img/x-camp-logo.png" url="https://x-camp.academy/" height="10vh"></HomeSponsorLogo> -->
            </div>
            <div>
                <GlowText text="SILVER" font-size="var(--font-huge)" color="#CCC" shadow></GlowText>
                <!-- <HomeSponsorLogo src="/img/icode-logo.png" url="https://icodeschool.com/" height="10vh"></HomeSponsorLogo> -->
            </div>
        </div>
        <LineDivider color="#AAA"></LineDivider>
        <div class="sponsors">
            <!-- <HomeSponsorLogo src="/img/axure-logo.svg" url="https://axure.com/" height="6vh"></HomeSponsorLogo> -->
        </div>
        <div style="flex-grow: 1;"></div>
        <ContactFooter></ContactFooter>
    </div>
</template>

<style scoped>
.homeBlock {
    display: flex;
    flex-direction: column;
}

.homeTitle {
    transform-origin: top;
    transform: translate3D(0px, -20vh, -50px) scale(150%);
    z-index: -1;
    text-align: center;
}

.homeColumns {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    row-gap: 24px;
    column-gap: 24px;
    flex-grow: 1;
}

@media (max-width: 100vh) {
    .homeColumns {
        grid-template-columns: 1fr;
        grid-template-rows: min-content min-content;
    }
}

.homeVertical {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-items: stretch;
}

p {
    text-align: center;
}

.homeGeneralInfoColumns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
    flex-grow: 1;
    justify-items: stretch;
    row-gap: 24px;
    column-gap: 24px;
}

.sponsorColumns {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0px 5%;
}

.sponsorColumns>div {
    width: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sponsors {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 25px;
    column-gap: 50px;
    padding: 0px 5%;
}
</style>