class LoginPage {
    get loginTitle () { return $('h1') }
    get resendBtn () { return $('a[href="https://portal.telnyx.com/#/login/resend-email"]')}
    get sendSignIn () { return $('button=Send me sign-in link')}
    get failMessage () { return $('div[role="alert"] .MuiAlert-message')}
    get emailInput () { return $('input[name="email"]') }

    async clickOnResendBtn() {
        await this.resendBtn.click()
    }

    async setEmailInput(email) {
        await this.emailInput.click()
        await this.emailInput.setValue(email)
    }

}
export default new LoginPage()