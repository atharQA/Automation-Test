'use strict';

var fs = require('fs-extra');
const excelToJson = require('convert-excel-to-json');

const result = excelToJson({
    source: fs.readFileSync('protractorReadXcel.xlsx'),
    header: {
        // Is the number of rows that will be skipped and will not be present at our result object. 
        rows: 1
    }
});

console.log('xcel  output::', result)

console.log('applicationUrl_QA', result.loginCredential[0].B)
console.log('applicationUrl_Stagging', result.loginCredential[0].C)

console.log('applicationUrl_Dev', result.loginCredential[0].D)
console.log('applicationUrl_Prod', result.loginCredential[0].E)


console.log('userNameGMAIL', result.loginCredential[1].B)
console.log('passwordGMAIL', result.loginCredential[2].B)

console.log('userNameYOUTUBE', result.loginCredential[1].C)
console.log('userNameYOUTUBE', result.loginCredential[2].C)

console.log('userNameFB', result.loginCredential[1].D)
console.log('userNameFB', result.loginCredential[2].D)

console.log('passwordYAHOO', result.loginCredential[1].E)
console.log('passwordYAHOO', result.loginCredential[2].E)

console.log('TEST 1', result.SmokeTest[0].F)
console.log('TEST 2', result.SmokeTest[1].F)



var dataRequired = function () {

    this.testConfig = {
        applicationUrl_QA: result.loginCredential[0].B,
        applicationUrl_Stagging: result.loginCredential[0].C,
        applicationUrl_Dev: result.loginCredential[0].D,
        applicationUrl_Prod: result.loginCredential[0].E,

        userNameGMAIL: result.loginCredential[1].B,
        passwordGMAIL: result.loginCredential[2].B,

        userNameYOUTUBE: result.loginCredential[1].C,
        passwordYOUTUBE: result.loginCredential[2].C,

        userNameFB: result.loginCredential[1].D,
        passwordFB: result.loginCredential[2].D,

        userNameYAHOO: result.loginCredential[1].E,
        passwordYAHOO: result.loginCredential[2].E,

    };

    this.smokeTest = {
        test1: result.SmokeTest[0].F,
        test2: result.SmokeTest[1].F,
        test3: result.SmokeTest[2].F,
        test4: result.SmokeTest[3].F,
        test5: result.SmokeTest[4].F,

    };

}



module.exports = new dataRequired();