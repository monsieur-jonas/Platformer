class Boulasse extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "boulasse");

        this.body.allowGravity=true;

        this.setOrigin(0,50);
        this.setDisplaySize(64,64);
        this.setCollideWorldBounds(true);
        this.setBounce(1);
        this.setVelocityX(50);

        //scene.physics.add.collider(this, scene.platforms)
        //scene.physics.add.collider(this, scene.walls)
        }
    }
