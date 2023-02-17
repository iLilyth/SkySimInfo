/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />

register("chat", () => {
        let playerName = Player.getName()
        if(playerName=="Bidirectional") return
        ChatLib.say(playerName + " Is using SSI!")
}).setCriteria("${*} Bidirectional: !UserCheck")