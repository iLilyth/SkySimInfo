import Settings from '../config.js'
import {skySim} from '../Checks/onServer.js'
let rareDrop = undefined
let insaneRareDrop = undefined

const playSoundPitch = [1, 2, 3, 5, 8, 13]

register("chat", (msg) => {
    if (!skySim() || !Settings.AutoCopyRareDrops) return
    if (msg.startsWith("CRAZY RARE DROP!")) {
        rareDrop = String(msg)
        ChatLib.chat("&2Rare drop copied to clipboard!")
        ChatLib.command(`ct copy ${msg}`, true)
    }
    else if (msg.startsWith("INSANE RARE DROP!")) {
        insaneRareDrop = String(msg)
        ChatLib.chat("&2Rare drop copied to clipboard!")
        ChatLib.command(`ct copy ${msg}`, true)
    }
}).setCriteria("${msg}")

register("tick", () => {
    if (!skySim() || !Settings.RareDropNotification) return
    if (rareDrop) {
        let text = "";
        for (let i = 0; i < playSoundPitch.length; i++) {
             text += World.playSound("random.anvil_land", 1, [i])
        }
        Client.showTitle("&d" + rareDrop, "", 0, 100, 0)
        rareDrop = undefined
    }
    else if (insaneRareDrop) {
        let text = "";
        for (let i = 0; i < playSoundPitch.length; i++) {
             text += World.playSound("mob.wither.death", 1, [i])
        }
        Client.showTitle("&4" + insaneRareDrop, "", 0, 100, 0)
        insaneRareDrop = undefined
    }
})