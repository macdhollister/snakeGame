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
                x: 0,
                y: 0
            }
        ]

        this.speed = {
            xspeed: 1,
            yspeed: 0
        }

        this.newSpeed = {
            xspeed: 1,
            yspeed: 0
        }
    }

    // ---------- Getters ----------

    // Return snake's positions as an array
    getPos() {
        return this.positions;
    }

    // ---------- Setters ----------

    move() {
        this._setNewSpeed();

        let temp = Object.assign({}, this.positions[0]);

        temp.x += this.speed.xspeed;
        temp.y += this.speed.yspeed;

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