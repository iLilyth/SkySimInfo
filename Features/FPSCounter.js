import Settings from '../config.js'
import {skySim} from '../Checks/onServer.js'
import {ScreenX} from '../Functions/locationFunction.js'
import {ScreenY} from '../Functions/locationFunction.js'

let width = 0
let height = 0
const text = new Text('', width, height)

register("renderOverlay", () =>{
    if(!skySim()) return
    if(!Settings.FPSCounter) return
    let fps = Client.getFPS()
    text.setX(Settings.FPSCounterX*ScreenX())
    text.setY(Settings.FPSCounterY*ScreenY())
    text.setString(`&fFPS: ${fps}`)
    text.setShadow(true)
    text.draw()
})
