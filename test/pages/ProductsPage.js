class ProductsPage {
    get builds () { return $('a[href="/products/builds"]') }

    async clickOnBuilds() {
        await this.builds.waitForExist({ timeout: 5000 })
        await this.builds.scrollIntoView()
        await browser.execute(el => el.click(), await this.builds)
    }
}
export default new ProductsPage()