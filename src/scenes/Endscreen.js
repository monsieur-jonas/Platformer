class Endscreen extends Phaser.Scene {
    constructor(){
      super("endscreen");
    }

    preload ()
    {
        this.load.image('bg', 'assets/endscreen02.png');

        //this.load.audio('welcome', 'assets/sound/intro.wav');
    }

    create()
    {
        this.add.sprite(game.config.width/2,game.config.height/2,'bg');

        this.piano = this.sound.add('welcome');

        this.input.keyboard.on ('keydown-ENTER',function(){
            this.scene.start("");
            //this.scene.fadeOut(1000, 0, 0, 0);
            this.piano.stop();
        },this);
    }
}
