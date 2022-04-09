//Herança
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

class battleSpaceship extends spaceship {
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo armas e parando nave de batalha")
    }
}1

class discoverySpaceship extends spaceship {
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo equipamentos de amostras e parando nave de batalha")
    }
}

let darwin = new discoverySpaceship("Dawin", 10, 200)
let fenix = new battleSpaceship("Camaleon", 25, 500)

console.log(darwin)
console.log(fenix)

darwin.speedUp(150)
fenix.speedUp(580)

darwin.stop()
fenix.stop()