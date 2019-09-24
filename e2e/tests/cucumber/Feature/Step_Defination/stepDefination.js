const { Given, When, Then } = require('cucumber');
const expect = require('chai').expect;

Given('Open the Google page', function () {
    return browser.driver.get("http://www.google.com/");
});

When('Hit the Gmail URL', async () => {
    return browser.driver.get("http://www.gmail.com/");
});

// Then('Verify the page title of Gmail page', async () => {
//     const title = await browser.driver.getTitle();
//     console.log('TITLE = ', title);
//     await expect(title).to.be.equal("Gmail - Free Storage and Email from Google");
// });

Then('Verify the page title of Gmail page', async ()=> {
    const title = await browser.driver.getTitle();
    console.log('TITLE = ', title);
});


Then('Verify the sum of the array input', async () => {
    const input_array = [10, 20, 30, 40, 50];
    var sum = 0;
    for (let i = 0; i < input_array.length; i++) {
        sum = sum + input_array[i];
    }
    console.log(sum);
    expect(sum).to.be.equal(150);
});

