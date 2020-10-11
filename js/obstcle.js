class Obstacle{
    constructor(){
         // Obs Size
         this.width = 50;
         this.height = 150;
         //Position
         this.x = 175;
         this.y = 500;
    }

    drawObstacle() {
        ctx.fillStyle = 'grey';
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

const obstacle = new Obstacle
