class Spaceship {
    constructor() {
        // Spaceship Size
        this.width = 20;
        this.height = 10;
        //Position
        this.x = 110;
        this.y = 0;
        
        //Forces
        this.gravity = 0.02;
        this.acceleration = 0
        this.friction = 0.79;
        this.vy = 0;
        //Left and rigth
        this.vx = 0;
        this.orizontalSpeed = 0;
        this.xFriction = 0.1;
        this.floorForce = 0;
        //GAME OVER
        this.stop = false

    }

    //Postion element arround Ship
    
    update() {



        // console.log(this.vy);


        if (arrowUp) this.impulse();
        if (!arrowUp) this.acceleration = 0;



        // // Obstacle Colision Sides Right
        if (this.x < obstacle.x + obstacle.width && this.x + this.width > obstacle.x && this.y + this.height > obstacle.y + 10) {
            this.vy = -this.vy * this.friction;
            this.vx = -10;

        }
        // Obstacle Colision Sides LEFT
        if (this.x + this.width > obstacle.x && this.x + this.width < obstacle.x + obstacle.width && this.y + this.height > obstacle.y + 10) {

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
//// Game Over Functions
    crash() {
        console.log("this.stop", this.stop)
        let SpeedCoubter = Math.round(this.vy.toFixed(2) * 10)
        if (SpeedCoubter > 10 && this.y + this.height > canvas.height) {
            this.stop = true
        }

    }

    gameOver() {
        let eX = this.x
        let eY = this.y

        if (this.stop) {
            const image = new Image
           
            image.src = './assets/explotion.png'
            ctx.fillStyle = "red"
            //ctx.fillText("Test",20,20)
           // ctx.clearRect(eX - 10, eY - 20, 40, 40)
           ctx.drawImage(image, this.x-10, this.y-20, 40, 40);

            ctx.font = "24px PixelarRegularW01-Regular";
            ctx.fillText("GAME OVER ", canvas.width / 2 - 40, canvas.height / 2);
        }
    }


///////STATS
    drawData() {
        ctx.fillStyle = 'white';
        let verticalSpeed = this.vy.toFixed(2) * 10
        ctx.font = "24px PixelarRegularW01-Regular";
        ctx.fillText("Y: " + Math.round(verticalSpeed), 16, 24);

        let orizontalSpeed = this.vx.toFixed(2) * 10
        ctx.font = "24px PixelarRegularW01-Regular";
        ctx.fillText("X: " + Math.round(orizontalSpeed), 16, 48);
/*
        let fuelCounter = 100
        
        
            for (i = 0; i < fuelCounter; i++){
            fuelCounter -= -1;
        }
        
        ctx.font = "24px PixelarRegularW01-Regular";
        ctx.fillText(fuelCounter, canvas.width-40,  23);
*/
        
    }

//////
    drawSpaceShip() {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height)
        if (this.x > canvas.width) {
            ctx.fillRect(this.x = canvas.x, this.y, this.width, this.height)
        } else if (this.x < canvas.x) {
            ctx.fillRect(this.x = canvas.width, this.y, this.width, this.height)
        }
    }

    drawBackground() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, 800, 1200)
    }

    impulse() {
        this.acceleration = -0.05;
    }

    leftMove() {

        //console.log(this.orizontalSpeed)
        if (arrowLeft) {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x + this.width, this.y, 5, 5)
            this.orizontalSpeed = -0.1 - this.floorForce;
        } else if (!arrowRight) {
            ctx.fillStyle = 'black';
            ctx.clearRect(this.x + this.width, this.y, 5, 5)
            this.orizontalSpeed = 0;
        }
    }

    rightMove() {
        //console.log(this.orizontalSpeed);
        if (arrowRight) {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x - 5, this.y, 5, 5)
            this.orizontalSpeed = 0.1 + this.floorForce;
        } else if (!arrowLeft) {
            ctx.clearRect(this.x - 5, this.y, 5, 5)
            this.orizontalSpeed = 0;
        }
    }




}

const spaceship = new Spaceship();