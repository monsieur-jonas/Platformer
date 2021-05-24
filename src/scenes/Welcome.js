class Welcome extends Phaser.Scene {
    constructor(){
      super("bootGame");
    }
  
    preload ()
    {
        // images
        this.load.image('startBG', 'assets/startbg.png');
        //this.load.image('startB', 'assets/startbutton.jpg');
        this.load.image('logo', 'assets/logo.png');
        this.load.image('bouton', 'assets/bouton.png');
        //this.load.spritesheet('cp', 'assets/cp.png', { frameWidth: 206, frameHeight: 184 } );

        // audios
        
        this.load.audio('welcome', 'assets/Sound/intro.wav');
    }
  
    create()
    {
        this.add.sprite(game.config.width/2,game.config.height/2,'startBG');

        this.piano = this.sound.add('welcome');
        this.piano.play({volume:.5,loop:true});
        let bouton = this.add.sprite(game.config.width/2,game.config.height/2 +7,'bouton');
        bouton.scale = 2;
        let textB = this.add.text (game.config.width/2 -85 ,game.config.height/2,"Appuyez sur ENTRER");


        this.input.keyboard.on ('keydown-ENTER',function(){
            this.scene.start("labo");
            this.piano.stop();
        },this);

    }
}