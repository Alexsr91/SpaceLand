const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 400;
canvas.height = 600;
canvas.x = 0;
canvas.y = 0;
/// Firts try!
let arrowUp = false;
let arrowLeft = false;
let arrowRight = false;

// let stop = false;

function cover(){
const cov = new Image
cov.src = './assets/corver.png'
ctx.drawImage(cov, canvas.x, canvas.y, canvas.width, canvas.height);
ctx.fillStyle = '#63DBBD';
            ctx.font = "24px PixelarRegularW01-Regular";
            ctx.fillText("PRESS ENTER TO START", canvas.width / 2 - 95, canvas.height - 60);
requestAnimationFrame(cover);
}

cover()



function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    spaceship.drawBackground();
    spaceship.drawData();
    spaceship.crash();
    spaceship.gameOver();
    spaceship.landed();
    spaceship.youWin();
    obstacle.drawObstacle();

    if (!spaceship.crashed) {
        spaceship.update();
        spaceship.drawSpaceShip();
        spaceship.impulse();
        spaceship.rightMove();
        spaceship.leftMove();
    }
    requestAnimationFrame(animate);
}



window.addEventListener('keydown', function (e) {
  if (e.code === 'ArrowUp') arrowUp = true;
     console.log(e.code);
    
});

window.addEventListener('keyup', function (e) {
        if (e.code === 'ArrowUp') arrowUp = false;
   
});

window.addEventListener('keydown', function (e) {
        if (e.code === 'ArrowLeft') arrowLeft = true;
});

window.addEventListener('keyup', function (e) {
        if (e.code === 'ArrowLeft') arrowLeft = false;
});

window.addEventListener('keydown', function (e) {
    if (e.code === 'ArrowRight') arrowRight = true;
});

window.addEventListener('keyup', function (e) {
    if (e.code === 'ArrowRight') arrowRight = false;
});


window.addEventListener('keydown', function (e) {
    if (e.code === 'Enter')
    animate();
  });

  window.addEventListener('keydown', function (e) {
    if (e.code === 'KeyR')
    restart();
  });
    
  