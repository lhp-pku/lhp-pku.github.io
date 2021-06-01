var canvas = document.getElementById("canvas");
var Height = window.screen.height * 0.8;
canvas.height = Height;

var context = canvas.getContext("2d");
var backgroundimg = new Image();
var Ldoodle = new Image();
var Rdoodle = new Image();
var Mouse = new Image();
var Title = new Image();
Ldoodle.src = "img/Ldoodle.png";
Rdoodle.src = "img/Rdoodle.png";
Mouse.src = "img/mouse.png";
Title.src = "img/title.png";
backgroundimg.src = "img/bg.jpg";
backgroundimg.onload = function (ev) {
    var pattern = context.createPattern(backgroundimg, "repeat");
    context.fillStyle = pattern;
    context.fillRect(0, 0, 600, Height);
    context.beginPath();
    context.moveTo(254, Height - 60);
    context.lineTo(314, Height - 60);
    context.lineWidth = 10;
    context.strokeStyle = "green";
    context.lineCap = "round";
    context.stroke();
    panelgroup.push({
        x: 254,
        y: Height - 60,
        status: 1,
        pcolor: "green"
    });
    Player.x = 253;
    Player.y = Height - 125;
    context.drawImage(Rdoodle, Player.x, Player.y);
    context.drawImage(Title, Player.x-220, Player.y-400);

    function startanimation() {
        context.clearRect(0, 0, 568, Height);

        CreatePanel(context);
        context.fillStyle = pattern;
        context.fillRect(0, 0, 568, Height);
        context.font = "bold 20px Arial";
        context.textAlign = "left";
        context.fillStyle = "#a0522d";
        context.fillText("Score: "+parseInt(GameData.score), 20, 30);
        animation(context);
        jump();
        collide();
        gamescroll();
        move(context);

        if (Player.y > Height) {
            window.cancelAnimationFrame(startanimation);
            // canvas.style.cursor = "auto";
            
            context.fillText("Game Over!\nYour score is: "+parseInt(GameData.score),20, 30);
            alert("Game Over!\nYour score is: "+parseInt(GameData.score));
                location.reload();
        } else {
            requestAnimationFrame(startanimation);
        }

    }
    var start = document.getElementById("startBTN");
    start.addEventListener("click",function () {
        // canvas.style.cursor = "auto";
        window.requestAnimationFrame(startanimation);
        start.style.display = "none";

    })

};


function getLocation(x, y) {
    var bbox = canvas.getBoundingClientRect();
    return {
        x: (x - bbox.left) * (canvas.width / bbox.width),
        y: (y - bbox.top) * (canvas.height / bbox.height)
    };
}

canvas.onmousemove = function (e) {
    
    var location = getLocation(e.clientX, e.clientY);
    mouseX = parseInt(location.x) - 31;
    mouseY = parseInt(location.y);
};


