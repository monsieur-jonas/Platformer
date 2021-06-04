class Shlagos extends ObjetEnnemi{
  /**
  *
  * @param {Tableau} scene
  * @param x
  * @param y
  */
  constructor(scene, x, y) {
    super(scene, x, y,"shlagos");
    //pas de gravité
    this.dir = 1;
    this.isAlive = true;
    this.dieOnce = false;
    this.vie=1;
    this.body.allowGravity=true;
    this.isMoving = false;
    //this.physics.add.sprite(300,this.sys.canvas.height-70,"monster-zombie");
    this.scale = 1;
    this.setCollideWorldBounds(true);
    this.setBounceX(1);
    this.setOffset(-15,0)
    this.setBodySize(this.body.width/2,this.body.height);
    this.shlagosmeurt = scene.sound.add('shlagosmeurt');
    //this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);

    this.anims.create({
      key: 'stand',
      frames: this.anims.generateFrameNumbers('shlagos', { start: 0, end: 5 }),
      frameRate: 7,
      repeat: -1

    });
    this.anims.create({
      key: 'die',
      frames: this.anims.generateFrameNumbers('shlagos', { start: 6, end: 15 }),
      frameRate: 8,
    });


    this.anims.play('stand',true);



  }
  move(){



    if(this.isAlive) {
      this.isMoving = false;
      this.setVelocityX(0);
      this.anims.play('stand',true);
    }
    else if(!this.isAlive && !this.dieOnce){
      this.dieOnce = true;
      this.Tmortlol();
      }
  }
  moinsvie(){

    if(this.vie > 0){
      this.vie--;
      if(this.vie == 0){
        this.isAlive = false;
        this.anims.play('die');
        this.shlagosmeurt.play({volume:5,loop:false});
      }
    }
  }

}
