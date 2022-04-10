//Métodos estáticos
class resourceProcessStation {
    constructor(nome, monthlyProcessing){
        this.nome = nome
        this.monthlyProcessing = monthlyProcessing
    }

    static calculateProcessInHours(monthlyProcessing, hours){
        return monthlyProcessing / 720 * hours
    }
}

let processors = new resourceProcessStation("Gaia", 2000)


                                           //calculateProcessInHours(monthlyProcessing, hours)
let totalProcessing = resourceProcessStation.calculateProcessInHours(processors.monthlyProcessing, 10)

console.log(totalProcessing)