import Settings from '../config.js'
import {skySim} from '../Checks/onServer.js'
import RenderLib from '../../../Modules/RenderLib/index'



/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />



const ArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand")

let entity

let entityX
let entityY
let entityZ
let length
let drawStringText = "BEACON"




register("step", () => {
    if(!skySim || !Settings.BeaconAlert) return
    World.getAllEntities().filter(filter => filter !== null && filter.getEntity() instanceof ArmorStand).forEach(e => {
        if(e.getEntity()?.func_82169_q(3)?.toString()?.includes("beacon") ?? false){
            Client.showTitle("&dBEACON!", "", 0, 20, 0)
        }
    })
}).setFps(10)

register("renderWorld", () => {
    World.getAllEntities().filter(filter => filter !== null && filter.getEntity() instanceof ArmorStand).forEach(e => {
        if(e.getEntity()?.func_82169_q(3)?.toString()?.includes("beacon") ?? false){
            drawStringText = "BEACON"
            entity = e.getEntity()
            entity = entity.toString().split(",")
            entityX = entity[2].slice(3,999)
            entityY = entity[3].slice(3,999)
            entityZ = entity[4].slice(3,999)
            length = entityZ.length
            entityZ = entityZ.slice(0, (length - 1))
            RenderLib.drawInnerEspBox(entityX, entityY, entityZ, 1, 1, 0, 1, 0, 1, true)
            Tessellator.drawString(drawStringText, entityX, entityY, entityZ, Renderer.DARK_RED, true, .1, false)
            setTimeout(() => {
                drawStringText = ""
            }, 5000);
        }  
        
    })
})