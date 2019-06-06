/**
 * This class tracks data about the Snake including:
 * movement direction
 * current position
 * tail locations
 * 
 */
class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;
    }

    // ---------- Getters ----------

    // Return snake's position
    getPos() {
        return {
            x: this.x,
            y: this.y
        }
    }

    getDirection() {
        return {
            xspeed: this.xspeed,
            yspeed: this.yspeed
        }
    }


    // ---------- Setters ----------
}