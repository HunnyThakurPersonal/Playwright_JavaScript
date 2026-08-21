const {test, expect} = require('@playwright/test');
import AxeBuilder from '@axe-core/playwright';

test('should test accessibility', async ({ page }) => {
  await page.goto('https://www.irctc.co.in/nget/train-search');
  const axe = new AxeBuilder({ page });
  const results = await axe.analyze();
  expect(results.violations).toEqual([]);
});