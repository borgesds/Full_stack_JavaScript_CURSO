//Get
class resourceProcessStation {
    constructor(nome, monthlyProcessedLoad) {
        this.nome = nome
        this.monthlyProcessedLoad = monthlyProcessedLoad
    }

    get weeklyProcessedLoad() {
        return this.monthlyProcessedLoad / 4
    }
}

let resourceProcessor = new resourceProcessStation("Gaia", 500)

console.log(resourceProcessor.weeklyProcessedLoad)