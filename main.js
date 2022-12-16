var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x = 15;
var y = 15;
var gS = 30;

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

    if (Snake.alive) {
        setTimeout(draw, 100)
    }
}

class Snake{
    constructor(length){
        this.length = length;
        this.snake = []
        this.vx = 1;
        this.vy = 0;
        this.alive = true;
        this.eaten = false;
        this.food = []
        this.color = "#00acff"
        for (let i = 0; i < this.length; i++) {
            this.snake[i] = [i, Math.floor(y-y/2)]
        }
        this.snake.reverse()
        this.eat()
    }
    draw(){
        block(this.food[0], this.food[1], "#ffac00")
        for(let i = 0; i < this.snake.length; i++) {
            block(this.snake[i][0], this.snake[i][1], this.color)
        }
    }
    move(){
        this.collide()
        this.snake.unshift([this.snake[0][0]+this.vx, this.snake[0][1]+this.vy])
        if(!this.eaten) {
            this.snake.pop()
        }
        if(this.eaten) {
            this.eaten = false;
        }
    }
    collide(){
        if(this.snake[0][0] < 0 || this.snake[0][0] > x-1 || this.snake[0][1] < 0 || this.snake[0][1] > y-1) {
            this.color = "#ff0000"
            this.draw()
            this.alive = false;
        }
        if(this.food[0] == this.snake[0][0] && this.food[1] == this.snake[0][1]){
            this.eaten = true;
            this.food = []
            this.eat()
            console.log(this.snake.length)
        }
    }
    eat(){
        this.food.push(Math.floor(Math.random() * x), Math.floor(Math.random() * y))
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
        if (Snake.vx != 1) {
            Snake.vx = -1;
            Snake.vy = 0;
        }
    }
    if (Event.key == "ArrowRight") {
        if (Snake.vx != -1) {
            Snake.vx = 1;
            Snake.vy = 0;
        }
    }
    if (Event.key == "ArrowUp") {
        if (Snake.vy != 1) {
            Snake.vx = 0;
            Snake.vy = -1;
        }
    }
    if (Event.key == "ArrowDown") {
        if (Snake.vy != -1) {
            Snake.vx = 0;
            Snake.vy = 1;
        }
    }
})