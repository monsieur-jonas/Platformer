class Mkboratory extends Tableau{

     constructor()
    {
        super("labo");
    }
    preload() {
        super.preload();

        this.load.image('tiles', 'assets/tiled/tilesetexperiences_01.png');

        this.load.tilemapTiledJSON('map', 'assets/tiled/exmap22.json');

        //this.load.audio('welcome', 'assets/Sound/intro.wav');
        this.load.audio('ingame', 'assets/Sound/ingame.wav');
        this.load.image('tir', 'assets/bullet01.png');

    }
    create() {
        super.create();



        this.musicAmb = this.sound.add('ingame');

        var musicConfig =
        {
            mute: false,
            volume: 0.5,
            rate : 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay:0,
        }
        this.musicAmb.play(musicConfig);
        //on en aura besoin...
        let ici=this;

        this.passageMusic = false;
        this.passage = true;
        this.passageCamera = false;
        //--------chargement de la tile map & configuration de la scène-----------------------
        //notre map
        this.map = this.make.tilemap({ key: 'map' });
        //nos images qui vont avec la map
        this.tileset = this.map.addTilesetImage('tilesetexperiences_01', 'tiles');

        //on agrandit le champ de la caméra du coup
        let largeurDuTableau=this.map.widthInPixels;
        let hauteurDuTableau=this.map.heightInPixels;
        this.physics.world.setBounds(0, 0, largeurDuTableau,  hauteurDuTableau);
        this.cameras.main.setBounds(0, 0, largeurDuTableau, hauteurDuTableau);
        this.cameras.main.startFollow(this.player, true, 1, 0.1);

        //---- ajoute d'elements simples ----------------------------
        this.clignot = this.map.createLayer('clignot', this.tileset, 0, 0);
        this.cuvelight = this.map.createLayer('cuvelight', this.tileset, 0, 0);
        this.screenlight = this.map.createLayer('screenlight', this.tileset, 0, 0);
        this.light = this.map.createLayer('light', this.tileset, 0, 0);
        this.greenlight = this.map.createLayer('greenlight', this.tileset, 0, 0);
        this.escalier = this.map.createLayer('escalier', this.tileset, 0, 16);
        this.devant = this.map.createLayer('physique', this.tileset, 0, 0);
        this.derriere = this.map.createLayer('derriere', this.tileset, 0, 0);
        this.derriere2 = this.map.createLayer('derriere2', this.tileset, 0, 0);

        //on définit les collisions
        this.escalier.setCollisionByProperty({ collide: true });
        this.escalier.setCollisionByExclusion(-1, true);
        this.devant.setCollisionByProperty({ collide: true });
        this.devant.setCollisionByExclusion(-1, true);
        //this.lave.setCollisionByProperty({ collide: true });

        //----------les étoiles (objets) ---------------------

        this.stars = this.physics.add.group({
            allowGravity: true,
            immovable: false,
            bounceY:1
        });

        //--------------monstres-------------------
        this.monstersContainer=this.add.container();
        ici.kevin = ici.map.getObjectLayer('kevin')['objects'];
        // On crée des montres pour chaque objet rencontré
        ici.kevin.forEach(monsterObject => {
            let monster=new Kevin(this,monsterObject.x+33,monsterObject.y);
            this.monstersContainer.add(monster);
            this.physics.add.collider (monster,this.devant)
        });

        ici.mk = ici.map.getObjectLayer('mk')['objects'];
        // On crée des montres pour chaque objet rencontré
        ici.mk.forEach(monsterObject => {
            let monster=new Mk(this,monsterObject.x+33,monsterObject.y);
            this.monstersContainer.add(monster);
            this.physics.add.collider (monster,this.devant)
        });

        ici.oscar = ici.map.getObjectLayer('oscar')['objects'];
        // On crée des montres pour chaque objet rencontré
        ici.oscar.forEach(monsterObject => {
            let monster=new Oscar(this,monsterObject.x+33,monsterObject.y);
            this.monstersContainer.add(monster);
            this.physics.add.collider (monster,this.devant)
        });

        ici.bryan = ici.map.getObjectLayer('bryan')['objects'];
        // On crée des montres pour chaque objet rencontré
        ici.bryan.forEach(monsterObject => {
            let monster=new Bryan(this,monsterObject.x+33,monsterObject.y);
            this.monstersContainer.add(monster);
            this.physics.add.collider (monster,this.devant)
        });

        ici.shlagos = ici.map.getObjectLayer('shlagos')['objects'];
        // On crée des montres pour chaque objet rencontré
        ici.shlagos.forEach(monsterObject => {
            let monster=new Shlagos(this,monsterObject.x+33,monsterObject.y);
            this.monstersContainer.add(monster);
            this.physics.add.collider (monster,this.devant)
        });

        this.plightContainer=this.add.container();
        ici.plight = ici.map.getObjectLayer('light')['objects'];
        ici.plight.forEach(plightObjects => {
          let light = new Light(this,plightObjects.x+16,plightObjects.y-10).setDepth(9999);
          light.addLight(this,204,229,151, 200, 0.3, 0.04,false);
          this.plightContainer.add(light);
        });

        this.greenlightContainer=this.add.container();
        ici.greenlight = ici.map.getObjectLayer('greenlight')['objects'];
        ici.greenlight.forEach(greenlightObjects => {
          let light = new Light(this,greenlightObjects.x+16,greenlightObjects.y-10).setDepth(9999);
          light.addLight(this,92,203,69, 200, 0.5, 0.04,false);
          this.greenlightContainer.add(light);
        });

        this.cuvelightContainer=this.add.container();
        ici.cuvelight = ici.map.getObjectLayer('cuvelight')['objects'];
        ici.cuvelight.forEach(cuvelightObjects => {
          let light = new Light(this,cuvelightObjects.x+16,cuvelightObjects.y-10).setDepth(9999);
          light.addLight(this,92,203,69, 200, 0.3, 0.04,false);
          this.cuvelightContainer.add(light);
        });

        this.screenlightContainer=this.add.container();
        ici.screenlightlight = ici.map.getObjectLayer('screenlight')['objects'];
        ici.screenlightlight.forEach(screenlightObjects => {
          let light = new Light(this,screenlightObjects.x+16,screenlightObjects.y-10).setDepth(9999);
          light.addLight(this,255,255,255, 200, 0.2, 0.04,false);
          this.screenlightContainer.add(light);
        });

        this.clignotContainer=this.add.container();
        ici.clignot = ici.map.getObjectLayer('clignot')['objects'];
        ici.clignot.forEach(clignotObjects => {
          let clignot = new Light(this,clignotObjects.x+16,clignotObjects.y-10).setDepth(9999);
          clignot.addLight(this,204,229,151, 200, 0.3, 0.04,true);
          this.clignotContainer.add(clignot);
        });






        //----------débug---------------------

        //pour débugger les collisions sur chaque layer
        let debug=this.add.graphics().setAlpha(this.game.config.physics.arcade.debug?0.75:0);
        if(this.game.config.physics.arcade.debug === false){
            debug.visible=false;
        }


        //---------- parallax ciel (rien de nouveau) -------------

        //on change de ciel, on fait une tileSprite ce qui permet d'avoir une image qui se répète
        this.sky1=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'sky1'
        );
        this.sky2=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'sky2'
        );
        this.sky03=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'sky03'
        );
        this.sky1.setOrigin(0,0);
        this.sky2.setOrigin(0,0);
        this.sky03.setOrigin(0,0);
        this.sky1.setScrollFactor(0);//fait en sorte que le ciel ne suive pas la caméra
        this.sky2.setScrollFactor(0);//fait en sorte que le ciel ne suive pas la caméra
        this.sky03.setScrollFactor(0);//fait en sorte que le ciel ne suive pas la caméra

        //----------collisions---------------------

        //quoi collide avec quoi?
        this.physics.add.collider(this.player, this.escalier);
        this.physics.add.collider(this.kevin, this.escalier);
        this.physics.add.collider(this.player, this.devant);
        //si le joueur touche une étoile dans le groupe...
        //quand on touche la lave, on meurt
        this.physics.add.collider(this.player, this.lave,this.playerDie,null,this);

        //--------- Z order -----------------------

        //on définit les z à la fin
        let z=1000; //niveau Z qui a chaque fois est décrémenté.
        debug.setDepth(z--);
        //this.boom.setDepth(z--);
        this.player.setDepth(z--);
        this.stars.setDepth(z--);
        this.monstersContainer.setDepth(z--);
        //starsFxContainer.setDepth(z--);
        this.escalier.setDepth(z--);
        this.devant.setDepth(z--);



        //this.solides.setDepth(z--);
        //this.laveFxContainer.setDepth(z--);
        //this.lave.setDepth(z--);

        this.derriere2.setDepth(z--);
        this.derriere.setDepth(z--);




        this.sky03.setDepth(z--);
        this.sky2.setDepth(z--);
        this.sky1.setDepth(z--);





    }

    /**
     * Permet d'activer, désactiver des éléments en fonction de leur visibilité dans l'écran ou non
     */
    optimizeDisplay(){
        //return;
        let world=this.cameras.main.worldView; // le rectagle de la caméra, (les coordonnées de la zone visible)

    }

    /**
     * Fait se déplacer certains éléments en parallax
     */
    moveParallax(){
        //le ciel se déplace moins vite que la caméra pour donner un effet paralax
        this.sky1.tilePositionX=this.cameras.main.scrollX*0;
        this.sky1.tilePositionY=this.cameras.main.scrollY*0;
        this.sky2.tilePositionX=this.cameras.main.scrollX*0.7;
        this.sky2.tilePositionY=this.cameras.main.scrollY*0.7;
        this.sky03.tilePositionX=this.cameras.main.scrollX*0.8;
        this.sky03.tilePositionY=this.cameras.main.scrollY*0.8;
    }


    update(){
        super.update();
        this.moveParallax();

        //optimisation
        //teste si la caméra a bougé
        let actualPosition=JSON.stringify(this.cameras.main.worldView);
        if(
            !this.previousPosition
            || this.previousPosition !== actualPosition
        ){
            this.previousPosition=actualPosition;
            this.optimizeDisplay();
        }
    }




}
