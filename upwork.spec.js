'use strict';

const chai     = require('chai');
const {expect} = chai;

beforeEach(()=>{ 
    browser.ignoreSynchronization = true;
    browser.get('https://www.upwork.com/signup/?dest=home');
    });
    //browser.waitForAngularEnabled(false);

describe('automate', ()=>{

it('V1: Test UPWORK website', ()=>{
    const url = browser.getCurrentUrl().then(function(url){
    console.log(url);
    expect(url).to.equal('https://www.upwork.com/signup/?dest=home');    
   });

    element(by.name('firstName')).sendKeys('Athar');
    element(by.name('lastName')).sendKeys('Gulfam'); 
    element(by.name('email')).sendKeys('atharqa99@gmail.com'); 
    element(by.css('#signupForm > div > div > button')).click();
    
});
});