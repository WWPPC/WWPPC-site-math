<script setup lang="ts">
import { PanelBody, PanelHeader, PanelMain, PanelView, PanelNavLargeLogo } from '#/panels';
import { InputButton, InputTextBox } from '#/inputs';
import LoadingCover from '#/common/LoadingCover.vue';
import WaitCover from '#/common/WaitCover.vue';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { globalModal } from '#/modal';
import { useServerConnection, getAccountOpMessage } from '#/scripts/ServerConnection';
import { useAccountManager, validateCredentials } from '#/scripts/AccountManager';
import { useConnectionEnforcer } from '#/scripts/ConnectionEnforcer';
import recaptcha from '#/scripts/recaptcha';
import { isDev } from '#/index';

const router = useRouter();
const route = useRoute();

// connection modals
const modal = globalModal();
const serverConnection = useServerConnection();
const connectionEnforcer = useConnectionEnforcer();
const accountManager = useAccountManager();

connectionEnforcer.connectionInclude.add('/login');

watch(() => route.params.page, async () => {
    if (route.params.page == 'login' && route.query.ignore_server === undefined) {
        serverConnection.handshakePromise.then(() => {
            if (serverConnection.loggedIn) router.replace({ path: (typeof route.query.redirect == 'string' ? route.query.redirect : (route.query.redirect ?? [])[0]) ?? '/home?clearQuery', query: { clearQuery: 1 } });
        });
    }
});

const usernameInput = ref('');
const passwordInput = ref('');
const showLoginWait = ref(false);
const attemptLogin = async () => {
    if (usernameInput.value.trim() == '' || passwordInput.value == '') return;
    if (!validateCredentials(usernameInput.value, passwordInput.value)) {
        modal.showModal({ title: 'Invalid username or password', content: 'Username must be less than or equal to 16 characters and contain only lowercase alphanumeric (a-z, 0-9) and "-" and "_" characters.', color: '#F0C' });
        return;
    }
    showLoginWait.value = true;
    const token = await recaptcha.execute('login_math');
    const res = await accountManager.login(usernameInput.value, passwordInput.value, token);
    showLoginWait.value = false;
    if (res == 0) router.push({ path: (typeof route.query.redirect == 'string' ? route.query.redirect : (route.query.redirect ?? [])[0]) ?? '/home', query: { clearQuery: 1 } });
    else modal.showModal({ title: 'Could not log in:', content: getAccountOpMessage(res), color: '#F0C' });
};
</script>

<script lang="ts">
</script>

<template>
    <PanelView name="login" title="WWPPC Math">
        <PanelHeader>
            <PanelNavLargeLogo target="/home/home?clearQuery"></PanelNavLargeLogo>
        </PanelHeader>
        <PanelMain>
            <PanelBody name="default" title="Login" is-default>
                <div class="loginNoScroll">
                    <div class="fullBlock loginScroll">
                        <div class="centered">
                            <div class="loginVertical">
                                <img src="/logo.svg" class="loginLogoFloater">
                                <h1 class="loginVerticalHeader">Log In</h1>
                                <form class="loginVertical" action="javascript:void(0)">
                                    <InputTextBox v-model="usernameInput" placeholder="Username" style="margin-bottom: 8px;" width="208px" title="Username" maxlength="16" autocomplete="username" autocapitalize="off" pattern="[a-z0-9\-_]*" highlight-invalid required></InputTextBox>
                                    <InputTextBox v-model="passwordInput" placeholder="Password" type="password" style="margin-bottom: 8px;" width="208px" title="Password" maxlength="1024" autocomplete="current-password" required></InputTextBox>
                                    <span>
                                        <InputButton text="Log In" type="submit" @click="attemptLogin" width="100px" title="Log in" glitchOnMount :disabled=showLoginWait></InputButton>
                                        <a :href="isDev ? 'http://localhost:5173/login' : 'https://wwppc.tech/login'">
                                            <InputButton text="Sign Up" type="submit" width="100px" title="Continue to create a new account" glitchOnMount :disabled=showLoginWait></InputButton>
                                        </a>
                                    </span>
                                    <a :href="isDev ? 'http://localhost:5173/login' : 'https://wwppc.tech/login'" class="loginForgotPassword">Forgot password?</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <WaitCover text="Signing in..." :show=showLoginWait></WaitCover>
                <LoadingCover text="Connecting..." ignore-server></LoadingCover>
            </PanelBody>
        </PanelMain>
    </PanelView>
</template>

<style scoped>
.loginNoScroll {
    width: 100%;
    height: 100%;
    margin: -16px 0px;
    padding: 16px 0px;
    overflow: hidden;
}

.loginScroll {
    max-height: 100%;
    overflow-y: auto;
}

* {
    --fwidth: min(calc(100% - 8px), 424px);
    --hwidth: min(calc(50% - 8px), 208px);
}

.loginLogoFloater {
    display: block;
    height: 30vh;
    animation: loginLogoBob 10000ms cubic-bezier(0.7, 0, 0.3, 1) infinite;
}

.loginVerticalHeader {
    margin-top: -16px;
    font-size: 7vh;
}

.loginVerticalHeader2 {
    font-size: 7vh;
}

.loginVertical {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.loginForgotPassword {
    color: #0CF;
    text-decoration: underline;
    cursor: pointer;
    margin-top: 8px;
}

@keyframes loginLogoBob {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-2vh);
    }
}
</style>