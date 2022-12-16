var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x = 11;
var y = 11;
var gS = 50;

window.addEventListener("load", () => {
    canvas.width = x*gS;
    canvas.height = y*gS;
    Snake = new Snake(5)
    draw()
})

function draw(){
    clear()
    Snake.draw()
    Snake.move()

    setTimeout(draw, 100)
}



class Snake{
    constructor(length){
        this.length = length;
        this.snake = []
        this.vx = 1;
        this.vy = 0;
        for (let i = 0; i < this.length; i++) {
            this.snake[i] = [i, Math.floor(y-y/2)]
        }
        this.snake.reverse()
    }
    draw(){
        for(let i = 0; i < this.length; i++) {
            block(this.snake[i][0], this.snake[i][1], "#00acff")
        }
    }
    move(){
        this.snake.unshift([this.snake[0][0]+this.vx, this.snake[0][1]+this.vy])
        this.snake.pop()
    }
}

function clear(){
    ctx.beginPath()
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "white";
    ctx.fill()
    ctx.closePath();
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
        Snake.vx = -1;
        Snake.vy = 0;
    }
    if (Event.key == "ArrowRight") {
        Snake.vx = 1;
        Snake.vy = 0;
    }
    if (Event.key == "ArrowUp") {
        Snake.vx = 0;
        Snake.vy = -1;
    }
    if (Event.key == "ArrowDown") {
        Snake.vx = 0;
        Snake.vy = 1;
    }
})