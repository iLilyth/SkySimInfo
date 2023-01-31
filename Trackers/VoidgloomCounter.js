import Settings from '../config.js'
import {skySim} from '../Checks/onServer.js'
let VoidgloomCount = 0
let VoidgloomCountLifetime = Number(FileLib.read("SkySimInfoDev/Storage", "VoidgloomTracker.json"))

register("chat", () => { 
    VoidgloomCount = VoidgloomCount + 1
    VoidgloomCountLifetime = VoidgloomCountLifetime + 1
}).setChatCriteria("   » Talk to Maddox to claim your Enderman Slayer XP!")

register("chat", () => {
    FileLib.write("SkySimInfoDev/Storage", "VoidgloomTracker.json", VoidgloomCountLifetime)
}).setChatCriteria("   » Talk to Maddox to claim your Enderman Slayer XP!")

register("renderOverlay", () => {
    if (!skySim()) return
    if (!Settings.VoidgloomUtils) return
    const width = (5)
    const height = (180)
    const text = new Text(`&cVoidgloom Bosses This Session: ${VoidgloomCount}`, width, height)
    text.setShadow(true)
    text.draw()
})

register("renderOverlay", () => {
    if (!skySim()) return
    if (!Settings.VoidgloomUtils) return
    const width = (5)
    const height = (190)
    const text = new Text(`&cTotal Voidgloom Bosses: ${VoidgloomCountLifetime}`, width, height)
    text.setShadow(true)
    text.draw()
})