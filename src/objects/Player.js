class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y) {
        super(scene, x, y, "player")
        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.setCollideWorldBounds(true)
        
        this.setBounce(0);
        this.setGravityY(400)
        this.setFriction(1);
        this.scale = 0.8;

        this.setBodySize(this.body.width-6,this.body.height-10);
        this.setOffset(3, 10);

        // this.anims.create({
        //     key: 'left',
        //     frames: this.anims.generateFrameNumbers('player', { start: 14, end: 16 }),
        //     frameRate: 7,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'right',
        //     frames: this.anims.generateFrameNumbers('player', { start: 11, end: 13 }),
        //     frameRate: 7,
        //     repeat: -1
        // });
        this.anims.create({
            key: 'stand',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 16 }),
            frameRate: 7,
            repeat: -1
            // frames: [ { key: 'player', frame: 1 } ],
            // frameRate: 20
        });

        this._directionX=0;
        this._directionY=0;


    }

    set directionX(value){
        this._directionX=value;
    }
    set directionY(value){
        this._directionY=value;
    }

    /**
     * arrête le joueur
     */
    stop(){
        this.setVelocityX(0);
        this.setVelocityY(0);
        this.directionY=0;
        this.directionX=0;
    }

    /**
     * Déplace le joueur en fonction des directions données
     */
    move(){

        switch (true){
            case this._directionX<0:
                this.setVelocityX(-160);
                this.anims.play('left', true);
                this.flipX =true;
                break;
            case this._directionX>0:

                this.setVelocityX(160);
                this.anims.play('right', true);
                this.flipX =false;
                break;
            default:
                
                this.anims.play('stand', true);
                this.setVelocityX(0);
                break;
        }

        if(this._directionY<0){
            if(this.body.blocked.down || this.body.touching.down){
                this.setVelocityY(-370);
            }
        }

        // if(this.body.velocity.x == 0){
        //         this.anims.play('stand')}


    }
    shootBeam()
    {
        var bullet = new Tir(this.scene,this.x, this.y);
        console.log("Tir");
    }


}