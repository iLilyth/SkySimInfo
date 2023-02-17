import Settings from '../config.js'
import {skySim} from '../Checks/onServer.js'
import {ScreenX} from '../Functions/locationFunction.js'
import {ScreenY} from '../Functions/locationFunction.js'

let width = 0
let height = 0
const text = new Text('', width, height)

let souls = 0
let VCBToggle = false
let VCBTimer = 0

register("chat", (soulsAdd) => {
    if (!skySim()) return
    VCBToggle = true
    souls = soulsAdd
    VCBTimer = 60
}).setCriteria("You crushed ${soulsAdd} souls and gain the following buff for the next 60s!")

register("chat", () => {
    if (!skySim()) return
    VCBToggle = false
    souls = 0
}).setCriteria("Your Voidcrusher Buff is now deactivated!")

register("renderOverlay", () => {
    if (!skySim() || !Settings.VCBData) return
    text.setX(Settings.VCBDataX*ScreenX())
    text.setY(Settings.VCBDataY*ScreenY())
    text.setString((VCBToggle == true ? `&cVCB Buff active with ${souls} soul(s) for ${VCBTimer}s` : ""))
    text.setShadow(true)
    text.draw()
})

register("step", () => {
    if (!skySim()) return
    if (VCBTimer != 0){
        VCBTimer--
    } 
}).setFps(1)