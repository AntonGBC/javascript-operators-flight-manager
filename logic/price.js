"use strict";
function Prices() {
    function calculateFinalPrice(basePrice,variationPassengerType,variationFlightType){
        let sum = basePrice*((100+variationPassengerType)/100)*((100+variationFlightType)/100);
        return sum.toFixed(2);
    };

    function calculateDefaultFinalPrice(basePrice, passangerType, flightType){
        let variationPassengerType = 0;
        let variationFlightType = 0;

        if (passangerType.match(/vip/i)){
            variationPassengerType = 5;
        }

        if (passangerType.match(/regular/i)){
            variationPassengerType = -5;
        }

        if (flightType.match(/business/i)){
            variationFlightType = 10;
        }

        if (flightType.match(/economy/i)){
            variationFlightType = -3;
        }

        return calculateFinalPrice(basePrice, variationPassengerType, variationFlightType);
    }

    function calculateTotalFinalPrice(seats, passangerType, flightType, basePrice){
        return seats*calculateDefaultFinalPrice(basePrice, passangerType, flightType);
    }
    return {calculateFinalPrice,calculateDefaultFinalPrice,calculateTotalFinalPrice};
}

module.exports = Prices();