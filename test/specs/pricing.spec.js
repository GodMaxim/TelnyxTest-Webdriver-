import homePage from "../pages/HomePage"
import pricingSpeechPage from "../pages/PricingSpeechPage"
import iotSimPage from "../pages/IotSimPage"
import { setupTestEnvironment } from "../../helpres/setup"

describe('Pricing page test', () => {

   beforeEach(async () => {
           await setupTestEnvironment();
       })

     it('Verify currency switching functionality on the Pricing page', async() => {
            await homePage.clickOnPricingBtn()
            await homePage.clickOnPricingSpeech()
            await pricingSpeechPage.title.scrollIntoView()
            await pricingSpeechPage.switchCurrency()
            await expect(pricingSpeechPage.textPricing).toHaveText(expect.stringContaining('€'))
        })
    
        it('Verify Calculator Functionality on the IoT Data Plans Page', async() => {
            await homePage.clickOnPricingBtn()
            await homePage.clickOnIotPage()
            await iotSimPage.title.scrollIntoView()
            await iotSimPage.setNumberField('1')
            await iotSimPage.nextBtn.click()
            await iotSimPage.setNumberField('15')
            await iotSimPage.nextBtn.click()
            await iotSimPage.confirmCountry()
            await iotSimPage.nextBtn.click()
            await iotSimPage.yesBtn()
            await iotSimPage.nextBtn.click()
            await expect(iotSimPage.estimatedCost).toHaveText('$6.17')
        })

    })