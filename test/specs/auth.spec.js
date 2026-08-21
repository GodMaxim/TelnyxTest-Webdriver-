import homePage from "../pages/HomePage"
import logInPage from "../pages/LoginPage"
import resendPage from "../pages/ResendPage"
import { setupTestEnvironment } from "../../helpres/setup";

describe('Sign-in/LogIn domen', () => {

   beforeEach(async () => {
           await setupTestEnvironment();
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

    it('Verify Negative Scenario: Security Verification Blocks Automated Sign-In Link', async () => {
             await homePage.clickOnLoginBtn()
             await logInPage.setEmailInput('myemail@gmail.com')
             await logInPage.sendSignIn.click()
             await expect(logInPage.failMessage).toHaveText('Security verification failed. Please refresh and try again.')
            })
});