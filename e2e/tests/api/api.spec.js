var api = require('../../helper/util/api');
var apiPayLoadJson = require('../../testData/apiPayLoad.json');

describe('API SAMPLE TEST', () => {

    it('Title of the page', async () => {
        const requiredTitles = await browser.driver.getTitle();
        console.log('TITLE :', requiredTitles);
        await expect(requiredTitles).toEqual('Angular - Introduction to the Angular Docs');

    });

    it('API: GET CALL', async()=>{
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

    it('API: POST CALL', async()=>{
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

    it('API: PAYLOAD VALIDATION', async()=>{
        const apiPayloadSize = apiPayLoadJson.length;
        console.log('size', apiPayloadSize);
        for(let i = 0 ; i < apiPayloadSize; i++){
            const channelName = apiPayLoadJson[i].channel;
            console.log('channelName = ' , channelName);
        }
    });
    
    it('API: GET CALL 2', async()=>{
        const res =  await api.getRequest('https://reqres.in/api/unknown');
        console.log('data  = ', await res.data);
        console.log('status CODE:  = ', await res.status);
        // console.log('DATA [0]:  = ', await res.data.data[0]);
        
       const name = await api.calculateAPIResponse(res);
       console.log(' name output = ', name);
    });

    it('API: PUT CALL', async()=>{
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

});