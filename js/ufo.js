class Ufo {
    constructor() {
        // Spaceship Size
        this.width = 15;
        this.height = 15;
        //Position
        this.x = 0;
        this.y = 250;

      
        this.vx = 0;
        this.orizontalSpeed = Math.floor(Math.random() * 10) + 2;
    }

    drawUfo() {

            this.vx = this.orizontalSpeed;
            this.x += this.vx 

            const ufo= new Image
       ufo.src = './assets/UFO_game.png'
       ctx.drawImage(ufo, this.x, this.y, this.width, this.height);
         
       
        if (this.x > canvas.width) {
            ctx.drawImage(ufo, this.x = canvas.x, this.y, this.width, this.height);
        } else if (this.x < canvas.x) {
            ctx.drawImage(ufo, this.x = canvas.width, this.y, this.width, this.height);
        }
    }

    restart(){
            
            this.width = 15;
            this.height = 15;
            //Position
            this.x = 0;
            this.y = 250;
    
          
            this.vx = 0;
            this.orizontalSpeed = Math.floor(Math.random() * 10) + 2;
    }
}

const ufo = new Ufo();