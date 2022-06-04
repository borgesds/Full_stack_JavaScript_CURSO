const spaceship = {
    name: "Rontaro",
    currentBateryCharge: 50,
    consumptionPerkms: 0.00008
}

const updateBateryCharge = function (chargeConsumed) {
    return new Promise((resolve, reject) => {
        spaceship.currentBateryCharge -= chargeConsumed
        if (spaceship.currentBateryCharge > 0) {
            resolve(spaceship.currentBateryCharge)
        } else {
            reject("Bateria esgotada!!! Nave será desativada em alguns segundos")
        }
    })
}

const calculateBateryConsumption = function (velocity, seconds) {
    return new Promise((resolve, reject) => {
        if(spaceship.consumptionPerkms <= 0 || velocity <= 0) {
            reject("Nave esta parada")
        } else {
            let chargeConsumed = spaceship.consumptionPerkms * velocity * seconds
            resolve(chargeConsumed)
        }
    })
}

calculateBateryConsumption(150, 300).then(chargeConsumed => {
    return updateBateryCharge(chargeConsumed)
}).then(newCharge => {
    console.log(`Carga atual: ${newCharge}`)
    }).catch(error => {
        console.log(error)  
})