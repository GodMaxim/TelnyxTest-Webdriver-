class PricingAIPage {
    get cost () { return $('span.typography-h2-mobile.md\\:typography-h2.text-black') }
    get premiumBtn () { return $('#voice-ai-add-on-premium-third-party') }
    get callRecordingBtn () { return $('#voice-ai-add-on-call-recording') }
    get smsFollowUpBtn () { return $('#voice-ai-add-on-sms-follow-up') }

    async clickOnPremiumBtn() {
        await this.premiumBtn.click()
    }

    async clickOnCallRecordingBtn() {
        await this.callRecordingBtn.click()
    }

    async clickOnSMSFollowUpBtn() {
        await this.smsFollowUpBtn.click()
    }

}
export default new PricingAIPage()