/**
 * This class tracks data about the Snake including:
 * movement direction
 * current position
 * tail locations
 * 
 */
class Snake {
    constructor(BOARD_WIDTH, BOARD_HEIGHT) {
        this.positions = [
            {
                x: BOARD_WIDTH/2,
                y: BOARD_HEIGHT/2
            },
        ]
        this.speed = {
            xspeed: 1,
            yspeed: 0
        }
        this.newSpeed = {
            xspeed: 1,
            yspeed: 0
        }
        this.gameOver = false;
        this.boardWidth = BOARD_WIDTH;
        this.boardHeight = BOARD_HEIGHT;
    }

    // ---------- Getters ----------

    // Return snake's positions as an array
    getPos() {
        return this.positions;
    }

    // ---------- Setters ----------

    // Move the snake
    move(foodLocation) {
        this._setNewSpeed();

        let temp = Object.assign({}, this.positions[0]);

        temp.x += this.speed.xspeed;
        temp.y += this.speed.yspeed;

        if (this.positions
            .filter(pos => pos.x === temp.x && pos.y === temp.y).length > 0 ||
            temp.x < 0 || this.boardWidth <= temp.x ||
            temp.y < 0 || this.boardHeight <= temp.y
        ) {
            this.gameOver = true;
        }
        if (this.gameOver) return;


        this.positions.unshift(temp)

        let distToFood = Math.sqrt(
            Math.pow(this.positions[0].x - foodLocation.x, 2) +
            Math.pow(this.positions[0].y - foodLocation.y, 2)
        );
        if (distToFood === 0) {
            return true;
        } else {
            this.positions.pop();
            return false;
        }
    }

    // Change snake's direction
    _setNewSpeed() {
        // change this.speed according to this.newSpeed
        // restrict according to current direction

        if (this.speed.xspeed !== -1 * this.newSpeed.xspeed ||
            this.speed.yspeed !== -1 * this.newSpeed.yspeed) {
            this.speed = this.newSpeed;
        }
    }

    // Set next direction
    changeDirection(dir) {
        // set this.newSpeed according to input
        switch (dir) {
            case 37:
                this.newSpeed = {
                    xspeed: -1,
                    yspeed: 0
                }
                break;

            case 38:
                this.newSpeed = {
                    xspeed: 0,
                    yspeed: -1
                }
                break;

            case 39:
                this.newSpeed = {
                    xspeed: 1,
                    yspeed: 0
                }
                break;

            case 40:
                this.newSpeed = {
                    xspeed: 0,
                    yspeed: 1
                }
                break;
        }
    }
}