"use strict";
function Util() {
    function calculateTotalDistributedPassengers(seats){
        let total = 0;
        for (const value of Object.values(seats)){
            total += value;
        };
        return total;
    };

    function calculateTotalNumberOfPassengers(passangers){
        return passangers.reduce((partialSum, a) => partialSum + a, 0);
    };

    function checkInput(input){
        if(isNaN(input) || input===""){
            throw new Error;
        }
        return
    }

    function calculateTotalDistance(distancesArray){
        let sum = 0;

        for (var i = 0; i < distancesArray.length; ++i) {
            if (distancesArray[i] > 0) {
            sum += distancesArray[i];
            }
        }

        return sum;
    }

    function calculateBonusPoints(businessDistancesArray, economyDistancesArray, businessBonus, economyBonus){
        let points = 0;
        points += (calculateTotalDistance(businessDistancesArray)*businessBonus)/100;
        points += (calculateTotalDistance(economyDistancesArray)*economyBonus)/100;
        return points;

    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance,calculateBonusPoints};
};
module.exports = Util();