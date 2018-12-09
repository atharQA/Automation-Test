'use strict';

const BasePO  = require('../../base.e2e.po');
const E2EUtil = require('../../main.e2e.util');
const MODULES = require('../../../constants/modules');

const dateDecorate = async (page, mock) =>{

	await E2EUtil.scrollTo(page.coupon.description);

	if((mock.appliesOn) && (mock.appliesOn[0] !== 1)){

		if(mock.validFrom){
			await E2EUtil.doSendKeys(page.coupon.validFrom, mock.validFrom);
		}

		if(mock.validTill){
			await E2EUtil.doSendKeys(page.coupon.validTill, mock.validTill);
		}
	}

	if((mock.notToBeUsedWith)){
		await E2EUtil.waitFor(page.coupon.notToBeUsedWith);
		await E2EUtil.doSelect(page.coupon.notToBeUsedWith, mock.notToBeUsedWith);
	}

	if(mock.description){
		await E2EUtil.doSendKeys(page.coupon.description, mock.description);
	}
};

const productDecorate = async (page, mock) =>{

	if((mock.category)){
		await E2EUtil.doSelect(page.coupon.category, mock.category);
	}

	if(mock.totalRedeemableProducts){
		await E2EUtil.doSendKeys(page.coupon.totalRedeemableProducts, mock.totalRedeemableProducts);
	}

	if((mock.includeBrand)){
		await E2EUtil.waitFor(page.coupon.includeBrand);
		await E2EUtil.doSelect(page.coupon.includeBrand, mock.includeBrand);
	}

	if((mock.includeProducts)){
		await E2EUtil.waitFor(page.coupon.includeProducts);
		await E2EUtil.doSelect(page.coupon.includeProducts, mock.includeProducts);
	}

	if((mock.excludeBrand)){
		await E2EUtil.waitFor(page.coupon.excludeBrand);
		await E2EUtil.doSelect(page.coupon.excludeBrand, mock.excludeBrand);
	}

	if((mock.excludeProduct)){
		await E2EUtil.waitFor(page.coupon.excludeProduct);
		await E2EUtil.doSelect(page.coupon.excludeProduct, mock.excludeProduct);
	}

};

const billDecorate = async (page, mock) =>{

	if(mock.appliesOn[0] === 0){
		if(mock.billValue){
			await E2EUtil.doSendKeys(page.coupon.billValue, mock.billValue);
		}

	}

};

const customerDecorate = async (page, mock) =>{

	await E2EUtil.waitFor(page.coupon.eventType);

	if(mock.appliesOn[0] === 1){

		if((mock.eventType)){
			await E2EUtil.doSelect(page.coupon.eventType, mock.eventType);
		}

		if((mock.daysBeforeTheEvent) && ((mock.eventType) && (mock.eventType[0] !== 2))){
			await E2EUtil.doSendKeys(page.coupon.daysBeforeTheEvent, mock.daysBeforeTheEvent);
		}

		if(mock.daysAfterTheEvent){
			await E2EUtil.doSendKeys(page.coupon.daysAfterTheEvent, mock.daysAfterTheEvent);
		}

		if((mock.eventType) && (mock.eventType[0] === 2)){

			if(mock.billValue){
				await E2EUtil.doSendKeys(page.coupon.billValue, mock.billValue);
			}
		}

	}

};

const couponTypeDecorate = async (page, mock) =>{

	if(mock.limit){
		await E2EUtil.doSendKeys(page.coupon.limit, mock.limit);
	}

	if((mock.appliesOn)){
		await E2EUtil.doSelect(page.coupon.appliesOn, mock.appliesOn);
	}

	if(mock.limitPerCustomer){
		await E2EUtil.doSendKeys(page.coupon.limitPerCustomer, mock.limitPerCustomer);
	}

	await E2EUtil.scrollTo(page.coupon.description);

	await dateDecorate(page, mock);

	if((mock.appliesOn)){

		if(mock.appliesOn[0] === 0){
			await billDecorate(page, mock);
		}

		if(mock.appliesOn[0] === 1){
			await customerDecorate(page, mock);
		}

		if(mock.appliesOn[0] === 2){
			await productDecorate(page, mock);
		}
	}
};

