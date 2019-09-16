//---------------------------------------------------@author: Athar------------------------------------------------
var dateHelper = function () {

    //To get the current day: In format: dd : Eg : 25
    this.getCurrentDay = function () {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        return dd;
    }

    //To get the current month: In format: mm : Eg : 3
    this.getCurrentMonth = function () {
        var today = new Date();
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        return mm;
    }

    //To get the current year: In format: yyyy : Eg : 2019
    this.getCurrentYear = function () {
        var today = new Date();
        var yyyy = today.getFullYear();
        return yyyy;
    }

    //To get the current complete date: In the given format: dd/mm/yyyy : Eg : 25/03/2019
    this.getCurrentDate = function (DDMMYYYY, MMDDYYYY, YYYYMMDD) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0! 
        var yyyy = today.getFullYear();

        if (YYYYMMDD) {
            date = yyyy + '/' + mm + '/' + dd;
            return date;

        } else if (DDMMYYYY) {
            date = dd + '/' + mm + '/' + yyyy;
            return date;

        } else if (MMDDYYYY) {
            date = mm + '/' + dd + '/' + yyyy;
            return date;
        }
    }

    this.getCurrentDate2 = function (DDMMYYYY, MMDDYYYY, YYYYMMDD) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0! 
        var yyyy = today.getFullYear();

        if (YYYYMMDD) {
            date = yyyy + '-' + mm + '-' + dd;
            return date;

        } else if (DDMMYYYY) {
            date = dd + '-' + mm + '-' + yyyy;
            return date;

        } else if (MMDDYYYY) {
            date = mm + '-' + dd + '-' + yyyy;
            return date;
        }
    }

    //To get the Yesterday date: In format: Eg : 2019/03/24 : yyyy/mm/dd
    this.getYesterdayDate = function () {
        var date = new Date();
        date.setDate(date.getDate() - 1);
        return date.getFullYear() + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getDate();
    };

    //To get the Yesterday date: In format: Eg : 2019/3/24 : yyyy/mm/dd
    this.yesterdayDateFormat1 = function () {
        var date = new Date();
        date.setDate(date.getDate() - 1);
        return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    };

    //To get the Yesterday date: In format: Eg : 2019/3/23 : yyyy/mm/dd
    this.getDayBeforeYesterdayDate = function () {
        var date = new Date();
        date.setDate(date.getDate() - 2);
        return date.getFullYear() + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getDate();
    };

//============================2nd class===========================

 //To get the next date: In format: Eg : 2019/24/3  : yyyy/dd/mm
 this.nextDate = function () {
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    var nextDate = tomorrow.toLocaleDateString();
    console.log('XXXXXX = ', nextDate);   //P/A/R/A/M     //M/A/R/A/P
    return nextDate.split("/").reverse().join("/");
}

//To get the next date: In format: Eg : 3/26/2019 : mm/dd/yyyy
this.nextDate2 = function () {
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toLocaleDateString();
}

//To get the no of days of the given month and year:  Eg : [Jan : 31, ..] etc : Print : console.log('Jan', daysInMonth(1, 2019))
this.daysInMonth = function (month, year) {
    return new Date(year, month, 0).getDate();
}

// To get the current Date in Format = "June 6, 2019"
this.getCustomDateForCurrentDate = function () {
    var today = new Date();
    var dd = String(today.getDate());
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var thisMonth = months[today.getMonth()];
    var yyyy = today.getFullYear();

    date = thisMonth + ' ' + dd + ',' + ' ' + yyyy;
    return date;
}

//To get the Last 7 Days date: In format: Eg : 2019-03-03 : yyyy-mm-dd
//lastNoOfdays can be anything as 7, 10, 20, 30, 40, ..................
this.calculateLastSevenDayDate = function (lastNoOfdays) {
    var date = new Date();
    date.setDate(date.getDate() - lastNoOfdays);
    return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
}

}
module.exports = new dateHelper();