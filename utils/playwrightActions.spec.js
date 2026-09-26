import { Page, Locator } from '@playwright/test';

export class PlaywrightUtils {
  constructor(private page: Page) {}

  async click(locator: Locator) {
    await locator.click();
  }

  async fill(locator: Locator, value: string) {
    await locator.fill(value);
  }

  async check(locator: Locator) {
    await locator.check();
  }

  async uncheck(locator: Locator) {
    await locator.uncheck();
  }

  async selectOption(locator: Locator, value: string) {
    await locator.selectOption(value);
  }

  async press(locator: Locator, key: string) {
    await locator.press(key);
  }

  async getText(locator: Locator) {
    return await locator.textContent();
  }

  async isVisible(locator: Locator) {
    return await locator.isVisible();
  }
}