import homePage from "../pages/HomePage"
import voiceAIPage from "../pages/VoiceAIPage"
import pricingAIPage from "../pages/PricingAIPage"
import { setupTestEnvironment } from "../../helpres/setup";


describe('Voice-ai page test', () => {

   beforeEach(async () => {
           await setupTestEnvironment();
       })

     it('Verify Dynamic Price Updates for Voice AI Options', async () => {
            await homePage.clickOnVoiceAIBtn()
            await voiceAIPage.seeVoiceAiTitle()
            await expect(voiceAIPage.voiceAITitle).toHaveText('Pricing you control')
            await voiceAIPage.clickOnSeePricingBtn()
            await pricingAIPage.cost.scrollIntoView()
            await expect(pricingAIPage.cost).toHaveText('$0.056*')
            await pricingAIPage.clickOnPremiumBtn()
            await expect(pricingAIPage.cost).toHaveText('$0.06*')
            await pricingAIPage.clickOnCallRecordingBtn()
            await expect(pricingAIPage.cost).toHaveText('$0.062*')
            await pricingAIPage.clickOnSMSFollowUpBtn()
            await expect(pricingAIPage.cost).toHaveText('$0.066*')
        })

        it('Verify the built-in AI chat agent responsiveness', async() => {
                await homePage.clickOnVoiceAIBtn()
                await voiceAIPage.title.scrollIntoView()
                await voiceAIPage.setTextInput('Hello there')
                await voiceAIPage.verifyAIResponse('Hello! How can I help you today?');
            })
        
            it('Change Language to Spanish', async () => {
                await homePage.clickOnVoiceAIBtn()
                await voiceAIPage.switchToSpanish()
                await expect(browser).toHaveUrl('https://telnyx.com/es/products/voice-ai-agents')
            })

});