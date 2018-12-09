/**
 * Created by developer on 28/11/16.
 */

const messages = (() =>{

	const _this = {};

	_this.content = 'Coupon';

	_this.content2 = '';

	_this.noProducts = 'No products are found';
	return _this;
})();

/*INDEX*/

const index = {
	wrongSearch  : 'catch',
	correctSearch: 'coupon_anniversary',
	sort         : {
		name: 'nm',
		code: 'cc',
		rule: 'ru'
	}
};

const activateRecords   = [1, 2, 3];
const deactivateRecords = [3, 4, 5];
const deactivateAcl     = [1];
const activateAcl       = [1];

const deleteRecords = [1];

const couponWithImage = {
	_isAdd            : true,
	name              : 'product',
	code              : 'a6o8bcd1',
	image             : ['test/coupon/images.png'],
	customerGroup     : [1, 2],
	switch            : 1,
	discountINR       : '80.00',
	discountPercentage: '',
	limit             : '10',
	appliesOn         : [1],
	limitPerCustomer  : '10',
	eventType         : [1],
	daysBeforeTheEvent: '10',
	daysAfterTheEvent : '20',
	onlineCoupon      : 1,
	storeCoupon       : 1,
	allStore          : 0
};

/*add*/

const addCouponBill = {
	_isAdd          : true,
	name            : 'Coupon_Offer On Add bill',
	code            : 'u6gt5EV3d2',
	image           : ['test/coupon/images.png'],
	customerGroup   : [1, 2, 3],
	switch          : 1,
	discountINR     : '100.00',
	limit           : '100',
	limitPerCustomer: '10',
	appliesOn       : [0],
	billValue       : '100.00',
	validFrom       : '10-04-2017',
	validTill       : '10-05-2017',
	onlineCoupon    : 0,
	storeCoupon     : 1,
	allStore        : 0
};

const editCouponBill = {
	_isAdd            : false,
	name              : 'Coupon_Offer On Edit bill',
	image             : ['test/coupon/images.png'],
	customerGroup     : [1, 2, 3, 4],
	switch            : 2,
	discountPercentage: 50,
	limit             : '1000',
	limitPerCustomer  : '100',
	appliesOn         : [0],
	billValue         : '200.00',
	validFrom         : '10-05-2017',
	validTill         : '10-07-2017',
	onlineCoupon      : 0,
	storeCoupon       : 1,
	allStore          : 0
};

const couponBill = {
	_isAdd          : true,
	name            : 'Coupon_Offer On bill',
	code            : 'ar35V3d2',
	image           : ['test/coupon/images.png'],
	customerGroup   : [1, 2, 3],
	switch          : 1,
	discountINR     : '100.00',
	limit           : '100',
	limitPerCustomer: '10',
	appliesOn       : [0],
	billValue       : '100.00',
	validFrom       : '10-04-2017',
	validTill       : '10-05-2017',
	onlineCoupon    : 0,
	storeCoupon     : 1,
	allStore        : 0
};

const couponBillNotToBeClubbedWith = {
	_isAdd          : true,
	name            : 'Coupon_Offer On bill',
	code            : 'aQ2W2E33d2',
	image           : ['test/coupon/images.png'],
	customerGroup   : [1, 2, 3],
	switch          : 1,
	discountINR     : '100.00',
	limit           : '100',
	limitPerCustomer: '10',
	appliesOn       : [0],
	billValue       : '100.00',
	validFrom       : '10-04-2017',
	validTill       : '10-05-2017',
	onlineCoupon    : 0,
	storeCoupon     : 1,
	allStore        : 0
};

const couponLimit = {
	_isAdd          : true,
	name            : 'bill',
	code            : 'FFF0202',
	customerGroup   : [1, 2, 3],
	switch          : 1,
	discountINR     : '100.00',
	limit           : '100',
	appliesOn       : [0],
	limitPerCustomer: '10',
	billValue       : '100.00',
	validFrom       : '10-04-2017',
	validTill       : '10-05-2017',
	onlineCoupon    : 0,
	storeCoupon     : 1,
	allStore        : 0
};

const editLimitAndLimitPerCustomer = {
	_isAdd          : false,
	limit           : '200.00',
	limitPerCustomer: '40.00',
	onlineCoupon    : 0,
	storeCoupon     : 1,
	description     : 'Limit per customer changed'
};

const couponBillValue = {
	_isAdd          : true,
	name            : 'bill value101',
	code            : 'bill value101',
	generate        : true,
	customerGroup   : [1, 2, 3],
	switch          : 1,
	discountINR     : '50.00',
	limit           : '100',
	appliesOn       : [0],
	billValue       : null,
	limitPerCustomer: '10',
	validFrom       : '10-04-2017',
	validTill       : '10-05-2017',
	onlineCoupon    : 0,
	storeCoupon     : 1,
	allStore        : 0
};

const couponBillZeroSameNameCode = {
	_isAdd          : true,
	name            : '012r3tJKJ2',
	code            : '012r3tJKJ2',
	generate        : true,
	customerGroup   : [1, 2, 3],
	switch          : 1,
	discountINR     : '50.00',
	limit           : '100',
	appliesOn       : [0],
	billValue       : '00.00',
	limitPerCustomer: '10',
	validFrom       : '10-04-2017',
	validTill       : '10-05-2017',
	onlineCoupon    : 0,
	storeCoupon     : 1,
	allStore        : 0
};

const couponBillCodeChange = {
	_isAdd          : true,
	name            : 'bill',
	code            : 'a98bcd2',
	generate        : true,
	customerGroup   : [1, 2, 3],
	switch          : 1,
	discountINR     : '500.00',
	limit           : '100',
	appliesOn       : [0],
	limitPerCustomer: '10',
	validFrom       : '10-04-2017',
	validTill       : '10-05-2017',
	billValue       : '100.00',
	onlineCoupon    : 0,
	storeCoupon     : 1,
	allStore        : 0
};

