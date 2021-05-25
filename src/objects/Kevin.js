class Kevin extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y,"kevin");
        //pas de gravité
        this.body.allowGravity=true;

        //this.physics.add.sprite(300,this.sys.canvas.height-70,"monster-zombie");
        this.scale = 1;
        this.setCollideWorldBounds(true);
        this.setBounceX(1);
        this.setOffset(-15,0)
        this.setBodySize(this.body.width/2,this.body.height);
        this.move = true;
        //this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);

        // this.anims.create({
        //     key: 'move',
        //     frames: this.anims.generateFrameNumbers('kevin', { start: 7, end: 10 }),
        //     frameRate: 4,
        //     repeat: -1,
        // });
        // this.anims.play('move', true);
        this.anims.create({
            key: 'stand',
            frames: this.anims.generateFrameNumbers('kevin', { start: 0, end: 9 }),
            frameRate: 7,
            repeat: -1
            // frames: [ { key: 'player', frame: 1 } ],
            // frameRate: 20
        });

        this.anims.play('stand',true);

    }

    update(player)
    {



    }


    stop()
    {
        this.setVelocityX(0);
        this.setVelocityY(0);
        this.directionY=0;
        this.directionX=0;
    }
}
