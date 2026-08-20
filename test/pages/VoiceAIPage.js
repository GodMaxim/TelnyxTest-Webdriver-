class VoiceAIPage {
    get voiceAITitle () { return $('#pricing-you-control h2') }
    get seePricingBtn () { return $('a[href="/pricing/conversational-ai"]') }
    get textInput () { return $('input[type="text"]')}
    get title () { return $('h2*=Configure the environment your agents run in')}
    get aIResponse () { return $('div.flex.flex-col.gap-new-xs div.bg-transparent p')}
    get languageSwitcher () { return $('div.language-switcher-overlay button[role="combobox"]')}
    get spanishOption() { return $('//span[normalize-space()="Spanish"]') }

    async clickOnSeePricingBtn() {
        await this.seePricingBtn.click()
    }

    async setTextInput(text) {
        await this.textInput.scrollIntoView()
        await this.textInput.setValue(text)
        await browser.keys('Enter')
    }

    async verifyAIResponse(expectedText) {
    await this.aIResponse.waitForDisplayed({ timeout: 10000 });
    await this.aIResponse.scrollIntoView();
    await expect(this.aIResponse).toHaveText(expect.stringContaining(expectedText));
}

async switchToSpanish() {
        await this.languageSwitcher.click()
        await this.spanishOption.waitForDisplayed({ timeout: 5000 });
        await this.spanishOption.click()
}

async seeVoiceAiTitle() {
    await this.voiceAITitle.scrollIntoView()
    await this.voiceAITitle.waitForDisplayed({ timeout: 5000 })
}

}
export default new VoiceAIPage()