const couponWithBillToProducts = {
	_isAdd            : true,
	name              : 'Coupon_10_bill_To Products',
	code              : '3ar9pl5k3cd3',
	customerGroup     : [1, 2, 3],
	switch            : 2,
	discountPercentage: 50,
	limit             : '100',
	appliesOn         : [0],
	limitPerCustomer  : '10',
	validFrom         : '10-04-2017',
	validTill         : '10-05-2017',
	billValue         : '1.00',
	onlineCoupon      : 1,
	storeCoupon       : 1,
	allStore          : 0
};

const couponWithBill = {
	_isAdd            : true,
	name              : 'Coupon_10_bill_To Customer',
	code              : 'ar3999cd3',
	customerGroup     : [1, 2, 3],
	switch            : 2,
	discountPercentage: 50,
	limit             : '100',
	appliesOn         : [0],
	limitPerCustomer  : '10',
	validFrom         : '10-04-2017',
	validTill         : '10-05-2017',
	billValue         : '1.00',
	onlineCoupon      : 1,
	storeCoupon       : 1,
	allStore          : 0
};

const couponBillPercentage = {
	_isAdd            : true,
	name              : 'Offer on bill_Percentage',
	code              : 'aNH6T323',
	customerGroup     : [1, 2, 3],
	switch            : 2,
	discountPercentage: '50.00',
	limit             : '100',
	appliesOn         : [0],
	limitPerCustomer  : '10',
	validFrom         : '10-04-2017',
	validTill         : '10-05-2017',
	billValue         : '1.00',
	onlineCoupon      : 1,
	storeCoupon       : 1,
	allStore          : 0
};

const addCouponIncludeProducts = {
	_isAdd          : true,
	name            : 'ADD Coupon on Include Products',
	code            : 'X9OIY6Ud4',
	customerGroup   : [3, 4, 5],
	switch          : 1,
	discountINR     : '80.00',
	limit           : '10',
	appliesOn       : [2],
	limitPerCustomer: '1',
	includeProducts : [1, 2, 3, 6],
	includeBrand    : [1],
	validFrom       : '10-04-2017',
	validTill       : '10-05-2017',
	category        : [0, 1, 2],
	onlineCoupon    : 1,
	storeCoupon     : 0,
	allStore        : 0,
	description     : 'couponIncludeProducts'
};

const editCouponIncludeProducts = {
	_isAdd          : false,
	name            : 'EDIT Coupon on Include Products',
	customerGroup   : [3, 4],
	switch          : 1,
	discountINR     : '280.00',
	limit           : '100',
	appliesOn       : [2],
	limitPerCustomer: '1',
	includeProducts : [0],
	includeBrand    : [0],
	validFrom       : '18-05-2017',
	validTill       : '12-06-2017',
	category        : [2, 3],
	onlineCoupon    : 1,
	storeCoupon     : 0,
	allStore        : 0,
	description     : 'couponIncludeProducts'
};

const editCouponToExcludeProducts = {
	_isAdd          : false,
	name            : 'EDIT Coupon on Exclude Products',
	customerGroup   : [3, 5],
	switch          : 1,
	discountINR     : '480.00',
	limit           : '190',
	appliesOn       : [2],
	limitPerCustomer: '1',
	excludeProduct  : [0],
	excludeBrand    : [0],
	validFrom       : '18-05-2017',
	validTill       : '12-06-2017',
	category        : [2, 3],
	onlineCoupon    : 1,
	storeCoupon     : 0,
	allStore        : 0,
	description     : 'couponIncludeProducts'
};

const editCouponToIncludeProducts = {
	_isAdd          : false,
	name            : 'EDIT Coupon on Include Products',
	customerGroup   : [3, 4],
	switch          : 1,
	discountINR     : '450.00',
	limit           : '199',
	appliesOn       : [2],
	limitPerCustomer: '1',
	includeProducts : [0],
	includeBrand    : [0],
	validFrom       : '18-05-2017',
	validTill       : '12-06-2017',
	category        : [2, 3],
	onlineCoupon    : 1,
	storeCoupon     : 0,
	allStore        : 0,
	description     : 'couponIncludeProducts'
};

const couponIncludeProducts = {
	_isAdd          : true,
	name            : 'Coupon on Include Products',
	code            : 'X025Y6Ud4',
	customerGroup   : [3, 4, 5],
	switch          : 1,
	discountINR     : '80.00',
	limit           : '10',
	appliesOn       : [2],
	limitPerCustomer: '1',
	includeProducts : [1, 2, 3, 6],
	includeBrand    : [0, 1],
	validFrom       : '10-04-2017',
	validTill       : '10-05-2017',
	category        : [0, 1, 2],
	onlineCoupon    : 1,
	storeCoupon     : 0,
	allStore        : 0,
	description     : 'couponIncludeProducts'
};

const couponIncludeBrandProducts = {
	_isAdd          : true,
	name            : 'applies on product on Include',
	code            : 'a0256t65d4',
	customerGroup   : [3, 4, 5],
	switch          : 1,
	discountINR     : '80.00',
	limit           : '10',
	appliesOn       : [2],
	limitPerCustomer: '1',
	includeProducts : [1, 2, 5, 3, 6],
	includeBrand    : [1, 2],
	validFrom       : '10-04-2017',
	validTill       : '10-05-2017',
	category        : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	onlineCoupon    : 1,
	storeCoupon     : 0,
	allStore        : 0,
	description     : 'couponIncludeProducts'
};

