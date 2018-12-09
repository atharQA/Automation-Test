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

		it('Coupon applies on CUSTOMER check customer related fields are displayed,BILL and PRODUCT related fields are hidden', async () =>{
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			const page = await po.fetch();
			await po.decorate(page, mocks.validateAppliesOnCustomer);
			await expect(await page.coupon.eventType.isPresent()).to.be.true;
			await expect(await page.coupon.daysBeforeTheEvent.isPresent()).to.be.true;
			await expect(await page.coupon.daysAfterTheEvent.isPresent()).to.be.true;
			/*applies on bills*/
			await expect(await page.coupon.billValue.isPresent()).to.be.false;
			await expect(await page.coupon.validFrom.isPresent()).to.be.false;
			await expect(await page.coupon.validTill.isPresent()).to.be.false;
			/*applies on products*/
			await expect(await page.coupon.category.isPresent()).to.be.false;
			await expect(await page.coupon.includeBrand.isPresent()).to.be.false;
			await expect(await page.coupon.includeProducts.isPresent()).to.be.false;
			await expect(await page.coupon.excludeBrand.isPresent()).to.be.false;
			await expect(await page.coupon.excludeProduct.isPresent()).to.be.false;
			await expect(await page.coupon.totalRedeemableProducts.isPresent()).to.be.false;
			await expect(await page.coupon.validFrom.isPresent()).to.be.false;
			await expect(await page.coupon.validTill.isPresent()).to.be.false;
			await po.cancel(page);
		});

		it('Coupon applies on PRODUCT check PRODUCT related fields are displayed,CUSTOMER and BILL related fields are hidden', async () =>{
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			const page = await po.fetch();
			await po.decorate(page, mocks.validateAppliesOnProduct);
			await expect(await page.coupon.category.isPresent()).to.be.true;
			await expect(await page.coupon.includeBrand.isPresent()).to.be.true;
			await expect(await page.coupon.includeProducts.isPresent()).to.be.true;
			await expect(await page.coupon.excludeBrand.isPresent()).to.be.true;
			await expect(await page.coupon.excludeProduct.isPresent()).to.be.true;
			await expect(await page.coupon.totalRedeemableProducts.isPresent()).to.be.true;
			await expect(await page.coupon.validFrom.isPresent()).to.be.true;
			await expect(await page.coupon.validTill.isPresent()).to.be.true;

			/*applies on customers*/
			await expect(await page.coupon.eventType.isPresent()).to.be.false;
			await expect(await page.coupon.daysBeforeTheEvent.isPresent()).to.be.false;
			await expect(await page.coupon.daysAfterTheEvent.isPresent()).to.be.false;
			/*applies on bills*/
			await expect(await page.coupon.billValue.isPresent()).to.be.false;
			await expect(await page.coupon.validFrom.isPresent()).to.be.true;
			await expect(await page.coupon.validTill.isPresent()).to.be.true;
			await po.cancel(page);
		});

		it('Check when Coupon applies on CUSTOMER and Event is selected as Anniversary or birthday, then "DaysBeforeEvent" and "DaysAfterEvent" must present', async () =>{
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			const page = await po.fetch();
			await po.decorate(page, mocks.validateEventTypeAnniversary);
			await expect(await page.coupon.daysBeforeTheEvent.isPresent()).to.be.true;
			await expect(await page.coupon.daysAfterTheEvent.isPresent()).to.be.true;
			await expect(await page.coupon.billValue.isPresent()).to.be.false;

			await po.decorate(page, mocks.validateEventTypeBirthday);
			await expect(await page.coupon.daysBeforeTheEvent.isPresent()).to.be.true;
			await expect(await page.coupon.daysAfterTheEvent.isPresent()).to.be.true;
			await expect(await page.coupon.billValue.isPresent()).to.be.false;
			await po.cancel(page);
		});

		it('Check when Coupon applies on CUSTOMER and Event is selected as New Customer, then "BillValue" and "DaysAfterEvent" must present', async () =>{
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			const page = await po.fetch();
			await po.decorate(page, mocks.validateNewCustomer);
			await expect(await page.coupon.billValue.isPresent()).to.be.true;
			await expect(await page.coupon.billValue.isDisplayed()).to.be.true;
			await expect(await page.coupon.daysAfterTheEvent.isPresent()).to.be.true;
			await expect(await page.coupon.daysBeforeTheEvent.isPresent()).to.be.false;
			await po.cancel(page);
		});

		it('Check for Error message when Discount INR and discount Percentage is written Zero and greater than 100.', async () =>{
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			const page = await po.fetch();
			await po.decorate(page, mocks.validateCouponValue);
			await expect(await page.coupon.discountPercentage.isDisplayed()).to.be.true;
			await E2EHelper.checkFor(page.coupon.discountPercentage, mocks.zeroDiscount.discountPercentage, couponErrorMessage.COUPON.ADD.DISCOUNT_SMALL);
			await E2EHelper.checkFor(page.coupon.discountPercentage, mocks.validateDiscount.percentage, couponErrorMessage.COUPON.ADD.DISCOUNT_LARGE);
			await page.buttons.switch.click();
			await E2EHelper.checkFor(page.coupon.discountINR, mocks.validateDiscount.discountInr, couponErrorMessage.COUPON.ADD.DISCOUNT_RATE);
			await po.cancel(page);
		});

		it('Check when Coupon applies on PRODUCT and when Include Products, Include Brands are selected then Exclude Products and Exclude Brands are hidden', async () =>{
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			const page = await po.fetch();
			await po.decorate(page, mocks.couponIncludeBrandProducts);
			await expect(await page.coupon.includeBrand.isPresent()).to.be.true;
			await expect(await page.coupon.includeProducts.isPresent()).to.be.true;
			await expect(await page.coupon.excludeBrand.isPresent()).to.be.false;
			await expect(await page.coupon.excludeProduct.isPresent()).to.be.false;
			await expect(await page.panel.save.isPresent()).to.be.true;
			await po.cancel(page);
		});

		it('Check when Coupon applies on PRODUCT and when Exclude Products and Exclude Brands are selected then Include Products, Include Brands are hidden', async () =>{
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			const page = await po.fetch();
			await po.decorate(page, mocks.couponExcludeBrandProduct);
			await expect(await page.coupon.excludeBrand.isPresent()).to.be.true;
			await expect(await page.coupon.excludeProduct.isPresent()).to.be.true;
			await expect(await page.coupon.includeBrand.isPresent()).to.be.false;
			await expect(await page.coupon.includeProducts.isPresent()).to.be.false;
			await E2EUtil.waitFor(page.panel.save);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.cancel(page);
		});

		it('Validate for Save button, on Edit when "Not To Be Clubbed With" is selected then SAVE button must display', async () =>{
			const page = await po.fetch();
			await index.add(iPage);
			await po.decorate(page, mocks.couponBillNotToBeClubbedWith);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);

			await index.doSearch(iPage, mocks.couponBillNotToBeClubbedWith.code);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await po.decorate(page, mocks.notToBeClubbedWith);
			await E2EUtil.waitForState(page.panel.save, true);
			await expect(await page.panel.save.isPresent()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
		});

		it('Check for Error message If both Store and Online Coupon CHECKBOX is Not selected. Also Save button should NOT present on Both ADD and EDIT', async () =>{
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			const page = await po.fetch();
			await po.decorate(page, mocks.uncheckedCheckboxStoreCoupon);
			await E2EUtil.scrollTo(page.coupon.name);
			await expect(await page.coupon.storeCoupon.isPresent()).to.be.true;
			await expect(await page.coupon.onlineCoupon.isPresent()).to.be.true;
			await expect(await page.coupon.errorMsg.getText()).to.have.string(couponErrorMessage.COUPON.ADD.ONLINE_STORE_ERROR);

			await expect(await page.panel.save.isPresent()).to.be.false;
			await po.cancel(page);
		});

		it('Check for Customer Group and Not To Be Clubbed With is a MULTI SELECT drop down also Check when Applies on Products then Categories is a MULTI SELECT drop down', async () =>{
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			const page = await po.fetch();
			await expect(await page.coupon.customerGroup.isPresent()).to.be.true;
			let multiSelectCustomerGroup = await page.coupon.customerGroup.getAttribute('aria-multiselectable');
			multiSelectCustomerGroup     = (multiSelectCustomerGroup !== 'false');
			await expect(multiSelectCustomerGroup).to.be.true;

			await expect(await page.coupon.notToBeUsedWith.isPresent()).to.be.true;
			let multiSelectNotToBeClubbedWith = await page.coupon.notToBeUsedWith.getAttribute('aria-multiselectable');
			multiSelectNotToBeClubbedWith     = (multiSelectNotToBeClubbedWith !== 'false');
			await expect(multiSelectNotToBeClubbedWith).to.be.true;

			await E2EUtil.doSelect(page.coupon.appliesOn, mocks.coupon.appliesOn);
			await expect(await page.coupon.category.isPresent()).to.be.true;
			let multiSelectCategories = await page.coupon.category.getAttribute('aria-multiselectable');
			multiSelectCategories     = (multiSelectCategories !== 'false');
			await expect(multiSelectCategories).to.be.true;
			await po.cancel(page);
		});

		it('Negative validation, maximum and minimum text length validation', async () =>{
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			const page = await po.fetch();
			await E2EHelper.isMax(page.coupon.name, mocks.maxLengthValidation.name);
			await E2EHelper.isMax(page.coupon.code, mocks.maxLengthValidation.code);
			await po.decorate(page, mocks.limit);
			await E2EHelper.checkFor(page.coupon.limitPerCustomer, mocks.maxLengthValidation.limitPerCustomer, mocks.limitErrorMessage.message);
			await E2EHelper.isDateValid(page.coupon.validFrom, mocks.maxLengthValidation.validFrom);
			await E2EHelper.isDateValid(page.coupon.validTill, mocks.maxLengthValidation.validTill);
			await E2EUtil.scrollTo(page.coupon.description);
			await po.cancel(page);
		});

		it('Bill value will accept zero and can be empty as it is not mandatory field also Validate same coupon Name and code', async () =>{
			await E2EUtil.waitForState(iPage.button.add, true);
			const page = await po.fetch();
			await index.add(iPage);
			await po.decorate(page, mocks.couponBillZeroSameNameCode);
			await expect(await page.panel.save.isPresent()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
		});

		it('When Applies on Product then Limit per customer and Limit per products can be zero and empty', async () =>{
			await E2EUtil.waitForState(iPage.button.add, true);
			const page = await po.fetch();
			await index.add(iPage);
			await po.decorate(page, mocks.limitValidation);
			await expect(await page.panel.save.isPresent()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
			await index.add(iPage);
			await po.decorate(page, mocks.limitValidationZero);
			await expect(await page.panel.save.isPresent()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
		});

		it('add COUPON used CODE and check for Duplicate Error message', async () =>{
			const page = await po.fetch();
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.addDuplicateCode);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
			await expect(await iPage.indexId.isPresent()).to.be.true;
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await E2EHelper.checkFor(page.coupon.code, mocks.addDuplicateCode.code, base.MESSAGE.ERROR.DUPLICATE);
			await po.cancel(page);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it('Delete Coupon Name on Edit and check for the Required Error message for Coupon Name and Save button must Not be displayed', async () =>{
			const page   = await po.fetch();
			const before = await index.records(iPage);
			await index.doSearch(iPage, mocks.searchValue.customer);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await page.coupon.name.clear();
			await E2EHelper.checkFor(page.coupon.name, mocks.searchValue.name, base.MESSAGE.ERROR.REQUIRED);
			await expect(await page.panel.save.isPresent()).to.be.false;
			await po.cancel(page);
			await index.doReset(iPage);
			await expect(await index.records(iPage)).to.equal(before);
		});

		it('add Coupon with Image and delete image and check SAVE button is present and Save', async () =>{
			const page = await po.fetch();
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.deleteAndAddImage);
			await E2EUtil.scrollTo(page.buttons.image.remove);
			await page.buttons.image.remove.click();
			await expect(await page.panel.save.isPresent()).to.be.true;
			await po.save(page);
			await expect(await iPage.indexId.isPresent()).to.be.true;
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
		});

		it('add Coupon with Image and delete image with same content and again Upload image and check SAVE button is present and SAVE', async () =>{
			const page = await po.fetch();
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.addAndDeleteAndAgainAddImage);
			await E2EUtil.scrollTo(page.buttons.image.remove);
			await page.buttons.image.remove.click();
			await expect(await page.panel.save.isPresent()).to.be.true;
			await E2EUtil.doUpload(page.buttons.image.upload, mocks.addAndDeleteAndAgainAddImage.imageNew);
			await expect(await page.panel.save.isPresent()).to.be.true;
			await po.save(page);
			await expect(await iPage.indexId.isPresent()).to.be.true;
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
		});

		it('Add the Limit Per Customer greater than the limit and check for Error message. Also if clear the limit Per Customer value and given limit Zero then SAVE button must display', async () =>{
			const page = await po.fetch();
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.limitPerCustomerValueMoreThanLimit);
			await E2EHelper.checkForMessage(page.coupon.limitPerCustomer, mocks.limitErrorMessage.message);
			await page.coupon.limit.clear();
			await E2EHelper.isRequired(page.coupon.limit);
			await expect(await page.panel.save.isPresent()).to.be.false;

			await page.coupon.limitPerCustomer.clear();
			await page.coupon.limit.sendKeys(mocks.searchValue.limit);
			await expect(await page.panel.save.isPresent()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
		});

		it('COUPON: On Edit check the CODE must be disabled', async () =>{
			const page = await po.fetch();
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await expect(await E2EUtil.waitForState(page.coupon.code, false)).to.be.true;
			await po.cancel(page);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});
	});

	describe('Add:', () =>{

		it('add junk value', async () =>{
			const page   = await po.fetch();
			const before = await index.records(iPage);
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.couponJunkValue);
			await expect(await page.panel.save.isPresent()).to.be.false;
			await po.cancel(page);
			await expect(await index.records(iPage)).to.equal(before);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it('add all the mandatory fields for Coupon based on the Bill with Image and Save', async () =>{
			const page   = await po.fetch();
			const before = await index.records(iPage);
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.couponBill);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
			await expect(await index.records(iPage)).to.equal(before + 1);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it('add Coupon based on the Bill with discount as percentage and with ASSERT check if the data is refreshed after Add', async () =>{
			const page   = await po.fetch();
			const before = await index.records(iPage);
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.couponBillPercentage);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
			await expect(await index.records(iPage)).to.equal(before + 1);
			await expect(await iPage.indexId.isPresent()).to.be.true;

			await index.doSearch(iPage, mocks.couponBillPercentage.code);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await E2EUtil.waitFor(page.coupon.name);
			await po.assert(expect, page, mocks.couponBillPercentage);
			await po.cancel(page);
			await index.doReset(iPage);
		});

		it.only('add Coupon when applies on Customers and select Event Type as Birthday and fill all the mandatory fields and Save', async () =>{
			const page   = await po.fetch();
			const before = await index.records(iPage);
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.couponBirthDay);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
			await expect(await index.records(iPage)).to.equal(before + 1);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it.only('add Coupon when applies on Customers and select Event Type as Anniversary when discount is given on Percentage and Save', async () =>{
			const page   = await po.fetch();
			const before = await index.records(iPage);
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.couponOnAnniversary);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
			await expect(await index.records(iPage)).to.equal(before + 1);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it('add one Coupon based on Bills But by clicking auto generate CODE button and Save', async () =>{
			const page   = await po.fetch();
			const before = await index.records(iPage);
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.couponBillCodeChange);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
			await expect(await index.records(iPage)).to.equal(before + 1);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it('add Coupon based on Anniversary on discount INR', async () =>{
			const page   = await po.fetch();
			const before = await index.records(iPage);
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.couponAnniversary);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
			await expect(await index.records(iPage)).to.equal(before + 1);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it('add Coupon based on Anniversary with discount on Percentage', async () =>{
			const page   = await po.fetch();
			const before = await index.records(iPage);
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.couponAnniversaryPercentage);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
			await expect(await index.records(iPage)).to.equal(before + 1);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it.only('add Coupon based on the "New Customer" with "BillValue" and "DaysAfterEvent" and with ASSERT check if the data is refreshed after Add', async () =>{
			const page   = await po.fetch();
			const before = await index.records(iPage);
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.couponNewCustomer);
			await E2EUtil.waitFor(page.panel.save);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
			await expect(await index.records(iPage)).to.equal(before + 1);
			await expect(await iPage.indexId.isPresent()).to.be.true;

			await index.doSearch(iPage, mocks.couponNewCustomer.code);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await po.assert(expect, page, mocks.couponNewCustomer);
			await po.cancel(page);
			await index.doReset(iPage);
		});

		it('add Coupon which applies on PRODUCT, select CATEGORIES, Include Brands, Include Products and Save', async () =>{
			const page   = await po.fetch();
			const before = await index.records(iPage);
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.couponIncludeProducts);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
			await expect(await index.records(iPage)).to.equal(before + 1);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it('add Coupon which applies on PRODUCT, select CATEGORIES, Exclude Brands, Exclude Products and Save', async () =>{
			const page   = await po.fetch();
			const before = await index.records(iPage);
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.couponExcludeProducts);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
			await expect(await index.records(iPage)).to.equal(before + 1);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});
	});

	describe('Edit:', () =>{

		it('Update all the fields for Coupon which applies on Bill and change the discount INR to Percentage and Save', async () =>{
			const page = await po.fetch();
			await index.add(iPage);
			await po.decorate(page, mocks.addCouponBill);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);

			const before = await index.records(iPage);
			await index.doSearch(iPage, mocks.addCouponBill.code);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await po.decorate(page, mocks.editCouponBill);
			await E2EUtil.waitFor(page.panel.save);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await index.doReset(iPage);
			await expect(await iPage.indexId.isPresent()).to.be.true;
			await expect(await index.records(iPage)).to.equal(before);
		});

		it('Update all the fields for Coupon when applies on Customers and select Event Type as Birthday with Image and Save', async () =>{
			const page = await po.fetch();
			await index.add(iPage);
			await po.decorate(page, mocks.addCouponBirthDay);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);

			const before = await index.records(iPage);
			await index.doSearch(iPage, mocks.addCouponBirthDay.code);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await po.decorate(page, mocks.editCouponBirthDay);
			await E2EUtil.waitFor(page.panel.save);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await index.doReset(iPage);
			await expect(await iPage.indexId.isPresent()).to.be.true;
			await expect(await index.records(iPage)).to.equal(before);
		});

		it('Update all the fields for Coupon when applies on Customers and select Event Type as Anniversary and Save. Also refresh with ASSERT on Update', async () =>{
			const page = await po.fetch();
			await index.add(iPage);
			await po.decorate(page, mocks.addCouponOnAnniversary);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);

			const before = await index.records(iPage);
			await index.doSearch(iPage, mocks.addCouponOnAnniversary.code);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await po.decorate(page, mocks.editCouponOnAnniversary);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await index.doReset(iPage);
			await expect(await iPage.indexId.isPresent()).to.be.true;
			await expect(await index.records(iPage)).to.equal(before);

			await index.doSearch(iPage, mocks.editCouponOnAnniversary.name);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await po.assert(expect, page, mocks.editCouponOnAnniversary);
			await po.cancel(page);
			await index.doReset(iPage);
		});

		it('Update all the fields for Coupon when applies on Customers and select Event Type as "New Customer" and Save', async () =>{
			const page = await po.fetch();
			await index.add(iPage);
			await po.decorate(page, mocks.addCouponNewCustomer);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);

			const before = await index.records(iPage);
			await index.doSearch(iPage, mocks.addCouponNewCustomer.code);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await po.decorate(page, mocks.editCouponNewCustomer);
			await E2EUtil.waitFor(page.panel.save);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await index.doReset(iPage);
			await expect(await iPage.indexId.isPresent()).to.be.true;
			await expect(await index.records(iPage)).to.equal(before);
		});

		it('Update Coupon when applies on Products, select CATEGORIES, Include Brands, Include Products and Save. Also on Edit change Include Brand and Products to Exclude Brand and Products', async () =>{
			const page = await po.fetch();
			await index.add(iPage);
			await po.decorate(page, mocks.addCouponIncludeProducts);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);

			const before = await index.records(iPage);
			await index.doSearch(iPage, mocks.addCouponIncludeProducts.code);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await po.decorate(page, mocks.editCouponIncludeProducts);
			await E2EUtil.waitFor(page.panel.save);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await index.doReset(iPage);
			await expect(await index.records(iPage)).to.equal(before);

			await index.doSearch(iPage, mocks.addCouponIncludeProducts.code);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await E2EUtil.clearSelect(page.coupon.includeProducts);
			await E2EUtil.clearSelect(page.coupon.includeBrand);
			await po.decorate(page, mocks.editCouponToExcludeProducts);
			await E2EUtil.waitFor(page.panel.save);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await index.doReset(iPage);
		});

		it('Update Coupon when applies on Products, select CATEGORIES, Exclude Brands, Exclude Products and Save. Also on Edit change Exclude Brand and Products to Include Brand and Products', async () =>{
			const page = await po.fetch();
			await index.add(iPage);
			await po.decorate(page, mocks.addCouponExcludeProducts);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);

			const before = await index.records(iPage);
			await index.doSearch(iPage, mocks.addCouponExcludeProducts.code);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await po.decorate(page, mocks.editCouponExcludeProducts);
			await E2EUtil.waitFor(page.panel.save);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await index.doReset(iPage);
			await expect(await index.records(iPage)).to.equal(before);

			await index.doSearch(iPage, mocks.addCouponExcludeProducts.code);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await E2EUtil.clearSelect(page.coupon.excludeProduct);
			await E2EUtil.clearSelect(page.coupon.excludeBrand);
			await po.decorate(page, mocks.editCouponToIncludeProducts);
			await E2EUtil.waitFor(page.panel.save);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await index.doReset(iPage);
		});

		it('Update Coupon Name on Edit and check the SAVE button is displayed', async () =>{
			const page   = await po.fetch();
			const before = await index.records(iPage);
			await index.doSearch(iPage, mocks.searchValue.customer);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await page.coupon.name.clear();
			await po.decorate(page, mocks.editCouponName);
			await E2EUtil.waitFor(page.panel.save);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await expect(await index.records(iPage)).to.equal(before);
		});

		it('Update Coupon type from Bill to Products and Save', async () =>{
			const page = await po.fetch();
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.couponWithBillToProducts);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);

			const before = await index.records(iPage);
			await index.doSearch(iPage, mocks.couponWithBillToProducts.name);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await po.decorate(page, mocks.appliesOnProduct);
			await E2EUtil.waitFor(page.panel.save);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await index.doReset(iPage);
			await expect(await iPage.indexId.isPresent()).to.be.true;
			await expect(await index.records(iPage)).to.equal(before);
		});

		it('Update Coupon type from Bill to Customer and Save', async () =>{
			const page = await po.fetch();
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.couponWithBill);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);

			const before = await index.records(iPage);
			await index.doSearch(iPage, mocks.couponWithBill.name);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await po.decorate(page, mocks.appliesOnCustomers);
			await E2EUtil.waitFor(page.panel.save);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await index.doReset(iPage);
			await expect(await iPage.indexId.isPresent()).to.be.true;
			await expect(await index.records(iPage)).to.equal(before);
		});

		it('Edit Event Type Anniversary to "New Customers", add the "BillValue" and "DaysAfterEvent" and Save', async () =>{
			const page = await po.fetch();
			await index.add(iPage);
			await po.decorate(page, mocks.addForAnniversary);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);

			const before = await index.records(iPage);
			await index.doSearch(iPage, mocks.addForAnniversary.code);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await po.decorate(page, mocks.eventTypeAnniToNewCust);
			await E2EUtil.waitFor(page.panel.save);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await index.doReset(iPage);
			await expect(await index.records(iPage)).to.equal(before);
		});

		it('Add record with Limit and on Edit increase the value of Limit and limit Per Customer', async () =>{
			const page = await po.fetch();
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.couponLimit);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
			await index.doSearch(iPage, mocks.couponLimit.code);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await po.decorate(page, mocks.editLimitAndLimitPerCustomer);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await index.doReset(iPage);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});
	});

	describe('Deactivate:', () =>{

		it('Deactivate the selected record', async () =>{
			const before = await index.records(iPage);
			await index.remove(iPage, mocks.deactivateRecords, mocks.action.deActive);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.DEACTIVATE);
			await expect(await index.records(iPage)).to.equal(before - mocks.deactivateRecords.length);
		});

		//todo create a bill with coupon and then try to delete, it won't delete only we can deactivate
		xit('Create a bill and then Delete the coupon which has bill, it should not delete only we can deactivate and activate and click cancel button', async () =>{
			const before = await index.records(iPage);
			const conf   = await po.conf;
			await index.doSearch(iPage, mocks.searchValue.customerBirthday13);
			await index.remove(iPage, mocks.deleteRecords, mocks.action.delete);

			await index.doDialog(conf.deleteId, mocks.actions.deactivate);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.DEACTIVATE);
			await index.doReset(iPage);
			await index.setRecords(iPage, [mocks.actions.active, mocks.actions.inactive]);
			await index.remove(iPage, mocks.deleteRecords, mocks.action.active);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ACTIVATE);
			await index.setRecords(iPage, [mocks.actions.active, mocks.actions.inactive]);
			await index.doSearch(iPage, mocks.searchValue.customerBirthday13);
			await index.remove(iPage, mocks.deleteRecords, mocks.action.delete);
			await index.doDialog(conf.deleteId, mocks.actions.cancel);
			await expect(await iPage.button.reset.isPresent()).to.be.true;
			await index.doReset(iPage);
			await expect(await index.records(iPage)).to.equal(before);
		});

	});

	describe('Activate:', () =>{

		it('Activating the deactivate records', async () =>{
			const before = await index.records(iPage);
			await index.setRecords(iPage, [mocks.actions.active, mocks.actions.inactive]);
			await index.remove(iPage, mocks.activateRecords, mocks.action.active);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ACTIVATE);
			await index.setRecords(iPage, [mocks.actions.active, mocks.actions.inactive]);
			await expect(await index.records(iPage)).to.equal(before + mocks.activateRecords.length);
		});
	});

	describe('Delete:', () =>{

		it('Delete the selected multiple record', async () =>{
			const before = await index.records(iPage);
			await index.remove(iPage, mocks.deleteRecords, mocks.action.delete);
			await expect(await index.records(iPage)).to.equal(before - mocks.deleteRecords.length);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.DELETE);
		});
	});

	xdescribe('Deactivate_Product:', () =>{

		it('Go to product module DEACTIVATE one product and search for the same product in COUPON ADD and EDIT, check it should not present', async () =>{
			const productIPage = await index.load(productPo.conf);
			const productPage  = await productPo.fetch();
			await E2EUtil.waitForState(productIPage.button.filter, true);
			await index.doFilter(productIPage, mocks.filterProduct);
			await E2EUtil.waitForState(productIPage.button.reset, true);
			await index.remove(productIPage, mocks.deactivateProduct, mocks.poIndex.zero);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.DEACTIVATE);
			await index.doReset(productIPage);

			iPage      = await index.load(po.conf);
			const page = await po.fetch();
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.couponUniqueProduct);
			await E2EUtil.doSelect(page.coupon.includeProducts, null, null, mocks.filterProduct.nm);
			const addResponseMsg = await E2EUtil.doSelectAddButtonIsExist(page.coupon.includeProducts, mocks.filterProduct.nm);
			await expect(addResponseMsg).to.have.string(base.MESSAGE.ERROR.NOT_FOUND);
			await po.cancel(page);

			await E2EUtil.waitForState(iPage.button.filter, true);
			await index.doSearch(iPage, mocks.searchCouponIncludeProducts.nm);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await E2EUtil.scrollTo(page.coupon.includeProducts);
			await E2EUtil.scrollTo(page.coupon.description);
			await E2EUtil.doSelect(page.coupon.includeProducts, null, null, mocks.filterProduct.nm);
			const editResponseMsg = await E2EUtil.doSelectAddButtonIsExist(page.coupon.includeProducts, mocks.filterProduct.nm);
			await expect(editResponseMsg).to.have.string(base.MESSAGE.ERROR.NOT_FOUND);
			await po.cancel(page);
			await index.doReset(iPage);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it('Add a new product with variant,DEACTIVATE one product variant and search for the same product in COUPON add, it should not present But remaining product must present', async () =>{
			const productIPage = await index.load(productPo.conf);
			const productPage  = await productPo.fetch();
			await E2EUtil.waitForState(productIPage.button.add, true);
			await index.add(productIPage);
			await productPo.decorateAddProduct(productPage, mocks.addProductVariant);
			await E2EUtil.doTab(productPage.tabs.product, mocks.poIndex.two);
			await E2EUtil.doTab(productPage.tabs.product, mocks.poIndex.three);
			await productPage.add.variantDetail.status(mocks.poIndex.two).click();
			await productPo.save(productPage, 'product');
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);

			iPage      = await index.load(po.conf);
			const page = await po.fetch();
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.couponUniqueProduct);
			await E2EUtil.scrollTo(page.coupon.includeProducts);
			await E2EUtil.scrollTo(page.coupon.description);
			await E2EUtil.doSelect(page.coupon.includeProducts, null, null, mocks.addProductVariant.productName1);
			const responseMsg = await E2EUtil.doSelectAddButtonIsExist(page.coupon.includeProducts, mocks.addProductVariant.productName1);
			await expect(responseMsg).to.have.string(base.MESSAGE.ERROR.NOT_FOUND);

			await E2EUtil.doSelect(page.coupon.includeProducts, null, null, mocks.addProductVariant.productName2);
			const productName2 = await E2EUtil.doSelectAddButtonIsExist(page.coupon.includeProducts, mocks.addProductVariant.productName2);
			await expect(productName2).to.have.string(mocks.addProductVariant.productName2);

			await E2EUtil.doSelect(page.coupon.includeProducts, null, null, mocks.addProductVariant.productName3);
			const productName3 = await E2EUtil.doSelectAddButtonIsExist(page.coupon.includeProducts, mocks.addProductVariant.productName3);
			await expect(productName3).to.have.string(mocks.addProductVariant.productName3);
			await po.cancel(page);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it('Again ACTIVATE that product and search for the same product in COUPON add, it should present also Save record with all product variant', async () =>{
			const productIPage = await index.load(productPo.conf);
			const productPage  = await productPo.fetch();
			await E2EUtil.waitForState(productIPage.button.search, true);
			await index.doSearch(productIPage, mocks.addProductVariant.product.name);
			await index.edit(productIPage, mocks.poIndex.one);
			await E2EUtil.doTab(productPage.tabs.product, mocks.poIndex.three);
			await productPage.add.variantDetail.status(mocks.poIndex.two).click();
			await productPo.save(productPage, 'product');
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await index.doReset(productIPage);
			await expect(await productIPage.indexId.isPresent()).to.be.true;

			iPage      = await index.load(po.conf);
			const page = await po.fetch();
			await E2EUtil.waitForState(iPage.button.add, true);
			await index.add(iPage);
			await po.decorate(page, mocks.couponUniqueProduct);
			await E2EUtil.scrollTo(page.coupon.includeProducts);
			await E2EUtil.scrollTo(page.coupon.description);
			await E2EUtil.doSelect(page.coupon.includeProducts, null, null, mocks.addProductVariant.productName3);
			const productName3 = await E2EUtil.doSelectAddButtonIsExist(page.coupon.includeProducts, mocks.addProductVariant.productName3);
			await expect(productName3).to.have.string(mocks.addProductVariant.productName3);

			await E2EUtil.doSelect(page.coupon.includeProducts, null, null, mocks.addProductVariant.productName2);
			const productName2 = await E2EUtil.doSelectAddButtonIsExist(page.coupon.includeProducts, mocks.addProductVariant.productName2);
			await expect(productName2).to.have.string(mocks.addProductVariant.productName2);

			await E2EUtil.doSelect(page.coupon.includeProducts, null, null, mocks.addProductVariant.productName1);
			const productName1 = await E2EUtil.doSelectAddButtonIsExist(page.coupon.includeProducts, mocks.addProductVariant.productName1);
			await expect(productName1).to.have.string(mocks.addProductVariant.productName1);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
		});

		it('Now DEACTIVATE that product variant,Edit same COUPON record and search for all same product,all three should present in disabled mode', async () =>{
			const productIPage = await index.load(productPo.conf);
			const productPage  = await productPo.fetch();
			await E2EUtil.waitForState(productIPage.button.search, true);
			await index.doSearch(productIPage, mocks.addProductVariant.product.name);
			await index.edit(productIPage, mocks.poIndex.one);
			await E2EUtil.waitFor(productPage.tabs.allTab(mocks.poIndex.two));
			await E2EUtil.doTab(productPage.tabs.product, mocks.poIndex.three);
			await productPage.add.variantDetail.status(mocks.statusIndex.two).click();
			await productPage.add.variantDetail.status(mocks.statusIndex.three).click();
			await productPage.add.variantDetail.status(mocks.statusIndex.four).click();
			await productPo.save(productPage, 'product');
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await index.doReset(productIPage);

			iPage      = await index.load(po.conf);
			const page = await po.fetch();
			await E2EUtil.waitForState(iPage.button.search, true);
			await index.doSearch(iPage, mocks.couponUniqueProduct.code);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await E2EUtil.scrollTo(page.coupon.includeProducts);
			await E2EUtil.scrollTo(page.coupon.description);
			await E2EUtil.doSelect(page.coupon.includeProducts, null, null, mocks.addProductVariant.productName1);
			await E2EUtil.doSelect(page.coupon.includeProducts, null, null, mocks.addProductVariant.productName2);
			await E2EUtil.doSelect(page.coupon.includeProducts, null, null, mocks.addProductVariant.productName3);
			await po.cancel(page);
			await index.doReset(iPage);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});
	});

	describe('Coupon ACL_scenarios', () =>{

		it('COUPON: ADMIN user on login has all the permission for Add, Edit, Deactivate, Activate and Delete', async () =>{
			await E2EHelper.logout();
			await E2EHelper.load(AUTH.ADMIN);
			iPage = await index.load(po.conf);
			await E2EUtil.waitForState(iPage.button.add, true);
			const before = await index.records(iPage);
			const page   = await po.fetch();
			await index.add(iPage);
			await po.decorate(page, mocks.couponACL);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
			await expect(await index.records(iPage)).to.equal(before + 1);
			await expect(await iPage.indexId.isPresent()).to.be.true;

			await index.doSearch(iPage, mocks.couponACL.name);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await po.decorate(page, mocks.editCouponACL);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await index.doReset(iPage);
			await expect(await iPage.indexId.isPresent()).to.be.true;

			await index.doSearch(iPage, mocks.editCouponACL.name);
			await index.remove(iPage, mocks.deactivateAcl, mocks.action.deActive);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.DEACTIVATE);

			await index.setRecords(iPage, [mocks.actions.active, mocks.actions.inactive]);
			await index.doSearch(iPage, mocks.editCouponACL.name);
			await index.remove(iPage, mocks.activateAcl, mocks.action.active);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ACTIVATE);
			await index.setRecords(iPage, [mocks.actions.inactive, mocks.actions.active]);

			await index.doSearch(iPage, mocks.editCouponACL.name);
			await index.remove(iPage, mocks.deleteRecords, mocks.action.delete);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.DELETE);
			await index.doReset(iPage);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it('COUPON: SUPERVISOR user on login has all the permission for Add, Edit, Deactivate, Activate and Delete', async () =>{
			await E2EHelper.logout();
			await E2EHelper.load(AUTH.SUPERUSER);
			iPage = await index.load(po.conf);
			await E2EUtil.waitForState(iPage.button.add, true);
			const before = await index.records(iPage);
			const page   = await po.fetch();
			await index.add(iPage);
			await po.decorate(page, mocks.couponACL);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
			await expect(await index.records(iPage)).to.equal(before + 1);
			await expect(await iPage.indexId.isPresent()).to.be.true;

			await index.doSearch(iPage, mocks.couponACL.name);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await po.decorate(page, mocks.editCouponACL);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await index.doReset(iPage);
			await expect(await iPage.indexId.isPresent()).to.be.true;

			await index.doSearch(iPage, mocks.editCouponACL.name);
			await index.remove(iPage, mocks.deactivateAcl, mocks.action.deActive);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.DEACTIVATE);

			await index.setRecords(iPage, [mocks.actions.active, mocks.actions.inactive]);
			await index.doSearch(iPage, mocks.editCouponACL.name);
			await index.remove(iPage, mocks.activateAcl, mocks.action.active);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ACTIVATE);
			await index.setRecords(iPage, [mocks.actions.inactive, mocks.actions.active]);

			await index.doSearch(iPage, mocks.editCouponACL.name);
			await index.remove(iPage, mocks.deleteRecords, mocks.action.delete);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.DELETE);
			await index.doReset(iPage);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it('COUPON: STORE MANAGER on login has all the permission for Add, Edit, Deactivate, Activate and Delete', async () =>{
			await E2EHelper.logout();
			await E2EHelper.load(AUTH.MANAGER_STORE);
			iPage = await index.load(po.conf);
			await E2EUtil.waitForState(iPage.button.add, true);
			const before = await index.records(iPage);
			const page   = await po.fetch();
			await index.add(iPage);
			await po.decorate(page, mocks.couponACL);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
			await expect(await index.records(iPage)).to.equal(before + 1);
			await expect(await iPage.indexId.isPresent()).to.be.true;

			await index.doSearch(iPage, mocks.couponACL.name);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await po.decorate(page, mocks.editCouponACL);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await index.doReset(iPage);
			await expect(await iPage.indexId.isPresent()).to.be.true;

			await index.doSearch(iPage, mocks.editCouponACL.name);
			await index.remove(iPage, mocks.deactivateAcl, mocks.action.deActive);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.DEACTIVATE);

			await index.setRecords(iPage, [mocks.actions.active, mocks.actions.inactive]);
			await index.doSearch(iPage, mocks.editCouponACL.name);
			await index.remove(iPage, mocks.activateAcl, mocks.action.active);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ACTIVATE);
			await index.setRecords(iPage, [mocks.actions.inactive, mocks.actions.active]);

			await index.doSearch(iPage, mocks.editCouponACL.name);
			await index.remove(iPage, mocks.deleteRecords, mocks.action.delete);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.DELETE);
			await index.doReset(iPage);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it('COUPON: SERVICE MANAGER on login has all the permission for Add, Edit, Deactivate, Activate and Delete', async () =>{
			await E2EHelper.logout();
			await E2EHelper.load(AUTH.MANAGER_CUSTOMER_SERVICE);
			iPage = await index.load(po.conf);
			await E2EUtil.waitForState(iPage.button.add, true);
			const before = await index.records(iPage);
			const page   = await po.fetch();
			await index.add(iPage);
			await po.decorate(page, mocks.couponACL);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
			await expect(await index.records(iPage)).to.equal(before + 1);
			await expect(await iPage.indexId.isPresent()).to.be.true;

			await index.doSearch(iPage, mocks.couponACL.name);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await po.decorate(page, mocks.editCouponACL);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await index.doReset(iPage);
			await expect(await iPage.indexId.isPresent()).to.be.true;

			await index.doSearch(iPage, mocks.editCouponACL.name);
			await index.remove(iPage, mocks.deactivateAcl, mocks.action.deActive);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.DEACTIVATE);

			await index.setRecords(iPage, [mocks.actions.active, mocks.actions.inactive]);
			await index.doSearch(iPage, mocks.editCouponACL.name);
			await index.remove(iPage, mocks.activateAcl, mocks.action.active);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ACTIVATE);
			await index.setRecords(iPage, [mocks.actions.inactive, mocks.actions.active]);

			await index.doSearch(iPage, mocks.editCouponACL.name);
			await index.remove(iPage, mocks.deleteRecords, mocks.action.delete);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.DELETE);
			await index.doReset(iPage);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it('COUPON: CUSTOMER SUPPORT EXECUTIVE on login has permission for Add, Edit, Deactivate, Activate BUT NOT Delete AND Expect Add button is displayed', async () =>{
			await E2EHelper.logout();
			await E2EHelper.load(AUTH.USER_CUSTOMER_SERVICE);
			iPage = await index.load(po.conf);
			await E2EUtil.waitForState(iPage.button.add, true);
			const before = await index.records(iPage);
			const page   = await po.fetch();
			await index.add(iPage);
			await po.decorate(page, mocks.couponACL);
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ADD);
			await expect(await index.records(iPage)).to.equal(before + 1);
			await expect(await iPage.button.add.isPresent()).to.be.true;
			await expect(await iPage.button.add.isDisplayed()).to.be.true;

			await index.doSearch(iPage, mocks.couponACL.name);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await po.decorate(page, mocks.editCouponACL);
			await expect(await page.panel.save.isDisplayed()).to.be.true;
			await po.save(page);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.UPDATE);
			await index.doReset(iPage);
			await expect(await iPage.indexId.isPresent()).to.be.true;

			await index.doSearch(iPage, mocks.editCouponACL.name);
			await index.remove(iPage, mocks.deactivateAcl, mocks.action.deActive);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.DEACTIVATE);

			await index.setRecords(iPage, [mocks.actions.active, mocks.actions.inactive]);
			await index.doSearch(iPage, mocks.editCouponACL.name);
			await index.remove(iPage, mocks.activateAcl, mocks.action.active);
			await expect(await E2EUtil.doToast()).to.have.string(base.MESSAGE.SUCCESS.ACTIVATE);
			await index.setRecords(iPage, [mocks.actions.inactive, mocks.actions.active]);
			await index.doReset(iPage);
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it('COUPON TYPE CUSTOMERS: POS User on login can only view, they do not have access to Add, Edit and Delete anything as all the elements will be disabled', async () =>{
			await E2EHelper.logout();
			await E2EHelper.load(AUTH.USER_POS);
			iPage      = await index.load(po.conf);
			const page = await po.fetch();
			await index.nextPage(iPage);
			await index.previousPage(iPage);
			await E2EUtil.waitForState(iPage.button.filter, true);
			await index.setRows(iPage, mocks.indexData.setRows2);
			await E2EUtil.waitForState(iPage.button.filter, true);
			await index.doFilter(iPage, mocks.filterCouponTypeCustomers);
			await E2EUtil.waitForState(iPage.button.reset, true);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await expect(await E2EUtil.waitForState(page.coupon.name, false)).to.be.true;
			await expect(await E2EUtil.waitForState(page.coupon.code, false)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.discountPercentage)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.limit)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.limitPerCustomer)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.storeCoupon)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.onlineCoupon)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.appliesOn)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.eventType)).to.be.true;

			await E2EUtil.scrollTo(page.coupon.description);
			await expect(await E2EUtil.getDisabled(page.coupon.daysAfterTheEvent)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.notToBeUsedWith)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.description)).to.be.true;
			await po.cancel(page);
			await E2EUtil.waitFor(iPage.button.reset);
			await expect(await iPage.button.reset.isPresent()).to.be.true;
			await iPage.button.reset.click();
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it('COUPON TYPE CUSTOMERS: FLOOR SUPERVISOR on login can only view, they do not have access to Add, Edit and Delete anything as all the elements will be disabled', async () =>{
			await E2EHelper.logout();
			await E2EHelper.load(AUTH.SUPERVISOR_FLOOR);
			iPage      = await index.load(po.conf);
			const page = await po.fetch();
			await index.nextPage(iPage);
			await index.previousPage(iPage);
			await E2EUtil.waitForState(iPage.button.filter, true);
			await index.setRows(iPage, mocks.indexData.setRows2);
			await E2EUtil.waitForState(iPage.button.filter, true);
			await index.doFilter(iPage, mocks.filterCouponTypeCustomers);
			await E2EUtil.waitForState(iPage.button.reset, true);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await expect(await E2EUtil.waitForState(page.coupon.name, false)).to.be.true;
			await expect(await E2EUtil.waitForState(page.coupon.code, false)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.limit)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.discountPercentage)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.limitPerCustomer)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.storeCoupon)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.onlineCoupon)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.appliesOn)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.eventType)).to.be.true;

			await E2EUtil.scrollTo(page.coupon.description);
			await expect(await E2EUtil.getDisabled(page.coupon.daysAfterTheEvent)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.notToBeUsedWith)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.description)).to.be.true;
			await po.cancel(page);
			await E2EUtil.waitFor(iPage.button.reset);
			await expect(await iPage.button.reset.isPresent()).to.be.true;
			await iPage.button.reset.click();
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it('COUPON TYPE BILLS: POS User on login can only view, they do not have access to Add, Edit and Delete anything as all the elements will be disabled', async () =>{
			await E2EHelper.logout();
			await E2EHelper.load(AUTH.USER_POS);
			iPage      = await index.load(po.conf);
			const page = await po.fetch();
			await index.nextPage(iPage);
			await index.previousPage(iPage);
			await E2EUtil.waitForState(iPage.button.filter, true);
			await index.doFilter(iPage, mocks.filterCouponTypeBill);
			await E2EUtil.waitForState(iPage.button.reset, true);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await expect(await E2EUtil.waitForState(page.coupon.name, false)).to.be.true;
			await expect(await E2EUtil.waitForState(page.coupon.code, false)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.storeCoupon)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.onlineCoupon)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.discountINR)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.limit)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.limitPerCustomer)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.appliesOn)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.billValue)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.validFrom)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.validTill)).to.be.true;

			await E2EUtil.scrollTo(page.coupon.description);
			await expect(await E2EUtil.getDisabled(page.coupon.notToBeUsedWith)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.description)).to.be.true;
			await po.cancel(page);
			await E2EUtil.waitFor(iPage.button.reset);
			await expect(await iPage.button.reset.isPresent()).to.be.true;
			await iPage.button.reset.click();
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it('COUPON TYPE BILLS: FLOOR SUPERVISOR on login can only view, they do not have access to Add, Edit and Delete anything as all the elements will be disabled', async () =>{
			await E2EHelper.logout();
			await E2EHelper.load(AUTH.SUPERVISOR_FLOOR);
			iPage      = await index.load(po.conf);
			const page = await po.fetch();
			await index.nextPage(iPage);
			await index.previousPage(iPage);
			await E2EUtil.waitForState(iPage.button.filter, true);
			await index.doFilter(iPage, mocks.filterCouponTypeBill);
			await E2EUtil.waitForState(iPage.button.reset, true);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await expect(await E2EUtil.waitForState(page.coupon.name, false)).to.be.true;
			await expect(await E2EUtil.waitForState(page.coupon.code, false)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.storeCoupon)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.onlineCoupon)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.discountINR)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.limit)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.limitPerCustomer)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.appliesOn)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.billValue)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.validFrom)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.validTill)).to.be.true;

			await E2EUtil.scrollTo(page.coupon.description);
			await expect(await E2EUtil.getDisabled(page.coupon.notToBeUsedWith)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.description)).to.be.true;
			await po.cancel(page);
			await E2EUtil.waitFor(iPage.button.reset);
			await expect(await iPage.button.reset.isPresent()).to.be.true;
			await iPage.button.reset.click();
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it('COUPON TYPE PRODUCTS: POS User on login can only view, they do not have access to Add, Edit and Delete anything as all the elements will be disabled', async () =>{
			await E2EHelper.logout();
			await E2EHelper.load(AUTH.USER_POS);
			iPage      = await index.load(po.conf);
			const page = await po.fetch();
			await index.nextPage(iPage);
			await index.previousPage(iPage);
			await E2EUtil.waitForState(iPage.button.filter, true);
			await index.doFilter(iPage, mocks.filterCouponTypeProducts);
			await E2EUtil.waitForState(iPage.button.reset, true);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await expect(await E2EUtil.waitForState(page.coupon.name, false)).to.be.true;
			await expect(await E2EUtil.waitForState(page.coupon.code, false)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.storeCoupon)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.onlineCoupon)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.discountPercentage)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.limit)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.limitPerCustomer)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.appliesOn)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.category)).to.be.true;

			await E2EUtil.scrollTo(page.coupon.description);
			await expect(await E2EUtil.getDisabled(page.coupon.includeBrand)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.includeProducts)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.validFrom)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.validTill)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.notToBeUsedWith)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.description)).to.be.true;
			await po.cancel(page);
			await E2EUtil.waitFor(iPage.button.reset);
			await expect(await iPage.button.reset.isPresent()).to.be.true;
			await iPage.button.reset.click();
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});

		it('COUPON TYPE PRODUCTS: FLOOR SUPERVISOR on login can only view, they do not have access to Add, Edit and Delete anything as all the elements will be disabled', async () =>{
			await E2EHelper.logout();
			await E2EHelper.load(AUTH.SUPERVISOR_FLOOR);
			iPage      = await index.load(po.conf);
			const page = await po.fetch();
			await index.nextPage(iPage);
			await index.previousPage(iPage);
			await E2EUtil.waitForState(iPage.button.filter, true);
			await index.doFilter(iPage, mocks.filterCouponTypeProducts);
			await E2EUtil.waitForState(iPage.button.reset, true);
			await index.edit(iPage, mocks.selectRecord.rowOne);
			await expect(await E2EUtil.waitForState(page.coupon.name, false)).to.be.true;
			await expect(await E2EUtil.waitForState(page.coupon.code, false)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.storeCoupon)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.onlineCoupon)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.discountPercentage)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.limit)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.limitPerCustomer)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.appliesOn)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.category)).to.be.true;

			await E2EUtil.scrollTo(page.coupon.description);
			await expect(await E2EUtil.getDisabled(page.coupon.includeBrand)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.includeProducts)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.validFrom)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.validTill)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.notToBeUsedWith)).to.be.true;
			await expect(await E2EUtil.getDisabled(page.coupon.description)).to.be.true;
			await po.cancel(page);
			await E2EUtil.waitFor(iPage.button.reset);
			await expect(await iPage.button.reset.isPresent()).to.be.true;
			await iPage.button.reset.click();
			await expect(await iPage.indexId.isPresent()).to.be.true;
		});
	});

});
