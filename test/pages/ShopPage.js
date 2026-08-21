class ShopPage {
    get shopTitle () { return $('h2=Subscribe to our emails') }
    get emailInput () { return $('input[type="email"]') }
    get subscribeBtn () { return $('#Subscribe') }
    get searchBtn () { return $('summary[aria-label="Search"]') }
    get searchInput () { return $('#Search-In-Modal') }
    get card () { return $('#ProductGridContainer .card__content') }
    get countryRegionBtn () { return $('button[aria-describedby="FooterCountryLabel"]') }
    get countryList () { return $('#FooterCountryList')}

    async setEmailInput(email) {
        await this.emailInput.click()
        await this.emailInput.setValue(email)
    }

    async clickOnSearchBtn() {
        await this.searchBtn.click()
    }

    async setSearchInput(searchTerm) {
        await this.searchInput.setValue(searchTerm)
    }

    async clickOnSubscribeBtn() {
        await this.subscribeBtn.waitForDisplayed({ timeout: 5000 })
        await this.subscribeBtn.moveTo()
        await this.subscribeBtn.click()
    }

    async cardIsVisible() {
        await this.card.waitForDisplayed({
            timeout: 10000,
        });
        await this.card.scrollIntoView();
        await expect(this.card).toBeDisplayed();
    }

    async selectCountry(countryName) {
        await this.countryRegionBtn.scrollIntoView()
        await this.countryRegionBtn.click()
        const countryOption = await this.countryList.$(`a*=${countryName}`);
        await countryOption.waitForDisplayed({ timeout: 3000 });
        await countryOption.click()
    }

    async verifyCurrencyIsHryvnia() {
        await expect($('slider-component')).toHaveText(expect.stringContaining('₴'), {
        });
    }


}
export default new ShopPage()