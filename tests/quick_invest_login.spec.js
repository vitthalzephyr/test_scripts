import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testapi.inrbonds.com/');
  await page.getByRole('link', { name: 'Invest Now' }).click();
  await page.goto('https://testapi.inrbonds.com/quickInvest/');
  await page.locator('flutter-view').press('Tab');
  await page.keyboard.press('Enter');
    // focus first input
await page.keyboard.press('Tab');
  await page.getByRole('textbox', { name: 'Email' }).fill('lpuser@inrbonds.com');
// move to password
await page.keyboard.press('Tab');
await page.getByRole('textbox', { name: 'Password' }).fill(process.env.TEST_PASSWORD);
// await page.locator('flutter-view').press('Tab');
await page.keyboard.press('Enter');
await page.mouse.click(614, 414);
await page.mouse.click(1236, 44);
await page.mouse.click(981, 289);
  
});