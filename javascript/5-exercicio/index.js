let departureDataEntry = prompt("Digite a data de partida (formato DD/MM/YYYY)")

let departureData = moment(departureDataEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureData

let chosenOptions = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if(chosenOptions == "1") {
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert("Tempo de Vôo: " + secondsOfDeparture + " segundos")
} else if(chosenOptions == "2") {
    let minutesOfDeparture = Math.round(dateDiff / 60)
    alert("Tempo de Vôo: " + minutesOfDeparture + " minutos")
} else if(chosenOptions == "3") {
    let hoursOfDeparture = Math.round(dateDiff / 3600)
    alert("Tempo de Vôo: " + hoursOfDeparture + " horas")
} else if(chosenOptions == "4") {
    let daysOfDeparture = Math.round(dateDiff / 3600 / 24)
    alert("Tempo de Vôo: " + daysOfDeparture + " dias")
} else {
    alert("Opção invalida.")
}