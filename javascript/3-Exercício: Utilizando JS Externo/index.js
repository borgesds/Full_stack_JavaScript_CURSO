let olderPersonName = prompt("Digite o nome da pessoa mais velha:")
let olderPersonAge = prompt("Digite a idade da pessoa mais velha:")

let youngPersonName = prompt("Digite o nome da pessoa mais Nova:")
let youngPersonAge = prompt("Digite a idade da pessoa mais nova:")

let ageDiference = olderPersonAge - youngPersonAge

alert(
    "Pessoa mais velha: " + olderPersonName + "\nIdade: " + olderPersonAge +  
    "\n\nPessoa mais nova: "  + youngPersonName + "\nIdade: " + youngPersonAge + 
    "\n\nDiferença de idade: " + ageDiference
)
