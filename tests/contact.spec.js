import { test, expect } from '@playwright/test';

test('Contact-us', async ({ page }) => {
  await page.goto('https://www.inrbonds.com/');
  await page.getByRole('list').getByRole('link', { name: 'Contact Us' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Testing Playwright');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testuser@inrbonds.com');
  await page.getByRole('textbox', { name: 'Phone' }).click();
  await page.getByRole('textbox', { name: 'Phone' }).fill('9309798486');
  await page.getByRole('textbox', { name: 'Organisation' }).click();
  await page.getByRole('textbox', { name: 'Organisation' }).fill('test');
  await page.getByRole('textbox', { name: 'Role' }).click();
  await page.getByRole('textbox', { name: 'Role' }).fill('test');
  await page.getByRole('textbox', { name: 'Comments' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).fill('test');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('form').filter({ hasText: 'Verify your phone numberEnter' }).locator('input[type="text"]').click();
  await page.locator('form').filter({ hasText: 'Verify your phone numberEnter' }).locator('input[type="text"]').fill('201779');
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('div').filter({ hasText: 'CancelVerify' }).nth(4).click();
  await page.locator('div').filter({ hasText: 'CancelVerify' }).nth(4).click();
  await page.locator('form').filter({ hasText: 'Verify your phone numberEnter' }).locator('input[type="text"]').click();
  await page.locator('form').filter({ hasText: 'Verify your phone numberEnter' }).locator('input[type="text"]').fill('628380');
  await page.getByRole('button', { name: 'Verify' }).click();
  await expect(page.locator('[id="__next"]')).toMatchAriaSnapshot(`
    - heading "Reach Out" [level=3]
    - heading /\\+\\d+ \\d+/ [level=4]
    - heading "contact@inrbonds.com" [level=4]
    - separator
    - paragraph: "/ZEPHYR FINANCIAL PUBLISHERS PRIVATE LIMITED Address for correspondence: 1st floor, Teerth Techno space, Baner, Bangalore Mumbai Highway, Pune-\\\\d+\\\\./"
    - separator
    - text: "/GSTIN: 27AAACZ5420E1ZJ SEBI Regn No: INZ000313336 BSE Member ID: \\\\d+ CIN: U74120PN2011PTC241620 NSE Member ID: \\\\d+/"
    - heading "Follow us" [level=5]
    - link:
      - /url: https://twitter.com/INRBONDS?t=_M_8ojpKebZJCOk0ztNaCg&s=08
    - link:
      - /url: https://www.linkedin.com/in/inr-bonds-499bb978
    - link:
      - /url: https://www.youtube.com/@inrbonds2642
    `);
  await page.goto('https://www.inrbonds.com/contact-us');
});