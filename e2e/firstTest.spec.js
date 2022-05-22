const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:4000');
  const title = page.locator('header');
  await expect(title).toHaveText('Kelvin Liang');
});
