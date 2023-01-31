export function skySim(){
    let onServer
    if (Server.getIP().includes("skysim")) return onServer = true
    else return onServer = false
}
