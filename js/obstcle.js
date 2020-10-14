class Obstacle{
    constructor(){
         // Obs Size
         this.width = 50;
         this.height = 150;
         //Position
         this.x = Math.floor(Math.random() * 220) + 80;
         this.y = 500;
    }

    drawObstacle() {
        const obs = new Image
        obs.src = './assets/obstacle.png'
        ctx.drawImage(obs, this.x, this.y, this.width, this.height);
    }

    restart(){

          // Obs Size
          this.width = 50;
          this.height = 150;
          //Position
          this.x = Math.floor(Math.random() * 220) + 80;
          this.y = 500;

    }
}

const obstacle = new Obstacle
