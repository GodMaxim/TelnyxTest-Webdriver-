class SolutionsPage {
    get useCases () { return $('#use-cases') }
    get searchInput () { return $('#search')}
    get searchResult () { return $('ul.grid-container.list-none li') }

    async setSearchInput(text) {
        await this.searchInput.scrollIntoView()
        await this.searchInput.setValue(text)
        await browser.keys('Enter')
    }
}
export default new SolutionsPage()