
export function ScreenX(){
    let ScreenXValue 
    ScreenXValue = Renderer.screen.getWidth()
    ScreenXValue = (ScreenXValue/100)
    return ScreenXValue
}

export function ScreenY(){
    let ScreenYValue = Renderer.screen.getHeight()
    ScreenYValue = (ScreenYValue/100)
    return ScreenYValue
}