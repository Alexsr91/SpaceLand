const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 800;
canvas.height = 1200;

/// Firts try!
let arrowUp = false;
let arrowLeft = false;
let arrowRight = false;
/*
let angle = 0;
let gravity = 0.5;
let friction = 0; ArrowLeft
*/
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    spaceship.update();
    spaceship.drawBackground();
    spaceship.drawSpaceShip();
    spaceship.rightMove();    
    spaceship.leftMove();
    obstacle.drawObstacle();
    
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('keydown', function(e){
    if (e.code === 'ArrowUp') arrowUp = true;
    console.log(e.code);
});

window.addEventListener('keyup', function(e){
    if (e.code === 'ArrowUp') arrowUp = false;
    
});

window.addEventListener('keydown', function(e){
    if (e.code === 'ArrowLeft') arrowLeft = true; 
});

window.addEventListener('keyup', function(e){
    if (e.code === 'ArrowLeft') arrowLeft = false;
});

window.addEventListener('keydown', function(e){
    if (e.code === 'ArrowRight') arrowRight = true;
});

window.addEventListener('keyup', function(e){
    if (e.code === 'ArrowRight') arrowRight = false;
});