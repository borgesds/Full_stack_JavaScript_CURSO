let spaceshipName = prompt("Qual o nome da nave?")
let spaceshipVelocity = 0
let chosenOption

function showMenu() {
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("O que deseja fazer?\n" + 
        "1- Acelerar a nave em 5km/s\n" + 
        "2- Desacelerar a Nave em 5km/s\n" + 
        "3- Imprimir dados de bordo\n" + 
        "4- Sair do programa")
    }
    return option
}

function speedUp(velocity) {
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown(velocity) {
    let newVelocity = velocity - 5
    if(newVelocity < 0) {
        newVelocity = 0
    }
    return newVelocity
}
function printSpaceshipBoardData(name, velocity) {
    alert("Espaçonave: " + name + "\nVelocidade " + velocity + "km/s")
}

function stop() {
    let stopProgram = alert("Saida do programa")
}

do {
    chosenOption = showMenu()
    if(chosenOption == "1"){
        spaceshipVelocity = speedUp(spaceshipVelocity)
    } else if(chosenOption == "2"){
        spaceshipVelocity = slowDown(spaceshipVelocity)
    } else if(chosenOption == "3"){
        printSpaceshipBoardData(spaceshipName, spaceshipVelocity)
    } else {
        stop()
    }
} while(chosenOption != "4")