class PartnersPage {
    get becomePartner () { return $('a[href="https://partners.telnyx.com/login?apply=true"]') }
    get becomePartner2 () { return $('//div[@class="flex gap-md flex-wrap"]//a[.//span[@data-content="Become a partner today"]]')}
    get becomePartner3 () { return $('//h2[normalize-space()="Ready to get started?"]/following::a[.//span[@data-content="Become a partner today"]]')}


    async clickButtonWithoutTarget(buttonElement) {
        await buttonElement.scrollIntoView()
        await buttonElement.waitForDisplayed();
        await browser.execute((el) => {
        el.removeAttribute('target');
    }, await buttonElement);
    await buttonElement.click()
}
}
export default new PartnersPage()