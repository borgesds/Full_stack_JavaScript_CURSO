//Set
class transportSpaceship {
    constructor(name) {
        this.name = name
        this.currentVelocity = 0
    }
    set velocity(newVelocity) {
        if(newVelocity > 120) {
            this.currentVelocity = 120
        } else {
            this.currentVelocity = newVelocity
        }
    }
}

let spaceship = new transportSpaceship("Kratus")

spaceship.velocity = 180

console.log(spaceship)