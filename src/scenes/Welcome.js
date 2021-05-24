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
        //this.load.spritesheet('cp', 'assets/cp.png', { frameWidth: 206, frameHeight: 184 } );

        // audios
        
        this.load.audio('welcome', 'assets/Sound/intro.wav');
    }
  
    create()
    {
        //---------- on clean le storage ----------

        // localStorage.removeItem("bougie");
        // localStorage.removeItem("bougie1");
        // localStorage.removeItem("bougie2");
        // localStorage.removeItem("bougie3");
        // localStorage.removeItem("torche");
        // localStorage.removeItem("torche1");
        // localStorage.removeItem("torche2");
        // localStorage.removeItem("torche3");
        // localStorage.removeItem("torche4");
        // localStorage.removeItem("torche5");
        // localStorage.removeItem("torche6");
        // localStorage.removeItem("torche7");
        // localStorage.removeItem("torche8");

        //---------- booleans que l'on compte utiliser ----------

        this.touchePressed = false;
        
        
        //---------- gestion des musiques ----------

        this.game.sound.stopAll();
        this.welcome = this.sound.add('welcome');
        var musicConfig = 
        {
            mute: false,
            volume: 1,
            rate : 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay:0,
        }
        this.welcome.play(musicConfig);

  
        //---------- on affiche les images à l'écran ----------

        this.add.sprite(game.config.width/2, game.config.height/2, 'startBG');
        
  

        //---------- on affiche les boutons ----------

        // let startB1 = this.add.sprite(game.config.width/2-8, game.config.height -150, 'startB');
        // let startB2 = this.add.sprite(game.config.width/2-8, game.config.height -50, 'startB');
        // let startB3 = this.add.sprite(game.config.width/2-8, game.config.height -250, 'startB');
        //startB.scale = 0.5;


        //---------- on affiche les textes que l'on veut faire apparaître (boutons, titre...) ----------

        let startBText1 = this.add.text(game.config.width/2-72, game.config.height -265, "Play",{font: "28px visitor", fill:"#000000"}); //375,560,FFF
        let startBText2 = this.add.text(game.config.width/2-79, game.config.height -165, "Ctrls",{font: "28px visitor", fill:"#000000"});

    

        let startBText1_2 = this.add.text(game.config.width/2-12, game.config.height -265, "[enter]",{font: "28px visitor", fill:"#000000"});
        let startBText2_2 = this.add.text(game.config.width/2-12, game.config.height -165, "[space]",{font: "28px visitor", fill:"#000000"});

        //tweens permet de donner un petit effet à la cible voulue (target)
        this.tweens.add(
        {
            targets:[startBText1_2],
            duration:500,
            yoyo: true,
            repeat:-1,
            delay:Math.random()*1000,
            alpha:
            {
                startDelay:Math.random()*5000,
                from:0,
                to:1,
            }
        })

        this.tweens.add(
            {
                targets:[startBText2_2],
                duration:2000,
                yoyo: true,
                repeat:-1,
                delay:Math.random()*1000,
                alpha:
                {
                    startDelay:Math.random()*5100,
                    from:0,
                    to:1,
                }
        })
        
        //---------- quelques effets supplémentaires symphatiques ----------

        let lanterne = this.add.pointlight(game.config.width/2-378, game.config.height/2+32, 0, 50, 0.5);
        lanterne.attenuation = 0.05;
        lanterne.color.setTo(255, 200, 0);
        this.tweens.add(
        {
            targets:lanterne,
            duration:2000,
            yoyo: true,
            repeat:-1,
            delay:Math.random()*1000,
            alpha:
            {
                startDelay:Math.random()*5000,
                from:0,
                to:1,
            }
        })

        

        //---------- on initialise les touches du clavier pour lancer le jeu, activer/desactiver des options, etc ----------

        /*if(Tableau.current){
            Tableau.current._destroy();
        }
        this.game.scene.start(tableau);
        this.scene.start("aventureBegining");*/

        this.input.keyboard.on('keydown-ENTER', function () //'keydown-SPACE', function () 
        {
            if (!this.touchePressed)
            {
                this.touchePressed = true;

                this.music.play(musicConfig);

                this.cameras.main.fadeOut(1000, 0, 0, 0)
                this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => 
                {
                    this.game.scene.start(Mkboratory);
                    this.scene.start("labo");
                })
            }

        }, this);


        this.input.keyboard.on('keydown-SPACE', function () //'keydown-SPACE', function () 
        {
            if (!this.touchePressed) //(!this.SpacePressed & !this.EnterPressed)
            {
                this.touchePressed = true;
                this.music = this.sound.add('drapeau');
                var musicConfig = 
                {
                    mute: false,
                    volume: 1,
                    rate : 1,
                    detune: 0,
                    seek: 0,
                    loop: false,
                    delay:0,
                }
                this.music.play(musicConfig);
    
                this.cameras.main.fadeOut(1000, 0, 0, 0)
                this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => 
                {
                    //this.EnterPressed = true;
                    this.game.scene.start(ControlsPanel);
                    this.scene.start("panel");
                })
            }

        }, this);

        this.input.on('pointerdown', function(pointer)
        {
            if (!this.touchePressed)
            {
                this.touchePressed = true;
                this.cameras.main.fadeOut(1000, 0, 0, 0)
                this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>
                {
                    /*if(Tableau.current){
                        Tableau.current._destroy();
                    }
                    this.game.scene.start(tableau);
                    this.scene.start("aventureBegining");*/
                    this.game.scene.start(Mkboratory);
                    this.scene.start("labo");
                })
            }

        },this);
    }
}