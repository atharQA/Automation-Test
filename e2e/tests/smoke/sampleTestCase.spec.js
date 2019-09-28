var xcelToJson = require('../../xcelToJson');

describe('SMOKE SAMPLE TEST', () => {

    if (xcelToJson.smokeTest.test1 === "Yes") {
        it('execute sample test case: ASYNC - AWAIT', async () => {
            const requiredTitle = await browser.driver.getTitle();
            console.log('TITLE :', tyepof(requiredTitle))
            await expect(requiredTitle).toEqual('Angular - EVENTS');
        });
    }

});