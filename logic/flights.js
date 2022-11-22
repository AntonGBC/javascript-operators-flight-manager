"use strict";
function Flights() {
    function calculateNumberOfFlights(passangers, capacity) {
        if (passangers % 1 != 0 || passangers < 1) {
            throw new Error('The number of passengers must be a positive integer value');
        } else if (capacity % 1 != 0 || capacity < 1) {
            throw new Error('The number of passengers must be a positive integer value');
        } else { 
            return Math.ceil(passangers/capacity);
        }
    }

    function checkAircraftRevision(distanceLimit, distancesArray) {
        
        let sum = 0;
        for (const value of distancesArray) {
            sum += value;
        }

        if ( sum <= (distanceLimit*0.5)) {
            return "The revision needs to be done within the next 3 months";
        } else if ( sum <= (distanceLimit*0.75)) {
            return "The revision needs to be done within the next 2 months";
        } else if ( sum <= distanceLimit) {
            return "The revision needs to be done within the next month";
        } else {
            throw new Error;
        }
    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();