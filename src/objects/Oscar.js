class Oscar extends ObjetEnnemi{
  /**
  *
  * @param {Tableau} scene
  * @param x
  * @param y
  */
  constructor(scene, x, y) {
    super(scene, x, y,"oscar");
    //pas de gravité
    this.dir = 1;
    this.isAlive = true;
    this.dieOnce = false;
    this.body.allowGravity=true;
    this.isMoving = false;
    this.vie=3;
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
      frames: this.anims.generateFrameNumbers('oscar', { start: 20, end: 29 }),
      frameRate: 7,
      repeat: -1,
    });
    this.anims.create({
      key: 'stand',
      frames: this.anims.generateFrameNumbers('oscar', { start: 0, end: 19 }),
      frameRate: 7,
      repeat: -1
      // frames: [ { key: 'player', frame: 1 } ],
      // frameRate: 20
    });
    this.anims.create({
      key: 'die',
      frames: this.anims.generateFrameNumbers('oscar', { start: 30, end: 43 }),
      frameRate: 8,
    });

    this.anims.create({
      key: 'dmg',
      frames: [{ key: 'oscar', frame:44}],
    });

    this.anims.play('stand',true);



  }
  move(){



    if(this.isAlive) {
      this.pos();
      this.checkSide(this.isMoving);
      if (this.scene.player.x > this.x - 350 && this.scene.player.x < this.x + 350  &&  this.scene.player.y > this.y - 150 && this.scene.player.y < this.y + 150 /*&& this.scene.player.y > this.y - 200 && this.scene.player.y < this.y + 25*/) {
        //this.runPatSound.play({volume:0.5});
        //if(this.scene.player.y>this.y){
        this.isMoving = true;
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
      this.isMoving = false;
      this.setVelocityX(0);
      this.anims.play('stand',true);
    }
  }
  else if(!this.isAlive && !this.dieOnce){
  this.dieOnce = true;
  }

}
moinsvie(){
  if(this.vie>0){
    this.vie--;
    this.anims.play('dmg',true);
    if(this.vie===0){
      this.Tmortlol();
    }
  }
}


checkSide(isMoving){
  if(this.dir>0){
    this.flipX =true;
  }else{
    this.flipX =false;
  }
  if(isMoving){this.anims.play('move', true);}else{this.anims.play('stand', true);}
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
