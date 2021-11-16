noseX= 0;
noseY= 0;

function preload(){
    nose= loadImage('https://i.postimg.cc/V604MHtL/mustache.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialised");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x-26;
        noseY= results[0].pose.nose.y-13;
    }
}

function draw(){
    image(video,0,0,300,300);
    fill(0,0,255);
    stroke(0,0,255);
    image(nose, noseX, noseY,60,60);
}

function take_snapshot(){
    save('filter-app.png');
}