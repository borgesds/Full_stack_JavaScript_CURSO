class Spaceship {
    constructor(nome, maxCapacity, currentCharge) {
        this.nome = nome;
        this.maxCapacity = maxCapacity;
        this.currentCharge = currentCharge;
    }

    currentCharge() {
        return this.currentCharge * 100 / this.maxCapacity
    }
}

export default Spaceship