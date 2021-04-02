var nose_x = 0
var nose_y = 0
let img;
function preload(){
    img=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    capture = createCapture(VIDEO);
    capture.size(300, 300);
    capture.hide();
    postnet = ml5.poseNet(capture, modeloaded)
    postnet.on("pose", displayresults)
}

function draw() {
    image(capture, 0, 0, 300, 300);
    image(img, nose_x, nose_y, 30, 30);


}

function modeloaded() {
    console.log("The model has been loaded")
}

function displayresults(results) {
    if (results.length > 0) {
        console.log(results[0].pose.nose)
        nose_x = results[0].pose.nose.x-5;
        nose_y = results[0].pose.nose.y-5;

    }

}