import Settings from '../config.js'
import {skySim} from '../Checks/onServer.js'
import {ScreenX} from '../Functions/locationFunction.js'
import {ScreenY} from '../Functions/locationFunction.js'

let width = 0
let height = 0
const text = new Text('', width, height)
let VoidgloomCount = 0
let VoidgloomCountLifetime = Number(FileLib.read("SkySimInfo/Storage", "VoidgloomTracker.json"))

register("chat", () => { 
    VoidgloomCount = VoidgloomCount + 1
    VoidgloomCountLifetime = VoidgloomCountLifetime + 1
    FileLib.write("SkySimInfo/Storage", "VoidgloomTracker.json", VoidgloomCountLifetime)
}).setChatCriteria("   » Talk to Maddox to claim your Enderman Slayer XP!")

register("renderOverlay", () => {
    if (!skySim()) return
    if (!Settings.VoidgloomUtils) return
    text.setX(Settings.VoidgloomUtilsX*ScreenX())
    text.setY(Settings.VoidgloomUtilsY*ScreenY())
    text.setString(`&cVoidgloom Bosses This Session: ${VoidgloomCount}\n&cTotal Voidgloom Bosses: ${VoidgloomCountLifetime}`)
    text.setShadow(true)
    text.draw()
})