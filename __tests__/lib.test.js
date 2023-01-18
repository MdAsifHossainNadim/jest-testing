jest.mock( '../js/postToServer.js' );
const { validateInput, generateResult, checkAndGenerate } = require( '../js/lib' );
const puppeteer = require( 'puppeteer' );

// Unit testing for generateResult function.
test( 'Test for article generation function', () => {
    expect( generateResult( 1, 'Test Article' ) ).toBe( 'User ID: 1 created an article titled Test Article' );
} );

// Unit testing for input validation function.
test( 'Test for input validation function', () => {
    expect( validateInput( 1, true, true ) ).toBeTruthy();
} );

// Integration test for checkAndGenerate function.
test( 'Test for checkAndGenerate function', async () => {
    const result = await checkAndGenerate( 10, 'Test Article', 'Hello World' );
    expect( result ).toBe( 'User ID: 10 created an article titled Test Article' );
} );

// End to end test for addPost function.
test( 'Test e2e for addPost/Project', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ["--window-size=1920,1080"],
    });

    const page = await browser.newPage();

    // Use url path where you can open your project.
    await page.goto( 'http://jest-testing.test/' );
    await page.click( '#userid' );
    await page.type( '#userid', '1' );
    await page.click( '#title' );
    await page.type( '#title', 'Test Article' );
    await page.click( '#article' );
    await page.type( '#article', 'Hello World' );
    await page.click( '#addNewPostBtn' );
    await browser.close();
}, 20000 );