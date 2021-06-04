class Welcome extends Phaser.Scene {
    constructor(){
      super("bootGame");
    }

    preload ()
    {
        // images
        this.load.image('startBG', 'assets/keyart02.png');
        //this.load.image('startB', 'assets/startbutton.jpg');
        this.load.image('logo', 'assets/logowhite03.png');
        this.load.image('bouton', 'assets/bouton05.png');
        //this.load.spritesheet('cp', 'assets/cp.png', { frameWidth: 206, frameHeight: 184 } );

        // audios

        this.load.audio('welcome', 'assets/sound/intro.wav');
    }

    create()
    {
        this.add.sprite(game.config.width/2,game.config.height/2,'startBG');

        this.piano = this.sound.add('welcome');
        this.piano.play({volume:.5,loop:true});
        let bouton = this.add.sprite(game.config.width/2,game.config.height/2,'bouton');
        bouton.scale = 1;
        let logo = this.add.sprite(game.config.width/2,game.config.height/3.5,'logo');
        bouton.scale = 1;
        this.add.pointlight(game.config.width/1.3,game.config.height/1.4 ,0x728157, 150,0.1,0.1);


        this.input.keyboard.on ('keydown-ENTER',function(){
            this.scene.start("labo");
            this.piano.stop();
        },this);

    }
}
