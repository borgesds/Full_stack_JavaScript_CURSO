export default class {
  constructor(spaceship) {
    this.spaceship = spaceship
  }

  async turnOn() {
    try{
      let currentChargeChecking = this.checkCurrentCharge()
      let shieldChecking = this.testShield()
      let result = await Promise.all([currentChargeChecking, shieldChecking])
      this.spaceship.shield = await this.shieldNormalize(results[1])
      
      console.log(`(${this.spaceship.name} Partida não autorizada: ${this.spaceship.shield}) - Carga(${this.spaceship.currentCharge}GJ)`)
      
    } catch (error) {
      console.log(`(${this.spaceship.name}) Partida não autorizada: ${error}`)
    }
  }

  async checkCurrentCharge() {
    let currentCharge = this.spaceship.currentPercentCharge()
    if(currentCharge < 30) {
      return Promise.reject(`Carga em apenas ${currentCharge}GJ`)
    }
    return currentCharge

  }

  async testShield() {
    let doubledShield = this.spaceship.shield * 2
    if (doubledShield < 100) {
      return Promise.reject("Escudo em sobrecarga")
    }
    return doubledShield
    
  }

  async shieldNormalize(shield) {
    let normalizedShield = shield * 0.7
    if(normalizedShield > 120) {
      return Promise.reject("Escudo em Supercarga")
    }
    return normalizedShield

  }
}