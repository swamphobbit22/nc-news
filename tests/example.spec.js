import { test, expect } from '@playwright/test'

test.beforeEach(async({ page }) => {
    await page.goto('https://nc-news-kirsty.netlify.app/');
})

test.describe('page text', () => {

    test('has title', async ({ page }) => {
        const title = await page.title();
        expect(title).toBe('NC-News')
    })
    
    test('Header has title', async ({page}) => {
        const element = await page.locator('.title');
        const text = await element.textContent();
        console.log(text)
        expect(text).toBe('NC News')
    })

})

test.describe('main navigation', () => {
    test('Main navbar has login icon', async({ page })=> {
        await page.locator('.login-icon').nth(0).click();
     // console.log(await page.locator('.login-icon').count());
     // console.log(await page.locator('nav').count())
     })

     test('users name should be displayed', async ({ page }) => {
        const username = 'Ant'
        await page.goto('https://nc-news-kirsty.netlify.app/login')

        await page.locator('input[name="username"]').fill(username)
        await page.locator('button[type="submit"]').click();

        await page.waitForURL('https://nc-news-kirsty.netlify.app/Dashboard')


        await expect(page.locator('.navlinks p').locator(`text="${username} is logged in"`)).toBeVisible();

     })

     test('Main navbar has logout icon', async({ page })=> {
        await page.locator('.navlinks .logout-icon').click();
     // console.log(await page.locator('.login-icon').count());
     // console.log(await page.locator('nav').count())
     })
})
