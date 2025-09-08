1.
import { test } from '@playwright/test';

test('Register Page - điền đầy đủ thông tin và đăng ký', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.click('text=Bài học 1: Register Page')

  await page.fill('#username', 'testuser');
  await page.fill('#email', 'testuser@example.com');
  await page.fill('#password', '123456');
  await page.fill('#confirmPassword', '123456');

  await page.click('button[type="submit"]');

 
})
2.
import {expect } from '@playwright/test';

test('Product Page - thêm sản phẩm vào giỏ hàng', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.click('text=Bài học 2: Product page');

  for (let i = 0; i < 2; i++) {
    await page.click('text=Sản phẩm 1 >> button:has-text("Add to cart")');
  }

 
  for (let i = 0; i < 3; i++) {
    await page.click('text=Sản phẩm 2 >> button:has-text("Add to cart")');
  }

 
  await page.click('text=Sản phẩm 3 >> button:has-text("Add to cart")');

 
  await page.click('text=Cart');
  await expect(page.locator('text=Sản phẩm 1')).toHaveCount(2);
  await expect(page.locator('text=Sản phẩm 2')).toHaveCount(3);
  await expect(page.locator('text=Sản phẩm 3')).toHaveCount(1);
});




