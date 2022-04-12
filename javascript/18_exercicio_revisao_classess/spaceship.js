class spaceship {
    static get DECELERATION_RATE() {
        return 0.17
    }

    constructor(nome, crewQuantity) {
        this.nome = nome
        this.crewQuantity = crewQuantity
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration * (1 - (spaceship.DECELERATION_RATE))
    }
}