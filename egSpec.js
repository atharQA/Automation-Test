'use strict';

const chai = require('chai');
const {expect} = chai;
const {assert} = chai;


beforeEach(()=>{ 
    browser.ignoreSynchronization = true;
    browser.get('http://juliemr.github.io/protractor-demo/');
    });

describe('automate', ()=>{

it('V1: Test angular website', ()=>{
    const url = browser.getCurrentUrl().then(function(url){
    console.log(url);
    expect(url).to.equal('http://juliemr.github.io/protractor-demo/');    
   });

    const title = browser.getTitle().then(function(title){
        console.log(title);
     expect(title).to.equal('Super Calculator');
  });

  //element(by.model('first')).sendKeys(1);
    //element(by.model('second')).sendKeys(2);

    
   
    
    
    var first = element(by.model("first")); 
    var selectOperand = element(by.model('operator'));
    var second = element(by.model("second"));
    var goButton = element(by.css('#gobutton'));
    var result = element(by.binding('latest'))

    first.sendKeys('2000');
    second.sendKeys('4050');
    //goButton.click();

    element(by.id('gobutton')).click();

    //expect(element(by.binding('latest')).getText()).to.be.equal('5');

   // element(by.name('firstName')).sendKeys('Athar'); 
    //firstname.sendKeys('Athar');

    //var loginButton = element(by.id('loginbutton'));
    //loginButton.click();

    
});



});
