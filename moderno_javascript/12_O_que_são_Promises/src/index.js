let komodoShip = {
    nome: "komodo",
    velocity: 80,
    acceleration: 0
}

const velocityAfter2seconds = (velocity, acceleration) => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if(acceleration > 0) { 
                velocity += acceleration * 2
                console.log(`Nova velocidade: ${velocity}`)
                resolve(velocity)
            } else {
                console.log('Aceleração invalida')
                reject("Não possui aceleração")
            }
        }, 1000)
    })
}

velocityAfter2seconds(komodoShip.velocity, komodoShip.acceleration).then(velocity => {
    komodoShip.velocity = velocity
    console.log("Depois de acelerar:\n", komodoShip)
}).catch(message => {
    console.log(`komodo: ${message}`)
})

console.log("Execução de Promises")