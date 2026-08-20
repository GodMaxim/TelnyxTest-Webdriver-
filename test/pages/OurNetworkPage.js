class OurNetworkPage {
    get ourNetworkTitle () { return $('h1') }
    get signUpBtn () { return $('#our-network-hero-content-container a[href="/sign-up"]') }

    async clickOnSignUpBtn() {
        await this.signUpBtn.click()
    }
}
export default new OurNetworkPage()