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
        this.dir = 1;
        this.isAlive = true;
        this.body.allowGravity=true;

        //this.physics.add.sprite(300,this.sys.canvas.height-70,"monster-zombie");
        this.scale = 1;
        this.setCollideWorldBounds(true);
        this.setBounceX(1);
        this.setOffset(-15,0)
        this.setBodySize(this.body.width/2,this.body.height);
        scene.time.addEvent({ delay: 1000, callback: this.move, callbackScope: this, loop: true });
        this.move = true;
        //this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);

         this.anims.create({
             key: 'move',
             frames: this.anims.generateFrameNumbers('kevin', { start: 9, end: 15 }),
             frameRate: 7,
             repeat: -1,
         });
        this.anims.create({
            key: 'stand',
            frames: this.anims.generateFrameNumbers('kevin', { start: 0, end: 8 }),
            frameRate: 7,
            repeat: -1
            // frames: [ { key: 'player', frame: 1 } ],
            // frameRate: 20
        });

        this.anims.play('stand',true);



    }
    move(){
      this.pos();
      if(this.dir>0){
            this.anims.play('move', true);
            this.flipX =true;
        }else{
            this.anims.play('move', true);
            this.flipX =false;
        }

        if(this.isAlive) {
            if (this.scene.player.x > this.x - 300 && this.scene.player.x < this.x + 300  &&  this.scene.player.y > this.y - 150 && this.scene.player.y < this.y + 150 /*&& this.scene.player.y > this.y - 200 && this.scene.player.y < this.y + 25*/) {
                //this.runPatSound.play({volume:0.5});
                //if(this.scene.player.y>this.y){
                this.setVelocityX(100 * this.dir);
                if(this.dir>0){
                    this.anims.play('move', true);
                    this.flipX =true;
                }else{
                    this.anims.play('move', true);
                    this.flipX =false;

                }

                //}
                /*else if(this.scene.player.y<this.y){
                    this.setVelocityY(200);
                }*/

            }
            else{
                this.setVelocityX(0);
                this.anims.play('stand',true);
            }
        }

    }
    pos(){
            if (this.x < this.scene.player.x)
            {
                this.dir = 1;
            }
            else if (this.x > this.scene.player.x)
            {
                this.dir = -1;
            }
        }

    /*update()
    {
      this.move();
    }*/


    stop()
    {
        this.setVelocityX(0);
        this.setVelocityY(0);
        this.directionY=0;
        this.directionX=0;
    }
}
