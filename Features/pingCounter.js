import Settings from '../config.js'
import {skySim} from '../Checks/onServer.js'

let width = 0
let height = 0
const text = new Text('', width, height)


register("renderOverlay", () => {
    if (!skySim()) return
    if (!Settings.pingCounter) return
    const ping = Server.getPing()
    text.setX(5)
    text.setY(15)
    text.setString(`&fPing: ${ping}`)
    text.setShadow(true)
    text.draw()
})