const discount = async (page, mock) =>{

	if((mock.switch) && (mock.switch === 1)){

		if(mock.discountINR){
			await E2EUtil.doSendKeys(page.coupon.discountINR, mock.discountINR);
		}
	}

	if((mock.switch) && (mock.switch === 2)){

		await page.buttons.switch.click();

		if(mock.discountPercentage){
			await page.coupon.discountPercentage.sendKeys(mock.discountPercentage);
		}
	}
};

const dateAssert = async (expect, page, mock) =>{

	if((mock.appliesOn) && (mock.appliesOn[0] !== 2)){

		if(mock.validFrom){
			await expect(await E2EUtil.isEqual(page.coupon.validFrom, mock.validFrom)).to.be.true;
		}

		if(mock.validTill){
			await expect(await E2EUtil.isEqual(page.coupon.validTill, mock.validTill)).to.be.true;
		}
	}

	if((mock.notToBeUsedWith)){
		await expect(await E2EUtil.isEqual(page.coupon.notToBeUsedWith, mock.notToBeUsedWith, 'select')).to.be.true;
	}

	if(mock.description){
		await expect(await E2EUtil.isEqual(page.coupon.description, mock.description)).to.be.true;
	}
};

const productAssert = async (expect, page, mock) =>{

	if(mock.appliesOn[0] === 2){

		if((mock.category)){
			await expect(await E2EUtil.isEqual(page.coupon.category, mock.category, 'select')).to.be.true;
		}

		if(mock.totalRedeemableProducts){
			await expect(await E2EUtil.isEqual(page.coupon.totalRedeemableProducts, mock.totalRedeemableProducts)).to.be.true;
		}

		if((mock.includeBrand)){
			await expect(await E2EUtil.isEqual(page.coupon.includeBrand, mock.includeBrand, 'select')).to.be.true;
		}

		if((mock.includeProducts)){
			await expect(await E2EUtil.isEqual(page.coupon.includeProducts, mock.includeProducts, 'select')).to.be.true;
		}

		if((mock.excludeBrand)){
			await expect(await E2EUtil.isEqual(page.coupon.excludeBrand, mock.excludeBrand, 'select')).to.be.true;
		}

		if((mock.excludeProduct)){
			await expect(await E2EUtil.isEqual(page.coupon.excludeProduct, mock.excludeProduct, 'select')).to.be.true;
		}

	}

	await dateAssert(expect, page, mock);
};

const customerAssert = async (expect, page, mock) =>{

	if((mock.appliesOn) && (mock.appliesOn[0] === 1)){

		if((mock.eventType)){
			await expect(await E2EUtil.isEqual(page.coupon.eventType, mock.eventType, 'select')).to.be.true;
		}

		if((mock.eventType) && (mock.eventType[0] === 2)){

			if(mock.billValue){
				await expect(await E2EUtil.isEqual(page.coupon.billValue, mock.billValue, 'number')).to.be.true;
			}
		}

		if((mock.daysBeforeTheEvent) && ((mock.eventType) && (mock.eventType[0] !== 2))){
			await expect(await E2EUtil.isEqual(page.coupon.daysBeforeTheEvent, mock.daysBeforeTheEvent)).to.be.true;
		}

		if(mock.daysAfterTheEvent){
			await expect(await E2EUtil.isEqual(page.coupon.daysAfterTheEvent, mock.daysAfterTheEvent)).to.be.true;
		}
	}

	await dateAssert(expect, page, mock);
};

const billAssert = async (expect, page, mock) =>{

	if((mock.appliesOn) && (mock.appliesOn[0] === 0)){
		await expect(await E2EUtil.isEqual(page.coupon.billValue, mock.billValue, 'number')).to.be.true;
	}

	await dateAssert(expect, page, mock);
};

