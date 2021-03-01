class Tableau08 extends Tableau{

    preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('bg1', 'assets/bg1.png');
        this.load.image('bg3', 'assets/bg3.png');
        this.load.image('bg2', 'assets/bg2.png');
    }   
    create() {
        super.create();

        
        //on définit la taille du tableau
        let largeurDuTableau=2000;
        let hauteurDuTableau=600; //la hauteur est identique au cadre du jeu
        this.cameras.main.setBounds(0, 0, largeurDuTableau, game.config.height);
        this.physics.world.setBounds(0, 0, largeurDuTableau,  hauteurDuTableau);

        this.cameras.main.startFollow(this.player, false, 0.05, 0.05);

        //quelques étoiles et plateformes qui vont avec
        this.stars=this.physics.add.group();
        
        this.physics.add.overlap(this.player, this.stars, this.ramasserEtoile, null, this);
        this.physics.add.collider(this.player,this.platforms);


        //on change de ciel, on fait une tileSprite ce qui permet d'avoir une image qui se répète
        
        //on ajoute une deuxième couche de ciel
        this.sky2=this.add.tileSprite(
            0,
            0,
            game.config.width,
            game.config.height,
            'bg2'
        );
        this.sky2.setScrollFactor(0);
        this.sky2.setOrigin(0,0);
        //this.sky.tileScaleX=this.sky.tileScaleY=0.8;


        this.sky3=this.add.tileSprite(
            0,
            0,
            game.config.width,
            game.config.height,
            'bg3'
        );
        this.sky3.setScrollFactor(0);
        this.sky3.setOrigin(0,0);



        this.sky=this.add.tileSprite(
            0,
            0,
            game.config.width,
            game.config.height,
            'bg1'
        );
        this.sky.setOrigin(0,0);
        this.sky.setScrollFactor(0);//fait en sorte que le ciel ne suive pas la caméra
        //fait passer les éléments devant le ciel
        

        let platforms = this.physics.add.staticGroup();
        for(let i=0; i<1000; i+50){platforms.create(0+i,500,'ground');}



        this.stars.setDepth(10)
        this.player.setDepth(10)
        this.sky2.alpha = 1;
    }

    update(){
        super.update();
        //le ciel se déplace moins vite que la caméra pour donner un effet paralax
        this.sky.tilePositionX=this.cameras.main.scrollX*0.6;
        this.sky.tilePositionY=this.cameras.main.scrollY*0.2;

        this.sky3.tilePositionX=this.cameras.main.scrollX*0.4+250;
        this.sky3.tilePositionY=this.cameras.main.scrollY*0.3+15;

        //le deuxième ciel se déplace moins vite pour accentuer l'effet
        this.sky2.tilePositionX=this.cameras.main.scrollX*0.3+500;
        this.sky2.tilePositionY=this.cameras.main.scrollY*0.1+30;

    }



}

