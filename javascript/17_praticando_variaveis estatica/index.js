//Variáveis estáticas
class spaceShip {
    static get decelerationRate() {
        return 0.15
    }

    constructor(name) {
        this.name = name
        this.currentVelocity = 0
    }

    speedUp(acceleration) {                          //static get decelerationRate()    
        this.currentVelocity += (acceleration * (1 - spaceShip.decelerationRate))
    }
}

let spaceship01 = new spaceShip("Zeus")

spaceship01.speedUp(100)

console.log(spaceship01)