const couponTypeAssert = async (expect, page, mock) =>{

	if(mock.limit){
		await expect(await E2EUtil.isEqual(page.coupon.limit, mock.limit)).to.be.true;
	}

	if((mock.appliesOn)){
		await expect(await E2EUtil.isEqual(page.coupon.appliesOn, mock.appliesOn, 'select')).to.be.true;
	}

	if(mock.limitPerCustomer){
		await expect(await E2EUtil.isEqual(page.coupon.limitPerCustomer, mock.limitPerCustomer)).to.be.true;
	}

	await E2EUtil.scrollTo(page.coupon.description);

	if((mock.appliesOn) && (mock.appliesOn[0] === 0)){
		await billAssert(expect, page, mock);
	}

	if((mock.appliesOn) && (mock.appliesOn[0] === 1)){
		await customerAssert(expect, page, mock);
	}

	if((mock.appliesOn) && (mock.appliesOn[0] === 2)){
		await productAssert(expect, page, mock);
	}
};

class CouponPO extends BasePO {

	static async assert(expect, page, mock){

		if((mock.image)){
			const countValue = await E2EUtil.countPics();
			await expect(countValue).to.equal(1);
		}

		if(mock.name){
			await expect(await E2EUtil.isEqual(page.coupon.name, mock.name)).to.be.true;
		}

		if((mock.allStore) && !(await E2EUtil.getDisabled(page.coupon.allStore))){
			await expect(await E2EUtil.isEqual(page.coupon.allStore, mock.allStore, 'checkbox')).to.be.true;
		}

		if(mock.onlineCoupon){
			await expect(await E2EUtil.isEqual(page.coupon.onlineCoupon, mock.onlineCoupon, 'checkbox')).to.be.true;
		}

		if(mock.storeCoupon){
			await expect(await E2EUtil.isEqual(page.coupon.storeCoupon, mock.storeCoupon, 'checkbox')).to.be.true;
		}

		if((mock.customerGroup)){
			await expect(await E2EUtil.isEqual(page.coupon.customerGroup, mock.customerGroup, 'select')).to.be.true;
		}

		if((mock.switch) && (mock.switch === 1)){
			await expect(await E2EUtil.isEqual(page.coupon.discountINR, mock.discountINR, 'number')).to.be.true;
		}

		if((mock.switch) && (mock.switch === 2)){
			await expect(await E2EUtil.isEqual(page.coupon.discountPercentage, mock.discountPercentage, 'number')).to.be.true;
		}

		await couponTypeAssert(expect, page, mock);
	};

	/**
	 * decorate to send the value to the view
	 * @param page
	 * @param mock
	 */
	static async decorate(page, mock){

		if(((mock.image))){
			await E2EUtil.doUpload(page.buttons.image.upload, mock.image);
		}

		if((mock.allStore) && !(await E2EUtil.getDisabled(page.coupon.allStore))){
			await page.coupon.allStore.click();
		}

		if((!mock.storeCoupon)){
			await page.coupon.storeCoupon.click();
		}

		if(mock.onlineCoupon){
			await page.coupon.onlineCoupon.click();
		}

		if(mock.name){
			await E2EUtil.doSendKeys(page.coupon.name, mock.name);
		}

		if(mock.code){
			await E2EUtil.doSendKeys(page.coupon.code, mock.code);
		}

		if((mock.generate) && (mock._isAdd)){
			await page.buttons.generateButton.click();
		}

		if((mock.customerGroup) && !(await E2EUtil.getDisabled(page.coupon.customerGroup))){
			await E2EUtil.doSelect(page.coupon.customerGroup, mock.customerGroup);
		}

		await discount(page, mock);
		await couponTypeDecorate(page, mock);
	};

