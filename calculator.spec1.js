'use strict';

const chai = require('chai');
const {expect} = chai;
const {assert} = chai;


beforeEach(()=>{ 
    browser.get('http://juliemr.github.io/protractor-demo/');
    });

describe('automate', ()=>{

it('V1: Test angular website', ()=>{
    const url = browser.getCurrentUrl().then(function(url){
    console.log(url);
    expect(url).to.equal('http://juliemr.github.io/protractor-demo/');    
   });

//    const title = browser.getTitle().then(function(title){
//     expect(title).to.equal('Super Calculator');
//    });
   
    
    
    var first = element(by.model('first')); 
    var selectOperand = element(by.model('operator'));
    var second = element(by.model('second'));

    first.sendKeys('200');

   // element(by.name('firstName')).sendKeys('Athar'); 
    //firstname.sendKeys('Athar');

    //var loginButton = element(by.id('loginbutton'));
    //loginButton.click();

    
});



});
