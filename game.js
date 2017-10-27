

//Character Creator 
function Player(name, health, hits) {
    this.name = name
    this.health = health,
    this.hits = hits
    this.items = []
}

//Item Creator
function Item(name, mod, description) {
    this.name = name
    this.mod = mod,
    this.description = description
}

//2 New Players
var player1 = new Player('user', 100, 0)
var monster = new Player('computer', 100, 0)

//New Item!

var items = {
    shield: new Item('shield',4, "gold shield" ),
    helmet: new Item('helmet',2, "bronze helmet" )
    }


function giveItem(){
    monster.items.push(items.shield)
}

function addMods(){
    var total = 0
    for(var i = 0; i < monster.items.length; i ++){

    }
}


function slap(monster){
    monster.health -= 1
    monster.hits += 1
    update()
    return 
}

function punch(monster){
    monster.health -= 5
    monster.hits += 5
    update()
    return 
}

function kick(monster){
    monster.health -= 10
    monster.hits += 10
    update()
    return 
}

function update(){
    document.getElementById('monster-hits').innerText = monster.hits
    if(monster.health >= 0){
        return document.getElementById('monster-health').innerText = monster.health
    }
    else{
        return document.getElementById('monster-health').innerText = 'DEAD!'
    }
    
}