	static fetch(){

		const _this = {};

		_this.panel = E2EUtil.getPanelButtons(this.conf);

		_this.buttons = {
			generateButton: element(by.css('div > md-input-container > button')),
			switch        : element(by.css(`#${this.conf.addId}  md-content > form > div > div > div:nth-child(3) > div:nth-child(2) > md-input-container > md-switch`)),
			image         : {
				upload: element(by.css('#image-input')),
				remove: element(by.css(`#${this.conf.addId}  md-content > form > div > ev-image-upload > div > div > div > button`))
			}

		};

		_this.coupon = {
			name                   : element(by.css(`#${this.conf.addId} div > md-input-container > input[name="couponName"]`)),
			code                   : element(by.css(`#${this.conf.addId} div > div > md-input-container > input[name="couponNo"]`)),
			customerGroup          : element(by.css(`#${this.conf.addId} div > md-input-container > ev-select > md-select[name="customerGroup"]`)),
			discountINR            : element(by.css(`#${this.conf.addId} div > div > md-input-container > input[name="couponINR"]`)),
			discountPercentage     : element(by.css(`#${this.conf.addId} div > div > md-input-container > input[name="couponPercent"]`)),
			limit                  : element(by.css(`#${this.conf.addId} div > md-input-container > input[name="couponReleaseCount"]`)),
			limitPerCustomer       : element(by.css(`#${this.conf.addId} div > div > md-input-container > input[name="limitPerCustomer"]`)),
			appliesOn              : element(by.css(`#${this.conf.addId} div > md-input-container > ev-select > md-select[name="couponApplies"]`)),
			validFrom              : element(by.css(`#${this.conf.addId} div > md-input-container > md-datepicker[name="couponBegins"]  input`)),
			validTill              : element(by.css(`#${this.conf.addId} div > md-input-container > md-datepicker[name="couponTill"] input`)),
			notToBeUsedWith        : element(by.css(`#${this.conf.addId} div > md-input-container > ev-select > md-select[name="doNotUseWithAnyPromotion"]`)),
			billValue              : element(by.css(`#${this.conf.addId} div > md-input-container > input[name="uniqueCustomerAmount"]`)),
			eventType              : element(by.css(`#${this.conf.addId} div > md-input-container > ev-select > md-select[name="particularCustomer"]`)),
			daysBeforeTheEvent     : element(by.css(`#${this.conf.addId} div > md-input-container > input[name="totalDaysBefore"]`)),
			daysAfterTheEvent      : element(by.css(`#${this.conf.addId} div > md-input-container > input[name="totalDaysAfter"]`)),
			category               : element(by.css(`#${this.conf.addId} div > div > md-input-container > ev-select > md-select[name="couponCategory"]`)),
			includeBrand           : element(by.css(`#${this.conf.addId} div > md-input-container > ev-select > md-select[name="couponBrands"]`)),
			includeProducts        : element(by.css(`#${this.conf.addId} div > md-input-container > ev-select > md-select[name="couponProducts"]`)),
			excludeBrand           : element(by.css(`#${this.conf.addId} div > md-input-container > ev-select > md-select[name="couponExcludeBrands"]`)),
			excludeProduct         : element(by.css(`#${this.conf.addId} div > md-input-container > ev-select > md-select[name="couponExcludeProducts"]`)),
			totalRedeemableProducts: element(by.css(`#${this.conf.addId} div > div > md-input-container > input[name="totalRedeemableProduct"]`)),
			allStore               : element(by.css(`#${this.conf.addId}  md-content > form > div > div > div > div > md-checkbox[aria-label="All Branches"]`)),
			storeCoupon            : element(by.css(`#${this.conf.addId}  md-content > form > div > div > div > div > div > md-checkbox[aria-label="Store"]`)),
			onlineCoupon           : element(by.css(`#${this.conf.addId}  md-content > form > div > div > div > div > div >md-checkbox[aria-label="Online"]`)),
			description            : element(by.css(`#${this.conf.addId} div > div > md-input-container >div > textarea[name="couponDesc"]`)),
			errorMsg               : element(by.css(`#${this.conf.addId}  md-content > form > div > div > div > div> div.checkbox-message.ng-scope`))
		};

		return _this;
	};
}

CouponPO.conf = {
	auth    : {
		brand   : 'Mock',
		store   : '1',
		username: 'admin',
		password: 'admin'
	},
	path    : '/app/promotion/coupon/index',
	addId   : 'coupon-add',
	indexId : 'coupon-list-index',
	deleteId: 'coupon-index-delete',
	evModel : {
		id    : MODULES.PROMOTION.COUPON.ID,
		fields: {
			nm: {type: 'text'},
			cc: {type: 'text'},
			ru: {type: 'select', options: 'CouponAppliesOn'}
		},
		dt    : {sort: ['nm']}
	}
};

module.exports = CouponPO;