const couponIncludeProductsPercentage = {
	_isAdd                 : true,
	name                   : 'product_percentage',
	code                   : 'a54bHcd5',
	customerGroup          : [1, 2],
	switch                 : 2,
	discountPercentage     : '8.00',
	limit                  : '10',
	appliesOn              : [2],
	validFrom              : '10-04-2017',
	validTill              : '10-05-2017',
	category               : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	includeProducts        : [1],
	totalRedeemableProducts: '10',
	onlineCoupon           : 0,
	storeCoupon            : 1,
	allStore               : 0,
	description            : 'happy'
};

const couponExcludeBrandProduct = {
	_isAdd        : true,
	name          : 'Exclude Brand and Products',
	code          : 'a40120Y66',
	switch        : 1,
	//customerGroup : [1, 2],
	discountINR   : '80.00',
	appliesOn     : [2],
	validFrom     : '10-04-2017',
	validTill     : '10-05-2017',
	category      : [0, 1, 2, 4],
	excludeProduct: [1, 2],
	excludeBrand  : [1, 2],
	onlineCoupon  : 1,
	storeCoupon   : 0,
	allStore      : 0
};

const editCouponExcludeProducts = {
	_isAdd        : false,
	name          : 'EDIT Coupon Exclude Products',
	switch        : 1,
	customerGroup : [1, 2, 3],
	discountINR   : '800.00',
	appliesOn     : [2],
	category      : [1, 2, 4],
	excludeProduct: [0],
	excludeBrand  : [0],
	validFrom     : '20-05-2017',
	validTill     : '15-07-2017',
	onlineCoupon  : 1,
	storeCoupon   : 0,
	allStore      : 0
};

const addCouponExcludeProducts = {
	_isAdd        : true,
	name          : 'Coupon Exclude Products',
	code          : 'a4RlO8H66',
	switch        : 1,
	//customerGroup : [1, 2],
	discountINR   : '80.00',
	appliesOn     : [2],
	category      : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	excludeProduct: [1, 2, 3, 4, 5, 6],
	excludeBrand  : [1, 2],
	validFrom     : '10-04-2017',
	validTill     : '10-05-2017',
	onlineCoupon  : 1,
	storeCoupon   : 0,
	allStore      : 0
};

const couponExcludeProducts = {
	_isAdd        : true,
	name          : 'Coupon Exclude Products',
	code          : 'a4RJX2Z66',
	switch        : 1,
	customerGroup : [1, 2, 3, 4, 5],
	discountINR   : '80.00',
	appliesOn     : [2],
	category      : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	excludeProduct: [1, 2, 3, 4, 5, 6],
	excludeBrand  : [1, 2],
	validFrom     : '10-04-2017',
	validTill     : '10-05-2017',
	onlineCoupon  : 1,
	storeCoupon   : 0,
	allStore      : 0
};

const couponUniqueProduct = {
	_isAdd                 : true,
	name                   : 'product based on Coupon',
	code                   : 'abHG106',
	switch                 : 1,
	customerGroup          : [1, 2, 3, 4, 5],
	discountINR            : '80.00',
	limit                  : '10',
	appliesOn              : [2],
	limitPerCustomer       : '1',
	validFrom              : '10-04-2017',
	validTill              : '10-05-2017',
	//category               : [0, 1, 2, 4],
	//excludeProduct         : [1, 2],
	totalRedeemableProducts: '10',
	onlineCoupon           : 1,
	storeCoupon            : 0,
	allStore               : 0
};

const couponExcludeProductsPercentage = {
	_isAdd                 : true,
	name                   : 'product_exclude_percentage',
	code                   : 'aL21s21bcd7',
	customerGroup          : [1, 2],
	switch                 : 2,
	discountPercentage     : 80,
	limit                  : '10',
	appliesOn              : [2],
	limitPerCustomer       : '1',
	validFrom              : '10-04-2017',
	validTill              : '10-05-2017',
	category               : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	excludeProduct         : [1, 2],
	totalRedeemableProducts: '10',
	onlineCoupon           : 1,
	storeCoupon            : 1,
	allStore               : 0
};

const couponJunkValue = {
	_isAdd            : true,
	name              : 'birthday EVENT @@@##$$ %$$&^&&((^*&^)(")__011?///><>~!74*()!:210',
	code              : 'ab$ 2%$$&^&&((^*&^)(")__011?///><>~!74210',
	customerGroup     : [1, 2, 3],
	switch            : 1,
	discountINR       : '10000000000000000000000000000000.00',
	limit             : '10,000,00000000000',
	limitPerCustomer  : '10,000,0000000000000',
	appliesOn         : [1],
	eventType         : [1],
	daysBeforeTheEvent: 367,
	daysAfterTheEvent : 367,
	onlineCoupon      : 1,
	storeCoupon       : 0,
	allStore          : 0,
	description       : 'ab$ 2%$$&^&&((^*&^)(")__011?ODID / semi-formal outing. Feat12410 ///><>~!74210JKjkhhhLLLUJI021214001'
};

const editCouponACL = {
	_isAdd            : false,
	name              : 'Edit customer_ACL',
	storeCoupon       : 0,
	onlineCoupon      : 1,
	switch            : 2,
	discountPercentage: 10,
	daysBeforeTheEvent: 15,
	daysAfterTheEvent : 25
};

const couponACL = {
	_isAdd            : true,
	name              : 'customer_birthday_ACL',
	code              : 'a0A7C9LIcd8',
	customerGroup     : [1, 2, 3],
	switch            : 1,
	discountINR       : '99.00',
	limit             : '10',
	appliesOn         : [1],
	limitPerCustomer  : '10',
	eventType         : [1],
	daysBeforeTheEvent: 5,
	daysAfterTheEvent : 5,
	onlineCoupon      : 1,
	storeCoupon       : 0,
	allStore          : 0,
	description       : 'grab the great deal'
};

