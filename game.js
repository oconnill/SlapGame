
function Player(name, health, slap, punch, kick){
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

var monster = new Player('monster', 100, 1, 5, 10)

//Item Creator
function Item(name, mod, description) {
    this.name = name
    this.mod = mod,
    this.description = description
}


var items = {
    mental: new Item('Mental Block',-.4, "Lose 4 Health" ),
    strategy: new Item('Strategy',.6, "Strategy adds 3 Health" ),
    focus: new Item('Focus',.5, "Adds 2 health" )
    }


function giveItem(player, name){
   player.items.push(items[name])
}

/*Add modifiers to character also return a value of 1 when no modifiers are added to not effect intial attack */
function addMods(){
    var total = 0
    for(var i = 0; i < monster.items.length; i ++){
    var adding = monster.items[i]
        total += adding.mod
    }
    if(total >= 1.5){
    return total = 2
      }
  if(total === 0){
      return total += 1
  }
    return total 
}



function action(move, player){
    if(move == 'slap'){
        player.health -=  player.attacks[move] * addMods()
        player.hits += 1
        update()
        return
    }
        if(move == 'punch'){
        player.health -=  player.attacks[move] * addMods()
        player.hits += 1
        update()
        return
    }
        if(move == 'kick'){
        player.health -=  player.attacks[move] * addMods()
        player.hits += 1
        update()
        return
    }
}

function update(){
    document.getElementById('hits').innerText = monster.hits
    if(monster.health >= 120){
        return document.getElementById('health').innerText = "MAX SPECIALS!"
    }
    if(monster.health >= 1){
        return document.getElementById('health').innerText = monster.health
    }

    else{
        return document.getElementById('health').innerText = 'DEAD!'
    }
}

console.log(monster)




