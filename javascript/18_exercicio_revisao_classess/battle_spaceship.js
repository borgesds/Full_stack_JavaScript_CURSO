class battleSpaceship extends spaceship {
    constructor(nome, crewQuantity, weaponQuantity) {
        super(nome, crewQuantity) //construtor da spaceship
        this.weaponQuantity = weaponQuantity
    }
}