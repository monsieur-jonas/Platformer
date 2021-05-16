class Bryan extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {                                                              
        super(scene, x, y,"bryan");                                                       
        //pas de gravité
        this.body.allowGravity=true;
        
        //this.physics.add.sprite(300,this.sys.canvas.height-70,"monster-zombie");
        this.scale = 0.75;
        this.setCollideWorldBounds(true);
        this.setBounceX(1);
        //this.setBodySize(this.body.width,this.body.height);
        this.setVelocityX(-40*(Math.random()+1.5));
        this.move = true;
        //this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);

        // this.anims.create({
        //     key: 'move',
        //     frames: this.anims.generateFrameNumbers('kevin', { start: 7, end: 10 }),
        //     frameRate: 4,
        //     repeat: -1,
        // });
        // this.anims.play('move', true);


    }

    update(player)
    {
        if(this.body)
        {
            if(this.body.velocity.x < 0)
            {
                this.flipX=true;
                if(this.move)
                {
                    this.setVelocityX(-40*(Math.random()+1.5));
                    this.move = false;
                }
            }
            else
            {
                this.flipX=false;
                if(!this.move)
                {
                    this.setVelocityX(40*(Math.random()+1.5));
                    this.move = true;
                }
            }
        }

       
    }

    
    stop()
    {
        this.setVelocityX(0);
        this.setVelocityY(0);
        this.directionY=0;
        this.directionX=0;
    }
}