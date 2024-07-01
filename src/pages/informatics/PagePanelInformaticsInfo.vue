<script setup lang="ts">
import ContactFooter from '#/common/ContactFooter.vue';
import ScrollIndicator from '#/common/ScrollIndicator.vue';
import { AnimateInContainer, CenteredContainer, TitledDoubleCutCornerContainer, CutCornerContainer, TitledCollapsible } from '#/containers';
import { InputLinkButton } from '#/inputs';
import { GlitchText } from '#/text';
</script>

<template>
    <div class="fullBlock stretchBlock">
        <GlitchText text="WWPMI 2024" class="contestTitle" font-size="var(--font-title)" color="#0CF" shadow glow :steps=2 :delay=10 random on-visible></GlitchText>
        <div class="contestInfoBlock">
            <AnimateInContainer type="slideUp" show-on-screen :delay=100 style="grid-row: span 2;">
                <TitledDoubleCutCornerContainer title="General Information" height="100%" align="center" hover-animation="lift">
                    <p>
                        The WWP Math & Informatics contest (WWPMI) is a combined math and programming contest like Project Euler for high school students in which teams of up to 4 compete to solve 12 problems in 3 hours.
                    </p>
                    <p>
                        The contest will be held online, on this website.
                    </p>
                    <p>
                        <i>Scroll down for more information.</i>
                    </p>
                </TitledDoubleCutCornerContainer>
            </AnimateInContainer>
            <AnimateInContainer type="slideUp" show-on-screen :delay=200>
                <TitledDoubleCutCornerContainer title="WWPMI 2024" height="100%" align="center" hover-animation="lift" flipped>
                    <div class="centered">
                        <GlitchText text="07/27/2024" font-size="var(--font-huge)" color="#F0C" glow random flashing :steps=5 start-glitched></GlitchText>
                    </div>
                </TitledDoubleCutCornerContainer>
            </AnimateInContainer>
            <AnimateInContainer type="slideUp" show-on-screen :delay=300>
                <CutCornerContainer height="100%" hover-animation="lift" vertical-flipped>
                    <CenteredContainer style="font-size: var(--font-20);">
                        <GlitchText text="Registrations open!" font-size="var(--font-28)" color="#0CF" glow flashing random></GlitchText>
                        <div class="centered" style="margin: 8px;">
                            <RouterLink to="/account/registrations" no-deco>
                                <InputLinkButton text="Register" color="#0CF" font-size="var(--font-large)"></InputLinkButton>
                            </RouterLink>
                        </div>
                        <p style="text-align: center; font-size: var(--font-small);">
                            <i>Contest schedule pending</i>
                        </p>
                    </CenteredContainer>
                </CutCornerContainer>
            </AnimateInContainer>
        </div>
        <ScrollIndicator anchor="a[name=pageInformaticsScrollTo]"></ScrollIndicator>
    </div>
    <div class="fullBlock stretchBlock">
        <a name="pageInformaticsScrollTo"></a>
        <CenteredContainer>
            <GlitchText text="FAQ" font-size="var(--font-title)" color="#0CF" glow shadow random :steps=2 :delay=10 on-visible></GlitchText>
        </CenteredContainer>
        <div class="faq">
            <AnimateInContainer type="slideUp" show-on-screen>
                <TitledCollapsible title="When is it?" startCollapsed>
                    <p style="font-size: var(--font-20)">
                        WWPMI 2024 will be on <b>Saturday, July 27</b>
                        <br><br>
                        <i>Contest schedule pending</i>
                    </p>
                </TitledCollapsible>
            </AnimateInContainer>
            <AnimateInContainer type="slideUp" show-on-screen>
                <TitledCollapsible title="What is the expected difficulty?" startCollapsed>
                    <p style="font-size: var(--font-20)">
                        Expect the first few problems to be equivalent to Project Euler's 0-10% difficulty (beginner-level coding problems), and the last few problems to be equivalent to 70-90% difficulty (challenging problems that require advanced math and a lot of coding).
                    </p>
                </TitledCollapsible>
            </AnimateInContainer>
        </div>
        <div class="spacer"></div>
        <ContactFooter></ContactFooter>
    </div>
</template>

<style scoped>
.contestTitle {
    transform-origin: top;
    transform: translate3D(0px, -20vh, -50px) scale(150%);
    z-index: -1;
    text-align: center;
}

.stretchBlock {
    display: flex;
    flex-direction: column;
}

.contestInfoBlock {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: min-content minmax(0, 1fr);
    grid-auto-flow: column dense;
    /* flexbox moment */
    min-height: 0px;
    row-gap: 24px;
    column-gap: 24px;
    flex: 1;
}

.contestInfoBlock>div {
    height: 100%;
}

.scheduleBlock {
    display: grid;
    grid-template-columns: min-content 1fr;
    row-gap: 16px;
    column-gap: 16px;
    flex-grow: 1;
}

@media (max-width: 100vh) {
    .contestInfoBlock {
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: repeat(4, min-content);
        grid-auto-flow: column;
        min-height: min-content;
    }

    .scheduleBlock {
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: min-content min-content;
    }
}

.contestWinnerTable {
    display: grid;
    grid-template-columns: 2em 1fr;
    font-size: var(--font-40);
}

.contestWinnerTable>span:nth-child(even) {
    color: lime;
    text-decoration: underline;
    cursor: pointer;
}

.winnersBlock {
    grid-auto-flow: row dense;
    grid-template-rows: minmax(0, 1fr) min-content;
}

.winnersBlock>div:nth-child(3) {
    grid-column: span 2;
}

@media (max-width: 100vh) {
    .winnersBlock>div:nth-child(3) {
        grid-column: 1;
    }
}

.scheduleHeader {
    padding: 4px 4px;
    border-bottom: 4px solid white;
    background-color: #222;
    text-align: center;
    font-size: var(--font-medium);
    font-weight: bold;
}

.scheduleRow {
    display: flex;
    flex-direction: row;
    margin: 0px 4px;
    align-items: center;
    font-size: var(--font-20);
    text-wrap: nowrap;
    word-wrap: none;
}

.scheduleRow>div:nth-child(1) {
    text-align: right;
    width: 5.2em;
}

.scheduleRow>div:nth-child(2) {
    font-weight: 900;
    margin: 0px 0.4em;
    color: #AAA;
}

.faq {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
    grid-auto-flow: dense;
    width: 100%;
    row-gap: 24px;
    column-gap: 24px;
}

ul>li {
    margin-bottom: 0.5em;
}

.spacer {
    flex-grow: 1;
}
</style>