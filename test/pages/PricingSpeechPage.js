class PricingSpeechPage {
    get title () { return $('h2*=Pay as you go') }
    get currencyBtn () { return $('#currency-filter')}
    get textPricing () { return $('#speech-to-text-pricing')}
    get euroOption () { return $('//span[text()="EUR"]') }

    async switchCurrency() {
        await expect(this.currencyBtn).toBeClickable()
        await this.currencyBtn.click()
        await expect(this.euroOption).toBeClickable();
        await this.euroOption.click()
    }
}
export default new PricingSpeechPage()