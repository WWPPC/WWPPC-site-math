<script setup lang="ts">
import ContactFooter from '#/common/ContactFooter.vue';
import ScrollIndicator from '#/common/ScrollIndicator.vue';
import { AnimateInContainer, CenteredContainer, TitledDoubleCutCornerContainer, CutCornerContainer, TitledCollapsible } from '#/containers';
import { InputLinkButton } from '#/inputs';
import { GlitchText } from '#/text';
import { MultipaneSelectorContainer, MultipaneSelector, MultipanePaneContainer, MultipanePane } from '#/multipane';
</script>

<template>
    <div class="fullBlock stretchBlock">
        <GlitchText text="WWPMI 2024" class="contestTitle" font-size="var(--font-title)" color="#0CF" shadow glow :steps=2 :delay=10 random on-visible></GlitchText>
        <div class="contestInfoBlock">
            <AnimateInContainer type="slideUp" show-on-screen :delay=100 style="grid-row: span 2;">
                <TitledDoubleCutCornerContainer title="General Information" height="100%" align="center" hover-animation="lift">
                    <p>
                        The WWP Math & Informatics contest (WWPMI) is a combined math and programming contest for high school students in which teams of up to 4 compete to solve 12 problems in 3 hours.
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
                        <GlitchText text="08/10/2024" font-size="var(--font-huge)" color="#F0C" glow random flashing :steps=5 start-glitched></GlitchText>
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
        <a name="pageContestScrollTo3"></a>
        <CenteredContainer>
            <GlitchText text="Schedule" font-size="var(--font-title)" color="#0CF" glow shadow random :steps=2 on-visible></GlitchText>
        </CenteredContainer>
        <div class="scheduleBlock">
            <AnimateInContainer type="slideUp" show-on-screen>
                <CutCornerContainer height="100%" flipped no-padding hover-animation="lift">
                    <MultipaneSelectorContainer for="contestSchedule">
                        <div class="scheduleHeader">
                            August 10
                        </div>
                        <br>
                        <MultipaneSelector for="openingCeremonies">
                            <div class="scheduleRow">
                                <div>2:00 - 2:30</div>
                                <div>|</div>
                                <div>Opening Ceremonies</div>
                            </div>
                            <br>
                        </MultipaneSelector>
                        <MultipaneSelector for="contestTime">
                            <div class="scheduleRow">
                                <div>2:30 - 5:30</div>
                                <div>|</div>
                                <div>Contest Time</div>
                            </div>
                            <br>
                        </MultipaneSelector>
                        <!-- <MultipaneSelector for="sponsors">
                            <div class="scheduleRow">
                                <div>6:00-7:00</div>
                                <div>|</div>
                                <div>Sponsor Events</div>
                            </div>
                        </MultipaneSelector> -->
                        <MultipaneSelector for="closingCeremonies">
                            <div class="scheduleRow">
                                <div>6:15 - 6:45</div>
                                <div>|</div>
                                <div>Closing ceremonies</div>
                            </div>
                            <br>
                        </MultipaneSelector>
                    </MultipaneSelectorContainer>
                </CutCornerContainer>
            </AnimateInContainer>
            <AnimateInContainer type="slideUp" show-on-screen :delay=100 style="min-width: 0px; min-height: 15em;">
                <CutCornerContainer height="100%" vertical-flipped no-padding no-scroll style="font-size: var(--font-medium);" hover-animation="lift">
                    <MultipanePaneContainer for="contestSchedule" default="precontest">
                        <MultipanePane for="openingCeremonies">
                            <GlitchText text="Opening Ceremonies" font-size="var(--font-28)" color="#0CF" on-visible></GlitchText>
                            <p>
                                Opening and closing ceremonies will be held on our Discord server!
                            </p>
                            <div class="centered">
                                <a href="https://discord.wwppc.tech" target="_blank" style="text-decoration: none;">
                                    <InputIconButton text="Join us on Discord!" img="/img/discord-logo.svg" color="#0CF" font-size="var(--font-medium)" img-hover-color="#5865F2"></InputIconButton>
                                </a>
                            </div>
                            <p>
                                We'll give more details and instructions on the contest format there.
                            </p>
                            <p style="font-size: var(--font-16)">
                                <i>All times are in Eastern Standard Time (daylight savings)</i>
                            </p>
                        </MultipanePane>
                        <MultipanePane for="contestTime">
                            <GlitchText text="Main Contest Time" font-size="var(--font-28)" color="#0CF" on-visible></GlitchText>
                            <p>
                                The competition will be 3 hours long. Teams of up to 4 will work together to solve roughly 12 problems. 
                            </p>
                            <p style="font-size: var(--font-16)">
                                <i>All times are in Eastern Standard Time (daylight savings)</i>
                            </p>
                        </MultipanePane>
                        <!-- <MultipanePane for="sponsors">
                            <GlitchText text="Sponsor Events" font-size="var(--font-28)" color="#0CF" on-visible></GlitchText>
                            <p>
                                We will be hosting some events by our sponsors!
                                <br><br>
                                During this time, we will also finalize scores and determine the standings.
                            </p>
                            <p style="font-size: var(--font-16)">
                                <i>All times are in Eastern Standard Time (daylight savings)</i>
                            </p>
                        </MultipanePane> -->
                        <MultipanePane for="closingCeremonies">
                            <GlitchText text="Closing Ceremonies" font-size="var(--font-28)" color="#0CF" on-visible></GlitchText>
                            <p>
                                Opening and closing ceremonies will be held on our Discord server!
                            </p>
                            <div class="centered">
                                <a href="https://discord.wwppc.tech" target="_blank" style="text-decoration: none;">
                                    <InputIconButton text="Join us on Discord!" img="/img/discord-logo.svg" color="#0CF" font-size="var(--font-medium)" img-hover-color="#5865F2"></InputIconButton>
                                </a>
                            </div>
                            <p>
                                We will announce the winners for each division before closing off the contest.
                            </p>
                            <p style="font-size: var(--font-16)">
                                <i>All times are in Eastern Standard Time (daylight savings)</i>
                            </p>
                        </MultipanePane>
                    </MultipanePaneContainer>
                </CutCornerContainer>
            </AnimateInContainer>
        </div>
        <ScrollIndicator anchor="a[name=pageContestScrollTo4]"></ScrollIndicator>
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
                        WWPMI 2024 will start on <b>Saturday, August 10, at 2:00 PM (EDT)</b>.
                        <br><br>
                        <i>Scroll up for contest schedule</i>
                    </p>
                </TitledCollapsible>
            </AnimateInContainer>
            <AnimateInContainer type="slideUp" show-on-screen>
                <TitledCollapsible title="How do I compete?" startCollapsed>
                    <p style="font-size: var(--font-20)">
                        You can sign up by <b>creating an account and registering <a href="/account/registrations" target="_blank">HERE</a></b>, NO prerequisites needed!
                    </p>
                </TitledCollapsible>
            </AnimateInContainer>
            <AnimateInContainer type="slideUp" show-on-screen>
                <TitledCollapsible title="Who is eligible for prizes?" startCollapsed>
                    <p style="font-size: var(--font-20)">
                        Currently, we can only guarantee prizes to high school students in the United States.
                    </p>
                </TitledCollapsible>
            </AnimateInContainer>
            <AnimateInContainer type="slideUp" show-on-screen>
                <TitledCollapsible title="Where will it be held?" startCollapsed>
                    <p style="font-size: var(--font-20)">
                        WWPMI will be held on this website!
                        <br><br>
                        You can register <a href="/account/registrations" target="_blank">here</a> at any time before the contest starts.
                    </p>
                </TitledCollapsible>
            </AnimateInContainer>
            <AnimateInContainer type="slideUp" show-on-screen>
                <TitledCollapsible title="What resources are allowed?" startCollapsed>
                    <p style="font-size: var(--font-20)">
                        You can use any resource that was published before the beginning of the contest.
                    </p>
                </TitledCollapsible>
            </AnimateInContainer>
            <AnimateInContainer type="slideUp" show-on-screen>
                <TitledCollapsible title="What languages can I use?" startCollapsed>
                    <p style="font-size: var(--font-20)">
                        You may use any language (e.g. C++, Python, Java) or library (e.g. GMP, Numpy, and Scipy). Similar to Project Euler, submissions will be in the form of a numerical answer (computed through code on your end).
                    </p>
                </TitledCollapsible>
            </AnimateInContainer>
            <AnimateInContainer type="slideUp" show-on-screen>
                <TitledCollapsible title="How can I prepare?" startCollapsed>
                    <p style="font-size: var(--font-20)">
                        For those experienced in programming, helpful resources include <a href="https://projecteuler.net/" target="_blank">Project Euler</a> and <a href="https://codeforces.com" target="_blank">Codeforces</a>.
                        <br><br>
                        To learn C++, see <a href="https://cplusplus.com/doc/tutorial/" target="_blank">CPlusPlus.com</a>. To learn Python, a more beginner-friendly language, the <a href="https://runestone.academy/ns/books/published/thinkcspy/index.html" target="_blank">thinkcspy textbook</a> is useful.
                    </p>
                </TitledCollapsible>
            </AnimateInContainer>
            <AnimateInContainer type="slideUp" show-on-screen>
                <TitledCollapsible title="What is the expected difficulty?" startCollapsed>
                    <p style="font-size: var(--font-20)">
                        Expect the first few problems to be roughly <a href="https://projecteuler.net/" target="_blank">Project Euler's</a> 0-10% difficulty (beginner-level coding problems), and the last few problems to be roughly 70-90% difficulty (challenging problems that require advanced math and a lot of coding).
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
    color: #0CF;
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