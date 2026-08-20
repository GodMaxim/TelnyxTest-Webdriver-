class HomePage {
    get signInBtn () { return $('a[href="/sign-up"]')}
    get ourNetworkBtn () { return $('footer a[href="/our-network"]') }
    get whyTelnyxBtn () { return $('button*=Why Telnyx') }
    get storiesBtn () { return $('a=Customer stories')}
    get shopBtn () { return $('a[href="https://shop.telnyx.com/"]') }
    get voiceAIBtn () { return $('footer a[href="/products/voice-ai-agents"]') }
    get loginBtn () { return $('a[href="https://portal.telnyx.com"]') }
    get communicationBtn() { return $('a[href="/global-coverage"]')}
    get developersBtn() { return $('button*=Developers')}
    get integrationsBtn () { return $('a=Integrations')}
    get priceSection () { return $('#price-your-workload')}
    get price () { return $('//dt[normalize-space()="Telnyx per month"]/following-sibling::dd')}
    get conversationsPM () { return $('#workload-conversations')}
    get averageMins () { return $('#workload-minutes')}
    get sms () { return $('#workload-smsFollowUps')}
    get partnersBtn () { return $('a[href="/partners"]')}
    get solutionsBtn () { return $('button*=Solutions')}
    get solutionsPage () { return $('a[href="/solutions"]')}
    get productsBtn () { return $('button*=Products')}
    get productsPage () { return $('a[href="/products"]')}
    get pricingBtn () { return $('button*=Pricing')}
    get pricingSpeech() { return $('a[href="/pricing/speech-to-text"]')}
    get iotPage () { return $('a[href="/pricing/iot-data-plans"]') }
    get releaseBtn () { return $('a[href="/release-notes"]')}

    async clickOnSignInBtn() {
        await this.signInBtn.click()
    }

    async clickOnOurNetworkBtn() {
        await this.ourNetworkBtn.scrollIntoView()
        await this.ourNetworkBtn.click()
    }

    async clickOnWhyTelnyxBtn() {
        await this.whyTelnyxBtn.click()
    }

    async clickOnStoriesBtn() {
        await this.storiesBtn.waitForExist({ timeout: 5000 })
        await this.storiesBtn.scrollIntoView();
        await browser.execute(el => el.click(), await this.storiesBtn)
    }

    async clickOnShopBtn() {
        await browser.execute((el) => {
            el.removeAttribute('target');
        }, await this.shopBtn);
        await this.shopBtn.scrollIntoView()
        await this.shopBtn.click()
    }

    async clickOnVoiceAIBtn() {
        await this.voiceAIBtn.scrollIntoView()
        await this.voiceAIBtn.click()
    }

    async clickOnLoginBtn() {
       await this.logInBtn.waitForExist({ timeout: 5000 })
       await browser.execute((element) => {
        element.removeAttribute('target');
        element.click();
    }, await this.logInBtn);
    }

    async clickOnCommunicationBtn() {
        await this.communicationBtn.scrollIntoView()
        await this.communicationBtn.click()
    }

    async clickOnDevelopersBtn() {
        await this.developersBtn.click()
    }

    async clickOnIntegrationsBtn() {
       await browser.execute((el) => {
        el.removeAttribute('target')
        el.click()
        }, await this.integrationsBtn)
    }

    async setConversationsPM(number) {
        await this.conversationsPM.click()
        await this.conversationsPM.setValue(number)
    }

    async setAverageMins(number) {
        await this.averageMins.click()
        await this.averageMins.setValue(number)
    }
    
    async setSMS(number) {
        await this.sms.click()
        await this.sms.setValue(number)
    }

    async clickOnPartnersBtn() {
        await this.partnersBtn.waitForExist({ timeout: 5000 })
        await browser.execute(el => el.click(), await this.partnersBtn)
    }

    async clickOnSolutionsBtn() {
        await this.solutionsBtn.click()
    }

    async clickOnSolutionsPage() {
        await this.solutionsPage.waitForExist({ timeout: 5000 })
        await browser.execute(el => el.click(), await this.solutionsPage)
    }

    async clickOnProductsBtn() {
        await this.productsBtn.click()
    }

    async clickOnProductsPage() {
        await this.productsPage.waitForExist({ timeout: 5000 })
        await browser.execute(el => el.click(), await this.productsPage)
    }

    async clickOnPricingBtn() {
        await this.pricingBtn.click()
    }

    async clickOnPricingSpeech() {
        await this.pricingSpeech.waitForExist({ timeout: 5000 })
        await browser.execute(el => el.click(), await this.pricingSpeech)
    }

    async clickOnIotPage() {
        await this.iotPage.waitForExist({ timeout: 5000 })
        await browser.execute(el => el.click(), await this.iotPage)
    }

    async clickOnReleaseBtn () {
        await this.releaseBtn.scrollIntoView()
        await this. releaseBtn.click()
    }



}
export default new HomePage()