'use strict';

const E2EUtil   = require('../../main.e2e.util');
const ContactPO = require('../index/contactIndex.e2e.po');

const conf = {
	addId: 'supplier-contact'
};

class SupplierContactPO extends ContactPO {

	static async assert(expect, page, mock, isSaveBranches){

		await ContactPO.assertMainPageField(expect, page, mock);

		if(mock.branch){
			if(mock.branch.length > 1){
				await ContactPO.assertMultiBranch(expect, page, mock, conf.addId, isSaveBranches);
				let isOverAllProduct = false;

				for(let branch of mock.branch){
					if(branch.product){
						isOverAllProduct = true;
						break;
					}
				}
				if(isOverAllProduct){
					await E2EUtil.waitFor(page.tabs.overAllProductTab);
					await page.tabs.overAllProductTab.click();
					await page.tabs.suppInfo.click();
				}

			} else{
				await page.tabs.singleBranchInfo.click();
				await ContactPO.assertDecorateBranch(expect, page, mock.branch[0]);
				if(mock.branch[0].product){
					await E2EUtil.waitFor(page.tabs.singleProductTab);
					await page.tabs.singleProductTab.click();
				}
			}
		}
	};

	static countOverAllBranchProduct(){
		return element(by.css(`#ev-supplierProduct > ev-header .ev-pagination > div:nth-child(1)`)).getText().then((text) => Promise.resolve(parseInt(text.split('of ')[1])));
	}

	static countBranchProduct(){
		return element(by.css(`#ev-supplierBranchProduct > ev-header .ev-pagination > div:nth-child(1)`))
			.getText().then((text) => Promise.resolve(parseInt(text.split('of ')[1])));
	}

	static async decorate(page, mock, isSaveBranches){

		await ContactPO.mainPageField(page, mock);

		if(mock.branch){
			if(mock.branch.length > 1){
				await ContactPO.multiBranch(page, mock, conf.addId, isSaveBranches);
				let isOverAllProduct = false;

				for(let branch of mock.branch){
					if(branch.product){
						isOverAllProduct = true;
						break;
					}
				}
				if(isOverAllProduct){
					await E2EUtil.waitFor(page.tabs.overAllProductTab);
					await page.tabs.overAllProductTab.click();
					await page.tabs.suppInfo.click();

				}

			} else{
				await page.tabs.singleBranchInfo.click();
				await ContactPO.decorateBranch(page, mock.branch[0]);
				if(mock.branch[0].product){
					await E2EUtil.waitFor(page.tabs.singleProductTab);
					await page.tabs.singleProductTab.click();
				}
			}
		}
	};

	static fetch(pageId){

		const _this = ContactPO.fetch(pageId);

		_this.panel       = E2EUtil.getPanelButtons(conf);
		_this.branchPanel = ContactPO.getPanelButtons();

		_this.contactInfo.totalOutstandingBalance = element(by.css(`#${pageId} md-content div > md-input-container input[name="totalOutStandBal"]`));
		_this.contactInfo.totalCreditBalance      = element(by.css(`#${pageId} md-content div > md-input-container input[name="totalCreditBal"]`));
		_this.contactInfo.outStandingBalance      = element(by.css(`#contact-branch div > md-input-container input[name="outStandBal"]`));
		_this.contactInfo.creditBalance           = element(by.css(`#contact-branch div > md-input-container input[name="creditBal"]`));

		_this.tabs = {
			suppInfo         : element(by.css(`#${pageId} > form > md-tabs > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:nth-of-type(1)`)),
			singleBranchInfo : element(by.css(`#${pageId} > form > md-tabs > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:nth-of-type(2)`)),
			singleProductTab : element(by.css(`#${pageId} > form > md-tabs > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:nth-of-type(3)`)),
			multiBranchInfo  : element(by.css(`#contactBranchId > form > md-tabs > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:nth-of-type(1)`)),
			multiProductTab  : element(by.css(`#contactBranchId > form > md-tabs > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:nth-of-type(2)`)),
			overAllProductTab: element(by.css(`#${pageId} > form > md-tabs > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:nth-of-type(2)`))
		};

		_this.singleBranch = {
			button: {
				showHistory: (index) => element(by.css(`#contactBranchProduct > ev-table tbody > tr:nth-child(${index}) button.history`)),
				hideHistory: (index) => element(by.css(`#contactBranchProduct > ev-table tbody > tr:nth-child(${index}) > td:nth-child(3) > div`))
			}
		};
		return _this;
	};
}

SupplierContactPO.confBranchProduct = {
	indexId: 'supplierBranchProduct',
	evModel: {
		id    : 'supplierBranchProduct',
		fields: {
			nm: {fixed: true},
			lp: {},
			hi: {}
		},
		dt    : {
			expand  : [],
			filters : {},
			isStatic: true,
			sort    : ['nm'],
			options : {buttons: {add: false, delete: false, edit: false}, toolbar: {filters: false}}
		}
	}
};

SupplierContactPO.confOverAllProduct = {
	indexId: 'supplierProduct',
	evModel: {
		id    : 'supplierProduct',
		fields: {
			pi    : {fixed: true},
			branch: {},
			lp    : {type: 'number'}
		},
		dt    : {
			expand  : false,
			filters : {},
			isStatic: true,
			sort    : ['pi'],
			options : {buttons: {add: false, delete: false, edit: false}, toolbar: {filters: false}}
		}
	}
};

module.exports = SupplierContactPO;
