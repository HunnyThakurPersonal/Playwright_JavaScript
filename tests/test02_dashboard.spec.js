// tests/main.spec.js

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.spec');

test('Verify main page', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login('username', 'password');

    // Now you are logged in
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    // Main page testing
    await expect(page.locator('.Swag Labs')).toBeVisible();
});