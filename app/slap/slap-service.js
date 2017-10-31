function SlapService() {

    function Player(name, health, slap, punch, kick) {
    this.name = name
    this.health = health,
        this.attacks = {
            slap: slap,
            punch: punch,
            kick: kick
        }
    this.hits = 0
    this.items = []

}

var player = new Player('monster', 100, 1, 5, 10)

var items = {
    mental: new Item('Mental Block', -.4, "Lose 4 Health"),
    strategy: new Item('Strategy', .6, "Strategy adds 3 Health"),
    focus: new Item('Focus', .5, "Adds 2 health")
}

function Item(name, mod, description) {
    this.name = name
    this.mod = mod,
        this.description = description
}

function reset(player) {
    player.health = 100
    player.hits = 0
    player.items = []
    update()
}

function addMods() {
    var total = 0
    for (var i = 0; i < monster.items.length; i++) {
        var adding = monster.items[i]
        total += adding.mod
    }
    if (total >= 1.5) {
        return total = 2
    }
    if (total === 0) {
        return total += 1
    }
    return total
}

this.getPlayer = function getPlayer() {
    return JSON.parse(JSON.stringify(player)) // non-primative passed by reference
    // primatives are passed by value
}

this.attack = function attack(move, player) {

    if (player.attacks[move]) {
        player.health -= player.attacks[move] * addMods()
        player.hits++
    }
}

}

// function action(move, player) {
//     if (move == 'slap') {
//         player.health -= player.attacks[move] * addMods() 
//         player.hits += 1
//         update()
//         return
//     }
//     if (move == 'punch') {
//         player.health -= player.attacks[move] * addMods()
//         player.hits += 1
//         update()
//         return
//     }
//     if (move == 'kick') {
//         player.health -= player.attacks[move] * addMods()
//         player.hits += 1
//         update()
//         return
//     }