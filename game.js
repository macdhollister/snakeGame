const sn = new Snake();

// Environment Variables
const BOARD_WIDTH = 14;
const BOARD_HEIGHT = 14;
const GRID_SIZE = 50;

// Create canvas and context variables
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.setAttribute('width', BOARD_WIDTH * GRID_SIZE);
canvas.setAttribute('height', BOARD_HEIGHT * GRID_SIZE);

// Fill black background
ctx.fillStyle = "#000000";
ctx.fillRect(0,0,canvas.width,canvas.height);

// Change snake's direction
window.onkeydown = function(e) {
    const key = e.keyCode;
    if (36 < key && key < 41) e.preventDefault();

    // sn.setDirection(key);
    console.log(key);
}

// New frame every 200 milliseconds
setInterval(() => {
    // clear the canvas
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    






    // repaint canvas with new snake position
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(sn.getPos().x * GRID_SIZE, sn.getPos().y * GRID_SIZE, 50, 50)
}, 200);