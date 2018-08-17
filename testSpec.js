'use strict';

const chai     = require('chai');
const {expect} = chai;

describe('Coupon:', () =>{

	const E2EUtil            = require('../../main.e2e.util');
	const E2EHelper          = require('../../main.e2e.helper');
	const index              = require('../../index.e2e.po');
	const mocks              = require('./coupon.e2e.mock');
	const AUTH               = require('../../auth.e2e.mock');
	const po                 = require('./coupon.e2e.po.js');
	const base               = require('../../base/i18n/en.json');
	const productPo          = require('../../inventory/product/product.e2e.po');
	const couponErrorMessage = require('../coupon/i18n/en.json');
	let iPage;

	before(() => E2EHelper.load(AUTH.ADMIN));

	beforeEach(async () =>{
		iPage = await index.load(po.conf);
	});

	afterEach(() => E2EHelper.hasErrors());

	describe('Index:', () =>{

		it('Search, record not found and reset', async () =>{
			await E2EUtil.waitForState(iPage.button.add, true);
			const before = await index.records(iPage);
			await index.doSearch(iPage, mocks.index.wrongSearch);
			await expect(await index.records(iPage)).to.be.equal(mocks.indexData.emptySearch);
			await expect(await iPage.button.reset.isPresent()).to.be.true;
			await index.doReset(iPage);
			await expect(await index.records(iPage)).to.equal(before);
		});

		it('Filter and Search one record', async () =>{
			await E2EUtil.waitForState(iPage.button.add, true);
			const page = await po.fetch();
			await index.add(iPage);
			await po.decorate(page, mocks.couponFilter);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
			await index.doFilter(iPage, mocks.filterCoupon);
			await expect(await index.records(iPage)).to.equal(mocks.poIndex.one);
			await index.doReset(iPage);
			await E2EUtil.waitForState(iPage.button.add, true);

			await index.doSearch(iPage, mocks.filterCoupon.nm);
			await expect(await index.records(iPage)).to.equal(mocks.indexData.searchResult);
			await expect(await iPage.button.reset.isPresent()).to.be.true;
			await index.doReset(iPage);
			await E2EUtil.waitForState(iPage.button.add, true);
		});

		it('Pagination', async () =>{
			await index.nextPage(iPage);
			await index.previousPage(iPage);
		});

		it('Settings, page size and toggle column', async () =>{
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.setRows(iPage, mocks.indexData.setRows1);
			await expect(await iPage.indexId.isPresent()).to.be.true;
			await E2EUtil.waitForRecord(po.conf.indexId);
			await expect(await (iPage.table.header('cc')).isPresent()).to.be.true;
			await index.setColumns(iPage, ['cc']);
			await expect(await iPage.indexId.isPresent()).to.be.true;
			await E2EUtil.waitForRecord(po.conf.indexId);
			await expect(await (iPage.table.header('cc')).isPresent()).to.be.false;
			await index.setColumns(iPage, ['cc']);
			await E2EUtil.waitForRecord(po.conf.indexId);
			await index.setRows(iPage, mocks.indexData.setRows2);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		xit('Basic Sorting', async () =>{
			await E2EUtil.waitForRecord(po.conf.indexId);
			await index.doSort(iPage, mocks.index.sort.name, 'desc');
			await index.doSort(iPage, mocks.index.sort.code, 'asc');
			await index.doSort(iPage, mocks.index.sort.rule, 'desc');
		});
	});

	describe('Validation:', () =>{

		it('Check the mandatory fields like Name,Code, Customer Group,Discount INR And Percentage,Limit,Applies On,Limit Per Customer,Valid From, Valid Till and Event type', async () =>{
			const page = await po.fetch();
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await E2EHelper.isRequired(page.coupon.name);
			await E2EHelper.isRequired(page.coupon.code);
			//await E2EUtil.clearSelect(page.coupon.customerGroup);
			//await E2EHelper.checkForMessage(page.coupon.customerGroup, base.MESSAGE.ERROR.REQUIRED);
			await E2EHelper.isRequired(page.coupon.discountINR);
			await page.buttons.switch.click();
			await E2EHelper.isRequired(page.coupon.discountPercentage);
			await E2EHelper.isRequired(page.coupon.limit);
			await E2EHelper.isRequiredSelect(page.coupon.appliesOn);
			await E2EHelper.isRequiredDate(page.coupon.validFrom);
			await E2EHelper.isRequiredDate(page.coupon.validTill);
			await E2EUtil.doSelect(page.coupon.appliesOn, mocks.validateAppliesOnCustomer.appliesOn);
			await E2EUtil.scrollTo(page.coupon.eventType);
			await E2EHelper.isRequiredSelect(page.coupon.eventType);
			await expect(await page.panel.save.isPresent()).to.be.false;
			await po.cancel(page);
		});

		it('Check the mandatory fields when Applies On Products like Categories, Include Brand, Include Products, Exclude Brands and Exclude Products', async () =>{
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			const page = await po.fetch();
			await po.decorate(page, mocks.mandatoryAppliesOnProduct);
			await E2EHelper.isRequiredSelect(page.coupon.category);
			await E2EUtil.scrollTo(page.coupon.description);
			await E2EHelper.isRequiredSelect(page.coupon.includeBrand);
			await E2EHelper.isRequiredSelect(page.coupon.includeProducts);
			await E2EHelper.isRequiredSelect(page.coupon.excludeBrand);
			await E2EHelper.isRequiredSelect(page.coupon.excludeProduct);
			await E2EHelper.isRequiredDate(page.coupon.validFrom);
			await E2EHelper.isRequiredDate(page.coupon.validTill);
			await expect(await page.panel.save.isPresent()).to.be.false;
			await po.cancel(page);
		});

		it('Coupon applies on BILL check bills related fields are displayed,CUSTOMER and PRODUCT related fields are hidden', async () =>{
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			const page = await po.fetch();
			await po.decorate(page, mocks.validateAppliesOnBills);
			await expect(await page.coupon.billValue.isPresent()).to.be.true;
			await expect(await page.coupon.validFrom.isPresent()).to.be.true;
			await expect(await page.coupon.validTill.isPresent()).to.be.true;
			/*applies on customers*/
			await expect(await page.coupon.eventType.isPresent()).to.be.false;
			await expect(await page.coupon.daysBeforeTheEvent.isPresent()).to.be.false;
			await expect(await page.coupon.daysAfterTheEvent.isPresent()).to.be.false;
			/*applies on products*/
			await expect(await page.coupon.category.isPresent()).to.be.false;
			await expect(await page.coupon.includeBrand.isPresent()).to.be.false;
			await expect(await page.coupon.includeProducts.isPresent()).to.be.false;
			await expect(await page.coupon.excludeBrand.isPresent()).to.be.false;
			await expect(await page.coupon.excludeProduct.isPresent()).to.be.false;
			await expect(await page.coupon.totalRedeemableProducts.isPresent()).to.be.false;
			await expect(await page.coupon.validFrom.isPresent()).to.be.true;
			await expect(await page.coupon.validTill.isPresent()).to.be.true;
			await po.cancel(page);
		});

		

		

	});

});