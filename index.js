/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />
import Settings from "../SkySimInfo/config.js"

register("command", Settings.openGUI).setName("SkySimInfo").setAliases(["ssi"]);

//checks
import "./checks/onServer" 
import "./Checks/userCheck"

//features
import "./features/pickAbilityTimer"
import "./features/copyChat"
import "./features/VCBOverlay" 
import "./features/VWardenOverlay" 
import "./features/damageFormatting" 
import "./features/FPSCounter" 
import "./features/pingCounter" 
import "./features/beaconAlert" 

//functions
import "./Functions/locationFunction"

//trackers
import "./trackers/bitsCounter"
import "./trackers/voidgloomCounter"
import "./trackers/f6data"