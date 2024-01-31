class Character {
    _life = 1
    maxLife = 1
    attack = 0
    defence = 0

    constructor(name) {
        this.name = name
    }

    get life() {
        return this._life
    }
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife 
    }
}

class Cavaleiro extends Character {
    constructor(name) {
        super(name)
        this.life = 100
        this.attack = 10
        this.defence = 8
        this.maxLife = this.life
    }
}
class Feiticeiro extends Character {
    constructor(name) {
        super(name)
        this.life = 80
        this.attack = 15
        this.defence = 3
        this.maxLife = this.life
    }
}

class LittleMonster extends Character {
    constructor() {
        super('little monster')
        this.life = 40
        this.attack = 4
        this.defence = 4
        this.maxLife = this.life
    }
}
class BigMonster extends Character {
    constructor() {
        super('big monster')
        this.life = 120
        this.attack = 16
        this.defence = 6
        this.maxLife = this.life
    }
}

class Stage {
    constructor(fighter1, fighter2, fighterEl1, fighterEl2) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighterEl1 = fighterEl1
        this.fighterEl2 = fighterEl2
    }

    start() {
        this.update()

        //botão atacar
        this.fighterEl1.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        this.fighterEl2.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))

    }
    update() {
        //fighter 1
        this.fighterEl1.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP` 
        let f1pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        this.fighterEl1.querySelector('.bar').style.width = `${f1pct}%`

        //fighter 2
        this.fighterEl2.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`
        let f2pct = (this.fighter2.life / this.fighter2.maxLife) * 100
        this.fighterEl2.querySelector('.bar').style.width = `${f2pct}%`
    }

    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            console.log('já morreu')
            return
        }

        let attackFactor = (Math.random() * 2).toFixed(2)
        let defenceFactor = (Math.random() * 2).toFixed(2)

        let actualAttack = attacking.attack * attackFactor
        let actualDefence = attacked.defence * defenceFactor
        
        if(actualAttack > actualDefence) {
            attacked.life -= actualAttack
            console.log(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
        } else {
            console.log(`${attacked.name} conseguiu se defender`)
        }
    
        this.update()
    }
}