class ResendPage {
    get emailInput () { return $('input[name="email"]') }
    get submitBtn () { return $('button[type="submit"]') }
    get successMessage () { return $('div.MuiAlert-root[role="alert"]') }

    async setEmailInput(email) {
        await this.emailInput.click()
        await this.emailInput.setValue(email)
    }

    async clickOnSubmitBtn() {
        await this.submitBtn.click()
    }

}
export default new ResendPage()