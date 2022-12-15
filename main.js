var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x = 21;
var y = 21;
var gS = 20;

window.addEventListener("load", () => {
    canvas.width = x*gS;
    canvas.height = y*gS;
    Snake = new Snake(5)
    Snake.draw()
})

class Snake{
    constructor(length){
        this.length = length;
    }
    draw(){
        for (let i = 0; i < this.length; i++) {
            block(i,Math.floor(y-y/2), "#00acff")  
        }
    }
}

function block(x, y, color){
    ctx.beginPath()
    ctx.rect(x*gS, y*gS, gS, gS);
    ctx.fillStyle = color;
    ctx.fill()
    ctx.closePath()
}

document.addEventListener("keydown", (Event) => {
    if (Event.key == "ArrowLeft") {
        console.log("left")
    }
    if (Event.key == "ArrowRight") {
        console.log("right")
    }
})