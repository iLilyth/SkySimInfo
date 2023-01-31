import Settings from '../config.js'
import {skySim} from '../Checks/onServer.js'

let width = 0
let height = 0
const text = new Text('', width, height)

register("renderOverlay", () =>{
    if(!skySim()) return
    if(!Settings.FPSCounter) return
    let fps = Client.getFPS()
    text.setX(5)
    text.setY(5)
    text.setString(`&fFPS: ${fps}`)
    text.setShadow(true)
    text.draw()
})
