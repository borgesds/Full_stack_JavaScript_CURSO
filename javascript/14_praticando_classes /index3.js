//Sobrescrita de Métodos
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
    speedUp() {
        alert("Nave de transporte so aumenta a velocidade em 1km/s")
        this.currentVelocity += 1
    }
}

let transportSpacer = new transportSpaceship("Tranportadora Uranu", 452, 200)
transportSpacer .speedUp()

console.log(transportSpacer)