class spaceshipWeapon {
    constructor(identifier) {
        this.identifier = identifier
        this.shortsLeft = 5
    }

    shoot() {
        if(this.shortsLeft > 0) {
            console.log("Bang")
            this.shortsLeft -= 1
        } else {
            throw new Error("Arma " + this.identifier + " sem munição")
        }
    }

    reload() {
        this.shortsLeft = 5
    }
}

let fenixWeapon = new spaceshipWeapon(10)

try {
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
} catch(e) {
    console.log(e.message)
    fenixWeapon.reload()
} finally {
    console.log("Arma acertou varios alvos")
}

console.log(fenixWeapon)
