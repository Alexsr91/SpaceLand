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
        const obs = new Image
        obs.src = './assets/obstacle.png'
        ctx.drawImage(obs, this.x, this.y, this.width, this.height);
    }
}

const obstacle = new Obstacle
