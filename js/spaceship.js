class Spaceship {
    constructor() {
        // Spaceship Size
        this.width = 20;
        this.height = 20;
        //Position
        this.x = 110;
        this.y = 0;

        //Forces
        this.gravity = 0.02;
        this.acceleration = 0
        this.friction = 0.89;
        this.vy = 0;
        //Left and rigth
        this.vx = 0;
        this.orizontalSpeed = 0;
        this.xFriction = 0.1;
        this.floorForce = 0;
        //GAME OVER
        this.crashed = false
        this.fuel = 100
        this.fuelCounter = 0
        this.explosionFrame = 0;
        this.win = false
    }

    //Postion element arround Ship

    update() {
        // console.log(this.vy);

        // // Obstacle Colision Sides Right
        if (this.x < obstacle.x + obstacle.width && this.x + this.width > obstacle.x && this.y + this.height > obstacle.y + 4) {
            this.vy = -this.vy * this.friction;
            this.vx = -10;

        }
        // Obstacle Colision Sides LEFT
        if (this.x + this.width > obstacle.x && this.x + this.width < obstacle.x + obstacle.width && this.y + this.height > obstacle.y + 4) {
            this.vx = 10;
        }

        // Obstacle Colision TOP
        if (this.y + this.height > obstacle.y && this.x + this.width > obstacle.x && this.x + this.width < obstacle.x + obstacle.width + this.width) {
            this.vy = -this.vy * this.friction;
            this.vx = -this.vx * this.xFriction;
            this.floorForce = 0.5;
        }

        // Floor Colision        
        if (this.y + this.height > canvas.height) {
            this.vy = -this.vy * this.friction;
            this.floorForce = 0.5;
        } else {
            this.vy += this.gravity
            this.floorForce = 0;
        }

        // floor friction
        if (this.y + this.height > canvas.height) {
            this.vx = -this.vx * this.xFriction;

        }

        //Vetical force
        this.vy += this.acceleration
        this.y += this.vy;

        // Orizontal force
        this.vx += this.orizontalSpeed;
        this.x += this.vx

    }
    /// YOU WIN
    landed(){
        let SpeedCoubter = Math.round(this.vy.toFixed(2) * 10)
        if (SpeedCoubter === 0 && this.x < obstacle.x + obstacle.width && this.x + this.width > obstacle.x && this.y + this.height > obstacle.y + 1) {
         this.win = true
        }
    }

    youWin(){
        if (this.win){
            ctx.fillStyle = '#63DBBD';
            ctx.font = "40px PixelarRegularW01-Regular";
            ctx.fillText("YOU WIN", canvas.width / 2 - 60, canvas.height / 2);
            this.gravity = 0;
            this.orizontalSpeed = 0;
            console.log(this.gravity,this.orizontalSpeed);
            }
        }
        
    


    //// Game Over Functions
    crash() {
        let SpeedCoubter = Math.round(this.vy.toFixed(2) * 10)
        if (SpeedCoubter > 10 && this.y + this.height > canvas.height) {
            this.crashed = true
        }else if (SpeedCoubter > 10 && this.x + this.width > obstacle.x && this.x + this.width < obstacle.x + obstacle.width && this.y + this.height > obstacle.y + 1){
            this.crashed = true
        }else if(SpeedCoubter > 10 && this.x < obstacle.x + obstacle.width && this.x + this.width > obstacle.x && this.y + this.height > obstacle.y + 1){
            this.crashed = true
        }else if(SpeedCoubter > 10 && this.y + this.height > obstacle.y && this.x + this.width > obstacle.x && this.x + this.width < obstacle.x + obstacle.width + this.width ){
            this.crashed = true
        }
    }

    gameOver() {
        if (this.crashed) {

            const explosion = new Image

            explosion.src = './assets/explotionsheet.png'

            ctx.drawImage(explosion, this.explosionFrame * 40, 0, 40, 40, this.x - 10, this.y - 20, 50, 50);
            this.explosionFrame++
            ctx.fillStyle = 'white';
            ctx.font = "40px PixelarRegularW01-Regular";
            ctx.fillText("GAME OVER", canvas.width / 2 - 70, canvas.height / 2);
        }
    }


    ///////STATS
    drawData() {
        ctx.fillStyle = '#63DBBD';
        let verticalSpeed = this.vy.toFixed(2) * 10
        ctx.font = "24px PixelarRegularW01-Regular";
        ctx.fillText("SPEED: " + Math.abs(Math.round(verticalSpeed)), 16, 24);

      /*  let orizontalSpeed = this.vx.toFixed(2) * 101
        ctx.font = "24px PixelarRegularW01-Regular";
        ctx.fillText("X: " + Math.round(orizontalSpeed), 16, 48);
    */
        this.fuel -= this.fuelCounter

        if (this.fuel > 0) {
            ctx.font = "24px PixelarRegularW01-Regular";
            ctx.fillText(Math.round(this.fuel), canvas.width - 40, 23);
        } else {
            ctx.font = "24px PixelarRegularW01-Regular";
            ctx.fillText("OUT OF FUEL", canvas.width - 125, 23);
        }

    }

    //////Cotrolers
    drawSpaceShip() {
      /*  ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height)
        if (this.x > canvas.width) {
            ctx.fillRect(this.x = canvas.x, this.y, this.width, this.height)
        } else if (this.x < canvas.x) {
            ctx.fillRect(this.x = canvas.width, this.y, this.width, this.height)
        }
        */
       const spx = new Image
       spx.src = './assets/spaceship.png'
       ctx.drawImage(spx, this.x, this.y, this.width, this.height);
       if (this.x > canvas.width) {
        ctx.drawImage(spx, this.x = canvas.x, this.y, this.width, this.height)
    } else if (this.x < canvas.x) {
        ctx.drawImage(spx, this.x = canvas.width, this.y, this.width, this.height)
    }
    }

    drawBackground() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, 800, 1200)

        const bG = new Image

        bG.src = './assets/BG_game.png'

        ctx.drawImage(bG, 0, 0, 400, 600);
    }

    impulse() {
        if (arrowUp && this.fuel > 0 && !this.win) {
            this.acceleration = -0.05;
            this.fuelCounter = +0.5
        } else if (!arrowUp) {
            this.acceleration = 0;
            this.fuelCounter = +0;
        }

    }


    leftMove() {

        //console.log(this.orizontalSpeed)
        if (arrowLeft && this.fuel > 0) {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x + this.width, this.y, 5, 5)
            this.orizontalSpeed = -0.1 - this.floorForce;
            this.fuelCounter = +0.5
        } else if (!arrowRight) {
            ctx.clearRect(this.x + this.width, this.y, 5, 5)
            this.orizontalSpeed = 0;
            this.fuelCounter = +0
        }
    }

    rightMove() {
        //console.log(this.orizontalSpeed);
        if (arrowRight && this.fuel > 0) {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x - 5, this.y, 5, 5)
            this.orizontalSpeed = 0.1 + this.floorForce;
            this.fuelCounter = + 0.5
        } else if (!arrowLeft) {
            ctx.clearRect(this.x - 5, this.y, 5, 5)
            this.orizontalSpeed = 0;
            this.fuelCounter = +0
        }
    }

}

const spaceship = new Spaceship();