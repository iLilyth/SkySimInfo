import Settings from '../config.js'
import {skySim} from '../Checks/onServer.js'

let bitsCounter = 0
let bitsCounterLifetime = Number(FileLib.read("SkySimInfo/Storage", "bitsCounterLifetime.json"))
let width = 0
let height = 0
const text = new Text('', width, height)

register("chat", (BitsCounterAdd, event) => { 
    cancel(event)
    bitsCounter = bitsCounter + Number(BitsCounterAdd)
    bitsCounterLifetime = bitsCounterLifetime + Number(BitsCounterAdd)
    FileLib.write("SkySimInfo/Storage", "bitsCounterLifetime.json", bitsCounterLifetime)
}).setChatCriteria("LUCKY! Your Luck of the Cave ability granted you ${BitsCounterAdd} bits.")

register("renderOverlay", () => {
    if (!skySim()) return
    if (!Settings.MiningBitsCounter) return
    text.setX(5)
    text.setY(150)
    text.setString(`&6Bits This Session: ${bitsCounter}\n&6Bits Lifetime: ${bitsCounterLifetime}`)
    text.setShadow(true)
    text.draw() 
})