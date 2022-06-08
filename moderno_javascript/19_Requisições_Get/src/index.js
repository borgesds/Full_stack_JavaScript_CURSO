import "core-js"
import "regenerator-runtime"

import Neo from "./neo"
import { getNeos } from "./neo_service"

async function loadNeos() {
    let neos =[]
    let neosJSON = await getNeos()
    neosJSON.forEach(neo => {
        const minDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_min"]
        const maxDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_max"]
        const averageDiameter = (minDiameter + maxDiameter) / 2
        const newNeo = new Neo(neo["id"], neo["name"], averageDiameter, neo["is_sentry_object"])
        neos.push(newNeo) 
    })
    renderNEOs(neos)
}

function renderNEOs(neos) {
    const ulElement = document.getElementById("neos-list")
    neos.forEach(neo => {
        const liElement = document.createElement("li")
        const isSentry = neo.isSentry ? "Perigo de colisão" : "Sem perigo de colisão"
        const text = `${neo.id} | ${neo.name} | ${neo.averageEstimatedDiameter} | ${isSentry}`
        liElement.innerText = text
        ulElement.appendChild(liElement)
    })
} 

loadNeos()
