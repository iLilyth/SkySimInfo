import Settings from '../config.js'
import {skySim} from '../Checks/onServer.js'
const formatNumber = (number) => {
    number = number + ''
    x = number.split('.')
    x1 = x[0]
    x2 = x.length > 1 ? '.' + x[1] : ''
    var rgx = /(\d+)(\d{3})/
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2')
    }
    return x1 + x2
}

register("renderEntity", (entity) => {
    if(!skySim()) return
    if (!Settings.FormatDmg) return
    if (entity.getName().match(/[a-z]/)) return
    if (entity.getName().includes("_")) return
    if (entity.getName().startsWith("§7")) {
        let nameTag = entity.getName().removeFormatting()
        let nameTagFormatted = formatNumber(nameTag)
        let entityX = entity.getLastX()
        let entityY = entity.getLastY()
        let entityZ = entity.getLastZ()
        Tessellator.drawString("๑"+ nameTagFormatted +"๑", entityX, entityY, entityZ, Renderer.AQUA, false, 0.03, false)
    }
    
})

register("renderEntity", (entity, pos, partialticks, event) => {
    if(!skySim()) return
    if (!Settings.FormatDmg) return
    if (entity.getName().match(/[a-z]/)) return
    if (entity.getName().includes("_")) return
    if (entity.getName().startsWith("§7")) return cancel(event)
    
})

register("renderEntity", (entity) => {
    if(!skySim()) return
    if (!Settings.FormatDmg) return
    if (entity.getName().includes("✧")) {
        let Nametag = entity.getName().removeFormatting()
        let length = Nametag.length
        nameTag = entity.getName().removeFormatting().slice(1, (length - 1))
        let nameTagFormatted = formatNumber(nameTag)
        let entityX = entity.getLastX()
        let entityY = entity.getLastY()
        let entityZ = entity.getLastZ()
        Tessellator.drawString("✧"+ nameTagFormatted +"✧", entityX, entityY, entityZ, Renderer.RED, false, 0.03, false)
    }
})

register("renderEntity", (entity, pos, partialticks, event) => {
    if(!skySim()) return
    if (!Settings.FormatDmg) return
    if (entity.getName().removeFormatting().includes("✧")) return cancel(event)
})

