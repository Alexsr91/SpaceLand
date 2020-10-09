class Obstacle{
    constructor(){
         // Obs Size
         this.width = 100;
         this.height = 300;
         //Position
         this.x = 300;
         this.y = 900;
    }

    drawObstacle() {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

const obstacle = new Obstacle
