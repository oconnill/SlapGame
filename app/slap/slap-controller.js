function SlapController() {

    var slapService = new SlapService()

    function giveItem(player, name) {
        player.items.push(items[name])
    }

    function update() {
        var player = slapService.getPlayer()
        document.getElementById('hits').innerText = player.hits
        if (player.health >= 120) {
            return document.getElementById('health').innerText = "MAX SPECIALS!"
        }
        if (player.health >= 1) {
            return document.getElementById('health').innerText = player.health
        }

        else {
            return document.getElementById('health').innerText = 'CPU LOSES!!'
        }
    }

        // PUBLIC PARTS
        this.attack = function attack(move) {
            slapService.attack(move)
            update()
        }

    update()

}

