import Settings from '../config.js'
import {skySim} from '../Checks/onServer.js'

let VWardenToggle = false
let VWardenHitsToggle = false
let VSBTimer = 0
let VSTimer = 0
let width = 0
let height = 0
const text = new Text('', width, height)

register("chat", () => {
    if (!skySim()) return
    VWardenHitsToggle = true
    VSTimer = 60
}).setCriteria("Voidgloom's Stronghold is now ACTIVATED!")

register("chat", () => {
    if (!skySim()) return
    VWardenHitsToggle = false
    VWardenToggle = true
    VSBTimer = 20
    VSTimer = 0
}).setCriteria("Your Hitshield have broken! Your Voidling's Stronghold Buff is now active for the next 20 seconds!")

register("chat", () => {
    if (!skySim()) return
    VWardenHitsToggle = false
}).setCriteria("Your Voidling's Stronghold Buff is now deactivated!")

register("renderOverlay", () => {
    if (!skySim() || !Settings.VWardenData) return
    text.setX(5)
    text.setY(250)
    text.setString((VWardenHitsToggle == true ? `&cVoidgloom's Stronghold active for ${VSTimer}s` : ""))
    text.setShadow(true)
    text.draw()
})

register("renderOverlay", () => {
    if (!skySim() || !Settings.VWardenData) return
    text.setX(5)
    text.setY(250)
    text.setString((VWardenToggle == true ? `&cVoidgloom's Stronghold Buff active for ${VSBTimer}s` : ""))
    text.setShadow(true)
    text.draw()
})

register("step", () => {
    if (!skySim()) return
    if (VSBTimer != 0) {
        VSBTimer--
    }
    if (VSTimer != 0) {
        VSTimer--
    }
    if (VSBTimer == 0) {
        VWardenToggle = false
    }
    if (VSTimer == 0) {
        VWardenHitsToggle = false
    }
}).setFps(1)