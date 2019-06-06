/**
 * This class tracks the location of Food for the snake
 */
class Food {
    constructor(snakePositions, boardWidth, boardHeight) {

        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;

        // this.position = this.newPosition();
        this.position = { x: 0, y: 0 }
        while (snakePositions.filter(pos => pos.x === this.position.x && pos.y === this.position.y).length > 0) {
            this.position = this.newPosition()
        }

        console.log(this.position)
    }

    newPosition() {
        return {
            x: Math.floor(Math.random() * this.boardWidth),
            y: Math.floor(Math.random() * this.boardHeight)
        }
    }

    getPos() {
        return this.position;
    }
}