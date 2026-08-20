class CustomerStoriesPage {
    get customerStoriesTitle () { return $('h1') }
    get nimbataStoryBtn () { return $('a[href="/customer-stories/nimbata"]') }

    async clickOnNimbataStoryBtn() {
        await this.nimbataStoryBtn.scrollIntoView()
        await this.nimbataStoryBtn.click()
    }
}
export default new CustomerStoriesPage()