const couponBirthDay = {
	_isAdd            : true,
	name              : 'Offer on Customer_birthday',
	code              : 'a01bIcd8',
	customerGroup     : [1, 2, 3],
	switch            : 1,
	discountINR       : '1000.00',
	limit             : '110',
	limitPerCustomer  : '10',
	appliesOn         : [1],
	eventType         : [1],
	daysBeforeTheEvent: 15,
	daysAfterTheEvent : 15,
	onlineCoupon      : 1,
	storeCoupon       : 0,
	allStore          : 0,
	description       : 'grab the great deal'
};

const addCouponBirthDay = {
	_isAdd            : true,
	name              : 'Offer on Customer_birthday',
	code              : 'a0B5Z1Mcd8',
	customerGroup     : [1, 2, 3],
	switch            : 1,
	discountINR       : '1000.00',
	limit             : '110',
	limitPerCustomer  : '10',
	appliesOn         : [1],
	eventType         : [1],
	daysBeforeTheEvent: 15,
	daysAfterTheEvent : 15,
	onlineCoupon      : 1,
	storeCoupon       : 0,
	allStore          : 0,
	description       : 'grab the great deal'
};

const editCouponBirthDay = {
	_isAdd            : false,
	name              : 'Offer on Edit Customer_birthday',
	image             : ['test/coupon/images.png'],
	customerGroup     : [1, 2],
	switch            : 1,
	discountINR       : '200.00',
	limit             : '210',
	limitPerCustomer  : '20',
	appliesOn         : [1],
	eventType         : [1],
	daysBeforeTheEvent: 25,
	daysAfterTheEvent : 35,
	onlineCoupon      : 1,
	storeCoupon       : 0,
	allStore          : 0,
	description       : 'grab the great deal on Birthday'
};

const filterCoupon = {
	//id: 526,
	nm: 'Customer #Birthday_OFFER',
	cc: '9f95hT5039',
	ru: [1]
};

const filterCouponTypeCustomers = {
	nm: null,
	cc: null,
	ru: [1]
};

const filterCouponTypeBill = {
	nm: null,
	cc: null,
	ru: [0]
};

const filterCouponTypeProducts = {
	nm: null,
	cc: null,
	ru: [2]
};

const searchCouponIncludeProducts = {
	nm: 'Coupon on Include Products'
};

const filterCouponACL = {
	nm: 'coupon_anniversary_percentage 15'
};

const couponFilter = {
	_isAdd            : true,
	name              : 'Customer #Birthday_OFFER',
	code              : '9f95hT5039',
	image             : ['test/coupon/images.png'],
	customerGroup     : [1, 2, 3, 4],
	switch            : 1,
	discountINR       : '1000.00',
	limit             : '10',
	appliesOn         : [1],
	limitPerCustomer  : '10',
	eventType         : [1],
	daysBeforeTheEvent: 5,
	daysAfterTheEvent : 5,
	onlineCoupon      : 1,
	storeCoupon       : 0,
	allStore          : 0,
	description       : 'grab the great deal offer'
};

const couponAnniversaryPercentage = {
	_isAdd            : true,
	name              : 'customer_Anniversary_Offer on percentage',
	code              : 'ab32cd9',
	image             : ['test/coupon/images.png'],
	customerGroup     : [1, 2, 3],
	switch            : 2,
	discountPercentage: 20,
	limit             : '10',
	limitPerCustomer  : '10',
	appliesOn         : [1],
	eventType         : [0],
	daysBeforeTheEvent: 25,
	daysAfterTheEvent : 15,
	onlineCoupon      : 1,
	storeCoupon       : 0,
	allStore          : 0,
	description       : 'grab the great deal'
};

const couponAnniversary = {
	_isAdd            : true,
	name              : 'Offer_On Anniversary',
	code              : 'a21U3fd10',
	customerGroup     : [1, 2, 3],
	switch            : 1,
	discountINR       : '2000.00',
	limit             : '20',
	appliesOn         : [1],
	limitPerCustomer  : '10',
	eventType         : [0],
	daysBeforeTheEvent: 24,
	daysAfterTheEvent : 14,
	onlineCoupon      : 1,
	storeCoupon       : 0,
	allStore          : 0
};

const addForAnniversary = {
	_isAdd            : true,
	name              : 'add_anniversary_percentage1',
	code              : 'DR5T5VL11',
	image             : ['test/coupon/images.png'],
	customerGroup     : [1, 2, 3],
	switch            : 2,
	discountPercentage: '50.00',
	limit             : '20',
	appliesOn         : [1],
	limitPerCustomer  : '10',
	eventType         : [0],
	daysBeforeTheEvent: 4,
	daysAfterTheEvent : 4,
	onlineCoupon      : 1,
	storeCoupon       : 1
};

const addCouponOnAnniversary = {
	_isAdd            : true,
	name              : 'customer_anniversary_percentage1',
	code              : 'aMB3NVL11',
	image             : null,
	customerGroup     : [1, 2, 3],
	switch            : 2,
	discountPercentage: '50.00',
	limit             : '20',
	appliesOn         : [1],
	limitPerCustomer  : '10',
	eventType         : [0],
	daysBeforeTheEvent: 4,
	daysAfterTheEvent : 4,
	onlineCoupon      : 1,
	storeCoupon       : 1
};

const editCouponOnAnniversary = {
	_isAdd            : false,
	name              : 'customer_anniversary_Edited',
	image             : null,
	customerGroup     : [1, 2, 3, 4],
	discountPercentage: '60.00',
	limit             : '200',
	appliesOn         : [1],
	limitPerCustomer  : '100',
	eventType         : [0],
	daysBeforeTheEvent: 41,
	daysAfterTheEvent : 40,
	storeCoupon       : 1
};

