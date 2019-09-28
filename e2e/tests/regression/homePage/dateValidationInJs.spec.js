var dateHelper = require('../../../helper/helperMethod/dateHelper');
var jsMethodList = require('../../../helper/applicationMethod/jsMethod');

describe('DATE HELPER TEST', () => {

    it('DATE HELPER', async () => {
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

    it('DATE HELPER PART-2', async () => {
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

        jsMethodList.fixedUptoReqiredDecimal(2424.353 , 2);
    });

    it('Validation UPTO-2 DECIMAL', async () => {
        jsMethodList.fixedUptoReqiredDecimal(2424.353 , 2);
    });
});