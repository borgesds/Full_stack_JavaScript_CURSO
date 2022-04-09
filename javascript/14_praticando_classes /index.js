class captain {
    constructor(name, age, flightsHours) {
        this.name = name;
        this.age = age;
        this.flightsHours = flightsHours;
    }
}

class spaceship {
    constructor(name, crewQuantity, captainName, captainAge, captainFlights) {
        this.name = name;
        this.crewQuantity = crewQuantity;
        this.captain = new captain(captainName, captainAge, captainFlights)
    }
}

let spaceshipType1 = new spaceship("Atarius", 58, "Deeh Goulart", 28, 1421)

console.log(spaceshipType1)