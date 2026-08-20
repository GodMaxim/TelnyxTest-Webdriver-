class CommunicationPage {
    get title () { return $('h1') }
    get contactUs2 () { return $('a[href="/contact-us"]')}
    get carrierTitle () { return $('h2') }
    get contactUs3 () { return $('a=Talk to an expert') }
    get talkToUsBtn () { return $('a.group\\/button[href="/contact-us"]')}

    async clickOnContactUs2() {
        await this.contactUs2.click()
    }

    async clickOnTalkToUsBtn() {
        await this.talkToUsBtn.waitForDisplayed();
        await this.talkToUsBtn.scrollIntoView();
        await browser.execute((el) => {
            el.style.pointerEvents = 'auto';
            el.click();
        }, await this.talkToUsBtn);
    }

    async clickOnContactUs3() {
        await this.contactUs3.click()
}

}
export default new CommunicationPage()