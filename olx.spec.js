'use strict';

const chai = require('chai');
const {expect} = chai;
const {assert} = chai;

const olxPO = require('./olx.po');


beforeEach(()=>{ 
    browser.ignoreSynchronization = true;
    browser.driver.get('https://www.olx.in/account/register/');
    });

describe('automate olx', ()=>{

it('V1: Test olx website and get the current url', ()=>{
    const url = browser.driver.getCurrentUrl().then(function(url){
    console.log(url);
    expect(url).to.equal('https://www.olx.in/account/register/');    
    });

});

it('V2: Test olx website and get the title of the page', () =>{
    const title =  browser.driver.getTitle().then(function(title){
    console.log(title);
    expect(title).to.equal('New account');
    })

    
    
});

it('V3: To refresh the current page and get the complete page source', () =>{
    browser.refresh();
    const source = browser.getPageSource().then(function(source){
   // console.log(source);
    })

});


});