const couponOnAnniversary = {
	_isAdd            : true,
	name              : 'customer_anniversary_percentage1',
	code              : 'ab5cdL11',
	image             : ['test/coupon/images.png'],
	customerGroup     : [1, 2, 3],
	switch            : 2,
	discountPercentage: '50.00',
	limit             : '20',
	appliesOn         : [1],
	limitPerCustomer  : '10',
	eventType         : [0],
	daysBeforeTheEvent: 4,
	daysAfterTheEvent : 4,
	onlineCoupon      : 1,
	storeCoupon       : 1
};

const addCouponNewCustomer = {
	_isAdd           : true,
	name             : 'OFFER #new customer',
	code             : 'a3M5N6BVd12',
	customerGroup    : [1, 2],
	switch           : 1,
	discountINR      : '3000.00',
	limit            : '5',
	appliesOn        : [1],
	limitPerCustomer : '5',
	eventType        : [2],
	daysAfterTheEvent: 15,
	billValue        : '50.00',
	onlineCoupon     : 1,
	storeCoupon      : 1,
	allStore         : 0
};

const editCouponNewCustomer = {
	_isAdd           : true,
	name             : 'OFFER ON EDIT #new customer',
	customerGroup    : [1, 2, 3, 4],
	switch           : 1,
	discountINR      : '2000.00',
	limit            : '500',
	appliesOn        : [1],
	limitPerCustomer : '50',
	eventType        : [2],
	daysAfterTheEvent: 55,
	billValue        : '500.00',
	onlineCoupon     : 1,
	storeCoupon      : 1,
	allStore         : 0
};

const couponNewCustomer = {
	_isAdd           : true,
	name             : 'OFFER #new customer',
	code             : 'a34bLQd12',
	customerGroup    : [1, 2],
	switch           : 1,
	discountINR      : '3000.00',
	limit            : '5',
	appliesOn        : [1],
	limitPerCustomer : '5',
	eventType        : [2],
	daysAfterTheEvent: 15,
	billValue        : '50.00',
	onlineCoupon     : 1,
	storeCoupon      : 1,
	allStore         : 0
};

const couponNewCustomerPercentage = {
	_isAdd            : true,
	name              : 'new customer_percentage',
	code              : 'abc201d13',
	customerGroup     : [1, 2],
	switch            : 2,
	discountPercentage: 20,
	limit             : '5',
	appliesOn         : [1],
	limitPerCustomer  : '5',
	eventType         : [2],
	daysAfterTheEvent : 5,
	billValue         : '50.00',
	onlineCoupon      : 1,
	storeCoupon       : 1,
	allStore          : 0
};

const couponCheckSave = {
	_isAdd          : false,
	customerGroup   : [1, 2],
	switch          : 1,
	discountINR     : '123.00',
	limit           : '100',
	appliesOn       : [1],
	limitPerCustomer: '10',
	billValue       : '100.00',
	onlineCoupon    : 1,
	storeCoupon     : 1,
	allStore        : 0
};

const appliesOnCustomers = {
	_isAdd            : false,
	limit             : '100',
	limitPerCustomer  : '10',
	appliesOn         : [1],
	eventType         : [1],
	onlineCoupon      : 0,
	storeCoupon       : 1,
	daysBeforeTheEvent: 5,
	daysAfterTheEvent : 10
};

const appliesOnProduct = {
	_isAdd                 : false,
	name                   : 'product_offer zone',
	customerGroup          : [1, 2],
	switch                 : 1,
	discountPercentage     : 20,
	limit                  : '10',
	appliesOn              : [2],
	limitPerCustomer       : '1',
	includeBrand           : [1, 2],
	includeProduct         : [1, 2],
	validFrom              : '10-04-2017',
	validTill              : '10-05-2017',
	category               : [1, 2, 4],
	totalRedeemableProducts: '10',
	onlineCoupon           : 1,
	storeCoupon            : 1,
	allStore               : 0
};

const coupon = {
	_isAdd                 : false,
	name                   : 'coupon for purchase on 2000',
	image                  : ['test/coupon/images.png'],
	generateButton         : false, customerGroup: [1, 2],
	switch                 : 1,
	onlineCoupon           : 0,
	storeCoupon            : 1,
	discountPercentage     : 40,
	limit                  : '10',
	appliesOn              : [2],
	limitPerCustomer       : '10',
	validFrom              : '10-04-2017',
	validTill              : '10-05-2017',
	category               : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	includeProducts        : [1, 2, 3],
	totalRedeemableProducts: '10'
};

const editCouponName = {
	_isAdd     : false,
	name       : '#offerCoupon',
	storeCoupon: 1
};

const validateCouponValue = {
	_isAdd            : true,
	name              : 'offer for coupon',
	customerGroup     : [1, 2],
	storeCoupon       : 1,
	onlineCoupon      : 0,
	discountINR       : '100.00',
	switch            : 2,
	discountPercentage: 10
};

const zeroDiscount = {
	_isAdd            : true,
	storeCoupon       : 1,
	onlineCoupon      : 0,
	switch            : 2,
	discountINR       : '00.00',
	discountPercentage: '0.00'
};

const validateDiscount = {
	_isAdd     : true,
	discountInr: '0.00',
	percentage : '1001.00', /*will show as 101*/
	image      : ['test/inventory/product/category/mobile.jpg']
};

const mandatoryAppliesOnProduct = {
	storeCoupon  : 1,
	onlineCoupon : 0,
	name         : 'mandatory fields',
	code         : 'ab0MH6G55',
	image        : ['test/coupon/images.png'],
	switch       : 1,
	discountINR  : '20.00',
	customerGroup: [1, 2],
	appliesOn    : [2]
};

const validateAppliesOnProduct = {
	storeCoupon  : 1,
	onlineCoupon : 0,
	name         : 'applies on Product',
	code         : 'ab01E1TB15',
	image        : ['test/coupon/images.png'],
	switch       : 1,
	discountINR  : '20.00',
	customerGroup: [1, 2],
	appliesOn    : [2]
};

