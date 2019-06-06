/**
 * This class tracks data about the Snake including:
 * movement direction
 * current position
 * tail locations
 * 
 */
class Snake {
    constructor() {
        this.position = {
            x: 0,
            y: 0
        }
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

    // Return snake's position
    getPos() {
        return this.position;
    }

    // ---------- Setters ----------

    move() {
        this._setNewSpeed();
        this.position.x += this.speed.xspeed;
        this.position.y += this.speed.yspeed;
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