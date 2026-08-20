import homePage from '../pages/HomePage.js'
import signUpPage from '../pages/SignUpPage.js'
import ourNetworkPage from '../pages/OurNetworkPage.js'
import customerStoriesPage from '../pages/CustomerStoriesPage.js'
import nimbataStoryPage from '../pages/NimbataStorypPage.js'
import shopPage from '../pages/ShopPage.js'
import voiceAIPage from '../pages/VoiceAIPage.js'
import pricingAIPage from '../pages/PricingAIPage.js'
import logInPage from '../pages/LoginPage.js'
import resendPage from '../pages/ResendPage.js'
import communicationPage from '../pages/CommunicationPage.js'
import contactUsPage from '../pages/ContactUsPage.js'
import integrationsPage from '../pages/IntegrationsPage.js'
import partnersPage from '../pages/PartnersPage.js'
import applyPage from '../pages/ApplyPage.js'
import solutionsPage from '../pages/SolutionsPage.js'
import productsPage from '../pages/ProductsPage.js'
import buildsPage from '../pages/BuildsPage.js'
import pricingSpeechPage from '../pages/PricingSpeechPage.js'
import iotSimPage from '../pages/IotSimPage.js'
import releaseNotesPage from '../pages/ReleaseNotesPage.js'

describe('Telnyx test', () => {

    beforeEach(async () => {
        await browser.url('https://telnyx.com/')
        try {
            const acceptButton = await $('#onetrust-accept-btn-handler');
           await acceptButton.waitForDisplayed({ timeout: 3000 });
            await acceptButton.click();
        } catch (error) {
        }
        await browser.deleteCookies();
        await browser.execute(() => window.localStorage.clear());
    })

    it('Verify navigation to the Sign-Up page', async () => {
        await homePage.clickOnSignInBtn()
        await expect(browser).toHaveUrl('https://telnyx.com/sign-up')
        await signUpPage.signUpTitle.waitForDisplayed({ timeout: 5000 })
        await expect(signUpPage.signUpTitle).toHaveText('Create your account.')
    });

    it('Verify the "Sign Up" navigation from the "Our Network" page', async () => {
        await homePage.clickOnOurNetworkBtn()
        await expect(browser).toHaveUrl('https://telnyx.com/our-network')
        await ourNetworkPage.ourNetworkTitle.waitForDisplayed({ timeout: 5000 })
        await expect(ourNetworkPage.ourNetworkTitle).toHaveText('Our private, global network')
        await ourNetworkPage.clickOnSignUpBtn()
        await expect(browser).toHaveUrl('https://telnyx.com/sign-up')
    });

    it('Verify Navigation and Content of the Customer Stories Page', async () => {
        await homePage.clickOnWhyTelnyxBtn()
        await homePage.clickOnStoriesBtn()
        await customerStoriesPage.customerStoriesTitle.waitForDisplayed({ timeout: 5000 })
        await expect(customerStoriesPage.customerStoriesTitle).toHaveText('Customer Stories')
        await customerStoriesPage.clickOnNimbataStoryBtn()
        await nimbataStoryPage.title.waitForDisplayed({ timeout: 5000 })
        await expect(nimbataStoryPage.title).toHaveText('How Nimbata Powers Call Tracking at Scale with Telnyx')
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
    await shopPage.clickOnSerachBtn()
    await shopPage.setSearchInput('Hat')
    await browser.keys('Enter')
    await shopPage.cardIsVisible()
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

    it('Resend Verification Email', async () => {
        await homePage.clickOnLoginBtn()
        await expect(logInPage.logInTitle).toHaveText('Welcome Back')
        await expect(browser).toHaveUrl('https://portal.telnyx.com/#/login/sign-in')
        await logInPage.resendBtn.scrollIntoView()
        await logInPage.clickOnResendBtn()
        await resendPage.setEmailInput('myemail@gmail.com')
        await resendPage.clickOnSubmitBtn()
        await expect(resendPage.successMessage).toHaveText('If your email address exists', { containing: true } )
    })

    it('Verify all navigation paths to the "Talk to an expert" page from the Communication page', async () => {
        await homePage.clickOnCommunicationBtn()
        await expect(communicationPage.title).toHaveText('Global communications')
        await communicationPage.clickOnContactUs2()
        await expect(contactUsPage.title).toHaveText('Talk to an expert')
        await browser.back()
        await communicationPage.carrierTitle.scrollIntoView()
        await communicationPage.clickOnContactUs3()
        await expect(contactUsPage.title).toHaveText('Talk to an expert')
        await browser.back()
        await communicationPage.talkToUsBtn.scrollIntoView()
        await communicationPage.clickOnTalkToUsBtn()
        await expect(contactUsPage.title).toHaveText('Talk to an expert')
    })

    it('Verify search functionality for Microsoft Teams integration', async() => {
        await homePage.clickOnDevelopersBtn()
        await homePage.clickOnIntegrationsBtn()
        await integrationsPage.setSearchInput('Teams')
        await integrationsPage.clickOnTeamsBtn()
        await expect(browser).toHaveUrl('https://telnyx.com/integrations/microsoft-teams')
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

    it('Verify Negative Scenario: Security Verification Blocks Automated Sign-In Link', async () => {
        await homePage.clickOnLoginBtn()
        await logInPage.setEmailInput('myemail@gmail.com')
        await logInPage.SendSignIn.click()
        await expect(logInPage.failMessage).toHaveText('Security verification failed. Please refresh and try again.')
    })

    it('Verify Dynamic Price Updates in "Price Your Workload" Section', async () => {
        await homePage.priceSection.scrollIntoView()
        await expect(homePage.Price).toHaveText('$76,800')
        await homePage.setConversationsPM('500000')
        await expect(homePage.price).toHaveText('$80,000')
        await homePage.setAverageMins('10')
        await expect(homePage.price).toHaveText('$99,500')
        await homePage.setSMS('5')
        await expect(homePage.price).toHaveText('$102,500')
    })

    it('Verify "Become a Partner Today" CTA Links on the Partners Page', async() => {
        await homePage.clickOnWhyTelnyxBtn()
        await homePage.clickOnPartnersBtn()
        await partnersPage.clickButtonWithoutTarget(partnersPage.becomePartner)
        await expect(applyPage.title).toHaveText('Join the Telnyx partner ecosystem and unlock new revenue streams', { containing: true } )
        await browser.back()
        await partnersPage.clickButtonWithoutTarget(partnersPage.becomePartner2)
        await expect(applyPage.Title).toHaveText('Join the Telnyx partner ecosystem and unlock new revenue streams', { containing: true } )
        await browser.back()
        await partnersPage.clickButtonWithoutTarget(partnersPage.becomePartner3)
        await expect(applyPage.title).toHaveText('Join the Telnyx partner ecosystem and unlock new revenue streams', { containing: true } )
    })

    it('Verify "Use Cases" Search Functionality on the "Solutions" Page', async() => {
        await homePage.clickOnSolutionsBtn()
        await homePage.clickOnSolutionsPage()
        await solutionsPage.useCases.scrollIntoView()
        await solutionsPage.setSearchInput('Health')
        await expect(solutionsPage.searchResult).toBeDisplayed()
        await expect(solutionsPage.searchResult).toHaveText(expect.stringContaining('Health'))
    })

    it('Verify Search and Filter Functionality on the "Open Source Builds" Page', async() => {
        await homePage.clickOnProductsBtn()
        await homePage.clickOnProductsPage()
        await productsPage.clickOnBuilds()
        await buildsPage.languageSelect.selectByAttribute('value', 'python')
        await expect(browser).toHaveUrl('https://telnyx.com/products/builds?lang=python')
        await buildsPage.setSearchInput('Chat')
        await buildsPage.searchResult.scrollIntoView()
        await expect(buildsPage.searchResult).toHaveText(expect.stringContaining('Chat'))
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

    it('Verify Currency Switcher on the Shop Page', async() => {
        await homePage.clickOnShopBtn()
        await shopPage.selectCountry('Ukraine')
        await shopPage.verifyCurrencyIsHryvnia();
    })

    it('Verify "Subscribe to Automated Emails" on the Release Notes Page', async() => {
        await homePage.clickOnReleaseBtn()
        await releaseNotesPage.setEmailInput('myemail@gmail.com')
        await releaseNotesPage.subscribe.click()
        await releaseNotesPage.verifySuccessIconIsDisplayed()
    })
});
