import homePage from "../pages/HomePage"
import shopPage from "../pages/ShopPage"
import { setupTestEnvironment } from "../../helpres/setup"

describe('Shop domen', () => {

   beforeEach(async () => {
           await setupTestEnvironment();
       })

     it('Verify the email newsletter subscription functionality', async () => {
            await homePage.clickOnShopBtn()
            await shopPage.shopTitle.scrollIntoView()
            await shopPage.setEmailInput('whonows@gmail.com')
            await shopPage.clickOnSubscribeBtn()
            // Captcha appears only after 10-15 seconds
        })

    it('Verify product search functionality in the shop', async () => {
            await homePage.clickOnShopBtn()
            await shopPage.clickOnSearchBtn()
            await shopPage.setSearchInput('Hat')
            await browser.keys('Enter')
            await shopPage.cardIsVisible()
        })

     it('Verify Currency Switcher on the Shop Page', async() => {
            await homePage.clickOnShopBtn()
            await shopPage.selectCountry('Ukraine')
            await shopPage.verifyCurrencyIsHryvnia();
        })
});