const validateAppliesOnBills = {
	storeCoupon  : 1,
	onlineCoupon : 0,
	name         : 'applies on Bills',
	code         : 'ab77cd1TB15',
	image        : ['test/coupon/images.png'],
	switch       : 1,
	discountINR  : '20.00',
	customerGroup: [1, 2],
	appliesOn    : [0],
	billValue    : '1000.00'
};

const validateAppliesOnCustomer = {
	storeCoupon  : 1,
	onlineCoupon : 0,
	name         : 'applies on Customers',
	code         : 'ab77cd1T211',
	image        : ['test/coupon/images.png'],
	switch       : 1,
	discountINR  : '20.00',
	customerGroup: [1, 2],
	appliesOn    : [1]
};

const validateEventTypeAnniversary = {
	storeCoupon  : 1,
	onlineCoupon : 0,
	name         : 'EventType Anniversary',
	code         : 'Rb01001T2',
	image        : ['test/coupon/images.png'],
	switch       : 1,
	discountINR  : '20.00',
	customerGroup: [1, 2, 3],
	appliesOn    : [1],
	eventType    : [0]
};

const validateEventTypeBirthday = {
	storeCoupon  : 1,
	onlineCoupon : 0,
	name         : 'EventType Birthday',
	code         : 'RbK7H6G2',
	image        : ['test/coupon/images.png'],
	switch       : 1,
	discountINR  : '20.00',
	customerGroup: [1, 2, 3],
	appliesOn    : [1],
	eventType    : [1]
};

const validateNewCustomer = {
	storeCoupon      : 1,
	onlineCoupon     : 0,
	name             : 'EventType NewCustomer',
	code             : 'H6G656G2',
	image            : ['test/coupon/images.png'],
	switch           : 1,
	discountINR      : '20.00',
	customerGroup    : [1, 2, 3],
	appliesOn        : [1],
	eventType        : [2],
	billValue        : '1000.00',
	daysAfterTheEvent: '10'
};

const notToBeUsedWith = {
	appliesOn      : [0],
	billValue      : '1000.00',
	notToBeUsedWith: [1, 3, 4, 5]
};

const notToBeClubbedWith = {
	onlineCoupon   : 0,
	storeCoupon    : 1,
	notToBeUsedWith: [1]
};

const eventTypeAnniToNewCust = {
	_isAdd           : false,
	eventType        : [2],
	billValue        : '2000',
	daysAfterTheEvent: '25'
};

const daysBeforeAndAfterEventWithEvent = {
	search            : 'Customers',
	appliesOn         : [1],
	eventType         : [1],
	daysBeforeTheEvent: '31',
	daysAfterTheEvent : '21',
	onlineCoupon      : 0,
	storeCoupon       : 1
};

const limitPerCustomerValueMoreThanLimit = {
	_isAdd          : true,
	name            : 'Limit Per Customer more than Limit',
	code            : 'aL8cd7145',
	image           : ['test/coupon/images.png'],
	customerGroup   : [1, 2],
	switch          : 1,
	discountINR     : '80.00',
	limit           : '10',
	limitPerCustomer: '15',
	appliesOn       : [0],
	validFrom       : '10-04-2017',
	validTill       : '10-05-2017',
	onlineCoupon    : 0,
	storeCoupon     : 1,
	description     : 'Limit Changed'
};

const limitValidation = {
	_isAdd            : true,
	name              : 'Offer Zone',
	code              : 'ab025',
	image             : ['test/coupon/images.png'],
	customerGroup     : [1, 2],
	switch            : 1,
	discountINR       : '80.00',
	limit             : '10',
	limitPerCustomer  : null,
	appliesOn         : [1],
	categories        : [1],
	limitPerProducts  : null,
	eventType         : [1],
	daysBeforeTheEvent: '10',
	daysAfterTheEvent : '20',
	onlineCoupon      : 0,
	storeCoupon       : 1,
	description       : 'Limit Changed'
};

const limitValidationZero = {
	_isAdd            : true,
	name              : 'Offer Zone',
	code              : 'gAA25',
	image             : ['test/coupon/images.png'],
	customerGroup     : [1, 2],
	switch            : 1,
	discountINR       : '80.00',
	limit             : '10',
	limitPerCustomer  : '00.00',
	appliesOn         : [1],
	categories        : [1],
	limitPerProducts  : '00.00',
	eventType         : [1],
	daysBeforeTheEvent: '10',
	daysAfterTheEvent : '20',
	onlineCoupon      : 0,
	storeCoupon       : 1,
	description       : 'Limit Changed'
};

const addingCodeAlreadyGeneratedButNotUsed = {
	_isAdd            : true,
	name              : 'New Coupon',
	code              : 'a877bcd1345',
	customerGroup     : [1, 2],
	switch            : 1,
	discountINR       : '80.00',
	limit             : '10',
	limitPerCustomer  : '10',
	appliesOn         : [1],
	eventType         : [1],
	daysBeforeTheEvent: '10',
	daysAfterTheEvent : '20',
	onlineCoupon      : 0,
	storeCoupon       : 1,
	description       : 'Adding already generated code'
};

const addDuplicateCode = {
	_isAdd            : true,
	name              : 'Festive Offer',
	code              : 'ab36L7d1345',
	customerGroup     : [1, 2],
	switch            : 1,
	discountINR       : '40.00',
	limit             : '10',
	limitPerCustomer  : '10',
	appliesOn         : [1],
	eventType         : [1],
	daysBeforeTheEvent: '100',
	daysAfterTheEvent : '210',
	onlineCoupon      : 0,
	storeCoupon       : 1,
	description       : 'Adding used code'
};

