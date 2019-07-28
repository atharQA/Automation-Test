var xcelToJson = require('../../xcelToJson');

describe('REGRESSION SAMPLE TEST', () => {

    it('Title of the page', async () => {
        const requiredTitles = await browser.driver.getTitle();
        console.log('TITLE :', requiredTitles)
        await expect(requiredTitles).toEqual('Gmail 123');
    });

    it('Navigate to the page and verfiy the page title', async () => {
        const requiredTitles = await browser.driver.getTitle();
        console.log('TITLE :', requiredTitles)
        await expect(requiredTitles).toEqual('Gmail 123');
    });
    it('Expect all the Labels in the page must be same as given labels in UI', async () => {
        
    });
    it('Expect all the images in the page must be present', async () => {
        
    });
    it('Expect the SEARCH should work properly and must give the valid search result', async () => {
    
    });
    it('Expect all the drop downs should work on select and unselect condition', async () => {
        
    });
    it('DIFFERENT EXPECT COND WITH MESSAGE:::', async () => {

        let Value = 10;

        // await expect(parseInt(Value)).toBeGreaterThan(0);
        await expect(parseInt(Value)).toBeGreaterThan(0, 'Value in UI is 0, So Test failed');
        // await expect(parseInt(Value)).toBeNull('Value in UI is not null, So Test failed');

    });
});