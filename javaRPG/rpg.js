// Character Classes
class Character{
    constructor(name, race, attack, health) {
        this.name = name
        this.race = race
        this.attack = attack
        this.health = health
        this.inv = new Inventory([], 0, 0, 0)
}
    battle(other) {
        console.log(`${this.name} attacks ${other.name}!`)
    }
}

class Ranger extends Character {
    battle(other) {
        console.log(`${this.name} launches a brutal melee attack on ${other.name}!`)
    }

    recruitUndead() {

    }
}

class Mage extends Character {
    constructor(name, race, attack, health) {
        super(name, race, attack, health)
        this.mana = 100
    }
    battle(other) {
        console.log(`${this.name} casts a wicked spell at ${other.name}!`)
        this.mana -= 20
    }
}

class Burglar extends Character {
    battle(other) {
        console.log(`${this.name} sneaks in a stealth attack on ${other.name}!`)
    }
}

class Wizard extends Character {
    battle(other) {
        console.log(`${this.name} summons an orc minion, which attacks ${other.name}!`)
    }
}

// inventory class and chest class looting methods

class Chest {
    constructor(items, gold, silver, copper) {
        this.inv = new Inventory(items, gold, silver, copper)
    }
}

class Inventory {
    constructor(items, gold, silver, copper) {
        this.items = items
        this.setCurrency(gold, silver, copper)
    }
    transfer(toInv) {
        toInv.items.push(...this.items)
        this.items = []
        toInv.copper += this.copper
        this.copper = 0
    }
    setCurrency(gold, silver, copper) {
        this.copper = gold * 10000 + silver * 100 + copper
    }
    getCurrency() {
        const gold = Math.floor(this.copper / 10000)
        const silver = Math.floor(this.copper % 10000 / 100)
        const copper = this.copper % 100
        return { gold, silver, copper}
    }
}

// Main variables and functionality

const aragorn = new Ranger("Aragorn", "Human", 100, 50)
const galadriel = new Mage("Galadriel", "Elf", 120, 75)
const frodo = new Burglar("Frodo", "Hobbit", 50, 25)
const saruman = new Wizard("Saruman", "Human", 80, 100)

frodo.inv.setCurrency(9, 47, 23)

let chest = new Chest(['Longsword', 'iron helm'], 2, 25, 50)

galadriel.battle(aragorn)

console.log(chest)

console.log(frodo)