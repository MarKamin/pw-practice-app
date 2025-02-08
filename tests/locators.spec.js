import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();
});

test('Locator syntax rules', async ({ page }) => {
  //Find locator by Tag name
  page.locator('input');

  //by ID
  page.locator('#id="inputEmail1"');

  //by Class value
  page.locator('.shape-rectangle');

  //by attribute
  page.locator('[placeholder="Email"]');

  //by Class value (full)
  page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]');

  // combine different selectors
  await page.locator('input[placeholder="Email"]').first().isVisible();

  //by Xpath
  page.locator('//*[@id=inputEmail]');

  //by partial text match
  page.locator(':text("Using)');
});
