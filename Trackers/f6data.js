import Settings from '../config.js'
import {skySim} from '../Checks/onServer.js'

let width = 0
let height = 0
const text = new Text('', width, height)

let sessionRuns = 0
let bitsMadef6 = Number(FileLib.read("SkySimInfo/Storage", "bitsMadef6.json"))


register("chat", BitsMade => { 
    if(!skySim()) return
    sessionRuns++
    bitsMadef6 = bitsMadef6 + Number(BitsMade)
}).setChatCriteria("            +${BitsMade} Bits (Completion Reward)")

register("chat", () => {
    FileLib.write("SkySimInfo/Storage", "bitsMadef6.json", bitsMadef6)
}).setChatCriteria("            +${*} Bits (Completion Reward)")

register("renderOverlay", () => {
    if (!skySim()) return
    if (!Settings.f6Data) return
    text.setX(5)
    text.setY(200)
    text.setString(`&6f6 Runs This Session: ${sessionRuns}`)
    text.setShadow(true)
    text.draw()
})

register("renderOverlay", () => {
    if (!skySim()) return
    if (!Settings.f6Data) return
    text.setX(5)
    text.setY(210)
    text.setString(`&6Bits Made Total: ${bitsMadef6}`)
    text.setShadow(true)
    text.draw()
})