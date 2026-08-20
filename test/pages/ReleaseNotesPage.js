class ReleaseNotesPage {
    get emailInput () { return $('#release-notes-email') }
    get subscribe () { return $('button[type="submit"]')}
    get successIcon () { return $('.text-green svg')}

    async setEmailInput(email) {
        await this.emailInput.setValue(email)
    }

    async verifySuccessIconIsDisplayed() {
        await this.successIcon.waitForDisplayed({
        })
        await expect(this.successIcon).toBeDisplayed();
    }
}
export default new ReleaseNotesPage()