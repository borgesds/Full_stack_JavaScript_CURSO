class spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = false
        this.entraceDoorOpen = false
    }

    hitch() {
        this.isHitched = true
        this.entraceDoorOpen = true
    }
}

function showMenu() {
    let chosenOption
    while (chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt( "O que deseja fazer?\n" + 
                                "1- Engatar nave\n" + 
                                "2- Imprimir naves\n" + 
                                "3- Sair do programa")
    }
    return chosenOption
}

function createSpaceShip() {
    let spaceshipname = prompt("Informe o nome da nave")
    let crewQuantity = prompt("Informe a quantidade de tripulantes")
    let spaceship = new spaceship(spaceshipName, crewQuantity)
    return spaceship
}

function printSpaceshipList(spaceship) {
    let spaceshipList = ""
    spaceship.forEach(spaceShip, index => {
        spaceshipList += (index + 1) + "-  " + spaceShip.name + " (" + spaceShip.crewQuantity + "tripulantes\n"
    })
    alert(spaceshipList)
}

let hitchedSpaceships = []

let chosenOption

while(chosen != "3") {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            let spaceshipToAdd = createSpaceShip()
            spaceshipToAdd.hitc()
            hitchedSpaceships.push(spaceshipToAdd)
            break
        case "2":
            printSpaceshipList(hitchedSpaceships)
            break
    }
}
