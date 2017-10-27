var health = 100
var name = 'Enemy'
var hits = 0




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
    document.getElementById('health').innerText = health
}
