const polonium = [4, 360, 48600]
const radium = [5, 450, 60750]
const francium = [7, 630, 85050]
const uranium = [8, 720, 97200]

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
    
register("command", (arg1, arg2, arg3) => {
    if(arg1>2){
        ChatLib.chat("Invalid tier; unenchanted=0, enchanted=1, compressed=2")
    }
    ChatLib.say("ore: " + arg1 + " refinement tier: " + arg2 + " quantity: " + arg3)
    arg2 = arg2--
    if(arg1=='polonium'){
        arg1 = polonium[arg2]
    }
    else if(arg1=='radium'){
        arg1 = radium[arg2]
    }
    else if(arg1=='francium'){
        arg1 = francium[arg2]
    }
    else if(arg1=='uranium'){
        arg1 = uranium[arg2]
    }
    //ChatLib.chat("pricecheck: " + arg1 + " (ore), " + arg2 + "(refinement tier), " + arg3 + "(quantity)")
    setTimeout(() => {
        ChatLib.say(nFormatter(arg1*arg3, 3))
    }, 1250);
    
    

    //ChatLib.chat(arg1[arg2] * arg3)
}).setName("pricecheck")