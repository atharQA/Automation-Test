'use strict';

const chai     = require('chai');
const {expect} = chai;

describe('Contact: Supplier:', () =>{

	const AUTH      = require('../../auth.e2e.mock');
	const E2EUtil   = require('../../main.e2e.util');
	const E2EHelper = require('../../main.e2e.helper');
	const IndexPage = require('../../index.e2e.po');

	const Mocks            = require('./supplier.e2e.mock');
	const ContactPage      = require('./supplier.e2e.po');
	const ProductIndexPage = require('../../inventory/product/index/productIndex.e2e.po');

	const PurchasePage = require('../../inventory/purchase/purchase.e2e.po');
	const ProductPage  = require('../../inventory/product/product.e2e.po');
	const MsgBase      = require('../../../../src/app/main/base/i18n/en');

	const IndexPO            = IndexPage.fetch(ContactPage.conf);
	const PurchaseIndexPO    = IndexPage.fetch(PurchasePage.conf);
	const ProductIndexPagePO = IndexPage.fetch(ProductIndexPage.conf);
	const SupplierPO         = ContactPage.fetch(ContactPage.PAGE.supplier);
	const PurchasePO         = PurchasePage.fetch();
	const ProductPO          = ProductPage.fetch();

	before(() => E2EHelper.login(AUTH.TEST1, AUTH.TEST1.SUPERVISOR));
	after(() => E2EHelper.hasErrors().then(E2EHelper.logout));

	afterEach(() => E2EHelper.hasErrors());

	describe('Record:', () =>{

		beforeEach(() => ContactPage.load());

		describe('Validation:', () =>{

			it('#13: required fields, Check for Max and Min length validation and panel cancel', async () =>{
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await E2EHelper.isRequired(SupplierPO.contactInfo.name);
				await E2EHelper.isMax(SupplierPO.contactInfo.name, Mocks.SupplierValidation.ContactValidation.name);
				await SupplierPO.tabs.singleBranchInfo.click();
				await E2EHelper.isRequired(SupplierPO.contactInfo.branchName);
				await E2EHelper.isRequired(SupplierPO.contactInfo.contactNumber(1, 1, 'phoneNumber'));

				await E2EHelper.isMax(SupplierPO.contactInfo.branchName, Mocks.SupplierValidation.ContactValidation.branch[0].branchName);
				await E2EHelper.isMax(SupplierPO.contactInfo.person, Mocks.SupplierValidation.ContactValidation.branch[0].person);

				await E2EUtil.scrollTo(SupplierPO.contactInfo.address);
				await SupplierPO.contactInfo.address.sendKeys(Mocks.SupplierValidation.ContactValidation.branch[0].address);
				await E2EHelper.isMax(SupplierPO.contactInfo.pinCode, Mocks.SupplierValidation.ContactValidation.branch[0].maxPinCode);
				await E2EHelper.isMin(SupplierPO.contactInfo.pinCode, Mocks.SupplierValidation.ContactValidation.branch[0].minPinCode);
				await E2EHelper.isMax(SupplierPO.contactInfo.contactNumber(3, 1, 'egoNumber'), Mocks.SupplierValidation.ContactValidation.branch[0].idNumber);
				await E2EHelper.isMax(SupplierPO.contactInfo.contactNumber(2, 1, 'emailAddress'), Mocks.SupplierValidation.ContactValidation.branch[0].emailAddress);
				await ContactPage.cancel(SupplierPO);
			});

			it('#14: validation between Address and Pin Code, as when Address is written PinCode becomes mandatory and vice-versa, Also if clear the address then pinCode must Not become disabled', async () =>{
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await SupplierPO.tabs.singleBranchInfo.click();
				await SupplierPO.contactInfo.address.sendKeys(Mocks.SupplierValidation.ContactValidation.branch[0].address);
				await E2EHelper.isRequired(SupplierPO.contactInfo.pinCode);
				await SupplierPO.contactInfo.pinCode.sendKeys(Mocks.SupplierValidation.ContactValidation.branch[0].validPinCode);
				await SupplierPO.contactInfo.address.clear();
				await E2EHelper.isRequired(SupplierPO.contactInfo.address);

				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.pinCode)).to.be.false;
				await ContactPage.cancel(SupplierPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#15: Initially PinCode must be in disabled state, when address in written then PinCode should be active. Also validate correct pinCode on selecting correct address', async () =>{
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await SupplierPO.tabs.singleBranchInfo.click();
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.contactType(1, 1, 'phoneType'), true)).to.be.true;
				await E2EUtil.scrollTo(SupplierPO.contactInfo.pinCode);
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.pinCode)).to.be.true;
				await ContactPage.cancel(SupplierPO);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierValidation.AddSupplierAddress);
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.pinCode)).to.be.false;
				await ContactPage.cancel(SupplierPO);

				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierValidation.AutoSelectPinCode);
				await expect(await E2EUtil.isEqual(SupplierPO.contactInfo.pinCode, Mocks.SupplierValidation.AutoSelectPinCode.correctPinCode)).to.be.true;
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#16: Check initially save button is not to be displayed in Both Add and Edit', async () =>{
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await expect(await SupplierPO.panel.save.isDisplayed()).to.be.false;
				await ContactPage.cancel(SupplierPO);
				await E2EUtil.waitForState(IndexPO.button.search, true);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWOP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await expect(await SupplierPO.panel.save.isDisplayed()).to.be.false;
				await ContactPage.cancel(SupplierPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#17: Check monday-friday default days selected and if Multiple Branch checkbox is checked then add branch button must be displayed.', async () =>{
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await SupplierPO.tabs.singleBranchInfo.click();
				await E2EUtil.scrollTo(SupplierPO.button.expand);
				await expect(await E2EUtil.getChecked(SupplierPO.button.days(Mocks.Count.PoIndexNo.one))).to.equal(Mocks.Count.EqualTo.zero);
				await expect(await E2EUtil.getChecked(SupplierPO.button.days(Mocks.Count.PoIndexNo.two))).to.equal(Mocks.Count.EqualTo.one);
				await expect(await E2EUtil.getChecked(SupplierPO.button.days(Mocks.Count.PoIndexNo.three))).to.equal(Mocks.Count.EqualTo.one);
				await expect(await E2EUtil.getChecked(SupplierPO.button.days(Mocks.Count.PoIndexNo.four))).to.equal(Mocks.Count.EqualTo.one);
				await expect(await E2EUtil.getChecked(SupplierPO.button.days(Mocks.Count.PoIndexNo.five))).to.equal(Mocks.Count.EqualTo.one);
				await expect(await E2EUtil.getChecked(SupplierPO.button.days(Mocks.Count.PoIndexNo.six))).to.equal(Mocks.Count.EqualTo.one);
				await expect(await E2EUtil.getChecked(SupplierPO.button.days(Mocks.Count.PoIndexNo.seven))).to.equal(Mocks.Count.EqualTo.zero);

				await SupplierPO.tabs.suppInfo.click();
				await SupplierPO.contactInfo.multiBranch.click();
				await expect(await SupplierPO.button.addBranch.isDisplayed()).to.be.true;
				await ContactPage.cancel(SupplierPO);
			});

			it('#18: If add more records of phone type than in first record button should be minus and last record to be plus', async () =>{
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.AddMoreRecords);
				await E2EUtil.scrollTo(SupplierPO.button.minus(1, 1));
				await expect(await SupplierPO.button.minus(1, 1).isPresent()).to.be.true;
				await expect(await SupplierPO.button.minus(1, 1).isDisplayed()).to.be.true;
				await expect(await SupplierPO.button.minus(1, 2).isPresent()).to.be.true;
				await expect(await SupplierPO.button.minus(1, 2).isDisplayed()).to.be.true;
				await expect(await SupplierPO.button.plus(1, 3).isPresent()).to.be.true;
				await expect(await SupplierPO.button.plus(1, 3).isDisplayed()).to.be.true;
				await ContactPage.cancel(SupplierPO);
			});

			it('#19: Check for ID number format is accepting all alpha, numeric and special character', async () =>{
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierValidation.IdValidation);
				await ContactPage.cancel(SupplierPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#20: Check for Product drop down should be multi select drop down.', async () =>{
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await SupplierPO.tabs.singleBranchInfo.click();
				await expect(await SupplierPO.contactInfo.productName.isPresent()).to.be.true;
				let multiSelect = await SupplierPO.contactInfo.productName.getAttribute('aria-multiselectable');
				multiSelect     = (multiSelect !== 'false');
				await expect(multiSelect).to.be.true;
				await ContactPage.cancel(SupplierPO);
			});

			it('#21: Check each card have delete button and delete icon, deactivate and cancel icon', async () =>{
				await E2EUtil.waitForState(IndexPO.button.search, true);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierEMBWOP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.one).isDisplayed()).to.be.true;
				await expect(await SupplierPO.card.front.button(Mocks.Count.EqualTo.one, 'icon-delete').isPresent()).to.be.true;
				await SupplierPO.card.front.button(Mocks.Count.EqualTo.one, 'icon-delete').click();
				await expect(await SupplierPO.card.back.button(Mocks.Count.EqualTo.one, 'icon-checkbox-marked-circle').isPresent()).to.be.true;
				await expect(await SupplierPO.card.back.button(Mocks.Count.EqualTo.one, 'icon-eye-off').isPresent()).to.be.true;
				await expect(await SupplierPO.card.back.button(Mocks.Count.EqualTo.one, 'icon-close-circle-outline').isPresent()).to.be.true;
				await ContactPage.cancel(SupplierPO);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#22: If unchecked the multi-branch checkbox of supplier "Add Multi Branch With Product" which has Total Outstanding and Credit Balance, then a pop-up must display and we will NOT be able to Delete any Branch. So just Click CANCEL', async () =>{
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				await E2EUtil.waitForState(IndexPO.button.search, true);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierAdd.SupplierAMBWP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await expect(await E2EUtil.isEqual(SupplierPO.contactInfo.totalOutstandingBalance, Mocks.Count.TotalBalance.totalOutstandingBalance, 'number')).to.be.true;
				await expect(await E2EUtil.isEqual(SupplierPO.contactInfo.totalCreditBalance, Mocks.Count.TotalBalance.totalCreditBalance, 'number')).to.be.true;
				await SupplierPO.contactInfo.multiBranch.click();
				await E2EUtil.waitFor(SupplierPO.notificationButton.cancel);
				await SupplierPO.notificationButton.cancel.click();
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.one).isDisplayed()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.two).isDisplayed()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.three).isDisplayed()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.four).isDisplayed()).to.be.true;
				await ContactPage.cancel(SupplierPO);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#23: If unchecked the multi-branch checkbox of supplier "Add Multi Branch With Product" which has Total Outstanding and Credit Balance, then a pop-up must display and we will NOT be able to Delete any Branch. So Click on DEACTIVATE and expect all branches are deactivated', async () =>{
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierAdd.SupplierAMBWP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await expect(await E2EUtil.isEqual(SupplierPO.contactInfo.totalOutstandingBalance, Mocks.Count.TotalBalance.totalOutstandingBalance, 'number')).to.be.true;
				await expect(await E2EUtil.isEqual(SupplierPO.contactInfo.totalCreditBalance, Mocks.Count.TotalBalance.totalCreditBalance, 'number')).to.be.true;
				await SupplierPO.contactInfo.multiBranch.click();
				await E2EUtil.waitFor(SupplierPO.notificationButton.deactivate);
				await SupplierPO.notificationButton.deactivate.click();
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.one).isDisplayed()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.two).isDisplayed()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.three).isDisplayed()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.four).isDisplayed()).to.be.true;

				await expect(await SupplierPO.card.front.button(Mocks.Count.EqualTo.one, 'icon-delete').isPresent()).to.be.true;
				await SupplierPO.card.front.button(Mocks.Count.EqualTo.one, 'icon-delete').click();
				await expect(await SupplierPO.card.back.button(Mocks.Count.EqualTo.one, 'icon-checkbox-marked-circle').isPresent()).to.be.true;
				await expect(await SupplierPO.card.back.button(Mocks.Count.EqualTo.one, 'icon-eye').isPresent()).to.be.true;
				await expect(await SupplierPO.card.back.button(Mocks.Count.EqualTo.one, 'icon-close-circle-outline').isPresent()).to.be.true;
				await SupplierPO.card.back.button(Mocks.Count.EqualTo.one, 'icon-close-circle-outline').click();

				await SupplierPO.card.front.button(Mocks.Count.EqualTo.two, 'icon-delete').click();
				await expect(await SupplierPO.card.back.button(Mocks.Count.EqualTo.two, 'icon-checkbox-marked-circle').isPresent()).to.be.true;
				await expect(await SupplierPO.card.back.button(Mocks.Count.EqualTo.two, 'icon-eye').isPresent()).to.be.true;
				await expect(await SupplierPO.card.back.button(Mocks.Count.EqualTo.two, 'icon-close-circle-outline').isPresent()).to.be.true;
				await SupplierPO.card.back.button(Mocks.Count.EqualTo.two, 'icon-close-circle-outline').click();

				await SupplierPO.card.front.button(Mocks.Count.EqualTo.three, 'icon-delete').click();
				await expect(await SupplierPO.card.back.button(Mocks.Count.EqualTo.three, 'icon-checkbox-marked-circle').isPresent()).to.be.true;
				await expect(await SupplierPO.card.back.button(Mocks.Count.EqualTo.three, 'icon-eye').isPresent()).to.be.true;
				await expect(await SupplierPO.card.back.button(Mocks.Count.EqualTo.three, 'icon-close-circle-outline').isPresent()).to.be.true;
				await SupplierPO.card.back.button(Mocks.Count.EqualTo.three, 'icon-close-circle-outline').click();

				await SupplierPO.card.front.button(Mocks.Count.EqualTo.four, 'icon-delete').click();
				await expect(await SupplierPO.card.back.button(Mocks.Count.EqualTo.four, 'icon-checkbox-marked-circle').isPresent()).to.be.true;
				await expect(await SupplierPO.card.back.button(Mocks.Count.EqualTo.four, 'icon-eye').isPresent()).to.be.true;
				await expect(await SupplierPO.card.back.button(Mocks.Count.EqualTo.four, 'icon-close-circle-outline').isPresent()).to.be.true;
				await SupplierPO.card.back.button(Mocks.Count.EqualTo.four, 'icon-close-circle-outline').click();
				await ContactPage.cancel(SupplierPO);
				await ContactPage.doReset(IndexPO);
			});

			it('#24: Once you fill the ID number, ID type becomes mandatory and similarly once you fill email-address, Email type becomes mandatory.', async () =>{
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await SupplierPO.tabs.singleBranchInfo.click();
				await SupplierPO.contactInfo.contactNumber(3, 1, 'egoNumber').sendKeys(Mocks.SupplierValidation.Validate.branch[0].idArray[0].value);
				await E2EUtil.clearSelect(SupplierPO.contactInfo.contactType(3, 1, 'egoType'));
				await E2EHelper.checkForMessage(SupplierPO.contactInfo.contactType(3, 1, 'egoType'), MsgBase.MESSAGE.ERROR.REQUIRED);

				await SupplierPO.contactInfo.contactNumber(2, 1, 'emailAddress').sendKeys(Mocks.SupplierValidation.Validate.branch[0].emailArray[0].value);
				await E2EUtil.clearSelect(SupplierPO.contactInfo.contactType(2, 1, 'emailType'));
				await E2EHelper.checkForMessage(SupplierPO.contactInfo.contactType(2, 1, 'emailType'), MsgBase.MESSAGE.ERROR.REQUIRED);
				await ContactPage.cancel(SupplierPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#25: Check Supplier Edit Multi-branch without product, have only one tab called supplier info.', async () =>{
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierEMBWOP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await SupplierPO.tabs.suppInfo.click();
				await expect(await SupplierPO.tabs.suppInfo.isDisplayed()).to.be.true;
				await ContactPage.cancel(SupplierPO);
				await ContactPage.doReset(IndexPO);
			});

			it('#26: Add Validation for Single Branch Count: Add New product and Check Product Summary count should be updated simultaneously', async () =>{
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierValidation.SupplierProductCountASBWP);
				await E2EUtil.waitFor(SupplierPO.tabs.singleProductTab);
				await expect(await SupplierPO.tabs.singleProductTab.isPresent()).to.be.true;
				await SupplierPO.tabs.singleProductTab.click();
				await expect(await ContactPage.countBranchProduct()).to.equal(Mocks.SupplierValidation.SupplierProductCountASBWP.branch[0].product.length);
				await SupplierPO.tabs.singleBranchInfo.click();
				await E2EUtil.scrollTo(SupplierPO.contactInfo.productName);
				await E2EUtil.doSelect(SupplierPO.contactInfo.productName, Mocks.SupplierValidation.ProductUpdated.branch[0].product);
				await SupplierPO.tabs.singleProductTab.click();
				await expect(await ContactPage.countBranchProduct()).to.equal(Mocks.SupplierValidation.ProductUpdated.branch[0].product.length);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#27: Update Validation for Single Branch Count: Update Existing Product and Check Product Summary count should be updated simultaneously', async () =>{
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierAdd.SupplierASBWP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);

				await E2EUtil.waitFor(SupplierPO.tabs.singleProductTab);
				await expect(await SupplierPO.tabs.singleProductTab.isPresent()).to.be.true;
				await SupplierPO.tabs.singleProductTab.click();
				await expect(await ContactPage.countBranchProduct()).to.equal(Mocks.SupplierAdd.SupplierASBWP.branch[0].product.length);
				await SupplierPO.tabs.singleBranchInfo.click();
				await ContactPage.decorateBranch(SupplierPO, Mocks.SupplierValidation.ProductBranchUpdated.branch[0]);

				await SupplierPO.tabs.singleProductTab.click();
				await expect(await ContactPage.countBranchProduct()).to.equal(Mocks.SupplierValidation.ProductBranchUpdated.branch[0].product.length);
				await expect(await SupplierPO.panel.save.isDisplayed()).to.be.true;
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
				await ContactPage.doReset(IndexPO);
			});

			/* PRICE UNDEFINED, AND PRODUCT SUMMARY PAGE COUNT ERROR*/
			it('#28: Add Validation for Over all Branch Count: Add Different product on different Branch and Check Overall Product Summary count should be SUM of all Product', async () =>{
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierValidation.SupplierProductCountAMBWP);
				await expect(await SupplierPO.tabs.overAllProductTab.isPresent()).to.be.true;
				await SupplierPO.tabs.overAllProductTab.click();
				await expect(await ContactPage.countOverAllBranchProduct()).to.equal(Mocks.SupplierValidation.SupplierProductCountAMBWP.branch[1].product.length + 3);
				await E2EUtil.waitFor(SupplierPO.panel.save);
				await expect(await SupplierPO.panel.save.isDisplayed()).to.be.true;
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#29: Add Validation for Over all Branch Count: Add Same product on different Branch and Check Overall Product Summary count should be EQUAL to the no of Product', async () =>{
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierValidation.SupplierSameProductAMBWP);
				await expect(await SupplierPO.tabs.overAllProductTab.isPresent()).to.be.true;
				await SupplierPO.tabs.overAllProductTab.click();
				await expect(await ContactPage.countOverAllBranchProduct()).to.equal(Mocks.SupplierValidation.SupplierSameProductAMBWP.branch[0].product.length);
				await expect(await SupplierPO.panel.save.isDisplayed()).to.be.true;
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#30: Update Validation for Over all Branch Count: Count initially no of Product then Update Product in Branch 1 then Count Overall Product', async () =>{
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierEMBWP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.two, SupplierPO.module.supplier);
				await E2EUtil.waitForState(SupplierPO.tabs.overAllProductTab, true);
				await expect(await SupplierPO.tabs.overAllProductTab.isPresent()).to.be.true;
				await SupplierPO.tabs.overAllProductTab.click();
				await expect(await ContactPage.countOverAllBranchProduct()).to.equal(Mocks.SupplierEdit.SupplierEMBWP.branch[0].product.length);

				await SupplierPO.tabs.suppInfo.click();
				await SupplierPO.card.front.head(Mocks.Count.EqualTo.one).click();
				await ContactPage.decorateBranch(SupplierPO, Mocks.SupplierValidation.ProductUpdated.branch[0]);
				await SupplierPO.tabs.multiProductTab.click();
				await expect(await ContactPage.countBranchProduct()).to.equal(Mocks.SupplierValidation.ProductUpdated.branch[0].product.length);
				await SupplierPO.branchPanel.save.click();

				await SupplierPO.tabs.overAllProductTab.click();
				await expect(await ContactPage.countOverAllBranchProduct()).to.equal(Mocks.SupplierEdit.SupplierEMBWP.branch[0].product.length + 3);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
				await ContactPage.doReset(IndexPO);
			});

			it('#31: Check for Error message "Duplicate.", if Added any of the existing Branch Name to the new branch and SAVE button must Not display', async () =>{
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				await IndexPage.doSearch(IndexPO, Mocks.Search.SupplierName);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.one).isDisplayed()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.two).isDisplayed()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.three).isDisplayed()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.four).isPresent()).to.be.false;

				await expect(await SupplierPO.button.addBranch.isDisplayed()).to.be.true;
				await SupplierPO.button.addBranch.click();
				await E2EHelper.checkFor(SupplierPO.contactInfo.branchName, Mocks.Search.SupplierBranch1, MsgBase.MESSAGE.ERROR.DUPLICATE);
				await SupplierPO.contactInfo.branchName.clear();
				await E2EHelper.checkFor(SupplierPO.contactInfo.branchName, Mocks.Search.SupplierBranch2, MsgBase.MESSAGE.ERROR.DUPLICATE);
				await SupplierPO.contactInfo.branchName.clear();
				await E2EHelper.checkFor(SupplierPO.contactInfo.branchName, Mocks.Search.SupplierBranch3, MsgBase.MESSAGE.ERROR.DUPLICATE);
				await expect(await SupplierPO.branchPanel.save.isDisplayed()).to.be.false;
				await SupplierPO.branchPanel.cancel.click();
				await ContactPage.cancel(SupplierPO);
				await ContactPage.doReset(IndexPO);
			});

			it('#32: Check for Error message "Duplicate.", if SAME SUPPLIER Name is added twice and SAVE button must Not display', async () =>{
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await E2EHelper.checkFor(SupplierPO.contactInfo.name, Mocks.Search.SupplierName, MsgBase.MESSAGE.ERROR.DUPLICATE);
				await expect(await SupplierPO.panel.save.isDisplayed()).to.be.false;
				await ContactPage.cancel(SupplierPO);
			});

			it('#33: Check for Error message "Duplicate.", when same Email address and same phone number is written twice', async () =>{
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierValidation.SupplierSameEmail);
				await E2EUtil.scrollTo(SupplierPO.contactInfo.contactNumber(2, 2, 'emailAddress'));
				await E2EHelper.checkForMessage(SupplierPO.contactInfo.contactNumber(2, 2, 'emailAddress'), MsgBase.MESSAGE.ERROR.DUPLICATE);
				await E2EUtil.scrollTo(SupplierPO.contactInfo.contactNumber(1, 2, 'phoneNumber'));
				await E2EHelper.checkForMessage(SupplierPO.contactInfo.contactNumber(1, 2, 'phoneNumber'), MsgBase.MESSAGE.ERROR.DUPLICATE);
				await ContactPage.cancel(SupplierPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#34: SUPPLIER record can not be Deleted successfully if it has TotalOutstandingBalance and TotalCreditBalance', async () =>{
				const before = await IndexPage.records(IndexPO);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierValidation.SupplierOutstandingBalance);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);

				await IndexPage.doSearch(IndexPO, Mocks.SupplierValidation.SupplierOutstandingBalance.name);
				await IndexPage.remove(IndexPO, Mocks.supplierDeleteSingle, Mocks.Count.EqualTo.two);
				await IndexPage.doDialog('contact-index-delete', 'cancel');
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#35: Add Six branch Supplier record with outStandingBalance and creditBalance and Validate SUM totalBalance should be addition of all branches outStandingBalance and creditBalance', async () =>{
				const before = await IndexPage.records(IndexPO);
				await E2EUtil.waitForState(IndexPO.button.search, true);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierValidation.AddSixBranchCalculateTotal);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
				await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);

				await IndexPage.doSearch(IndexPO, Mocks.SupplierValidation.AddSixBranchCalculateTotal.name);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await E2EUtil.scrollTo(SupplierPO.contactInfo.totalOutstandingBalance);
				await expect(await E2EUtil.isEqual(SupplierPO.contactInfo.totalOutstandingBalance, Mocks.SupplierValidation.AddSixBranchCalculateTotal.totalOutstandingBalance, 'number')).to.be.true;
				await expect(await E2EUtil.isEqual(SupplierPO.contactInfo.totalCreditBalance, Mocks.SupplierValidation.AddSixBranchCalculateTotal.totalCreditBalance, 'number')).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.totalOutstandingBalance)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.totalCreditBalance)).to.be.true;
				await ContactPage.cancel(SupplierPO);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#36: Validate Phone Type for Land line and Toll-free number format. Land line can accept 10 and 11 digits while Toll-free number can accept 10,11 and 12 digits But Not 9 digits', async () =>{
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierValidation.PhoneLandlineFormat);
				await SupplierPO.contactInfo.address.click();
				await E2EUtil.scrollTo(SupplierPO.contactInfo.contactNumber(1, 3, 'phoneNumber'), true);
				await E2EHelper.checkFor(SupplierPO.contactInfo.contactNumber(1, 3, 'phoneNumber'), Mocks.SupplierValidation.PhoneLandlineFormat.branch[0].phoneArray[2].value, MsgBase.MESSAGE.ERROR.NUMBER);
				await E2EUtil.scrollTo(SupplierPO.contactInfo.branchName);
				await ContactPage.cancel(SupplierPO);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierValidation.PhoneTollFreeFormat);
				await SupplierPO.contactInfo.address.click();
				await E2EUtil.scrollTo(SupplierPO.contactInfo.contactNumber(1, 4, 'phoneNumber'), true);
				await E2EHelper.checkFor(SupplierPO.contactInfo.contactNumber(1, 4, 'phoneNumber'), Mocks.SupplierValidation.PhoneTollFreeFormat.branch[0].phoneArray[3].value, MsgBase.MESSAGE.ERROR.NUMBER);
				await ContactPage.cancel(SupplierPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});
		});

		describe('Add:', () =>{

			it('#37: Add Junk Value', async () =>{
				const before = await IndexPage.records(IndexPO);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.SupplierAddJunkValue);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);
			});

			it('#38: Add a Supplier details with all the Phone Type, all the Email-Type and all the ID-Type', async () =>{
				const before = await IndexPage.records(IndexPO);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.SupplierAddAllPhoneAndEmail);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);
			});

			it('#39: Add single branch record with product and save and do global search and check if the data is refreshed after add', async () =>{
				const before = await IndexPage.records(IndexPO);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.SupplierASBWP);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);

				await IndexPage.doSearch(IndexPO, Mocks.SupplierAdd.SupplierASBWP.name);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await ContactPage.assert(expect, SupplierPO, Mocks.SupplierAdd.SupplierASBWP);
				await ContactPage.cancel(SupplierPO);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#40: Add single branch record without product and save', async () =>{
				const before = await IndexPage.records(IndexPO);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.SupplierASBWOP);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
				await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);
			});

			it('#41: Add multi branch with product and save and do global search and check if the data is refreshed after add', async () =>{
				const before = await IndexPage.records(IndexPO);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.SupplierAMBWP);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);

				await IndexPage.doSearch(IndexPO, Mocks.SupplierAdd.SupplierAMBWP.name);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await ContactPage.assert(expect, SupplierPO, Mocks.SupplierAdd.SupplierAMBWP);
				await ContactPage.cancel(SupplierPO);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#42: Add multi branch without product and save', async () =>{
				const before = await IndexPage.records(IndexPO);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.SupplierAMBWOP);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#44: Add single branch record without person name', async () =>{
				const before = await IndexPage.records(IndexPO);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.SupplierASBWPWithoutName);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#45: Add multi branch record without person name and save', async () =>{
				const before = await IndexPage.records(IndexPO);
				const mock   = Mocks.SupplierAdd.SupplierAMBWPWithoutName;
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, mock, [false, true]);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
				await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);
			});

			it('#46: Add Two record without Address and PinCode one by entering all days to be working days and other except tuesday and friday all working days and save', async () =>{
				const before = await IndexPage.records(IndexPO);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.SupplierAllWorkingDays);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);

				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.SupplierAddHoliday);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#47: Add Two single branch record one without product and one with product But without ID number and Email address and save', async () =>{
				const before = await IndexPage.records(IndexPO);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.SupplierASBWOPNoIDNoEmail);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
				await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);

				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.SupplierASBWPNoIDNoEmail);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#48: Add multi branch with product and without product But without ID number and Email address and save', async () =>{
				const before = await IndexPage.records(IndexPO);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.SupplierAMBWPNoIDNoEmail);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
				await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);

				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.SupplierAMBWOPNoIDNoEmail);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});
		});

		describe('Update:', () =>{

			it('#49: Basic single branch with product', async () =>{
				const before = await IndexPage.records(IndexPO);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierESBWPNew);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
				await expect(await IndexPage.records(IndexPO)).to.equal(before);

				/** Revert function**/
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWPNew.name);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierESBWP);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#50: Basic single branch without product', async () =>{
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				const before = await IndexPage.records(IndexPO);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWOP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierESBWOPNew);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPage.records(IndexPO)).to.equal(before);

				/** Revert function**/
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWOPNew.name);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierESBWOP);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#51: Basic Multi branch with product Record', async () =>{
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				const before = await IndexPage.records(IndexPO);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierEMBWP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierEMBWPNew);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
				await expect(await IndexPage.records(IndexPO)).to.equal(before);

				/** Revert function **/
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierEMBWPNew.name);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierEMBWP);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPage.records(IndexPO)).to.equal(before - 1);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#52: Basic Multi branch without product Record', async () =>{
				const before = await IndexPage.records(IndexPO);
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierEMBWOP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierEMBWOPNew);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
				await expect(await IndexPage.records(IndexPO)).to.equal(before);

				/** Revert function **/
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierEMBWOPNew.name);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierEMBWOP);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPage.records(IndexPO)).to.equal(before);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#53: Click multi branch record and update single branch and Just change the another Branch Name', async () =>{
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				const before = await IndexPage.records(IndexPO);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierEMBWOPToSBWOP.name);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierESBWOPForMBWOP);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await expect(await IndexPage.records(IndexPO)).to.equal(before);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#54: Click multi branch record and update activate branch to deactivate and save', async () =>{
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				const before = await IndexPage.records(IndexPO);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierEMBWOP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await SupplierPO.card.front.button(Mocks.Count.EqualTo.one, 'icon-delete').click();
				await SupplierPO.card.back.button(Mocks.Count.EqualTo.one, 'icon-eye-off').click();
				await SupplierPO.card.front.button(Mocks.Count.EqualTo.two, 'icon-delete').click();
				await SupplierPO.card.back.button(Mocks.Count.EqualTo.two, 'icon-eye-off').click();
				await expect(await SupplierPO.panel.save.isDisplayed()).to.be.true;
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPage.records(IndexPO)).to.equal(before - 1);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#55: Click multi branch record and delete one branch and add new branch and save', async () =>{
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				const before = await IndexPage.records(IndexPO);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierEMBWOPToSBWOP.name);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierNoConflictsUpdate);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPage.records(IndexPO)).to.equal(before);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#56: If we press delete button and delete icon shows confirm message to be deleted if there is conflicts and Update the record', async () =>{
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				const before = await IndexPage.records(IndexPO);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierEMBWP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.three, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierEditAndUpdate);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPage.records(IndexPO)).to.equal(before - 1);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#57: If we press delete button and delete icon on the Newly Added branch Without Product then No conflicts message shown before deleting.', async () =>{
				const before = await IndexPage.records(IndexPO);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierEditNew);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierEditNew.name);

				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await SupplierPO.button.addBranch.click();
				await ContactPage.decorateBranch(SupplierPO, Mocks.SupplierAdd.SupplierASBWOP.branch[0]);
				await SupplierPO.branchPanel.save.click();
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.one).isPresent()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.two).isPresent()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.three).isPresent()).to.be.true;
				await SupplierPO.card.front.button(Mocks.Count.EqualTo.three, 'icon-delete').click();
				await SupplierPO.card.back.button(Mocks.Count.EqualTo.three, 'icon-checkbox-marked-circle').click();
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.three).isPresent()).to.be.false;
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await ContactPage.doReset(IndexPO);
			});

			it('#58: If we press delete button and delete icon on the Newly Added branch With Product then No conflicts message shown before deleting.', async () =>{
				const before = await IndexPage.records(IndexPO);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierEditWithProduct);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);

				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierEditWithProduct.name);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await SupplierPO.button.addBranch.click();
				await ContactPage.decorateBranch(SupplierPO, Mocks.SupplierAdd.SupplierASBWP.branch[0]);
				await SupplierPO.branchPanel.save.click();
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.one).isPresent()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.two).isPresent()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.three).isPresent()).to.be.true;
				await SupplierPO.card.front.button(Mocks.Count.EqualTo.three, 'icon-delete').click();
				await SupplierPO.card.back.button(Mocks.Count.EqualTo.three, 'icon-checkbox-marked-circle').click();
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.three).isPresent()).to.be.false;
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await ContactPage.doReset(IndexPO);
			});

			it('#59: Add and update two more branch list in card format', async () =>{
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				const before = await IndexPage.records(IndexPO);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierEMBWOP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await SupplierPO.button.addBranch.click();
				await ContactPage.decorateBranch(SupplierPO, Mocks.SupplierAdd.SupplierAddTwoBranchInfo.branch[0]);
				await SupplierPO.branchPanel.save.click();
				await SupplierPO.button.addBranch.click();
				await ContactPage.decorateBranch(SupplierPO, Mocks.SupplierAdd.SupplierAddTwoBranchInfo.branch[1]);
				await SupplierPO.branchPanel.save.click();
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.one).isPresent()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.two).isPresent()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.three).isPresent()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.four).isPresent()).to.be.true;
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await expect(await IndexPage.records(IndexPO)).to.equal(before);
				await ContactPage.doReset(IndexPO);
			});

			it('#60: Update Product record: Go to branch info tabs based on product on Change product summary list should be updated', async () =>{
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierAdd.SupplierASBWP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.three, SupplierPO.module.supplier);
				await expect(await E2EUtil.waitForState(SupplierPO.tabs.singleProductTab, true)).to.be.true;
				await SupplierPO.tabs.singleProductTab.click();
				await expect(await ContactPage.countBranchProduct()).to.equal(Mocks.SupplierAdd.SupplierASBWP.branch[0].product.length);
				await SupplierPO.tabs.singleBranchInfo.click();
				await ContactPage.decorateBranch(SupplierPO, Mocks.SupplierValidation.ProductUpdated.branch[0]);

				await SupplierPO.tabs.singleProductTab.click();
				await expect(await ContactPage.countBranchProduct()).to.equal(Mocks.SupplierValidation.ProductUpdated.branch[0].product.length);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
				await ContactPage.doReset(IndexPO);
			});

			it('#61: Open empty person name record and Add the person name and save it', async () =>{
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierAddWithoutName);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);

				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierAddWithoutName.name);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await SupplierPO.tabs.singleBranchInfo.click();
				await SupplierPO.contactInfo.person.sendKeys(Mocks.SupplierAdd.SupplierASBWP.branch[0].person);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#62: Open person name record and delete the person name and save it', async () =>{
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				const before = await IndexPage.records(IndexPO);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierAddWithoutName.name);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await SupplierPO.tabs.singleBranchInfo.click();
				await SupplierPO.contactInfo.person.clear();
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPage.records(IndexPO)).to.equal(before);
			});
		});
	});

	describe('Integration:', () =>{

		beforeEach(() => ContactPage.load());

		describe('Product:', () =>{

			it('#68: Go to product module DEACTIVATE one product and search for the same product in SUPPLIER ADD and EDIT, it should not present', async () =>{
				await IndexPage.load(ProductIndexPage.conf);
				await E2EUtil.waitForState(ProductIndexPagePO.button.search, true);
				await IndexPage.doSearch(ProductIndexPagePO, Mocks.Filter.FilterProductSupplier.nm);
				await IndexPage.remove(ProductIndexPagePO, Mocks.deactivateProduct, Mocks.Count.EqualTo.zero);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.DEACTIVATE);
				await IndexPage.doReset(ProductIndexPagePO);

				await ContactPage.load();
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierIntegration.SupplierAddProduct);
				await E2EUtil.scrollTo(SupplierPO.contactInfo.startTime(6, 5));
				await E2EUtil.doSelect(SupplierPO.contactInfo.productName, null, null, Mocks.Filter.FilterProductSupplier.nm);
				const addResponseMsg = await E2EUtil.doSelectAddButtonIsExist(SupplierPO.contactInfo.productName, Mocks.Filter.FilterProductSupplier.nm);
				await expect(addResponseMsg).to.have.string(MsgBase.MESSAGE.ERROR.NOT_FOUND);
				await ContactPage.cancel(SupplierPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;

				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWOP.note);
				await E2EUtil.waitForState(IndexPO.button.setting, true);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await SupplierPO.tabs.singleBranchInfo.click();
				await E2EUtil.scrollTo(SupplierPO.contactInfo.startTime(6, 5));
				await E2EUtil.doSelect(SupplierPO.contactInfo.productName, null, null, Mocks.Filter.FilterProductSupplier.nm);
				const editResponseMsg = await E2EUtil.doSelectAddButtonIsExist(SupplierPO.contactInfo.productName, Mocks.Filter.FilterProductSupplier.nm);
				await expect(editResponseMsg).to.have.string(MsgBase.MESSAGE.ERROR.NOT_FOUND);
				await ContactPage.cancel(SupplierPO);
				await ContactPage.doReset(IndexPO);
			});
		});

		xdescribe('Purchase:', () =>{

			it('#69: Go to Purchase Order and ADD new record with any of one supplier name', async () =>{
				await IndexPage.load(PurchasePage.conf);
				const before = await IndexPage.records(PurchaseIndexPO);
				await E2EUtil.waitForState(PurchaseIndexPO.button.add, true);
				await IndexPage.add(PurchaseIndexPO);
				await E2EUtil.waitFor(PurchasePO.tabs.product);
				await PurchasePage.decorate(PurchasePO, Mocks.SupplierIntegration.PurchaseAddSupplier);
				await PurchasePage.save(PurchasePO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await PurchaseIndexPO.indexId.isPresent()).to.be.true;
				await expect(await IndexPage.records(PurchaseIndexPO)).to.equal(before + 1);
			});

			it('#70: Go to purchaseOrder add Unique supplier and save, open same Unique supplier in contact and change the branchName then the changed branchName must be present in purchaseSupplier list', async () =>{
				await ContactPage.load();
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierIntegration.SupplierUniqueBranch);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);

				await IndexPage.load(PurchasePage.conf);
				const before = await IndexPage.records(PurchaseIndexPO);
				await E2EUtil.waitForState(PurchaseIndexPO.button.add, true);
				await IndexPage.add(PurchaseIndexPO);
				await E2EUtil.waitFor(PurchasePO.tabs.product);
				await E2EUtil.doSelect(PurchasePO.order.supplier, null, null, Mocks.SupplierIntegration.SupplierUniqueBranch.name);
				await E2EUtil.waitForState(PurchasePO.tabs.product, true);
				await PurchasePage.decorate(PurchasePO, Mocks.SupplierIntegration.PurchaseAddUniqueSupplier);
				await PurchasePage.save(PurchasePO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await PurchaseIndexPO.indexId.isPresent()).to.be.true;
				await expect(await IndexPage.records(PurchaseIndexPO)).to.equal(before + 1);

				await ContactPage.load();
				await E2EUtil.waitForState(IndexPO.button.search, true);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierIntegration.SupplierUniqueBranch.name);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await SupplierPO.tabs.singleBranchInfo.click();
				await SupplierPO.contactInfo.branchName.clear();
				await SupplierPO.contactInfo.branchName.sendKeys(Mocks.SupplierValidation.IdValidation.branch[0].branchName);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);

				await IndexPage.load(PurchasePage.conf);
				await E2EUtil.waitForState(PurchaseIndexPO.button.search, true);
				await IndexPage.doSearch(PurchaseIndexPO, Mocks.SupplierIntegration.SupplierUniqueBranch.name);
				await IndexPage.edit(PurchaseIndexPO, Mocks.Count.EqualTo.one);
				await E2EUtil.waitFor(PurchasePO.tabs.product);
				await E2EUtil.doSelect(PurchasePO.order.supplier, null, null, Mocks.SupplierValidation.IdValidation.branch[0].branchName);
				const supplierBranchName = await E2EUtil.doSelectAddButtonIsExist(PurchasePO.order.supplier, Mocks.SupplierValidation.IdValidation.branch[0].branchName);
				await expect(supplierBranchName).to.have.string(Mocks.SupplierValidation.IdValidation.branch[0].branchName);
				await PurchasePage.cancel(PurchasePO);
			});

			it('#71: Go to purchase order module edit the supplier name contain record and change the supplier', async () =>{
				await IndexPage.load(PurchasePage.conf);
				const before = await IndexPage.records(PurchaseIndexPO);
				await E2EUtil.waitForState(PurchaseIndexPO.button.add, true);
				await IndexPage.edit(PurchaseIndexPO, Mocks.Count.EqualTo.five);
				await E2EUtil.waitFor(PurchasePO.tabs.product);
				await PurchasePage.decorate(PurchasePO, Mocks.SupplierIntegration.PurchaseEditSupplierName);
				await PurchasePage.save(PurchasePO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await expect(await PurchaseIndexPO.indexId.isPresent()).to.be.true;
				await expect(await IndexPage.records(PurchaseIndexPO)).to.equal(before);
			});

			it('#72: Add a supplier record with Test1 with TotalOutstandingBalance and TotalCreditBalance for multiBranch.Edit the same record in Test2, here TotalOutstandingBalance and TotalCreditBalance must be zero', async () =>{
				await ContactPage.load();
				await IndexPage.doSearch(IndexPO, Mocks.SupplierIntegration.SupplierTotalBalanceZero.name);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await expect(await E2EUtil.isEqual(SupplierPO.contactInfo.totalOutstandingBalance, Mocks.SupplierIntegration.SupplierTotalBalanceZero.totalOutstandingBalancePresent, 'number')).to.be.true;
				await expect(await E2EUtil.isEqual(SupplierPO.contactInfo.totalCreditBalance, Mocks.SupplierIntegration.SupplierTotalBalanceZero.totalCreditBalancePresent, 'number')).to.be.true;
				await ContactPage.cancel(SupplierPO);
				await ContactPage.doReset(IndexPO);

				await E2EHelper.logout();
				await E2EHelper.login(AUTH.TEST2, AUTH.TEST2.SUPERVISOR);
				await ContactPage.load();
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierIntegration.SupplierTotalBalanceZero.name);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await expect(await E2EUtil.isEqual(SupplierPO.contactInfo.totalOutstandingBalance, Mocks.SupplierIntegration.SupplierTotalBalanceZero.totalOutstandingBalance, 'number')).to.be.true;
				await expect(await E2EUtil.isEqual(SupplierPO.contactInfo.totalCreditBalance, Mocks.SupplierIntegration.SupplierTotalBalanceZero.totalCreditBalance, 'number')).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.one).isPresent()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.one).isDisplayed()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.two).isPresent()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.two).isDisplayed()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.three).isPresent()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.three).isDisplayed()).to.be.true;
				await SupplierPO.card.front.head(Mocks.Count.EqualTo.one).click();
				await expect(await E2EUtil.isEqual(SupplierPO.contactInfo.outStandingBalance, Mocks.SupplierIntegration.SupplierTotalBalanceZero.totalOutstandingBalance, 'number')).to.be.true;
				await expect(await E2EUtil.isEqual(SupplierPO.contactInfo.creditBalance, Mocks.SupplierIntegration.SupplierTotalBalanceZero.totalCreditBalance, 'number')).to.be.true;
				await SupplierPO.branchPanel.cancel.click();
				await SupplierPO.card.front.head(Mocks.Count.EqualTo.two).click();
				await expect(await E2EUtil.isEqual(SupplierPO.contactInfo.outStandingBalance, Mocks.SupplierIntegration.SupplierTotalBalanceZero.totalOutstandingBalance, 'number')).to.be.true;
				await expect(await E2EUtil.isEqual(SupplierPO.contactInfo.creditBalance, Mocks.SupplierIntegration.SupplierTotalBalanceZero.totalCreditBalance, 'number')).to.be.true;
				await SupplierPO.branchPanel.cancel.click();
				await SupplierPO.card.front.head(Mocks.Count.EqualTo.three).click();
				await expect(await E2EUtil.isEqual(SupplierPO.contactInfo.outStandingBalance, Mocks.SupplierIntegration.SupplierTotalBalanceZero.totalOutstandingBalance, 'number')).to.be.true;
				await expect(await E2EUtil.isEqual(SupplierPO.contactInfo.creditBalance, Mocks.SupplierIntegration.SupplierTotalBalanceZero.totalCreditBalance, 'number')).to.be.true;
				await SupplierPO.branchPanel.cancel.click();
				await ContactPage.cancel(SupplierPO);
				await ContactPage.doReset(IndexPO);
			});

			xit('#73: In contact If deactivate all the supplier records, then in purchase under supplier drop down no record should be found', async () =>{
				await E2EHelper.logout();
				await E2EHelper.login(AUTH.TEST1, AUTH.TEST1.ADMIN);
				await ContactPage.load();
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				await IndexPage.doSearch(IndexPO, Mocks.Filter.GlobalFilter.supplier);
				await IndexPage.remove(IndexPO, Mocks.supplierFilterAll, Mocks.Count.EqualTo.zero);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.DEACTIVATE);
				await ContactPage.doReset(IndexPO);

				await IndexPage.load(PurchasePage.conf);
				await IndexPage.add(PurchaseIndexPO);
				await E2EUtil.doSelect(PurchasePO.order.supplier, Mocks.Count.EqualTo.one);
				const res = await E2EUtil.doSelectAddButtonIsExist(PurchasePO.order.supplier, Mocks.Count.EqualTo.one);
				await expect(res).to.have.string(MsgBase.MESSAGE.ERROR.NOT_FOUND);
				await PurchasePage.cancel(PurchasePO);

				await ContactPage.load();
				await E2EUtil.waitForRecord(ContactPage.conf.indexId);
				await IndexPage.setRecords(IndexPO, ['active', 'inactive']);
				await IndexPage.remove(IndexPO, Mocks.supplierFilterAll, Mocks.Count.EqualTo.one);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ACTIVATE);
			});
		});
	});

	describe('ACL:', () =>{

		describe('Admin:', () =>{

			it('#74: ADMIN user on login has all the permission for Add, Edit, Deactivate, Activate and Delete successfully', async () =>{
					await E2EHelper.hasAccess(AUTH.TEST1, AUTH.TEST1.ADMIN, ContactPage, true);
					await ContactPage.load();
					const before = await IndexPage.records(IndexPO);
					await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
					await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.SupplierASBWPForAcl);
					await ContactPage.save(SupplierPO);
					await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
					await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);

					await IndexPage.doSearch(IndexPO, Mocks.SupplierAdd.SupplierASBWPForAcl.name);
					await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
					await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierESBWPForAcl);
					await ContactPage.save(SupplierPO);
					await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
					await ContactPage.doReset(IndexPO);

					await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWPForAcl.name);
					await IndexPage.remove(IndexPO, Mocks.supplierInActiveSingle, Mocks.Count.EqualTo.zero);
					await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.DEACTIVATE);

					await IndexPage.setRecords(IndexPO, ['active', 'inactive']);
					await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWPForAcl.name);
					await IndexPage.remove(IndexPO, Mocks.supplierInActiveSingle, Mocks.Count.EqualTo.one);
					await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ACTIVATE);

					await IndexPage.setRecords(IndexPO, ['inactive', 'active']);
					await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWPForAcl.name);
					await IndexPage.remove(IndexPO, Mocks.supplierDeleteSingle, Mocks.Count.EqualTo.two);
					await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.DELETE);
					await ContactPage.doReset(IndexPO);
					await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});
		});

		describe('Manager Inventory:', () =>{

			it('#75: INVENTORY MANAGER on login has all permission for Add, Edit, Deactivate, Activate for SUPPLIER But Not DELETE and check for "Permission Denied." toast message', async () =>{
				await E2EHelper.hasAccess(AUTH.TEST1, AUTH.TEST1.MANAGER_INVENTORY, ContactPage, true);
				await ContactPage.load();
				const before = await IndexPage.records(IndexPO);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.SupplierASBWPForAcl);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);

				await IndexPage.doSearch(IndexPO, Mocks.SupplierAdd.SupplierASBWPForAcl.name);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierESBWPForAcl);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await ContactPage.doReset(IndexPO);

				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWPForAcl.name);
				await IndexPage.remove(IndexPO, Mocks.supplierInActiveSingle, Mocks.Count.EqualTo.zero);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.DEACTIVATE);

				await IndexPage.setRecords(IndexPO, ['active', 'inactive']);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWPForAcl.name);
				await IndexPage.remove(IndexPO, Mocks.supplierInActiveSingle, Mocks.Count.EqualTo.one);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ACTIVATE);

				await IndexPage.setRecords(IndexPO, ['inactive', 'active']);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWPForAcl.name);
				await IndexPage.remove(IndexPO, Mocks.supplierDeleteSingle, Mocks.Count.EqualTo.two);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.ACCESS.DELETE);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#76: INVENTORY MANAGER on login has all the permission But Not DELETE even from Branch Card as No Delete button will display', async () =>{
				await E2EHelper.hasAccess(AUTH.TEST1, AUTH.TEST1.MANAGER_INVENTORY, ContactPage, true);
				await ContactPage.load();
				await IndexPage.doSearch(IndexPO, Mocks.SupplierAdd.SupplierAMBWP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.one).isPresent()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.one).isDisplayed()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.two).isPresent()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.two).isDisplayed()).to.be.true;
				await expect(await SupplierPO.card.front.button(Mocks.Count.EqualTo.one, 'icon-delete').isDisplayed()).to.be.false;
				await expect(await SupplierPO.card.front.button(Mocks.Count.EqualTo.two, 'icon-delete').isDisplayed()).to.be.false;
				await expect(await SupplierPO.button.addBranch.isPresent()).to.be.true;
				await ContactPage.cancel(SupplierPO);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});
		});

		describe('Manager Purchase:', () =>{

			it('#77: PURCHASE MANAGER on login has all the permission for Add, Edit, Deactivate, Activate and Delete successfully for supplier alone', async () =>{
				await E2EHelper.hasAccess(AUTH.TEST1, AUTH.TEST1.MANAGER_PURCHASE, ContactPage, true);
				await ContactPage.load();
				const before = await IndexPage.records(IndexPO);
				await ContactPage.customAdd(SupplierPO, SupplierPO.module.supplier, Mocks.Count.EqualTo.one);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.SupplierASBWPForAcl);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);

				await IndexPage.doSearch(IndexPO, Mocks.SupplierAdd.SupplierASBWPForAcl.name);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierESBWPForAcl);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await ContactPage.doReset(IndexPO);

				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWPForAcl.name);
				await IndexPage.remove(IndexPO, Mocks.supplierInActiveSingle, Mocks.Count.EqualTo.zero);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.DEACTIVATE);

				await IndexPage.setRecords(IndexPO, ['active', 'inactive']);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWPForAcl.name);
				await IndexPage.remove(IndexPO, Mocks.supplierInActiveSingle, Mocks.Count.EqualTo.one);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ACTIVATE);

				await IndexPage.setRecords(IndexPO, ['inactive', 'active']);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWPForAcl.name);
				await IndexPage.remove(IndexPO, Mocks.supplierDeleteSingle, Mocks.Count.EqualTo.two);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.DELETE);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});
		});

		describe('Manager Store:', () =>{

			it('#78: STORE MANAGER on login has all the permission for Add, Edit, Deactivate, Activate and Delete successfully', async () =>{
				await E2EHelper.hasAccess(AUTH.TEST1, AUTH.TEST1.MANAGER_STORE, ContactPage, true);
				await ContactPage.load();
				const before = await IndexPage.records(IndexPO);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.SupplierASBWPForAcl);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);

				await IndexPage.doSearch(IndexPO, Mocks.SupplierAdd.SupplierASBWPForAcl.name);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierESBWPForAcl);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await ContactPage.doReset(IndexPO);

				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWPForAcl.name);
				await IndexPage.remove(IndexPO, Mocks.supplierInActiveSingle, Mocks.Count.EqualTo.zero);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.DEACTIVATE);

				await IndexPage.setRecords(IndexPO, ['active', 'inactive']);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWPForAcl.name);
				await IndexPage.remove(IndexPO, Mocks.supplierInActiveSingle, Mocks.Count.EqualTo.one);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ACTIVATE);

				await IndexPage.setRecords(IndexPO, ['inactive', 'active']);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWPForAcl.name);
				await IndexPage.remove(IndexPO, Mocks.supplierDeleteSingle, Mocks.Count.EqualTo.two);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.DELETE);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});
		});

		describe('Supervisor:', () =>{

			it('#79: SUPERVISOR user on login has all the permission for Add, Edit, Deactivate, Activate and Delete successfully', async () =>{
				await E2EHelper.hasAccess(AUTH.TEST1, AUTH.TEST1.SUPERVISOR, ContactPage, true);
				await ContactPage.load();
				const before = await IndexPage.records(IndexPO);
				await ContactPage.add(SupplierPO, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.SupplierASBWPForAcl);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ADD);
				await expect(await IndexPage.records(IndexPO)).to.equal(before + 1);

				await IndexPage.doSearch(IndexPO, Mocks.SupplierAdd.SupplierASBWPForAcl.name);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierESBWPForAcl);
				await ContactPage.save(SupplierPO);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
				await ContactPage.doReset(IndexPO);

				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWPForAcl.name);
				await IndexPage.remove(IndexPO, Mocks.supplierInActiveSingle, Mocks.Count.EqualTo.zero);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.DEACTIVATE);

				await IndexPage.setRecords(IndexPO, ['active', 'inactive']);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWPForAcl.name);
				await IndexPage.remove(IndexPO, Mocks.supplierInActiveSingle, Mocks.Count.EqualTo.one);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.ACTIVATE);

				await IndexPage.setRecords(IndexPO, ['inactive', 'active']);
				await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBWPForAcl.name);
				await IndexPage.remove(IndexPO, Mocks.supplierDeleteSingle, Mocks.Count.EqualTo.two);
				await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.DELETE);
				await ContactPage.doReset(IndexPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});
		});

		describe('Supervisor Floor:', () =>{

			it('#80: FLOOR SUPERVISOR when login has only read Permission for Supplier, validate by expecting element to be disabled', async () =>{
				await E2EHelper.hasAccess(AUTH.TEST1, AUTH.TEST1.SUPERVISOR_FLOOR, ContactPage, true);
				await ContactPage.load();
				await IndexPage.doSearch(IndexPO, Mocks.SupplierAdd.SupplierASBWP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.name, false)).to.be.true;
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.note, false)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.totalOutstandingBalance)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.totalCreditBalance)).to.be.true;
				await SupplierPO.tabs.singleBranchInfo.click();

				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.contactType(1, 1, 'phoneType'))).to.be.true;
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.contactNumber(1, 1, 'phoneNumber'), false)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.contactType(2, 1, 'emailType'))).to.be.true;
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.contactNumber(2, 1, 'emailAddress'), false)).to.be.true;
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.branchName, false)).to.be.true;
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.person, false)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.outStandingBalance)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.creditBalance)).to.be.true;
				await E2EUtil.scrollTo(SupplierPO.contactInfo.address);
				await E2EUtil.scrollTo(SupplierPO.contactInfo.productName);
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.address, false)).to.be.true;
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.pinCode, false)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.productName)).to.be.true;
				await ContactPage.cancel(SupplierPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#81: FLOOR SUPERVISOR when login and open MULTI BRANCH record then all Branches card must display and on click must open But on disabled mode', async () =>{
				await E2EHelper.hasAccess(AUTH.TEST1, AUTH.TEST1.SUPERVISOR_FLOOR, ContactPage, true);
				await ContactPage.load();
				await IndexPage.doSearch(IndexPO, Mocks.SupplierAdd.SupplierAMBWP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.name)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.note)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.totalOutstandingBalance)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.totalCreditBalance)).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.one).isPresent()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.one).isDisplayed()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.two).isPresent()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.two).isDisplayed()).to.be.true;

				await SupplierPO.card.front.head(Mocks.Count.EqualTo.one).click();
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.branchName, false)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.contactType(1, 1, 'phoneType'))).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.outStandingBalance)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.creditBalance)).to.be.true;
				await SupplierPO.branchPanel.cancel.click();
				await SupplierPO.card.front.head(Mocks.Count.EqualTo.two).click();
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.branchName, false)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.contactType(1, 1, 'phoneType'))).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.outStandingBalance)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.creditBalance)).to.be.true;
				await SupplierPO.branchPanel.cancel.click();
				await ContactPage.cancel(SupplierPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});
		});

		describe('User Inventory:', () =>{

			it('#82: INVENTORY USER when login has only read Permission for Supplier, validate by expecting element to be disabled', async () =>{
				await E2EHelper.hasAccess(AUTH.TEST1, AUTH.TEST1.USER_INVENTORY, ContactPage, true);
				await ContactPage.load();
				await IndexPage.doSearch(IndexPO, Mocks.SupplierAdd.SupplierASBWP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.name, false)).to.be.true;
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.note, false)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.totalOutstandingBalance)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.totalCreditBalance)).to.be.true;
				await SupplierPO.tabs.singleBranchInfo.click();

				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.contactType(1, 1, 'phoneType'))).to.be.true;
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.contactNumber(1, 1, 'phoneNumber'), false)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.contactType(2, 1, 'emailType'))).to.be.true;
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.contactNumber(2, 1, 'emailAddress'), false)).to.be.true;
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.branchName, false)).to.be.true;
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.person, false)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.outStandingBalance)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.creditBalance)).to.be.true;
				await E2EUtil.scrollTo(SupplierPO.contactInfo.address);
				await E2EUtil.scrollTo(SupplierPO.contactInfo.productName);
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.address, false)).to.be.true;
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.pinCode, false)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.productName)).to.be.true;
				await ContactPage.cancel(SupplierPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});

			it('#83: INVENTORY USER when login and open MULTI BRANCH record then all Branches card must display and on click must open But on disabled mode', async () =>{
				await E2EHelper.hasAccess(AUTH.TEST1, AUTH.TEST1.USER_INVENTORY, ContactPage, true);
				await ContactPage.load();
				await IndexPage.doSearch(IndexPO, Mocks.SupplierAdd.SupplierAMBWP.note);
				await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.name)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.note)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.totalOutstandingBalance)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.totalCreditBalance)).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.one).isPresent()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.one).isDisplayed()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.two).isPresent()).to.be.true;
				await expect(await SupplierPO.card.front.head(Mocks.Count.EqualTo.two).isDisplayed()).to.be.true;

				await SupplierPO.card.front.head(Mocks.Count.EqualTo.one).click();
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.branchName, false)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.contactType(1, 1, 'phoneType'))).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.outStandingBalance)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.creditBalance)).to.be.true;
				await SupplierPO.branchPanel.cancel.click();
				await SupplierPO.card.front.head(Mocks.Count.EqualTo.two).click();
				await expect(await E2EUtil.waitForState(SupplierPO.contactInfo.branchName, false)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.contactType(1, 1, 'phoneType'))).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.outStandingBalance)).to.be.true;
				await expect(await E2EUtil.getDisabled(SupplierPO.contactInfo.creditBalance)).to.be.true;
				await SupplierPO.branchPanel.cancel.click();
				await ContactPage.cancel(SupplierPO);
				await expect(await IndexPO.indexId.isPresent()).to.be.true;
			});
		});

		describe('Manager Customer Service:', () =>{

			it('#84: SUPPLIER: MANAGER Customer Service on login has NO access to Supplier module', async () =>{
				await E2EHelper.hasAccess(AUTH.TEST1, AUTH.TEST1.MANAGER_CUSTOMER_SERVICE, ContactPage, false);
			});

		});

		describe('User Customer Service:', () =>{

			it('#85: SUPPLIER: USER Customer Service on login has NO access to Supplier module', async () =>{
				await E2EHelper.hasAccess(AUTH.TEST1, AUTH.TEST1.USER_CUSTOMER_SERVICE, ContactPage, false);
			});

		});

		describe('User POS:', () =>{

			it('#86: SUPPLIER: USER POS on login has NO access to Supplier module', async () =>{
				await E2EHelper.hasAccess(AUTH.TEST1, AUTH.TEST1.USER_POS, ContactPage, false);
			});

		});
	});

	describe('AutoScript', () =>{

		it('#87: Search for auto script record and Update the record', async () =>{
			await E2EHelper.logout();
			await E2EHelper.login(AUTH.TEST1, AUTH.TEST1.ADMIN);
			await ContactPage.load();
			const before = await IndexPage.records(IndexPO);
			await IndexPage.doSearch(IndexPO, Mocks.SupplierAdd.SupplierESBWP.note);
			await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
			await ContactPage.decorate(SupplierPO, Mocks.SupplierEdit.SupplierESBForAutoScript);
			await ContactPage.save(SupplierPO);
			await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
			await expect(await IndexPage.records(IndexPO)).to.equal(before);

			await IndexPage.doSearch(IndexPO, Mocks.SupplierEdit.SupplierESBForAutoScript.name);
			await ContactPage.edit(IndexPO, Mocks.Count.EditIndexRow.one, SupplierPO.module.supplier);
			await ContactPage.decorate(SupplierPO, Mocks.SupplierAdd.SupplierESBWP);
			await ContactPage.save(SupplierPO);
			await expect(await E2EUtil.doToast()).to.have.string(MsgBase.MESSAGE.SUCCESS.UPDATE);
			await ContactPage.doReset(IndexPO);
		});
	});
});
