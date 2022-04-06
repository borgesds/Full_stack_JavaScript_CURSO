let seuNome = prompt("Qual o seu nome?")
let chosenOption

function menu() {
    let opcao
    while(opcao != "1" && opcao != "2" && opcao != "3") {
        opcao = prompt("O que quer saber?\n" + 
        "1- Equipes na F1?\n" + 
        "2- 10 Primeiros Pilotos e Pontuações:\n" + 
        "3- Sair do Programa")
    }
    return opcao
}

function equipesF1() {
    let todasEquipesF1 = alert("Seu resultado da pesquisa:\n" + "Mercedes\n" + "Red Bull Racing\n" + "Ferrari\n" + "McLaren\n" + "Alpine\n" + "AlphaTauri\n" + "Aston Martin\n" + "Williams\n" + "Alfa Romeo\n" + "Haas F1 Team")
    return todasEquipesF1
}

function pilotosF1() {
    let dezPilotosF1 = alert("Seu resultado da pesquisa:\n" +
        "1) Charles Leclerc, 45 pts\n" +
        "2) Carlos Sainz Jr., 33\n" + 
        "3) Max Verstappen, 25\n" + 
        "4) George Russell, 22\n" + 
        "5) Lewis Hamilton, 16\n" + 
        "6) Esteban Ocon, 14\n" + 
        "7) Sergio Pérez, 12\n" + 
        "8) Kevin Magnussen, 12\n" + 
        "9) Valtteri Bottas, 8\n" + 
        "10) Lando Norris, 6")
        return dezPilotosF1
}

do {
    chosenOption = menu()
    if(chosenOption == "1") {
        result = equipesF1()
    } else if(chosenOption == "2") {
        result = pilotosF1()
    } else if(chosenOption == "3") {
        alert("Saindo do programa")
    } else {
        alert("Tente de Novo")
    }
} while(chosenOption != "3")