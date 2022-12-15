var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x = 8;
var y = 8;
var gS = 50;



window.addEventListener("load", () => {
    canvas.width = x*gS;
    canvas.height = y*gS;
    block(0,0, "#00acff")
    block(1,1, "#00ffcc")
})

function block(x, y, color){
    ctx.beginPath()
    ctx.rect(x*gS, y*gS, gS, gS);
    ctx.fillStyle = color;
    ctx.fill()
    ctx.closePath()
}