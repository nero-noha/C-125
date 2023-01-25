function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97');
    textSize(difference);
    fill('#EDE7E3')
    text('Manas', 50, 400)
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results)

        rightWristY = results[0].pose.rightWrist.y;
        leftWristX = results[0].pose.leftWrist.x;

        difference = floor(leftWristX - rightWristX)
    }
}