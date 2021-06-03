class Player extends Phaser.Physics.Arcade.Sprite{
  constructor(scene, x, y) {
    super(scene, x, y, "player")
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setCollideWorldBounds(true)

    this.setBounce(0);
    this.setGravityY(1500)
    this.setFriction(10);
    this.scale = 1;
    this.tirer=false;
    this.onceShot=false;

    this.setBodySize(this.body.width-6,this.body.height-10);
    this.setOffset(0, 10);
    this.rechargeSonTir = false;
    this.sonTir = scene.sound.add('tir');
    this.sonPasTir = scene.sound.add('pastir');


    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('player', { start: 20, end: 27 }),
      frameRate: 7,
      repeat: -1
    });

    this.anims.create({
      key: 'stand',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 15}),
      frameRate: 7,
      repeat: -1
    });

    this.anims.create({
      key: 'jump',
      frames: [{ key: 'player', frame:28}],
      frameRate: 1,
      repeat: -1
    });

    //this.anims.create({
    //  key: 'down',
    //  frames: this.anims.generateFrameNumbers('player', { start: 17, end: 17 }),
    //  frameRate: 7,
    //  repeat: -1
    //  });

    this.anims.create({
      key: 'shoot',
      frames: this.anims.generateFrameNumbers('player', { start: 16, end: 20 }),
      frameRate: 7,
    });

    this.on('animationcomplete',function () {
      if(this.anims.currentAnim.key === 'shoot'){
        this.tirer = false;
        this.onceShot = false;
      }
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

    if (this.tirer && !this.onceShot){
      this.onceShot = true;
      console.log('hh');
      this.anims.play('shoot', true);

    }






    switch (true){
      case this._directionX<0:
      this.setVelocityX(-160);
      if(this.body.blocked.down){this.anims.play('walk', true);}else{this.anims.play('jump');}
      this.flipX =true;
      break;

      case this._directionX>0:
      this.setVelocityX(160);
      if(this.body.blocked.down){this.anims.play('walk', true);}else{this.anims.play('jump');}
      this.flipX =false;
      break;

      case this._directionY>0:
      this.anims.play('down', true);
      this.flipX =false;
      break;

      case this._directionY<0:
      this.anims.play('jump');
      if(this.body.touching.down){
        this.setVelocityY(-300);
        this.flipX =false;

      }


      break;



      default:
      if(!this.body.blocked.down){
        console.log('aaaa');
        this.anims.play('jump');
      }else{
        this.anims.play('stand', true);
        this.setVelocityX(0);}
        break;
      }

      if(this._directionY<0){
        if(this.body.blocked.down || this.body.touching.down){
          this.setVelocityY(-800);
        }
      }

      // if(this.body.velocity.x == 0){
      //         this.anims.play('stand')}


    }
    shootBeam()
    {
      if(this.rechargeSonTir === false) { //on vérifie si on a recharger le coup
        this.sonTir.play();
        this.rechargeSonTir = true; //lance la recharge
        var bullet = new Tir(this.scene,this.x, this.y);
        console.log("Tir");
        setTimeout(function(){
          bullet.destroy();
        },500);
        setTimeout(function () {
          Tableau.current.player.rechargeSonTir = false;
        }, 2000);
        this.tirer = true;
      }
      else {
        this.sonPasTir.play();
      }


    }


  }
