var health = 100
var name = 'Enemy'
var hits = 0

function Player(name, health, slap, punch, kick){
    this.name = name
    this.health = health,
    this.attacks = {
        slap: slap,
        punch: punch,
        kick: kick
    }
  
}


function slap(){
    health -= 1
    hits += 1
    update()
    return 
}

function punch(){
    health -= 5
    hits += 5
    update()
    return 
}

function kick(){
    health -= 10
    hits += 10
    update()
    return 
}

function update(){
    document.getElementById('hits').innerText = hits
    if(health >= 0){
        return document.getElementById('health').innerText = health
    }
    else{
        return document.getElementById('health').innerText = 'DEAD!'
    }
}
