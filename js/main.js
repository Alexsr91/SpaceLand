const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 600;
canvas.height = 400;

/// Firts try!
let spacePressed = false;
/*
let angle = 0;
let gravity = 0.5;
let friction = 0; 
*/
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    spaceship.update();
    spaceship.draw();
    requestAnimationFrame(animate);
}

animate();
window.addEventListener('keydown', function(e){
    if (e.code === 'Space') spacePressed = true;
});

window.addEventListener('keyup', function(e){
    if (e.code === 'Space') spacePressed = false;
    
});