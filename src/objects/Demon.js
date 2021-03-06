class Demon extends ObjetEnnemi{
    /**
     * 
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "demon");

        //à partir du spritesheet (bird.json) génère une animation
        // scene.anims.create({
        //     key: 'demonstand',
        //     repeat: -1,
        //     frameRate:30,
        //     frames: scene.anims.generateFrameNames('demon', {
        //         prefix: 'stand',
        //         end: 22,
        //         zeroPad: 4
        //     })
        // });


      
        this.body.allowGravity=true;
        this.setBodySize(40,40);
        this.setBounceX(1);
        this.body.setMaxVelocityX(150)
        this.setVelocityX(-150);
        this.setCollideWorldBounds(true);
        this.play("demonstand");
        this.scene.events.on('update', (time, delta) => { this.update(time, delta)} );

    }

    update(){
        //fait changer de sens notre oiseau
        if(this.body){
            if(this.body.velocity.x<0){
                this.flipX=false;
            }else{
                this.flipX=true;
            }
        }

    }


}