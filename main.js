function setup(){
canvas = createCanvas(300,300)
    canvas.center()
capture=createCapture(VIDEO)
capture.hide()
}
function draw(){
    image(capture,0,0,300,300)
}
function preload(){}