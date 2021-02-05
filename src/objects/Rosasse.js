class Rosasse extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "rosasse");

        this.body.allowGravity=true;

        this.setOrigin(0,0);
        this.setDisplaySize(50,50);
        this.setCollideWorldBounds(true);
        this.setBounce(1);
        this.setGravityY(1000);
        this.setVelocityX(60);

        //scene.physics.add.collider(this, scene.platforms)
        //scene.physics.add.collider(this, scene.walls)
        }
    }
