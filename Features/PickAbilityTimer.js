import Settings from '../config.js'
import {skySim} from '../Checks/onServer.js'

let width = 0
let height = 0
const text = new Text('', width, height)

let pickAbilityTimerDisplay = "Ready"

register("chat", () => {
    if (!skySim()) return
    if (pickAbilityTimerDisplay == "Ready")
        pickAbilityTimerDisplay = (Settings.PickAbilityTimer)
}).setChatCriteria("Your Pickobolus Drill Ability has destroyed ${*} blocks.")

register("renderOverlay", () => {
    if (!skySim()) return
    if (!Settings.PickaxeAbilityTimer2) return
    text.setX(5)
    text.setY(170)
    text.setString(`&6Pickobolus Timer: ${pickAbilityTimerDisplay || "Ready"}`)
    text.setShadow(true)
    text.draw() 
})

register("step", () => {
    if (!skySim()) return
    if (pickAbilityTimerDisplay == "Ready") return
    if (pickAbilityTimerDisplay > 0) 
        pickAbilityTimerDisplay--
}).setFps(1)

register("tick", () => {
    if (!skySim()) return
    if (!Settings.PickaxeAbilityTimer2) return
        if (pickAbilityTimerDisplay == 0){
            Client.showTitle("&dPick Ability Ready!", "", 0, 20, 0)
            pickAbilityTimerDisplay = "Ready"
            World.playSound("random.orb", 10, 1)
    }
})

register("actionBar", event => {
    if (!skySim()) return
    let umsg = ChatLib.removeFormatting(ChatLib.getChatMessage(event));
    if (umsg.includes("Mana (Pickobolus)")) {
        if (pickAbilityTimerDisplay == "Ready"){
            pickAbilityTimerDisplay = (Settings.PickAbilityTimer)
        }
    }
})