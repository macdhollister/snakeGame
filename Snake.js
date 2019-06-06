/**
 * This class tracks data about the Snake including:
 * movement direction
 * current position
 * tail locations
 * 
 */
class Snake {
    constructor() {
        this.positions = [
            {
                x: 6,
                y: 0
            },
            {
                x: 5,
                y: 0
            },
            {
                x: 4,
                y: 0
            },
            {
                x: 3,
                y: 0
            },
            {
                x: 2,
                y: 0
            },
            {
                x: 1,
                y: 0
            },
            {
                x: 0,
                y: 0
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
    }

    // ---------- Getters ----------

    // Return snake's positions as an array
    getPos() {
        return this.positions;
    }

    // ---------- Setters ----------

    // Move the snake
    move(boardWidth, boardHeight) {
        this._setNewSpeed();

        let temp = Object.assign({}, this.positions[0]);

        temp.x += this.speed.xspeed;
        temp.y += this.speed.yspeed;

        if (this.positions
            .filter(pos => pos.x === temp.x && pos.y === temp.y).length > 0 ||
            temp.x < 0 || boardWidth <= temp.x ||
            temp.y < 0 || boardHeight <= temp.y
            ) {
                this.gameOver = true;
        }
        if (this.gameOver) return;


        this.positions.unshift(temp)

        this.positions.pop();
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