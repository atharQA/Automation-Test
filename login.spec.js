'use strict';

const Mock = require ('./login.mock.js');
const PO   = require ('./login.po.js');
const chai = require ('chai');
const {expect} = chai;

describe('Wind Xplore: Login', ()=>{

it('V1: check the login functionality: Enter user name, password and click on submit button', () =>{
    //browser.waitForAngularEnabled(false);
    PO.LOGIN.userName.sendKeys(Mock.credentials.userName);
    PO.LOGIN.password.sendKeys(Mock.credentials.password);
    PO.LOGIN.submit.click();
    //browser.driver.quit();

});
});