import {describe, it, xit} from "selenium-webdriver/testing";

var xcelToJson = require('../../xcelToJson');
var homePage = require('../../pages/homePage/homePage.po');
var api = require('../../helper/util/api');
var apiPayLoadJson = require('../../testData/apiPayLoad.json');
var dateHelper = require('../../helper/helperMethod/dateHelper');
var jsMethodList = require('../../helper/applicationMethod/jsMethod');

describe('API SAMPLE TEST', () => {

    it('Title of the page', async () => {
        const requiredTitles = await browser.driver.getTitle();
        console.log('TITLE :', requiredTitles);
        await expect(requiredTitles).toEqual('Angular - Introduction to the Angular Docs');

    });

    xit('API: GET CALL', async()=>{
        const res =  await api.getRequest('https://reqres.in/api/users?page=2');
        console.log('data  = ', await res.data);
        console.log('status CODE:  = ', await res.status);
        console.log('DATA [0]:  = ', await res.data.data[0]);
        console.log('DATA [0] id:  = ', await res.data.data[0].id);

        console.log('DATA [0] email::  = ', await res.data.data[0].email);
        console.log('DATA [0] first_name:::  = ', await res.data.data[0].first_name);

        const firstName = await res.data.data[0].first_name;
        await expect(firstName).toEqual('Michael');
        await expect(res.status).toEqual(200); //CORRECT RES

    });

    xit('API: POST CALL', async()=>{
        const url = "https://reqres.in/api/users";
        const payload = {
            "name": "morpheus",
            "job": "leader"
        };
        const res =  await api.postRequest(url, payload);
        
        console.log('data  = ', await res.data);
        console.log('status CODE:  = ', await res.status);
        await expect(res.status).toEqual(201); //CORRECT RES

    });

    xit('API: PAYLOAD VALIDATION', async()=>{
        const apiPayloadSize = apiPayLoadJson.length;
        console.log('size', apiPayloadSize);
        for(let i = 0 ; i < apiPayloadSize; i++){
            const channelName = apiPayLoadJson[i].channel;
            console.log('C N' , channelName);
        }
    });
    
    xit('API: GET CALL 2', async()=>{
        const res =  await api.getRequest('https://reqres.in/api/unknown');
        console.log('data  = ', await res.data);
        console.log('status CODE:  = ', await res.status);
        // console.log('DATA [0]:  = ', await res.data.data[0]);
        
       const name = await api.calculateAPIResponse(res);
       console.log(' name output = ', name);

    });

    xit('API: PUT CALL', async()=>{
        const url = "https://reqres.in/api/users/2";
        const payload = {
            "name": "morpheus",
            "job": "zion resident"
        };
        const res =  await api.putRequest(url, payload);
        console.log(' PUT data  = ', await res.data);
        console.log('PUT status CODE:  = ', await res.status);
        // console.log('DATA [0]:  = ', await res.data.data[0]);
        
    
    });

    xit('DATE HELPER', async()=>{
        const currentDay = dateHelper.getCurrentDay();
        console.log('CURRENT DAY = ', currentDay);

        const currentMonth = dateHelper.getCurrentMonth();
        console.log('CURRENT MONTH = ', currentMonth);

        const currentYear = dateHelper.getCurrentYear();
        console.log('CURRENT YEAR = ', currentYear);

        const currentDate1 = dateHelper.getCurrentDate(true);
        console.log('CURRENT DATE IN FORMAT DDMMYYYY = ', currentDate1);

        const currentDate2 = dateHelper.getCurrentDate(null, true);
        console.log('CURRENT DATE IN FORMAT MMDDYYYY = ', currentDate2);

        const currentDate3 = dateHelper.getCurrentDate(null, null, true);
        console.log('CURRENT DATE IN FORMAT YYYYMMDD = ', currentDate3);

        //============================

        const currentDates1 = dateHelper.getCurrentDate2(true);
        console.log('CURRENT DATE IN FORMAT DDMMYYYY = ', currentDates1);

        const currentDates2 = dateHelper.getCurrentDate2(null, true);
        console.log('CURRENT DATE IN FORMAT MMDDYYYY = ', currentDates2);

        const currentDates3 = dateHelper.getCurrentDate2(null, null, true);
        console.log('CURRENT DATE IN FORMAT YYYYMMDD = ', currentDates3);

        //============================

        const getYesterdayDate = dateHelper.getYesterdayDate();
        console.log('getYesterdayDate = ', getYesterdayDate);

        const yesterdayDateFormat1 = dateHelper.yesterdayDateFormat1();
        console.log('yesterdayDateFormat1 = ', yesterdayDateFormat1);

        const getDayBeforeYesterdayDate = dateHelper.getDayBeforeYesterdayDate();
        console.log('getDayBeforeYesterdayDate = ', getDayBeforeYesterdayDate);
    });

    it('DATE HELPER PART-2', async()=>{
        const nextDate = dateHelper.nextDate();
        console.log('nextDate = ', nextDate);

        const nextDate2 = dateHelper.nextDate2();
        console.log('nextDate 2 = ', nextDate2);

        const daysInMonth = dateHelper.daysInMonth(2, 2019);
        console.log('days FOR FEB = ', daysInMonth);

        const ForCurrentDate = dateHelper.getCustomDateForCurrentDate();
        console.log('ForCurrentDate = ', ForCurrentDate);

        const LastSevenDayDate = dateHelper.calculateLastSevenDayDate();
        console.log('LastSevenDayDate = ', LastSevenDayDate);

        jsMethodList.fixedUptoTwoDecimal();
    });

});