import Settings from '../config.js'
import {skySim} from '../Checks/onServer.js'
import {ScreenX} from '../Functions/locationFunction.js'
import {ScreenY} from '../Functions/locationFunction.js'

let width = 0
let height = 0
const text = new Text('', width, height)

register("renderOverlay", () => {
    if (!skySim() || !Settings.pingCounter) return
    const ping = Server.getPing()
    text.setX(Settings.pingCounterX*ScreenX())
    text.setY(Settings.pingCounterY*ScreenY())
    text.setString(`&fPing: ${ping}`)
    text.setShadow(true)
    text.draw()
})