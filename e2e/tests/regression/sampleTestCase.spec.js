var xcelToJson = require('../../xcelToJson');
var homePage = require('../../pages/homePage/homePage.po');
var api = require('../../helper/util/api');

describe('REGRESSION SAMPLE TEST', () => {

    it('Title of the page', async () => {
        const requiredTitles = await browser.driver.getTitle();
        console.log('TITLE :', requiredTitles)
        // await expect(requiredTitles).toEqual('Gmail 123');
        await expect(requiredTitles).toEqual('Angular - Introduction to the Angular Docs');

    });

    it('Navigate to the page and verfiy the page title', async () => {
        browser.driver.get('https://angular.io/docs');
        const requiredTitles = await browser.driver.getTitle();
        console.log('TITLE :', requiredTitles)
        await expect(requiredTitles).toEqual('Angular - Introduction to the Angular Docs');
    });

    it('PROCESS 1: Expect all the Labels in the page must be same as given labels in UI', async () => {
        var headerList = $$("mat-toolbar aio-top-menu ul li");
        // var headerList = element.all(by.css("mat-toolbar aio-top-menu ul li"));
        const res = await headerList.getText();
        console.log('TOTAL HEADER LIST = ', res);

        await expect(res).toEqual(['FEATURES', 'DOCS', 'RESOURCES', 'EVENTS', 'BLOG']);
    });


    it('PROCESS 2: Expect all the Labels in the page must be same as given labels in UI', async () => {
        var headerList = $$("mat-toolbar aio-top-menu ul li");
        const res = await headerList.getText();
        console.log('headerList.length = ', res.length);

        var totalHeaderName = [];
        for (let i = 1; i <= res.length; i++) {
            var headerName = $(`aio-top-menu > ul > li:nth-child(${i})`);
            const header = await headerName.getText();
            totalHeaderName.push(header);
        }
        console.log('totalHeaderName = ', totalHeaderName);
        await expect(totalHeaderName).toEqual(['FEATURES', 'DOCS', 'RESOURCES', 'EVENTS', 'BLOG']);
    });

    it('PROCESS 3: With Fuction call: HEADERS/LIST VALIDATION', async()=>{
        const headers =  await homePage.getHomePageHeader();
        console.log('Headers  = ', headers);
        
        await expect(headers).toEqual(['FEATURES', 'DOCS', 'RESOURCES', 'EVENTS', 'BLOG']);

    });
   
});