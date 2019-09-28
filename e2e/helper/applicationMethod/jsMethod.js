var jsMethod = function(){

    //num = 2424.353 // 2424.35
    this.fixedUptoReqiredDecimal = function (value, requiredDecimal) {
        const res = value.toFixed(requiredDecimal);
        return res;
    }

    this.sumOfArray = function (array) {
        var totalSum = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] != null) {
                totalSum += array[i];
            }
        }
        return totalSum;
    }

    //value : 333, -765, -878, null, n/a
    //RETURN : BOOLEAN
    this.validateValuesShouldNotBeNegative = function(value){
        var flag = false;
        if (value != null && value != "n/a") {
            if (value.contains("-")) {
                return flag;
            }else {
                return flag = true;
            }
        } else {
            flag = false;
        }
        return flag;
    }

}

module.exports =  new jsMethod();