class Spaceship {
    constructor() {
        // Spaceship Size
        this.width = 40;
        this.height = 20;
        //Position
        this.x = 300;
        this.y = 0;
        //Forces
        this.gravity = 0.02;
        this.acceleration = 0
        this.friction = 0.99;
        this.vy = 0.5;
        //Left and rigth
        this.vx = 0;
        this.orizontalSpeed = 0;
        this.xFriction = 0.1;
        this.floorForce = 0;
        
    }

    update() {

        console.log(this.vy);

    
     

        if (arrowUp) this.impulse();
        if (!arrowUp) this.acceleration = 0;
        /*
        if(this.vy<-0.0001){
            this.friction = 0.50;
        }else{
           
            }
*/
          // Obstacle Colision Sides
          if (this.x + this.width > obstacle.x && this.y + this.height > obstacle.y + this.height) {
            this.vx = -this.vx * this.friction;
            
        } else {
            this.vy -= this.gravity
            this.floorForce = 0;
        }
       
        

        // Obstacle Colision Bottom
        if (this.y + this.height > obstacle.y && this.x + this.width > obstacle.x && this.x + this.width < obstacle.x + obstacle.width) {
            this.vy = -this.vy * this.friction;
            this.vx = -this.vx * this.xFriction;
            this.floorForce = 0.5;
       
        }else{
            this.vy += this.gravity
            this.floorForce = 0;
        }
        this.vy += this.acceleration
        this.y += this.vy;


        // Floor Colision        
        if (this.y + this.height > canvas.height) {
            this.vy = -this.vy * this.friction;
            this.floorForce = 0.5;
        } else {
            this.vy += this.gravity
            this.floorForce = 0;
        }
        this.vy += this.acceleration
        this.y += this.vy;


        // floor friction
        if (this.y + this.height > canvas.height) {
            this.vx = -this.vx * this.xFriction;

        }
        // Orizontal force
        this.vx += this.orizontalSpeed;
        this.x += this.vx

    }

    drawSpaceShip() {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    drawBackground() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, 800, 1200)
    }

    impulse() {
        this.acceleration = -0.04;
    }

    leftMove() {

        console.log(this.orizontalSpeed)
        if (arrowLeft) {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x + this.width, this.y, 10, 10)
            this.orizontalSpeed = -0.1 - this.floorForce;
        } else if (!arrowRight) {
            ctx.fillStyle = 'black';
            ctx.clearRect(this.x + this.width, this.y, 10, 10)
            this.orizontalSpeed = 0;
        }
    }

    rightMove() {
        console.log(this.orizontalSpeed);
        if (arrowRight) {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x - 10, this.y, 10, 10)
            this.orizontalSpeed = 0.1 + this.floorForce;
        } else if (!arrowLeft) {
            ctx.clearRect(this.x - 10, this.y, 10, 10)
            this.orizontalSpeed = 0;
        }
    }

}

const spaceship = new Spaceship();