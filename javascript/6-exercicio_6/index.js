let warpCounters = 0
let chosenOptions = ""

let spaceChip = prompt("Digite o nome da nave:")

chosenOptions = prompt("Deseja fazer uma dobra espacial?\n1-Sim\n2-Não")

while(chosenOptions == "1") {
    warpCounters += 1
    chosenOptions = prompt("Deseja fazer a proxima dobra espacial?\n1-Sim\n2-Não")
}

alert("Nave " + spaceChip + "\nQuantidade de dobras: " + warpCounters)