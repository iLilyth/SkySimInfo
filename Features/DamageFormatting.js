import Settings from '../config.js'
import {skySim} from '../Checks/onServer.js'

function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "B" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "Qu" },
      { value: 1e18, symbol: "Qi" }
    ]
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
    var item = lookup.slice().reverse().find(function(item) {
      return num >= item.value
    })
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0"
}

register("renderEntity", (entity, pos, partialticks, event) => {
    if (!skySim() || !Settings.FormatDmg) return
    if (entity.getName().removeFormatting().includes("✧")) return cancel(event)
    if (entity.getName().match(/[a-z]/) || entity.getName().includes("_")) return
    if (entity.getName().startsWith("§7")) return cancel(event)
    
})

register("renderEntity", (entity) => {
    if (!skySim() || !Settings.FormatDmg) return
    if (entity.getName().includes("✧")) {
        let nametag = entity.getName().removeFormatting()
        let length = nametag.length
        nametag = entity.getName().removeFormatting().slice(1, (length - 1))
        let nameTagFormatted = nFormatter(nametag, 1)
        if(nameTagFormatted==0 && Settings.RemoveZeros) return
        let entityX = entity.getLastX()
        let entityY = entity.getLastY()
        let entityZ = entity.getLastZ()
        Tessellator.drawString("✧"+ nameTagFormatted +"✧", entityX, entityY, entityZ, Renderer.WHITE, true, 0.03, false)
    }
    if (entity.getName().match(/[a-z]/) || entity.getName().includes("_")) return
    if (entity.getName().startsWith("§7")) {
        let nameTag = entity.getName().removeFormatting()
        let nameTagFormatted = nFormatter(nameTag, 1)
        if(nameTagFormatted==0) return
        let entityX = entity.getLastX()
        let entityY = entity.getLastY()
        let entityZ = entity.getLastZ()
        Tessellator.drawString("๑"+ nameTagFormatted +"๑", entityX, entityY, entityZ, Renderer.AQUA, true, 0.03, false)
    }
})