import Settings from '../config.js'
import {skySim} from '../Checks/onServer.js'

const ArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand")

register("step", () => {
    if(!skySim || !Settings.BeaconAlert) return
    World.getAllEntities().filter(filter => filter !== null && filter.getEntity() instanceof ArmorStand).forEach(e => {
        if(e.getEntity()?.func_82169_q(3)?.toString()?.includes("beacon") ?? false){
            Client.showTitle("&dBEACON!", "", 0, 1, 0)
        }
    })
}).setFps(3)