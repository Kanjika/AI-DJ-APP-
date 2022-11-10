song = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";


function preload()
{
    song = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();


    video = createCapture(VIDEO);
    video.hide();


    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('poses', gotPoses);
}


function gotPoses()
{
    if (results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].poses.leftWrist.X;
        leftWristY = results[0].poses.leftWrist.y;
        console.log("leftWristX" + leftWristY + "leftWristY" + leftWristY)

        rightWristX = results[0].poses.rightWrist.X;
        rightWristY = results[0].poses.righttWrist.y;
    }
}


function modelLoaded()
{
    console.log('PoseNet is initialized');
}


function draw()
{
    image(video, 0, 0, 600, 500);
}


function play()
{
    song.play();
    song.setVolume(1);
    song.rate(5);
}


function stop()
{
    song.stop();
}