const deleteAndAddImage = {
	_isAdd            : true,
	name              : 'product with Image',
	code              : '11KX4b4h1',
	customerGroup     : [1, 2, 3, 4],
	image             : ['test/coupon/images.png'],
	switch            : 1,
	discountINR       : '40.00',
	limit             : '10',
	limitPerCustomer  : '10',
	appliesOn         : [1],
	eventType         : [1],
	daysBeforeTheEvent: '10',
	daysAfterTheEvent : '20',
	onlineCoupon      : 0,
	storeCoupon       : 1,
	description       : ' Delete and Add same image'
};

const addAndDeleteAndAgainAddImage = {
	_isAdd            : true,
	name              : 'product',
	code              : '118esc54h1',
	customerGroup     : [1, 2, 3, 4],
	image             : ['test/coupon/images.png'],
	imageNew          : ['test/inventory/product/category/mobile.jpg'],
	switch            : 1,
	discountINR       : '40.00',
	limit             : '10',
	limitPerCustomer  : '10',
	appliesOn         : [1],
	eventType         : [1],
	daysBeforeTheEvent: '10',
	daysAfterTheEvent : '20',
	onlineCoupon      : 0,
	storeCoupon       : 1,
	description       : 'Delete and Add same image'
};

const uncheckedCheckboxStoreCoupon = {
	_isAdd      : true,
	name        : 'Unchecked Checkbox',
	onlineCoupon: 0,
	storeCoupon : 0
};
/*Coupon Name max 512 characters are allowed I gave 513*/
/*Code max 45 characters are allowed I gave 46*/
const maxLengthValidation = {
	_isAdd          : true,
	name            : '111111111111017 SUMMER OFFER FOR 2017 SUMMER OFFER FOR 2017 SUMMER OF 2017 SUMMER OFFER FOR 2017 SUMMER OFFER FOR 2017 SUMMER OFFER FOR 2017 SUMMER OFFER FOR 2017 SUMMER OFFER FOR 2017 SUMMER OFFER FOR 2017 SUMMER OFFER FOR 2017 SUMMER OFFER FOR 2017 SUMMER OFFER FOR 2017 SUMMER OFFER FOR 2017 SUMMER OFFER FOR 2017 SUMMER OFFER FOR 2017 SUMMER OFFER FOR 2017 V SUMMER OFFER FOR 2017 SUMMER OFFER FOR 2017 SUMMER OFFER FOR 2017 SUMMER OFFER FOR 2017SUMMER OFFER FOR 2017SUMMER OFFER FOR 2017SUMMER OFFER FOR 2017',
	code            : 'e2c176492ae2K92ae2c176492ae2c176492ae2c176492a',
	customerGroup   : null,
	switch          : 1,
	discountINR     : '100,000,000,000,000.00',
	appliesOn       : [0],
	limitPerCustomer: '1,000,000,000',
	billValue       : '100000000000000000000000000000000000000000000.00',
	validFrom       : '10-04-201720',
	validTill       : '100-052-2017',
	onlineCoupon    : 0,
	storeCoupon     : 1,
	description     : 'Negative validation, maximum and minimum text length validation Negative validation, maximum and minimum text length validation Negative validation, maximum and minimum text length validation Negative validation, maximum and minimum text length validation Negative validation, maximum and minimum text length validation Negative validation, maximum and minimum text length validation Negative validation, maximum and minimum text length validation'
};

const limit = {limit: '10'};

const limitErrorMessage = {
	message: 'Must be lesser than or equal to 10.'
};

const action = {
	deActive: 0,
	active  : 1,
	delete  : 2
};

const indexData = {
	emptySearch : 0,
	searchResult: 1,
	setRows1    : 100,
	setRows2    : 10,
	filterResult: 1
};

const selectRecord = {
	rowOne  : 1,
	rowTwo  : 2,
	rowThree: 3

};

const addProductVariant = {
	_isAdd      : true,
	product     : {
		brand      : [1],
		category   : [7],
		name       : '#Marker',
		description: 'imported',
		img        : [],
		hsn        : '01011090'
	},
	variant     : [{name: 'Color', value: ['Brown', 'Black', 'Red']}],
	details     : [{
		pricing     : {
			mrp           : '500.00',
			retailPrice   : '450.00',
			buyPrice      : '430.00',
			wholesalePrice: '440.00'
		},
		weighAndShip: {
			sellingUnitOfMeasure : [1],
			purchaseUnitOfMeasure: [1],
			clubbedItem          : false
		}
	}, {
		pricing     : {
			mrp           : '500.00',
			retailPrice   : '450.00',
			buyPrice      : '430.00',
			wholesalePrice: '440.00'
		},
		weighAndShip: {
			sellingUnitOfMeasure : [1],
			purchaseUnitOfMeasure: [1],
			clubbedItem          : false
		}
	}, {
		pricing     : {
			mrp           : '500.00',
			retailPrice   : '450.00',
			buyPrice      : '430.00',
			wholesalePrice: '440.00'
		},
		weighAndShip: {
			sellingUnitOfMeasure : [1],
			purchaseUnitOfMeasure: [1],
			clubbedItem          : false
		}
	}],
	productName1: '#Marker Brown',
	productName2: '#Marker Black',
	productName3: '#Marker Red'
};

const deactivateProduct = [1];

const filterProduct = {
	nm: 'Hand Bag 125',
	bi: []
};

const searchValue = {
	name              : '',
	customer          : 'Customers',
	customerBirthday13: 'customer_birthday 3',
	limit             : 0
};

const actions = {
	deactivate: 'deactivate',
	active    : 'active',
	inactive  : 'inactive',
	cancel    : 'cancel'
};

const poIndex = {
	zero : 0,
	one  : 1,
	two  : 2,
	three: 3,
	four : 4,
	five : 5,
	six  : 6,
	seven: 7,
	eight: 8,
	nine : 9,
	ten  : 10
};

