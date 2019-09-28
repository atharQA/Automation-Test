async function documentCall(){
    return await document.querySelector('any css');
};

async function documentCallAll(){
    return await document.querySelectorAll('any css');
};

async function documentCallCookie(){
    return await document.cookie;
};

describe('SAMPLE TEST WITH USE OF DOCUMENT.QUERY SELECTOR, SELECTOR ALL ETC', () => {

    it('execute sample test case:', async () => {
        const requiredTitle = await browser.driver.getTitle();
        console.log('TITLE :', tyepof(requiredTitle))
        await expect(requiredTitle).toEqual('Angular - EVENTS');

        const resDocumentCall = await browser.executeScript(documentCall);
        console.log('resDocumentCall::', resDocumentCall);

        const resDocumentCallAll = await browser.executeScript(documentCallAll);
        console.log('resDocumentCallAll::', resDocumentCallAll);
        // document.querySelector('any css'); // THIS WILL NOT WORK //document is undefined

        const resDocumentCallCookie = await browser.executeScript(documentCallCookie);
        console.log('resDocumentCallCookie:::', resDocumentCallCookie);
    });
    
});