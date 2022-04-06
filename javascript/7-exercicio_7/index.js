let spaceship = prompt("Digite o nome da nave:")

let charToReplace = prompt("Qual caracter você quer trocar?")
let replacementCharacter = prompt("Por qual caracter?")

let newSpaceship = ""

 for(let pos = 0; pos < spaceship.length; pos++) {
     if(spaceship[pos] == charToReplace) {
         newSpaceship += replacementCharacter
     } else {
         newSpaceship += spaceship[pos]
     }
 }

 alert("O nvo nome da nave é" + newSpaceship)