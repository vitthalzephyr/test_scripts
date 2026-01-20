import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://inrbonds.com/');
  await page.getByRole('link', { name: 'INRBonds High-Yield Corporate' }).click();
  await expect(page.locator('h1')).toContainText('INRBonds High-Yield Corporate Bond Index (HCB Index)');
});