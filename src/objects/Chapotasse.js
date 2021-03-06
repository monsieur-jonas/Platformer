class Chapotasse extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "chapotasse");

        this.body.allowGravity=true;

        this.setOrigin(0,0);
        this.setDisplaySize(60,60);
        this.setCollideWorldBounds(true);
        this.setBounce(1);
        this.setGravityY(1000);
        this.setVelocityX(40);

        //scene.physics.add.collider(this, scene.platforms)
        //scene.physics.add.collider(this, scene.walls)
        }
        
    }
