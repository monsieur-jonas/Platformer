class Tableau08 extends Tableau{

    preload() {
        super.preload();
        this.load.image('demonasse', 'assets/demonasse.png');
        this.load.image('chapotasse', 'assets/chapotasse.png');
        this.load.image('star', 'assets/soul.png');
        this.load.image('platform', 'assets/platform.png');
        this.load.image('ground', 'assets/ground.png');
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
        ////this.physics.add.collider(this.player,this.platforms);
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
        //this.demon = new demon(this,300,300);
        this.demonasse1 = new Demonasse(this,300,300);
        this.demonasse2 = new Demonasse(this,1000,300);
        this.chapotasse1 = new Chapotasse(this,100,300);
        this.chapotasse2 = new Chapotasse(this,600,300);
        this.chapotasse3 = new Chapotasse(this,1000,300);
    
        
        
        
        

        this.platforms = this.physics.add.staticGroup();

        for(let i=0; i<2000; i+=64){
            this.platforms
            .create(i,420,'ground');
        }

        for(let i=384; i<448; i+=64){
            this.platforms
            .create(i,356,'ground');
        }

        for(let i=1280; i<1600; i+=64){
            this.platforms
            .create(i,356,'ground');
        }

        for(let i=0; i<320; i=i+64){
            this.platforms
                .create(0+i,250,'platform')
                .setSize(64,25)
                .setOffset(0,0);
        }

        for(let i=1000; i<1200; i=i+64){
            this.platforms
                .create(0+i,250,'platform')
                .setSize(64,25)
                .setOffset(0,0);
        }

        for(let i=0; i<200; i=i+64){
            this.platforms
            .create(600+i,300,'platform')
            .setSize(64,25)
            .setOffset(0,0);
        }

        for(let i=0; i<200; i=i+64){
            this.platforms
            .create(1700+i,300,'platform')
            .setSize(64,25)
            .setOffset(0,0);
        }
        
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.overlap(this.player, this.demonasse, this.hitMonster, null, this);
        this.physics.add.overlap(this.player, this.chapotasse, this.hitMonster, null, this);
        this.physics.add.collider(this.platforms, this.demonasse1);
        this.physics.add.collider(this.platforms, this.demonasse2);
        this.physics.add.collider(this.platforms, this.chapotasse1);
        this.physics.add.collider(this.platforms, this.chapotasse2);
        this.physics.add.collider(this.platforms, this.chapotasse3);
        this.physics.add.collider(this.platforms, this.chapotasse4);
       
        
        
        this.stars=this.physics.add.group();
        this.stars.create(100,320,"star").setCollideWorldBounds(true).body.allowGravity=false;
        this.stars.create(400,250,"star").setCollideWorldBounds(true).body.allowGravity=false;
        this.stars.create(500,350,"star").setCollideWorldBounds(true).body.allowGravity=false;
        this.stars.create(700,180,"star").setCollideWorldBounds(true).body.allowGravity=false;
        this.stars.create(1050,150,"star").setCollideWorldBounds(true).body.allowGravity=false;
        this.stars.create(1250,260,"star").setCollideWorldBounds(true).body.allowGravity=false;
        this.stars.create(1400,260,"star").setCollideWorldBounds(true).body.allowGravity=false;
        this.stars.create(1550,260,"star").setCollideWorldBounds(true).body.allowGravity=false;
        this.stars.create(1850,180,"star").setCollideWorldBounds(true).body.allowGravity=false;
        this.physics.add.overlap(this.player, this.stars, this.ramasserEtoile, null, this);

        this.physics.add.collider(this.platforms, this.stars);

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

