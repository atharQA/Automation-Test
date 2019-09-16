class homePagePO {

    static async getHomePageHeader() {
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
        return totalHeaderName;
    }

    static async getSidebarHeaders() {
        var sidebar = $$("mat-sidenav aio-nav-menu button[class='vertical-menu-item heading ng-star-inserted level-1 collapsed'] span");
        var childNode = index => $(`aio-nav-menu aio-nav-item:nth-of-type(5) aio-nav-item:nth-of-type(${index}) button`);
        let locatorValue = await childNode.getText();
        for(i =0; i< index.length; i++){
            await childNode(i).click();

        }
        console.log('QQsss = ', locatorValue);

        let k = await sidebar.getText();
        console.log('QQsss = ', k);

        console.log('QQ', k.length);
        return k;

    }

    static async clickSidebarHeaders() {
        var childNode = index => $(`aio-nav-menu aio-nav-item:nth-of-type(${index}) button`);
        for(i =0; i< index.length; i++){
            await childNode(i).click();

        }
    }
}

module.exports = homePagePO;