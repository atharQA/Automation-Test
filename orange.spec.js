'use strict';

 const chai = require('chai');
 const {expect} = chai;
 const {assert} = chai;


beforeEach(()=>{ 
    browser.ignoreSynchronization = true;
    browser.get('http://juliemr.github.io/protractor-demo/');
    });

describe('automate', ()=>{

it('V1: Test angular calculator 120', ()=>{
    const url = browser.getCurrentUrl().then(function(url){
    console.log(url);
    expect(url).to.equal('http://juliemr.github.io/protractor-demo/');    
   });

    const title = browser.getTitle().then(function(title){
        console.log(title);
     expect(title).to.equal('Super Calculator');
  });
  
    var first = element(by.model("first")); 
    var selectOperand = element(by.model('operator'));
    var second = element(by.model("second"));
    var goButton = element(by.css("#gobutton"));
    var result = element(by.binding("latest"))

    first.sendKeys("2000");
    second.sendKeys("4000");


    //goButton.click();

    browser.wait(() => (goButton.isPresent()), 20000);

    expect(goButton.isDisplayed()).to.be.true;

    element(by.id('gobutton')).click();

    //console.log(result);


    //expect(result.getText()).to.equal('5');

    
});



});