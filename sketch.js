nose_x=0;
nose_y=0;

function preload(){
    santa_hat=loadImage("https://i.postimg.cc/15F2GhLJ/1-13021-download-vector-santa-hat-clipart-cartoon-santa-hat-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotPoses);
}
function modelloaded(){
console.log("PoseNet is initialized");
}
function gotPoses(result){
    if(result.length>0){
        console.log(result);
        nose_x=result[0].pose.nose.x-45;
        nose_y=result[0].pose.nose.y-140;
    }
}
function draw(){
    image(video,0,0,300,300);
    image(santa_hat,nose_x,nose_y,80,120);
}
function snapshot(){
    save("hat.png");
}