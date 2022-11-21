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
    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
};
module.exports = Util();