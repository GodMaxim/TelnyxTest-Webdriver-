class BuildsPage {
    get languageSelect () { return $('select[aria-label="Filter builds by language"]')}
    get searchInput () { return $('input[type="search"]')}
    get searchResult () { return $('ul.list-none li')}

    async setSearchInput(text) {
        for (const char of text) {
            await this.searchInput.addValue(char)
            await browser.pause(2000)
        await browser.keys('Enter')
        }
    }

}
export default new BuildsPage()