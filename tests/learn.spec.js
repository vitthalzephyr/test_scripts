import { test, expect } from '@playwright/test';

test('Learn', async ({ page }) => {
  await page.goto('https://www.inrbonds.com/');
  await page.getByRole('link', { name: 'Learn', exact: true }).click();
  await page.getByRole('link', { name: 'What are bonds?' }).click();
  await page.getByRole('link', { name: 'What are the different types' }).click();
  await page.getByRole('link', { name: 'How do bonds work?' }).click();
  await page.getByRole('link', { name: 'What are the risks of' }).click();
  await page.getByRole('link', { name: 'What kind of returns can I' }).click();
  await page.getByRole('link', { name: 'How do I get started on' }).click();
  await page.getByRole('link', { name: 'How do I buy and sell bonds?' }).click();
  await page.getByRole('button', { name: 'Videos & Podcasts' }).click();
  await expect(page.locator('section')).toContainText('Bond Bytes');
  await page.getByRole('heading', { name: 'Search for Yields' }).click();
  await page.getByRole('button', { name: 'Knowledge' }).click();
  await page.getByRole('link', { name: 'SmartBytes SmartBytes' }).click();
  await page.goto('https://inrbonds.com/articles/Knowledge/smartByte?_gl=1*pu9a3l*_ga*MTk1ODU2NDAzNy4xNzY4MjE1MDU1*_ga_M47BTZJWQJ*czE3NjgyMTUwNTUkbzEkZzEkdDE3NjgyMTUxNDkkajMxJGwwJGgw');
  await expect(page.getByRole('main')).toContainText('Know Your Covenants');
  await page.getByRole('link', { name: 'Know Your Covenants 7 Aug' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'LinkedIn' }).click();
  const page2 = await page2Promise;
});