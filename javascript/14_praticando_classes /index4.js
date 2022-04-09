//Método super
class spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity) {
        this.name = name;
        this.maxCrew = maxCrew;
        this.maxRecommendedVelocity = maxRecommendedVelocity;
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if(this.currentVelocity >= this.maxRecommendedVelocity) {
            alert("VELOCIDADE MAXIMA ULTRAPASSADA!!\nDiminua ou poderá provocar danos a nave")
        }
    }
}

class transportSpaceship extends spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWidth) {
        super(name, maxCrew, maxRecommendedVelocity)
        this.maxLoadWidth = maxLoadWidth
    }

    speedUp(acceleration) {
        acceleration /= 2
        alert("Incrementando velocidade em " + acceleration + "km/s")
        super.speedUp(acceleration)
    }
}

let transportSpaceship1 = new transportSpaceship("Calipso", 25, 100, 500)

console.log(transportSpaceship)

transportSpaceship1.speedUp(210)