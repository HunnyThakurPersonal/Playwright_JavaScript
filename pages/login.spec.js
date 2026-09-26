// LogInPage
// Created by: Hunny Thakur
// Date: 19/09/2026

class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('password');
        this.loginButton = page.locator('.submit-button');
    }

    async login(username, password) {
        await this.usernameInput.fill("standard_user");
        await this.passwordInput.fill("secret_sauce");
        await this.loginButton.click();
    }
}

module.exports = { LoginPage };