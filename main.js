function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    capture = createCapture(VIDEO)
    capture.hide()
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Eof6uq_2e/model.json", modelloaded)
}
function modelloaded(){
    console.log("The Model has been loaded")
}
function draw() {
    image(capture, 0, 0, 300, 300);
 classifier.classify(capture, getresults)
}

function preload() {}
function getresults(error,results){
   console.log(results) 
   document.getElementById("obj").innerHTML=results[0].label;
   document.getElementById("acc").innerHTML=results[0].confidence.toFixed(3);
}