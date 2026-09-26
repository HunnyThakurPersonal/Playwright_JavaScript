import { test, expect } from '@playwright/test';

test('User can log in successfully', async ({ page }) => {
  // 1. Navigate to the login page
  await page.goto('https://example.com/login');

  // 2. Fill in the username/email and password fields
  await page.getByLabel('Username').fill('testuser@example.com');
  await page.getByLabel('Password').fill('Password@123');

  // 3. Click the login/sign-in button
  await page.getByRole('button', { name: 'Sign in' }).click();

  // 4. Assert that login was successful (e.g., checking redirected URL or dashboard element)
  await expect(page).toHaveURL('/dashboard');
});