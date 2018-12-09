class ContactM {
}

ContactM.Filter = {
	GlobalFilter         : {supplier: 'supplier'},
	FilterSupplier       : {nm: 'supplier EMBWOP', ty: [4], ph: null},
	FilterProductSupplier: {
		nm: 'Hand Bag 127', /*need to be present in test.db*/
		bi: []
	}
};

ContactM.Search = {
	SupplierName   : 'SUPPLIER FOR TEST1',
	SupplierBranch1: 'Branch 1',
	SupplierBranch2: 'Branch 2',
	SupplierBranch3: 'Branch 3'
};

ContactM.SupplierAdd = {
	AddMoreRecords             : {
		_isAdd: true,
		branch: [{
			_isAdd    : true,
			phoneArray: [{type: 2, value: '9765456464'}, {type: 1, value: '9600445533'}, {
				type : 3,
				value: '96004444333'
			}]
		}]
	},
	SupplierAddJunkValue       : {
		_isAdd                 : true,
		name                   : 'supplier@##$ %$$&011?...,{}[]/!74*()!::validation',
		totalOutstandingBalance: '100.00',
		totalCreditBalance     : '200.00',
		note                   : 'supplier %$$&^&&((_011?...,{//><>~!74*()!:::"NOTE101',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier Branch %$$&^&&((^*&^)(")_0<>~!74*()!:::"20',
			person            : 'Add Test @@@##$?...,{]{<>~!74*()211::210',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 1, value: '9600445533'}, {type: 2, value: '9600445530'}],
			emailArray        : [{type: 1, value: 'evoluzin101$^&%&9090{}~!#$%*_^&_/120/.4LU@gmail.com'}, {
				type : 2,
				value: 'evoluzin$^&%&9090{}~!#$%*_^&_/120/.4LU@GMAIL.COM'
			}],
			idArray           : [{type: 1, value: 'QAW8574W9'}],
			address           : '2 nd cross@##((^*11?.,{]//><>~!74*()!:"NOTst., /chennai',
			pinCode           : 600017,
			product           : [2, 3, 4],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}]
	},
	SupplierAddTwoBranchInfo   : {
		_isAdd                 : true,
		name                   : 'supplier AMBWP',
		totalOutstandingBalance: '300.00',
		totalCreditBalance     : '400.00',
		note                   : 'supplier AMBWP notes 2',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 1',
			person            : 'athar',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445567'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 2',
			person            : 'athar',
			outStandingBalance: '200.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			emailArray        : [{type: 1, value: 'sathya@gmail.com'}],
			address           : '2 nd cross st, Usman Road chennai',
			pinCode           : 600017,
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	SupplierAddAllPhoneAndEmail: {
		_isAdd                 : true,
		name                   : 'supplier with all Phone and Email details',
		totalOutstandingBalance: '100.00',
		totalCreditBalance     : '200.00',
		note                   : 'supplier NOTE',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier Branch',
			person            : 'Add Test',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 0, value: '9765456464'}, {type: 1, value: '06572463191'}, {
				type : 2,
				value: '9163840690'
			}, {type: 3, value: '7299143067'},
				{type: 4, value: '1800555102'}, {type: 5, value: '180030007777'}, {type: 6, value: '9204664714'}],
			emailArray        : [{type: 1, value: 'evoluzinEmp@yahoo.com'}, {
				type : 2,
				value: 'evoluzin10$@hotmail.com'
			}, {type: 3, value: 'evoluzin010$@GMAIL.com'},
				{type: 4, value: 'evoluzin770$@rediffmail.com'}],
			idArray           : [{type: 1, value: 'QAW85M7W9'}, {type: 2, value: 'L7V3574W9'}, {
				type : 3,
				value: 'QY6574W9'
			}, {type: 4, value: 'ELW8574W9'},
				{type: 5, value: 'ELW8JH001C9'}, {type: 6, value: 'ELW8574XA'}, {type: 7, value: 'VLW8574W9'}, {
					type : 8,
					value: 'EL9WH5HH7W9'
				},
				{type: 9, value: 'EL4MYB6W9'}, {type: 10, value: 'PL4OK574W9'}, {type: 11, value: 'ELW001KKW9'}]
		}]
	},
	SupplierASBWPForAcl        : {
		_isAdd                 : true,
		name                   : 'supplier New 2017 For Acl',
		totalOutstandingBalance: null,
		totalCreditBalance     : null,
		note                   : 'supplier ACL TESTING',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier Open Branch 1',
			person            : 'kaanjeepan',
			outStandingBalance: null,
			creditBalance     : null,
			phoneArray        : [{type: 1, value: '9100885533'}],
			/*idArray           : [{type: 1, value: 'Ad00H01'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600018,
			product           : [2, 3, 7],*/
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}]
	},
	SupplierASBWP              : {
		_isAdd                 : true,
		name                   : 'supplier ASBWP Samsung New 2017',
		totalOutstandingBalance: '100.00',
		totalCreditBalance     : '200.00',
		note                   : 'supplier ASBWP', /*Don't change this supplier Name in note*/
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier ASBWP New Open Branch 1',
			person            : 'kaanjeepan',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 1, value: '9100885533'}],
			idArray           : [{type: 1, value: 'ZAW987AS'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [2, 3, 6], /*Don't change the Product*/
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}]
	},
	SupplierASBWPWithoutName   : {
		_isAdd                 : true,
		name                   : 'Panasonic Electronics',
		totalOutstandingBalance: '100.00',
		totalCreditBalance     : '200.00',
		note                   : 'supplier ASBWP Without person name',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier ASBWP Without Name Branch 1',
			person            : null,
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 1, value: '9600445533'}, {type: 2, value: '9600445530'}],
			emailArray        : [{type: 1, value: 'athar2019@gmail.com'}, {type: 2, value: 'athar10@gmail.com'}],
			idArray           : [{type: 1, value: 'AGyLd0@1014001'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [2, 3, 4],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}]
	},
	SupplierAMBWP              : {
		_isAdd                 : true,
		name                   : 'supplier AMBWP Voltas New 2017',
		totalOutstandingBalance: 300,
		totalCreditBalance     : '400.00',
		note                   : 'supplier AMBWP', /*Don't change this supplier Name in note*/
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 1',
			person            : 'Athar',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445567'}],
			emailArray        : [{type: 1, value: 'athar15@gmail.com'}],
			idArray           : [{type: 1, value: 'SWE985EE'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [1, 2, 3],
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 2',
			person            : 'SARVESH Evoluzin',
			outStandingBalance: '200.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			emailArray        : [{type: 1, value: 'sayus@gmail.com'}],
			idArray           : [{type: 1, value: 'FR98VF9R'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [8, 9, 11]
		}]
	},
	SupplierASBWOP             : {
		_isAdd                 : true,
		name                   : 'supplier ASBWOP Hp New 2017',
		totalOutstandingBalance: '1000.00',
		totalCreditBalance     : '2000.00',
		note                   : 'supplier ASBWOP',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier LG New Branch 1',
			person            : 'kaanjeepan',
			outStandingBalance: '1000.00',
			creditBalance     : '2000.00',
			phoneArray        : [{type: 1, value: '7810445533'}, {type: 2, value: '9600445500'}],
			emailArray        : [{type: 1, value: 'EVOLUZIN021@gmail.com'}, {type: 2, value: 'kaanjeepan101@gmail.com'}],
			idArray           : [{type: 1, value: 'EDR800VFF'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}]
	},
	SupplierASBWPNoIDNoEmail   : {
		_isAdd                 : true,
		name                   : 'supplier ASBWPNoID New 2017',
		totalOutstandingBalance: '100.00',
		totalCreditBalance     : '200.00',
		note                   : 'supplier ASBWPNoID',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier ASBWP Branch 1',
			person            : 'ATHAR',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 1, value: '9600445533'}],
			emailArray        : [{type: 1, value: null}],
			idArray           : [{type: 1, value: null}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [22, 12, 31],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}]
	},
	SupplierASBWOPNoIDNoEmail  : {
		_isAdd                 : true,
		name                   : 'supplier ASBWID New 2017',
		totalOutstandingBalance: '1000.00',
		totalCreditBalance     : '2000.00',
		note                   : 'supplier ASBWID AND Email',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier ASBWOP Branch 1',
			person            : 'kaanjeepan',
			outStandingBalance: '1000.00',
			creditBalance     : '2000.00',
			phoneArray        : [{type: 1, value: '9600445533'}],
			emailArray        : [{type: 1, value: null}],
			idArray           : [{type: 1, value: null}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}]
	},
	SupplierAllWorkingDays     : {
		_isAdd                 : true,
		name                   : 'supplier AMBWP New working days',
		totalOutstandingBalance: '300.00',
		totalCreditBalance     : '400.00',
		note                   : 'supplier AMBWP notes 2',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 1',
			person            : 'Athar',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445567'}],
			product           : [12, 11, 13],
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 2',
			person            : 'sathya',
			outStandingBalance: '200.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			emailArray        : [{type: 1, value: 'sayus@gmail.com'}],
			product           : [8, 9, 11],
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	SupplierAddHoliday         : {
		_isAdd                 : true,
		name                   : 'supplier Holiday',
		totalOutstandingBalance: '300.00',
		totalCreditBalance     : '400.00',
		note                   : 'supplier AMBWP notes 2',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 1',
			person            : 'Mark Henry',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445567'}],
			product           : [32, 39, 33],
			workingDays       : {0: 1, 1: 1, 2: 0, 3: 1, 4: 1, 5: 0, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: null, et: null},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: null, et: null},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 2',
			person            : 'sathya',
			outStandingBalance: '200.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			product           : [12, 11, 15, 16],
			workingDays       : {0: 1, 1: 1, 2: 0, 3: 1, 4: 1, 5: 0, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: null, et: null},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: null, et: null},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	SupplierAMBWOP             : {
		_isAdd                 : true,
		name                   : 'supplier AMBWOP Cannon New 2017',
		totalOutstandingBalance: '300.00',
		totalCreditBalance     : '400.00',
		note                   : 'supplier AMBWOP',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 1',
			person            : 'Gayle',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445567'}, {type: 1, value: '9600445560'}],
			emailArray        : [{type: 1, value: 'athar@gmail.com'}, {type: 2, value: 'kaanjee@gmail.com'}],
			idArray           : [{type: 1, value: 'G760001'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : true,
			branchName        : 'supplier AMBWOP Branch 2',
			person            : 'sathya',
			outStandingBalance: '200.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			emailArray        : [{type: 1, value: 'sathya@gmail.com'}],
			idArray           : [{type: 1, value: 'W9R9RF9R'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	SupplierAMBWPWithoutName   : {
		_isAdd                 : true,
		name                   : 'supplier Kingfisher AMBWP Without Name',
		totalOutstandingBalance: '300.00',
		totalCreditBalance     : '400.00',
		note                   : 'supplier AMBWP Without Person Name',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 1',
			person            : null,
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445567'}, {type: 1, value: '9600445561'}],
			emailArray        : [{type: 1, value: 'athar15@gmail.com'}, {type: 2, value: 'kaanjee@gmail.com'}],
			idArray           : [{type: 1, value: 'EW985FRT1'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [22, 12, 32]
		}, {
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 2',
			person            : null,
			outStandingBalance: '200.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			idArray           : [{type: 1, value: 'E7RFD985F'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [18, 19, 11]
		}]
	},
	SupplierAMBWPNoIDNoEmail   : {
		_isAdd                 : true,
		name                   : 'supplier AMBWP New  Chennai 2017',
		totalOutstandingBalance: '300.00',
		totalCreditBalance     : '400.00',
		note                   : 'supplier AMBWP notes 2',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 1',
			person            : 'Athar',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445567'}],
			emailArray        : [{type: 1, value: null}],
			idArray           : [{type: 1, value: null}],
			product           : [12, 21, 23],
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 2',
			person            : 'sathya',
			outStandingBalance: '200.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			emailArray        : [{type: 1, value: null}],
			idArray           : [{type: 1, value: null}],
			product           : [12, 11, 15, 16],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	SupplierAMBWOPNoIDNoEmail  : {
		_isAdd                 : true,
		name                   : 'supplier AMBWP New 2017',
		totalOutstandingBalance: '300.00',
		totalCreditBalance     : '400.00',
		note                   : 'supplier AMBWP notes 2',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 1',
			person            : 'Peterson',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445567'}],
			emailArray        : [{type: 1, value: null}],
			idArray           : [{type: 1, value: null}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 2',
			person            : 'sathya',
			outStandingBalance: '200.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			emailArray        : [{type: 1, value: null}],
			idArray           : [{type: 1, value: null}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	}
};

ContactM.SupplierEdit = {
	SupplierAddWithoutName   : {
		_isAdd                 : true,
		name                   : 'Philips India Electronics',
		totalOutstandingBalance: '100.00',
		totalCreditBalance     : '200.00',
		note                   : 'supplier ASBWP Without person name',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier ASBWP Without Name Branch 1',
			person            : null,
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 1, value: '9600012533'}, {type: 2, value: '9600445530'}],
			emailArray        : [{type: 1, value: 'athar_2019@gmail.com'}, {type: 2, value: 'Philips_info@gmail.com'}],
			idArray           : [{type: 1, value: 'AGyLd0@1014001'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [12, 13, 14],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}]
	},
	SupplierESBWP            : {
		_isAdd                 : false,
		name                   : 'supplier ESBWP New 2017',
		totalOutstandingBalance: '100.00',
		totalCreditBalance     : '200.00',
		note                   : 'supplier ESBWP',
		branch                 : [{
			_isAdd            : false,
			branchName        : 'supplier ESBWP Branch 1',
			person            : 'athar',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 1, value: '9600995503'} /*{type: 2, value: '9600445530'}*/],
			emailArray        : [{type: 1, value: 'kaanjeepan2001@gmail.com'} /*{type: 2, value: 'kaanjeepan10@gmail.com'}*/],
			idArray           : [{type: 1, value: 'FFR9820FR'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [12, 11, 31],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}]
	},
	SupplierEditNew          : {
		_isAdd                 : true,
		name                   : 'supplier Cannon India New 2017',
		totalOutstandingBalance: '300.00',
		totalCreditBalance     : '400.00',
		note                   : 'supplier AMBWOP',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 1',
			person            : 'Chris Manon',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445567'}, {type: 1, value: '9960445560'}],
			emailArray        : [{type: 1, value: 'athar_canonIndia@gmail.com'}, {type: 2, value: 'chrid_canon09@gmail.com'}],
			idArray           : [{type: 1, value: 'I98W5T1'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : true,
			branchName        : 'supplier AMBWOP Branch 2',
			person            : 'FRANKLIN',
			outStandingBalance: '200.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			emailArray        : [{type: 1, value: 'frank_oi2@gmail.com'}],
			idArray           : [{type: 1, value: 'PL36d00I1'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600026,
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:20',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	SupplierEditWithProduct  : {
		_isAdd                 : true,
		name                   : 'supplier Philips India New 2017',
		totalOutstandingBalance: '300.00',
		totalCreditBalance     : '400.00',
		note                   : 'supplier AMBWOP',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 1',
			person            : 'Henry',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445567'}],
			emailArray        : [{type: 2, value: 'henree_philips@gmail.com'}],
			idArray           : [{type: 1, value: 'GTR987HJ4'}],
			product           : [12, 11, 13],
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : true,
			branchName        : 'supplier AMBWOP Branch 2',
			person            : 'sathya',
			outStandingBalance: '200.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [12, 11, 15],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	SupplierESBWOP           : {
		_isAdd                 : false,
		name                   : 'supplier ESBWOP New 002017',
		totalOutstandingBalance: '100.00',
		totalCreditBalance     : '200.00',
		note                   : 'supplier ESBWOP',
		branch                 : [{
			_isAdd            : false,
			branchName        : 'supplier ESBWP Branch 1',
			person            : 'athar',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 1, value: '9600445599'} /*{type: 2, value: '9600445530'}*/],
			emailArray        : [{
				type : 1,
				value: 'kaanjeepanChennai10@gmail.com'
			} /*{type: 2, value: 'kaanjeepan01@gmail.com'}*/],
			idArray           : [{type: 1, value: 'FR00091'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}]
	},
	SupplierESBWOPNew        : {
		_isAdd                 : false,
		name                   : 'supplier ESBWP #ForNew',
		totalOutstandingBalance: '100.00',
		totalCreditBalance     : '200.00',
		note                   : 'supplier ESBWP New',
		branch                 : [{
			_isAdd            : false,
			branchName        : 'supplier ESBWP New Branch 1',
			person            : 'athar',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 1, value: '7640445543'}/*, {type: 4, value: '9633485530'}*/],
			emailArray        : [{type: 1, value: 'kaanjeepan0012@gmail.com'}/*, {type: 4, value: 'kaanjeepan610@gmail.com'}*/],
			idArray           : [{type: 1, value: 'FTJ3652'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}]
	},
	SupplierEMBWP            : {
		_isAdd                 : false,
		name                   : 'supplier EMBWP New 2017',
		totalOutstandingBalance: '300.00',
		totalCreditBalance     : '400.00',
		note                   : 'supplier EMBWP',
		branch                 : [{
			_isAdd            : false,
			_isDelete         : true,
			_isActive         : true,
			_isConflict       : true,
			branchName        : 'supplier EMBWP Branch 1', /*don't change this Branch Name*/
			person            : 'athar',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445564'} /*{type: 1, value: '9600445561'}*/],
			emailArray        : [{type: 1, value: 'athar324@gmail.com'}/* {type: 2, value: 'kaanjee11@gmail.com'}*/],
			idArray           : [{type: 1, value: 'LO9821K'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [22, 11, 13],
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : false,
			_isDelete         : true,
			_isActive         : true,
			_isConflict       : true,
			branchName        : 'supplier EMBWP Branch 2',
			person            : 'sathya',
			outStandingBalance: '200.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9601447570'}],
			emailArray        : [{type: 1, value: 'sathya34@gmail.com'}],
			idArray           : [{type: 1, value: 'FVT7810'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [12, 11, 15],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	SupplierEMBWPNew         : {
		_isAdd                 : false,
		name                   : 'supplier EMBWP Creation New',
		totalOutstandingBalance: '300.00',
		totalCreditBalance     : '400.00',
		note                   : 'supplier EMBWP New notes 2',
		branch                 : [{
			_isAdd            : false,
			_isDelete         : false,
			_isActive         : false,
			_isConflict       : false,
			branchName        : 'supplier EMBWP New Branch 1',
			person            : 'athar',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '8600445587'} /*{type: 1, value: '9600445561'}*/],
			emailArray        : [{type: 1, value: 'athar101@gmail.com'} /*{type: 2, value: 'kaanjee101@gmail.com'}*/],
			idArray           : [{type: 1, value: 'DER9870G'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [12, 11, 13, 14, 15],
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : false,
			_isDelete         : false,
			_isActive         : false,
			_isConflict       : false,
			branchName        : 'supplier EMBWP New Branch 2',
			person            : 'sathya',
			outStandingBalance: '200.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			emailArray        : [{type: 1, value: 'sathyadeveloper120@gmail.com'}],
			idArray           : [{type: 1, value: 'SXS9870GG'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [12, 11, 15, 14, 17],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	SupplierEditAndUpdate    : {
		_isAdd                 : false,
		name                   : 'supplier EMBWP vodafone 2017',
		totalOutstandingBalance: '300.00',
		totalCreditBalance     : '400.00',
		note                   : 'supplier EMBWP New notes 2',
		branch                 : [{
			_isAdd            : false,
			_isDelete         : true,
			_isActive         : true,
			_isConflict       : true,
			branchName        : 'supplier EMBWP New Branch 1',
			person            : 'jkil',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445567'}, {type: 1, value: '9600445564'}],
			emailArray        : [{type: 1, value: 'athar@gmail.com'}, {type: 2, value: 'kaanjee@gmail.com'}],
			idArray           : [{type: 1, value: 'FRT9821S'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [12, 11, 17],
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : false,
			_isDelete         : true,
			_isActive         : true,
			_isConflict       : true,
			branchName        : 'supplier EMBWP New Branch 2',
			person            : 'athar',
			outStandingBalance: '200.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			emailArray        : [{type: 1, value: 'sathya@gmail.com'}],
			idArray           : [{type: 1, value: 'DSE9821'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [12],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	SupplierNoConflictsUpdate: {
		_isAdd                 : false,
		name                   : 'supplier EMBWP Chennai TamilNadu',
		totalOutstandingBalance: '300.00',
		totalCreditBalance     : '400.00',
		note                   : 'supplier EMBWP New notes 2',
		branch                 : [{
			_isAdd            : false,
			_isDelete         : true,
			_isActive         : true,
			_isConflict       : false, /*conflicts pop up is Not showing, so false*/
			branchName        : 'supplier EMBWP New Branch 1',
			person            : 'Lian',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '8800445567'}, {type: 1, value: '9600445564'}],
			emailArray        : [{type: 1, value: 'pal@gmail.com'}, {type: 2, value: 'kae@gmail.com'}],
			idArray           : [{type: 1, value: 'A982l01'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [12, 11],
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : true,
			_isDelete         : false,
			_isActive         : true,
			_isConflict       : false,
			branchName        : 'supplier EMBWP New Branch 2',
			person            : '',
			outStandingBalance: '200.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			emailArray        : [{type: 1, value: 'sathya@gmail.com'}],
			idArray           : [{type: 1, value: 'DEY98871Y'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [32, 31],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	SupplierESBWPNew         : {
		_isAdd                 : false,
		name                   : 'supplier ESBWP #new',
		totalOutstandingBalance: '100.00',
		totalCreditBalance     : '200.00',
		note                   : 'supplier ESBWP new',
		branch                 : [{
			_isAdd            : false,
			branchName        : 'supplier ESBWP new Branch 1',
			person            : 'athar',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 1, value: '9300445433'}, {type: 4, value: '9163840691'}],
			emailArray        : [{type: 1, value: 'kaanjeepan10@gmail.com'}, {type: 4, value: 'athar2019@gmail.com'}],
			idArray           : [{type: 1, value: 'AUH0901'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [11, 12, 13, 14, 15],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}]
	},
	SupplierESBWPForAcl      : {
		_isAdd                 : false,
		name                   : 'supplier Edit For ACL',
		totalOutstandingBalance: '00.00',
		totalCreditBalance     : '00.00',
		note                   : 'supplier ACL new',
		branch                 : [{
			_isAdd            : false,
			branchName        : 'supplier ACL new Branch 1',
			person            : 'athar',
			outStandingBalance: '00.00',
			creditBalance     : '00.00',
			phoneArray        : [{type: 1, value: '9600445433'}],
			product           : [22, 23, 24, 25]
		}]
	},
	SupplierESBForAutoScript : {
		_isAdd                 : false,
		name                   : 'supplier Edit For AutoScript',
		totalOutstandingBalance: '00.00',
		totalCreditBalance     : '00.00',
		note                   : 'supplier new',
		branch                 : [{
			_isAdd            : false,
			branchName        : 'supplier new Branch 1',
			person            : 'athar',
			outStandingBalance: '00.00',
			creditBalance     : '00.00',
			phoneArray        : [{type: 1, value: '9600445433'}],
			emailArray        : [{type: 1, value: 'ATHAR.evoluzin@gmail.com'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600014,
			product           : [22, 23, 24, 25],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}]
	},
	SupplierEMBWOP           : {
		_isAdd                 : false,
		name                   : 'supplier EMBWOP New 2019',
		totalOutstandingBalance: 0,
		totalCreditBalance     : 0,
		note                   : 'supplier EMBWOP',
		branch                 : [{
			_isAdd            : false,
			_isDelete         : false,
			_isActive         : false,
			_isConflict       : false,
			branchName        : 'supplier EMBWOP Branch 1',
			person            : 'athar',
			outStandingBalance: 0,
			creditBalance     : 0,
			phoneArray        : [{type: 2, value: '9600449967'}/* {type: 1, value: '9600445560'}*/],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : false,
			_isDelete         : false,
			_isActive         : false,
			_isConflict       : false,
			branchName        : 'supplier EMBWOP Branch 2',
			person            : 'sathya',
			outStandingBalance: 0,
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			idArray           : [{type: 1, value: 'LOP9820K'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	SupplierEMBWOPNew        : {
		_isAdd                 : false,
		name                   : 'supplier EMBWOP New #For2017',
		totalOutstandingBalance: 0,
		totalCreditBalance     : 0,
		note                   : 'supplier EMBWOP New notes 2',
		branch                 : [{
			_isAdd            : false,
			_isDelete         : false,
			_isActive         : false,
			_isConflict       : false,
			branchName        : 'supplier EMBWOP New Branch 1',
			person            : 'athar',
			outStandingBalance: 0,
			creditBalance     : 0,
			phoneArray        : [{type: 2, value: '9660441591'} /*{type: 1, value: '9600440567'}*/],
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : false,
			_isDelete         : false,
			_isActive         : false,
			_isConflict       : false,
			branchName        : 'supplier EMBWOP New Branch 2',
			person            : 'sathya',
			outStandingBalance: 0,
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600444488'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	SupplierEMBWOPToSBWOP    : {
		_isAdd                 : false,
		name                   : 'supplier EMBWOPToSBWOP', /*do not change the name*/
		totalOutstandingBalance: 0,
		totalCreditBalance     : 0,
		note                   : 'supplier EMBWOPToSBWOP notes 2',
		branch                 : [{
			_isAdd            : false,
			_isDelete         : true,
			_isActive         : true,
			_isConflict       : true,
			branchName        : 'supplier EMBWOPToSBWOP Branch 1',
			person            : 'athar',
			outStandingBalance: 0,
			creditBalance     : 0,
			phoneArray        : [{type: 2, value: '8600445567'} /*{type: 1, value: '9600440567'}*/],
			emailArray        : [{type: 1, value: 'athar001@gmail.com'}/* {type: 2, value: 'kaanjee@gmail.com'}*/],
			idArray           : [{type: 1, value: 'AK9901'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : false,
			_isDelete         : true,
			_isActive         : true,
			_isConflict       : true,
			branchName        : 'supplier EMBWOPToSBWOP Branch 2',
			person            : 'sathya',
			outStandingBalance: 0,
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '8600145597'}],
			emailArray        : [{type: 1, value: 'sathya7895@gmail.com'}],
			idArray           : [{type: 1, value: 'RY0001'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	SupplierESBWOPForMBWOP   : {
		_isAdd                 : false,
		name                   : 'supplier EMBWOPToSBWOP 1691',
		totalOutstandingBalance: 0,
		totalCreditBalance     : 0,
		note                   : 'supplier EMBWOPToSBWOP notes 2',
		branch                 : [{
			_isAdd            : false,
			_isDelete         : false,
			_isActive         : false,
			_isConflict       : false,
			branchName        : 'supplier EMBWOPToSBWOP Branch 1',
			person            : 'athar',
			outStandingBalance: 0,
			creditBalance     : 0,
			phoneArray        : [{type: 2, value: '7600445567'}/* {type: 1, value: '9600445507'}*/],
			emailArray        : [{type: 1, value: 'athar014@gmail.com'} /*{type: 2, value: 'kaanjee@gmail.com'}*/],
			idArray           : [{type: 1, value: 'LIY001'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:40'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:20'},
				5: {st: '10:10', et: '19:30'},
				6: {st: '10:10', et: '19:10'}
			}
		}, {
			_isAdd    : false,
			branchName: 'supplier #EMBWOPToSBWOP Branch 2',
			address   : '2 nd cross st, Adyar chennai',
			pinCode   : 600017
		}]
	}
};

ContactM.SupplierValidation = {
	AddSupplierAddress        : {
		_isAdd                 : true,
		name                   : 'supplier Validation for Address',
		totalOutstandingBalance: '100.00',
		totalCreditBalance     : '200.00',
		note                   : 'supplierValidation',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier Branch 1',
			person            : 'athar',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 1, value: '9300445433'}],
			address           : '2 nd cross st, Adyar chennai'
		}]
	},
	AutoSelectPinCode         : {
		_isAdd                 : true,
		name                   : 'supplier Validation for Address',
		totalOutstandingBalance: '100.00',
		totalCreditBalance     : '200.00',
		note                   : 'supplierValidation',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier Branch 1',
			person            : 'athar',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 1, value: '9300445433'}],
			address           : 'Evoluzin Cloud Storage Solutions Pvt Ltd, Tirumurthy Street', /*only pass address PinCode must auto select*/
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}],
		correctPinCode         : 600017
	},
	ContactValidation         : {
		/*supplier Name,contact Name and Branch Name max 512 characters are allowed I gave 513*/
		name                   : 'Electronics Electronics Electronics ElectronicsElectronics Electronics Electronics Electronics ElectronicsElectronics Electronics Electronics Electronics ElectronicsElectronics Electronics Electronics Electronics ElectronicsElectronics Electronics Electronics ElectronicsElectronics Electronics Electronics Electronics ElectronicsElectronics Electronics Electronics ElectronicsElectronics Electronics Electronics Electronics ElectronicsElectronics Electronics Electronics Electronics ElectronicsElectronics Electr',
		note                   : 'Service Center Test notes 1',
		phone                  : '96004455679600445567',
		totalOutstandingBalance: '600.00',
		totalCreditBalance     : '1200.00',
		branch                 : [{
			branchName        : 'Electronics Electronics Electronics ElectronicsElectronics Electronics Electronics Electronics ElectronicsElectronics Electronics Electronics Electronics ElectronicsElectronics Electronics Electronics Electronics ElectronicsElectronics Electronics Electronics ElectronicsElectronics Electronics Electronics Electronics ElectronicsElectronics Electronics Electronics ElectronicsElectronics Electronics Electronics Electronics ElectronicsElectronics Electronics Electronics Electronics ElectronicsElectronics Electr',
			person            : 'Electronics Electronics Electronics ElectronicsElectronics Electronics Electronics Electronics ElectronicsElectronics Electronics Electronics Electronics ElectronicsElectronics Electronics Electronics Electronics ElectronicsElectronics Electronics Electronics ElectronicsElectronics Electronics Electronics Electronics ElectronicsElectronics Electronics Electronics ElectronicsElectronics Electronics Electronics Electronics ElectronicsElectronics Electronics Electronics Electronics ElectronicsElectronics Electr',
			outStandingBalance: 500,
			creditBalance     : '1000.00',
			phoneType         : 2,
			phoneNumber       : 9765456464556767867,
			emailType         : 1,
			validPinCode      : 600017,
			maxPinCode        : 6000170000,
			minPinCode        : 6001,
			emailAddress      : 'atharevoluzinatharevoluzinatharevoluzinatharevoluzinatharevoluzin@gmail.com',
			idType            : 1,
			idNumber          : 'id-ne567575676575676576576575676521120122',
			address           : '2 nd cross st, Adyar chennai',
			startTime         : 'Fri Jan 01 2016 09:00:00 GMT+0530 (IST)',
			endTime           : 'Fri Jan 02 2016 09:00:00 GMT+0530 (IST)'
		}]
	},
	Validate                  : {
		_isAdd                 : false,
		name                   : 'supplier ESBWP',
		totalOutstandingBalance: '100.00',
		totalCreditBalance     : '200.00',
		note                   : 'supplierValidation',
		branch                 : [{
			_isAdd    : true,
			emailArray: [{type: 1, value: '120_abc@gmail.com'}],
			idArray   : [{type: 1, value: 'AdH776097'}]
		}]
	},
	ProductUpdated            : {
		_isAdd: false,
		name  : 'Product Edit SingleBranch New 2017',
		note  : 'Product Edit SingleBranch New',
		branch: [{
			_isAdd    : false,
			branchName: 'Branch Updating New Product',
			address   : 'New 2 nd cross st, T.Nagar chennai',
			pinCode   : 600017,
			product   : [25, 26, 27]
		}]
	},
	ProductBranchUpdated      : {
		_isAdd: false,
		name  : 'Product Edit SingleBranch New 1',
		note  : 'Product Edit SingleBranch New',
		branch: [{
			_isAdd    : true,
			branchName: 'Branch Updating New Product',
			address   : 'New 2 nd cross st, T.Nagar chennai',
			pinCode   : 600017,
			product   : [24, 25, 26, 27]
		}]
	},
	AddSixBranchCalculateTotal: {
		_isAdd                 : true,
		name                   : 'supplier Redmi Note 4',
		totalOutstandingBalance: '2100.00',
		totalCreditBalance     : '2700.00',
		note                   : 'supplier Add multi branch',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'Branch 1',
			person            : 'Athar',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445567'}]
		}, {
			_isAdd            : true,
			branchName        : 'Branch 2',
			person            : 'Kanjee',
			outStandingBalance: '200.00',
			creditBalance     : '300.00',
			phoneArray        : [{type: 2, value: '9600445577'}]
		}, {
			_isAdd            : true,
			branchName        : 'Branch 3',
			person            : 'Prem',
			outStandingBalance: '300.00',
			creditBalance     : '400.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : true,
			branchName        : 'Branch 4',
			person            : 'Sar',
			outStandingBalance: '400.00',
			creditBalance     : '500.00',
			phoneArray        : [{type: 2, value: '9600445577'}]
		}, {
			_isAdd            : true,
			branchName        : 'Branch 5',
			person            : 'Satya',
			outStandingBalance: '500.00',
			creditBalance     : '600.00',
			phoneArray        : [{type: 2, value: '9600445571'}]
		}, {
			_isAdd            : true,
			branchName        : 'Branch 6',
			person            : 'Pas',
			outStandingBalance: '600.00',
			creditBalance     : '700.00',
			phoneArray        : [{type: 2, value: '9600445541'}]
		}]
	},
	PhoneLandlineFormat       : {
		_isAdd: true, /*Land line number can accept 11 and 10 digits But Not 9 digits*/
		name  : 'Service Phone land line',
		note  : 'Service Phone land line Validation',
		branch: [{
			_isAdd    : true,
			branchName: 'Branch1',
			person    : 'Mark',
			phoneArray: [{type: 1, value: '06572463191'}, {type: 1, value: '0447858250'}, {type: 1, value: '065724631'}]
		}]
	},
	PhoneTollFreeFormat       : {
		/*toll free number can accept 12, 11 and 10 digits But Not 9 digits*/
		_isAdd: true,
		name  : 'Service Add Toll free Number',
		note  : 'Service Phone Toll free Validation',
		branch: [{
			_isAdd    : true,
			branchName: 'Branch1',
			person    : 'Mark',
			phoneArray: [{type: 5, value: '180030007777'}, {type: 5, value: '18005551021'}, {
				type : 5,
				value: '1800555102'
			}, {type: 5, value: '180055510'}]
		}]
	},
	SupplierOutstandingBalance: {
		_isAdd                 : true,
		name                   : '#supplier with total Outstanding Balance',
		totalOutstandingBalance: '200.00',
		totalCreditBalance     : '400.00',
		note                   : 'supplier TESTING',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier Branch 1',
			person            : 'Balance',
			outStandingBalance: '200.00',
			creditBalance     : '400.00',
			phoneArray        : [{type: 1, value: '9100885533'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600018,
			product           : [22, 23, 27],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}]
	},
	SupplierProductCountASBWP : {
		_isAdd                 : true,
		name                   : 'supplier ASBWP New 2017',
		totalOutstandingBalance: '100.00',
		totalCreditBalance     : '200.00',
		note                   : 'supplier ASBWP',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier ASBWP Branch 1',
			person            : 'athar',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 1, value: '9600445533'}],
			emailArray        : [{type: 1, value: 'athar@gmail.com'}],
			product           : [21, 22, 23, 24],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}]
	},
	SupplierProductCountAMBWP : {
		_isAdd                 : true,
		name                   : 'supplier AMBWP Apple Mac 2016',
		totalOutstandingBalance: '300.00',
		totalCreditBalance     : '400.00',
		note                   : 'supplier AMBWP notes 2',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 1',
			person            : 'Athar',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445567'}],
			product           : [12, 22, 32],
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 2',
			person            : 'athar',
			outStandingBalance: '200.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			product           : [18, 19, 21, 25],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	SupplierSameProductAMBWP  : {
		_isAdd                 : true,
		name                   : 'supplier AMBWP New 2017 Audi chennai',
		totalOutstandingBalance: '300.00',
		totalCreditBalance     : '400.00',
		note                   : 'supplier AMBWP notes 2',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 1',
			person            : 'Athar',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445567'}],
			product           : [11, 12, 13],
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : true,
			branchName        : 'supplier AMBWP Branch 2',
			person            : 'athar',
			outStandingBalance: '200.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			product           : [11, 12, 13],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	SupplierSameEmail         : {
		_isAdd                 : true,
		name                   : 'supplier Same Email Validation',
		totalOutstandingBalance: '100.00',
		totalCreditBalance     : '200.00',
		note                   : 'supplier new branch',
		branch                 : [{
			_isAdd    : true,
			branchName: 'Add Single Branch Branch 1',
			person    : 'athar',
			phoneArray: [{type: 2, value: '9765456464'}, {type: 3, value: '9765456464'}],
			emailArray: [{type: 1, value: 'athar@gmail.com'}, {type: 2, value: 'athar@GMAIL.COM'}]
		}]
	},
	IdValidation              : {
		_isAdd                 : true,
		name                   : 'supplier Validation for ID Number',
		totalOutstandingBalance: '100.00',
		totalCreditBalance     : '200.00',
		note                   : 'supplierValidation',
		branch                 : [{
			_isAdd    : true,
			branchName: 'Chennai', /* given unique Branch Name*/
			idArray   : [{type: 1, value: 'Ad000H1'}, {type: 2, value: 'Ad0@001'}, {type: 5, value: 'Ad0_0x$01'}],
			address   : '2 nd cross st, Adyar chennai',
			pinCode   : 600017
		}]
	}
};

ContactM.SupplierIntegration = {
	PurchaseAddSupplier      : {
		_isAdd    : true,
		msg       : 'Record added successfully',
		orderTab  : {
			issued      : '18-12-2016',
			recurring   : [1],
			expected    : '28-12-2016',
			supplier    : [1],
			payment     : '19-01-2017',
			shippingCost: '61.00',
			shipping    : false,
			notes       : 'Test the End to End Test'
		},
		productTab: {
			taxInclusive: true,
			productList : [
				{product: [1], quantity: 5, unitPrice: '40.00'},
				{product: [2], quantity: 5, unitPrice: '40.00'}
			]
		}
	},
	SupplierUniqueBranch     : {
		_isAdd                 : true,
		name                   : 'Sony India', /*Give Unique Supplier name as we r using doSelect "search" for supplier*/
		totalOutstandingBalance: '100.00',
		totalCreditBalance     : '200.00',
		note                   : 'supplier Sony India',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'Kolkata',
			person            : 'athar',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 4, value: '9163840691'}],
			idArray           : [{type: 1, value: 'SE800L01'}],
			address           : '2 nd cross Salt Lake, Technopolis Kolkata. West Bengal',
			pinCode           : 600017,
			product           : [12, 22, 23, 24, 25]
		}]
	},
	PurchaseAddUniqueSupplier: {
		_isAdd    : true,
		msg       : 'Record added successfully',
		orderTab  : {
			issued      : '18-07-2017',
			recurring   : [1],
			expected    : '28-08-2017',
			supplier    : null,
			payment     : '19-09-2017',
			shippingCost: '61.00',
			shipping    : false,
			notes       : 'Test the End to End Test'
		},
		productTab: {
			taxInclusive: true,
			productList : [
				{product: [1], quantity: 5, unitPrice: null},
				{product: [2], quantity: 5, unitPrice: null}
			]
		}
	},
	PurchaseEditSupplierName : {
		_isAdd  : true,
		orderTab: {
			supplier: [4]
		}
	},
	SupplierAddProduct       : {
		_isAdd                 : true,
		name                   : 'supplier micromax',
		totalOutstandingBalance: '1000.00',
		totalCreditBalance     : '2000.00',
		note                   : 'supplier',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier Chennai branch',
			person            : 'Athar',
			outStandingBalance: '1000.00',
			creditBalance     : '2000.00',
			phoneArray        : [{type: 1, value: '9234787142'}],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}]
	},
	SupplierTotalBalanceZero : {
		_isAdd                        : false,
		name                          : 'SUPPLIER FOR TEST1',
		//name                          : 'Supplier with Total Balance',
		totalOutstandingBalance       : '0.00',
		totalCreditBalance            : '0.00',
		note                          : 'supplier ACL new',
		branch                        : [{
			_isAdd            : false,
			branchName        : 'supplier ACL new Branch 1',
			person            : 'athar',
			outStandingBalance: '0.00',
			creditBalance     : '0.00',
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}],
		totalOutstandingBalancePresent: '2340.00',
		totalCreditBalancePresent     : '3400.00'
	}
};

ContactM.SupplierProductSummary = {
	Validation: {
		_isAdd                 : true,
		name                   : 'Larsen and Turbo pvt ltd',
		totalOutstandingBalance: '1000.00',
		totalCreditBalance     : '2000.00',
		note                   : 'supplier Validation for Product summary',
		branch                 : [{
			_isAdd          : true,
			branchName      : 'supplier Branch 1',
			person          : 'athar',
			phoneArray      : [{type: 1, value: '9600445533'}],
			product         : [12, 22, 32, 42, 25],
			workingDays     : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime: '10:30',
			defaultEndTime  : '19:50',
			customTime      : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}],
		productSearchName      : 'Allen TShirt'
	}
};

ContactM.SupplierUnUsedMock = {
	contactType              : {
		_isAdd                 : true,
		name                   : 'Service Center Test 2 Branch',
		note                   : 'Service Center Test notes 1',
		phone                  : [2],
		number                 : '9600005567',
		totalOutstandingBalance: '600.00',
		totalCreditBalance     : '1200.00',
		branch                 : [{
			_isAdd    : true,
			branchName: 'Branch Button 1',
			person    : 'Shiva',
			phoneArray: [{type: 1, value: '9765456464'}, {type: 2, value: '9600445533'}],
			emailArray: [{type: 1, value: 'shanti@gmail.com'}, {type: 2, value: 'shanti2540@gmail.com'}],
			address   : '2 nd cross st, Adyar chennai',
			pinCode   : 600017

		}]
	},
	startAndEndTime          : {
		_isAdd: true,
		name  : 'service branch button',
		note  : 'Once change the start and end time, that to be affect in all the selected days',
		branch: [{
			_isAdd          : true,
			branchName      : 'Branch Button 1',
			person          : 'Shital',
			phoneArray      : [{type: 2, value: '9765456464'}, {type: 1, value: '9600445533'}],
			emailArray      : [{type: 1, value: 'shanti@gmail.com'}],
			address         : '2 nd cross st, Adyar chennai',
			pinCode         : 600017,
			product         : [12, 23],
			workingDays     : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime: '00:30',
			defaultEndTime  : '18:30'
			/*customTime      : {
			 0: {st: null, et: null},
			 1: {st: '12:30', et: '18:30'},
			 2: {st: '12:30', et: '18:30'},
			 3: {st: '12:30', et: '18:30'},
			 4: {st: '12:30', et: '18:30'},
			 5: {st: '12:30', et: '18:30'},
			 6: {st: null, et: null}
			 }*/
		}]
	},
	customTime               : {
		_isAdd      : true,
		sunStartTime: null,
		sunEndTime  : null,
		monStartTime: '00:30',
		monEndTime  : '18:30',
		tueStartTime: '00:30',
		tueEndTime  : '18:30',
		wedStartTime: '00:30',
		wedEndTime  : '18:30',
		thuStartTime: '00:30',
		thuEndTime  : '18:30',
		friStartTime: '00:30',
		friEndTime  : '18:30',
		satStartTime: null,
		satEndTime  : null
	},
	invalidTimeFormat        : {
		_isAdd: true,
		name  : 'service working days',
		note  : 'validation for time format',
		branch: [{
			_isAdd          : true,
			branchName      : 'Branch Button 1',
			person          : 'Gayle',
			phoneArray      : [{type: 2, value: '9999999999'}],
			workingDays     : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime: '1:40',
			defaultEndTime  : '19:1',
			customTime      : {
				0: {st: null, et: null},
				1: {st: '10:88', et: '99:10'}
			}
		}]
	},
	negativeValidation       : {
		_isAdd: true,
		name  : 'service branch button',
		note  : 'validation for email address',
		branch: [{
			_isAdd    : true,
			branchName: 'Branch Button 1',
			person    : '',
			emailArray: [{type: 1, value: '120_abcZgmail.com'}, {type: 2, value: 'qa10 abc@Yahoo.com'}, {
				type : 3,
				value: 'evoluzin_abc @gmail.com'
			}]
		}]
	},
	supplierDeactivate       : {
		_isAdd                 : false,
		name                   : 'supplier EMBWP New',
		totalOutstandingBalance: '300.00',
		totalCreditBalance     : '400.00',
		note                   : 'supplier EMBWP New notes 2',
		branch                 : [{
			_isAdd            : false,
			_isDelete         : true,
			_isActive         : false,
			_isConflict       : true,
			branchName        : 'supplier EMBWP New Branch 1',
			person            : 'aikil',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445567'}, {type: 1, value: '9600445067'}],
			emailArray        : [{type: 1, value: 'pal@gmail.com'}, {type: 2, value: 'kae@gmail.com'}],
			idArray           : [{type: 1, value: 'DSRG3215G'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [22, 21],
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : false,
			_isDelete         : true,
			_isActive         : false,
			_isConflict       : true,
			branchName        : 'supplier EMBWP New Branch 2',
			person            : 'sathya',
			outStandingBalance: '200.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			emailArray        : [{type: 1, value: 'sathya@gmail.com'}],
			idArray           : [{type: 1, value: 'RT9V211G'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [22, 12],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	expand                   : {
		branch: [{
			_isAdd     : true,
			workingDays: {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			customTime : {
				0: {st: null, et: null},
				1: {st: '00:30', et: '19:30'}
			}
		}]
	},
	supplierSBWOPToEMBWOP    : {
		_isAdd                 : true,
		name                   : 'supplier EMBWOPToSBWOP',
		totalOutstandingBalance: 0,
		totalCreditBalance     : 0,
		note                   : 'supplier EMBWOPToSBWOP notes 2',
		branch                 : [{
			_isAdd            : false,
			_isDelete         : false,
			_isActive         : false,
			_isConflict       : false,
			branchName        : 'supplier EMBWOPToSBWOP Branch 1',
			person            : 'athar',
			outStandingBalance: 0,
			creditBalance     : 0,
			phoneArray        : [{type: 2, value: '8600445567'} /*{type: 1, value: '9600445507'}*/],
			emailArray        : [{type: 1, value: 'athar@gmail.com'} /*{type: 2, value: 'kaanjee@gmail.com'}*/],
			idArray           : [{type: 1, value: 'A98LO01'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : true,
			branchName        : 'supplier EMBWOPToSBWOP Branch 2',
			person            : 'sathya',
			outStandingBalance: 0,
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			emailArray        : [{type: 1, value: 'sathya222@gmail.com'}],
			idArray           : [{type: 1, value: 'Ad69801'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	autoSelectAddressPinCode : {
		_isAdd        : true,
		name          : 'Service Add AutoSelect Address with PinCode',
		note          : 'Service AutoSelect Address',
		branch        : [{
			_isAdd          : true,
			branchName      : 'Branch Branch 1',
			person          : 'EVOLUZIN Service',
			phoneArray      : [{type: 2, value: '9765456464'}],
			address         : 'Evoluzin Cloud Storage Solutions Pvt Ltd, Tirumurthy Street', /*only pass address PinCode must auto select*/
			product         : [12, 22],
			workingDays     : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime: '10:30',
			defaultEndTime  : '19:50',
			customTime      : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}],
		correctPinCode: 600017
	},
	supplierASBWPUpdate      : {
		branch: [{
			_isAdd            : true,
			branchName        : 'supplier ASBWP Branch 1',
			person            : 'kaanjeepan',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 1, value: '9600445533'}, {type: 2, value: '9600445530'}],
			emailArray        : [{type: 1, value: 'kaanjeepan@gmail.com'}, {type: 2, value: 'kaanjeepan01@gmail.com'}],
			idArray           : [{type: 1, value: 'QA98WS87'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [22, 12, 32],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: null, et: null}
			}
		}]
	},
	supplierLandlineFormat   : {
		_isAdd                 : true,
		name                   : 'supplier Phone Land line',
		totalOutstandingBalance: '1000.00',
		totalCreditBalance     : '2000.00',
		note                   : 'supplier land line format validation',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier 1',
			person            : 'Jacob',
			outStandingBalance: '1000.00',
			creditBalance     : '2000.00',
			phoneArray        : [{type: 1, value: '06572463191'}, {type: 1, value: '0447858250'}, {type: 1, value: '065724631'}]
		}]
	},
	supplierTollFreeFormat   : {
		_isAdd                 : true,
		name                   : 'supplier Toll free Phone NUMBER',
		totalOutstandingBalance: '1000.00',
		totalCreditBalance     : '2000.00',
		note                   : 'supplier TOLL FREE format validation',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'supplier 1',
			person            : 'Jacob',
			outStandingBalance: '1000.00',
			creditBalance     : '2000.00',
			phoneArray        : [{type: 5, value: '180030007777'}, {type: 5, value: '18005551021'}, {
				type : 5,
				value: '1800555102'
			}, {type: 5, value: '180055510'}]
		}]
	},
	purchaseNoRecordFound    : {
		_isAdd    : true,
		msg       : 'Record added successfully',
		orderTab  : {
			issued      : '18-12-2016',
			recurring   : [1],
			expected    : '28-12-2016',
			supplier    : [],
			payment     : '19-01-2017',
			shippingCost: '61.00',
			shipping    : true,
			notes       : 'Test the End to End Test'
		},
		productTab: {
			taxInclusive: true,
			productList : [
				{product: [1], quantity: 5, unitPrice: '40.00'},
				{product: [2], quantity: 5, unitPrice: '40.00'}
			]
		}
	},
	supplierBranchName       : {
		_isAdd                 : true,
		name                   : 'Saidapet',
		totalOutstandingBalance: '300.00',
		totalCreditBalance     : '400.00',
		note                   : 'supplier duplicate branch name exists',
		branch                 : [{
			_isAdd            : true,
			branchName        : 'Saidapet',
			person            : 'Saidapet',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445567'}],
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	supplierEditNewBranchName: {
		_isAdd                 : true,
		name                   : 'supplier EMBWOP',
		totalOutstandingBalance: '100.00',
		totalCreditBalance     : '200.00',
		note                   : 'supplier new branch',
		branch                 : [{
			_isAdd    : true,
			branchName: 'Branch205'
		}]
	},
	supplierNoConfirmMessage : {
		_isAdd                 : false,
		name                   : 'supplier EMBWP New',
		totalOutstandingBalance: '300.00',
		totalCreditBalance     : '400.00',
		note                   : 'supplier EMBWP New notes 2',
		branch                 : [{
			_isAdd            : false,
			_isDelete         : true,
			_isActive         : true,
			_isConflict       : true,
			branchName        : 'supplier EMBWP New Branch 1',
			person            : 'aikil',
			outStandingBalance: '100.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445567'}, {type: 1, value: '9600445568'}],
			emailArray        : [{type: 1, value: 'pal@gmail.com'}, {type: 2, value: 'kae@gmail.com'}],
			idArray           : [{type: 1, value: 'AQX982FG'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [22, 12],
			workingDays       : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: '10:30', et: '19:30'},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}, {
			_isAdd            : false,
			_isDelete         : true,
			_isActive         : true,
			_isConflict       : true,
			branchName        : 'supplier EMBWP New Branch 2',
			person            : 'sathya',
			outStandingBalance: '200.00',
			creditBalance     : '200.00',
			phoneArray        : [{type: 2, value: '9600445577'}],
			emailArray        : [{type: 1, value: 'sathya@gmail.com'}],
			idArray           : [{type: 1, value: 'FDE98252R'}],
			address           : '2 nd cross st, Adyar chennai',
			pinCode           : 600017,
			product           : [22, 12],
			workingDays       : {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1},
			defaultStartTime  : '10:30',
			defaultEndTime    : '19:50',
			customTime        : {
				0: {st: null, et: null},
				1: {st: '10:30', et: '19:30'},
				2: {st: '10:30', et: '19:30'},
				3: {st: '10:30', et: '19:30'},
				4: {st: '10:30', et: '19:30'},
				5: {st: '10:30', et: '19:30'},
				6: {st: '10:30', et: '19:30'}
			}
		}]
	},
	addProductVariant        : {
		_isAdd      : true,
		product     : {
			category   : [27],
			name       : 'PumaCap',
			hsn        : '01013090',
			description: 'imported',
			img        : []
		},
		variant     : [{name: 'Color', value: ['Brown', 'Black', 'Red']}],
		details     : [{
			pricing     : {
				mrp           : '1000.00',
				retailPrice   : '1050.00',
				buyPrice      : '1030.00',
				wholesalePrice: '1040.00'
			},
			weighAndShip: {
				sellingUnitOfMeasure : [1],
				purchaseUnitOfMeasure: [1],
				clubbedItem          : false
			}
		},
			{
				pricing     : {
					mrp           : '1000.00',
					retailPrice   : '1050.00',
					buyPrice      : '1030.00',
					wholesalePrice: '1040.00'
				},
				weighAndShip: {
					sellingUnitOfMeasure : [1],
					purchaseUnitOfMeasure: [1],
					clubbedItem          : false
				}
			},
			{
				pricing     : {
					mrp           : '1000.00',
					retailPrice   : '1050.00',
					buyPrice      : '1030.00',
					wholesalePrice: '1040.00'
				},
				weighAndShip: {
					sellingUnitOfMeasure : [1],
					purchaseUnitOfMeasure: [1],
					clubbedItem          : false
				}
			}],
		productName1: 'PumaCap Brown',
		productName2: 'PumaCap Black',
		productName3: 'PumaCap Red'
	},
	filterServiceAndSupplier : {nm: null, ty: [3, 4], bc: null},
	filterData               : {nm: 'Motorola Service Centre', ty: [3], bc: 1, ph: '9163840650'},
	filterContact            : {nm: 'service Add Single Branch', ty: [3], ph: null},
	filterProduct            : {
		nm: 'Hand Bag 125', /*need to be present in test.db*/
		bi: []
	},
	noRecord                 : {
		_isAdd: true,
		name  : 'Service Edit Single Branch 2001'
	}
};

ContactM.Count = {
	IndexRecord : {
		zero : 0,
		one  : 1,
		two  : 2,
		three: 3,
		four : 4
	},
	TabCount    : {
		zero : 0,
		one  : 1,
		two  : 2,
		three: 3,
		four : 4
	},
	EditIndexRow: {
		one  : 1,
		two  : 2,
		three: 3,
		four : 4
	},
	EqualTo     : {
		zero   : 0,
		one    : 1,
		two    : 2,
		three  : 3,
		four   : 4,
		five   : 5,
		six    : 6,
		seven  : 7,
		eight  : 8,
		nine   : 9,
		ten    : 10,
		twenty : 20,
		hundred: 100
	},
	StatusIndex : {
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
	},
	PoIndexNo   : {
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
	},
	TotalBalance: {
		totalOutstandingBalance: '900.00',
		totalCreditBalance     : '2300.00'
	}
};

ContactM.deactivateProduct        = [1];
ContactM.supplierDeleteSingle     = [1];
ContactM.supplierDeleteMultiple   = [1, 2, 3, 4];
ContactM.supplierActiveSingle     = [1];
ContactM.supplierActiveMultiple   = [1, 2, 3, 4, 5];
ContactM.supplierInActiveSingle   = [1];
ContactM.supplierInActiveMultiple = [1, 2, 3, 4, 5];
ContactM.supplierRecordDeactivate = [1, 2];
ContactM.supplierFilterAll        = [1, 2, 3, 4, 5, 6, 7, 8];

module.exports = ContactM;
