class Spaceship{
    constructor(){
        this.x = 150;
        this.y = 200;
        this.gravity = 0.05;
        this.acceleration = 0
        this.friction = 0.4;
        this.vy = 1;
        this.width = 20;
        this.height = 20;
       // this.weight = 1;
    }

    update(){

        if (spacePressed) this.impulse();
        if (!spacePressed) this.acceleration = 0
        
        
        if (this.y + this.height > canvas.height){
            this.vy = -this.vy * this.friction;            
        }else{
            this.vy += this.gravity
        }
        this.vy += this.acceleration
        this.y += this.vy;
        //if(this.y + this.height > canvas.height) this.y = canvas.height - this.height

    }
        /*
        if (this.y > canvas.height - this.height){ 
            this.y = canvas.height - this.height;
            this.vy -= 0;
        }else{
            this.vy += this.weight;
            this.vy *= this.gravity;
            this.y += this.vy;
        }
        if (spacePressed) this.impulse();
    }
    */
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    impulse(){
       // this.y -= 3;
        //this.y = canvas.height - 50
        this.acceleration = -0.1
       
    }
}

const spaceship = new Spaceship();