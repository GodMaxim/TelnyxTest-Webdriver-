class IntergrationsPage {
    get searchInput () { return $('input[name="search"]')}
    get teamsBtn () { return $('a[href="/integrations/microsoft-teams"]')}

    async setSearchInput(text) {
        await this.searchInput.scrollIntoView()
        await this.searchInput.setValue(text)
        await browser.keys('Enter')
    }

    async clickOnTeamsBtn() {
        await this.teamsBtn.click()
    }
}
export default new IntergrationsPage()