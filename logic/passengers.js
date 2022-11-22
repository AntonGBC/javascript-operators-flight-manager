"use strict";
function Passengers() {
    
    function checkFlightCapacity (capacity, passengersArray) {
        let sum = 0;
        for (const value of passengersArray) {
            sum += value;
        }

        if (sum > capacity) {
            throw new Error;
        } else {
            return sum;
        }
    };

    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, nrOfFlights, businessSeatsPerFlight, economySeatsPerFlight) {
        let totalBusinessSeats = nrOfFlights * businessSeatsPerFlight;
        let totalEconomySeats = nrOfFlights * economySeatsPerFlight;
        let vipPassengersWithBusinessSeats = 0;
        let vipPassengersWithEconomySeats = 0;
        let regularPassengersWithBusinessSeats = 0;
        let regularPassengersWithEconomySeats = 0;
        let vip = vipPassengers;
        let regular = regularPassengers;
        
        while ((vip > 0) && (totalBusinessSeats > 0 )){
            vip -= 1;
            totalBusinessSeats -= 1;
            vipPassengersWithBusinessSeats += 1;
        }

        while ((vip > 0 ) && ( totalEconomySeats > 0 )){
            vip -= 1;
            totalEconomySeats -= 1;
            vipPassengersWithEconomySeats += 1;
        }

        while ((regular > 0 ) && ( totalBusinessSeats > 0 )){
            regular -= 1;
            totalBusinessSeats -= 1;
            regularPassengersWithBusinessSeats += 1;
        }

        while ((regular > 0 ) && (totalEconomySeats > 0)){
            regular -= 1;
            totalEconomySeats -= 1;
            regularPassengersWithEconomySeats += 1;
        }

        const seats = {
            vipPassengersWithBusinessSeats,
            vipPassengersWithEconomySeats,
            regularPassengersWithBusinessSeats,
            regularPassengersWithEconomySeats
        };
        return seats;
    };
    return {checkFlightCapacity,distributeAllSeatsToAllPassengers};   
}
module.exports = Passengers();
