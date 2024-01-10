import { test as teardown, expect } from '@playwright/test'

teardown('do logout', async ({ page }) => {
  await page.goto('https://demoblaze.com/')

  await expect(page.locator('#logout2')).toBeVisible()

  await page.locator('#logout2').click()
})
