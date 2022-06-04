class Spaceship {
    constructor(nome, maxCapacity, currentCharge, shield) {
        this.nome = nome;
        this.maxCapacity = maxCapacity;
        this.currentCharge = currentCharge;
        this.shield = shield
    }

     currentPercentCharge() {
        return this.currentCharge * 100 / this.maxCapacity
    }
}

export default Spaceship