const statusIndex = {
	zero : 0,
	one  : 1,
	two  : 2,
	three: 3,
	four : 4,
	five : 5,
	six  : 6,
	seven: 7,
	eight: 8,
	nine : 9,
	ten  : 10
};

module.exports = {
	actions                             : actions,
	action                              : action,
	activateAcl                         : activateAcl,
	activateRecords                     : activateRecords,
	appliesOnProduct                    : appliesOnProduct,
	addProductVariant                   : addProductVariant,
	addCouponBill                       : addCouponBill,
	appliesOnCustomers                  : appliesOnCustomers,
	addCouponBirthDay                   : addCouponBirthDay,
	addCouponNewCustomer                : addCouponNewCustomer,
	addForAnniversary                   : addForAnniversary,
	addCouponExcludeProducts            : addCouponExcludeProducts,
	addCouponIncludeProducts            : addCouponIncludeProducts,
	addAndDeleteAndAgainAddImage        : addAndDeleteAndAgainAddImage,
	addingCodeAlreadyGeneratedButNotUsed: addingCodeAlreadyGeneratedButNotUsed,
	addDuplicateCode                    : addDuplicateCode,
	addCouponOnAnniversary              : addCouponOnAnniversary,
	couponIncludeProductsPercentage     : couponIncludeProductsPercentage,
	couponExcludeProductsPercentage     : couponExcludeProductsPercentage,
	couponIncludeBrandProducts          : couponIncludeBrandProducts,
	couponExcludeProducts               : couponExcludeProducts,
	couponOnAnniversary                 : couponOnAnniversary,
	couponAnniversaryPercentage         : couponAnniversaryPercentage,
	couponWithBillToProducts            : couponWithBillToProducts,
	couponNewCustomerPercentage         : couponNewCustomerPercentage,
	couponBillPercentage                : couponBillPercentage,
	couponIncludeProducts               : couponIncludeProducts,
	couponExcludeBrandProduct           : couponExcludeBrandProduct,
	couponBillNotToBeClubbedWith        : couponBillNotToBeClubbedWith,
	couponNewCustomer                   : couponNewCustomer,
	couponAnniversary                   : couponAnniversary,
	couponBillCodeChange                : couponBillCodeChange,
	couponBillZeroSameNameCode          : couponBillZeroSameNameCode,
	couponBirthDay                      : couponBirthDay,
	couponCheckSave                     : couponCheckSave,
	couponWithImage                     : couponWithImage,
	couponFilter                        : couponFilter,
	coupon                              : coupon,
	couponUniqueProduct                 : couponUniqueProduct,
	couponBillValue                     : couponBillValue,
	couponACL                           : couponACL,
	couponWithBill                      : couponWithBill,
	couponJunkValue                     : couponJunkValue,
	couponLimit                         : couponLimit,
	couponBill                          : couponBill,
	deactivateRecords                   : deactivateRecords,
	deactivateProduct                   : deactivateProduct,
	daysBeforeAndAfterEventWithEvent    : daysBeforeAndAfterEventWithEvent,
	deleteAndAddImage                   : deleteAndAddImage,
	deactivateAcl                       : deactivateAcl,
	deleteRecords                       : deleteRecords,
	editCouponName                      : editCouponName,
	editCouponACL                       : editCouponACL,
	editCouponBill                      : editCouponBill,
	editCouponBirthDay                  : editCouponBirthDay,
	editCouponOnAnniversary             : editCouponOnAnniversary,
	editLimitAndLimitPerCustomer        : editLimitAndLimitPerCustomer,
	editCouponNewCustomer               : editCouponNewCustomer,
	editCouponIncludeProducts           : editCouponIncludeProducts,
	editCouponExcludeProducts           : editCouponExcludeProducts,
	eventTypeAnniToNewCust              : eventTypeAnniToNewCust,
	editCouponToExcludeProducts         : editCouponToExcludeProducts,
	editCouponToIncludeProducts         : editCouponToIncludeProducts,
	filterProduct                       : filterProduct,
	filterCoupon                        : filterCoupon,
	filterCouponTypeBill                : filterCouponTypeBill,
	filterCouponTypeCustomers           : filterCouponTypeCustomers,
	filterCouponTypeProducts            : filterCouponTypeProducts,
	filterCouponACL                     : filterCouponACL,
	index                               : index,
	indexData                           : indexData,
	limit                               : limit,
	limitValidation                     : limitValidation,
	limitValidationZero                 : limitValidationZero,
	limitErrorMessage                   : limitErrorMessage,
	limitPerCustomerValueMoreThanLimit  : limitPerCustomerValueMoreThanLimit,
	messages                            : messages,
	maxLengthValidation                 : maxLengthValidation,
	mandatoryAppliesOnProduct           : mandatoryAppliesOnProduct,
	notToBeUsedWith                     : notToBeUsedWith,
	notToBeClubbedWith                  : notToBeClubbedWith,
	poIndex                             : poIndex,
	statusIndex                         : statusIndex,
	selectRecord                        : selectRecord,
	searchValue                         : searchValue,
	searchCouponIncludeProducts         : searchCouponIncludeProducts,
	uncheckedCheckboxStoreCoupon        : uncheckedCheckboxStoreCoupon,
	validateDiscount                    : validateDiscount,
	validateCouponValue                 : validateCouponValue,
	validateAppliesOnBills              : validateAppliesOnBills,
	validateAppliesOnProduct            : validateAppliesOnProduct,
	validateNewCustomer                 : validateNewCustomer,
	validateAppliesOnCustomer           : validateAppliesOnCustomer,
	validateEventTypeBirthday           : validateEventTypeBirthday,
	validateEventTypeAnniversary        : validateEventTypeAnniversary,
	zeroDiscount                        : zeroDiscount
};
