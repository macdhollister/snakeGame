// Environment Variables
const BOARD_WIDTH = 14;
const BOARD_HEIGHT = 14;
const GRID_SIZE = 50;

const sn = new Snake(BOARD_WIDTH, BOARD_HEIGHT);
let food = new Food(sn.getPos(), BOARD_WIDTH, BOARD_HEIGHT);

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

    sn.changeDirection(key);
    // console.log(key);
}

// New frame every 200 milliseconds
setInterval(() => {
    // clear the canvas
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    sn.move();

    // Paint food (before snake)
    ctx.fillStyle = '#1fa51f';
    ctx.fillRect(food.getPos().x * GRID_SIZE, food.getPos().y * GRID_SIZE, GRID_SIZE, GRID_SIZE);

    // repaint canvas with new snake position
    let positions = sn.getPos();
    ctx.fillStyle = '#ff0000' // red
    ctx.fillRect(positions[0].x * GRID_SIZE + 5, positions[0].y * GRID_SIZE + 5, 4*GRID_SIZE/5, 4*GRID_SIZE/5)

    ctx.fillStyle = '#ffffff';
    for (let i = 1; i < positions.length; i++) {
        ctx.fillRect(positions[i].x * GRID_SIZE + GRID_SIZE/20, positions[i].y * GRID_SIZE + GRID_SIZE/20, 9*GRID_SIZE/10, 9*GRID_SIZE/10)
    }
}, 100);