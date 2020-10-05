class Spaceship {
    constructor() {
        // Spaceship Size
        this.width = 20;
        this.height = 20;
        //Position
        this.x = 300;
        this.y = 200;
        //Forces
        this.gravity = 0.04;
        this.acceleration = 0
        this.friction = 0.66;
        this.vy = 1;
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
        ctx.fillRect(0, 0, 600, 400)
    }

    impulse() {
        this.acceleration = -0.07;
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
            ctx.fillRect(this.x -10, this.y, 10, 10)
            this.orizontalSpeed = 0.1 + this.floorForce;
        } else if (!arrowLeft) {
            ctx.clearRect(this.x -10, this.y, 10, 10)
            this.orizontalSpeed = 0;
        }
    }

}

const spaceship = new Spaceship();