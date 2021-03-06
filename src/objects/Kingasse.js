class Kingasse extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "kingasse");

        this.body.allowGravity=true;

        this.setOrigin(0,20);
        this.setDisplaySize(70,70);
        this.setCollideWorldBounds(true);
        this.setBounce(0.4);
        this.setGravityY(5000);
        this.setVelocityX(20);
    
        }
    }
