function setup(){
    canvas = createCanvas(580, 480)
    canvas.position(200,200);
    video=createCapture(VIDEO)
    video.hide();
        var tinty=""
}

function draw(){
    image(video, 0, 0, 580, 480);
    tintytint()
    tint(tinty);
}

function takePic(){
    save("Tintytint.png")
}

function tintytint(){
    tinty = document.getElementById("googlabooglamoogla").value;
}
