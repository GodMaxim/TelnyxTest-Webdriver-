class IotSimPage {
    get title () { return $('h2*=Starting at $0.01 per MB') }
    get numberField () { return $('input[type="number"]')}
    get nextBtn () { return $('span=Next') }
    get selectCountry () { return $('div[data-value="3"] button[role="combobox"]') }
    get australia () { return $('//span[text()="Australia"]') }
    get yes () { return $('input[value="yes"]')}
    get estimatedCost () { return $('//div[@data-value="5"]//strong[contains(text(), "Monthly estimated costs")]/preceding-sibling::p') }

    async setNumberField(number) {
        await this.numberField.scrollIntoView()
        await this.numberField.setValue(number)
    }

    async confirmCountry() {
        await this.selectCountry.click()
        await this.australia.click()
    }

    async yesBtn() {
        await this.yes.scrollIntoView()
        await this.yes.click()
    }

}
export default new IotSimPage()