import Spaceship from "./spaceship"
import armaments from "./armaments"
import { laserDef as laserD } from "./defenses"
// Puxa dentro do arquivo direto o que foi atribuído sem uma const
import basicDefenses from "./defenses"

const spaceship = new Spaceship("USS Enterprise", "james Kirk", armaments.laser, laserD)

const basicSpaceship = new Spaceship("Nave Básica", "ZINN", [], basicDefenses)

console.log(spaceship)
console.log(basicSpaceship)