export async function setupTestEnvironment() {
    await browser.url('https://telnyx.com/')
    try {
        const acceptButton = await $('#onetrust-accept-btn-handler');
        await acceptButton.waitForDisplayed({ timeout: 3000 });
        await acceptButton.click();
    } catch (error) {}
    await browser.execute(() => window.localStorage.clear())
};