var axios = require("axios");

var apiHelper = function () {

    //@author: Athar Gulfam
    this.getRequest = async function (getAPIUrl) {
        try {
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const response = await axios({
                method: 'get',
                url: getAPIUrl,
                headers: headers,
            });

            return await response;

        } catch (error) {
            console.log('Failed to execute GET REQ' + url & ' Found Error as ', error);
        }
    }

    this.postRequest = async function (getAPIUrl, payload) {
        try {
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const response = await axios({
                method: 'post',
                url: getAPIUrl,
                body: payload,
                headers: headers,
            });

            return await response;

        } catch (error) {
            console.log('Failed to execute POST REQ' + url & ' Found Error as ', error);
        }
    }

    this.putRequest = async function (getAPIUrl, payload) {
        try {
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const response = await axios({
                method: 'put',
                url: getAPIUrl,
                body: payload,
                headers: headers,
            });

            return await response;

        } catch (error) {
            console.log('Failed to execute PUT REQ' + url & ' Found Error as ', error);
        }
    }

    this.calculateAPIResponse = async function (res) {
        const apiResTotalName = [];
        if (res.status == 200) {
            const totalResLength = await res.data.data.length;
            console.log('totalResLength = ', totalResLength);
            for (let i = 0; i < totalResLength; i++) {
                const outputName = res.data.data[i].name;
                apiResTotalName.push(outputName);
            }
            return apiResTotalName;
        }
    }
}

module.exports = new apiHelper();