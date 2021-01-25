class TableauZoo extends Tableau{

    preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
        this.load.image('boulasse', 'assets/boulasse.png');
        this.load.image('demonasse', 'assets/demonasse.png');
        this.load.image('rosasse', 'assets/rosasse.png');
    }
    create() {
        super.create();
        
       
        this.platforms = this.physics.add.staticGroup();
        this.walls = this.physics.add.staticGroup();

        this.platforms.create(50 ,200,"ground");
        //this.walls.create(50 ,0,"ground");


        this.platforms.children.iterate(function (child) {
            
            child.setTintFill(0xff9000);
            child.setDisplaySize (500,10);
            child.setOrigin(0,0);
            child.refreshBody();
        });

        this.walls.children.iterate(function (child) {
            
            child.setTintFill(0xff9000);
            child.setDisplaySize (10,350);
            child.setOrigin(0,0);
            child.refreshBody();
        });


        //des étoiles
        this.star1=this.physics.add.sprite(this.sys.canvas.width,this.sys.canvas.height,"star");
        this.star1.setCollideWorldBounds(true);
        this.star1.setBounce(0);

        
        //Lent et imposant, il faut anticiper ses mouvement pour passer en dessous
        this.boulasse=this.physics.add.sprite(300,this.sys.canvas.height-70,"boulasse");
        this.boulasse.setOrigin(0,50);
        this.boulasse.setDisplaySize(64,64);
        this.boulasse.setCollideWorldBounds(true);
        this.boulasse.setBounce(1);
        this.boulasse.setVelocityX(50);
        this.physics.add.overlap(this.player, this.boulasse, this.hitSpike, null, this);

        //Un démon rapide qui ne peut etre esquivé uniquement en sautant par dessus
        this.demonasse=this.physics.add.sprite(300,this.sys.canvas.height-70,"demonasse");
        this.demonasse.setOrigin(0,20);
        this.demonasse.setDisplaySize(80,80);
        this.demonasse.setCollideWorldBounds(true);
        this.demonasse.setBounceX(1);
        this.demonasse.setGravityY(2000);
        this.demonasse.setVelocityX(300);
        this.physics.add.overlap(this.player, this.demonasse, this.hitSpike, null, this);

        //Vif et rapide, il rebondit pour sureprendre le joueur
        this.rosasse=this.physics.add.sprite(300,this.sys.canvas.height-70,"rosasse");
        this.rosasse.setOrigin(0,20);
        this.rosasse.setDisplaySize(50,50);
        this.rosasse.setCollideWorldBounds(true);
        this.rosasse.setBounce(1);
        this.rosasse.setGravityY(1000);
        this.rosasse.setVelocityX(60);
        

        this.physics.add.overlap(this.player, this.rosasse, this.hitSpike, null, this);

        //quand le joueur touche une étoile on appelle la fonction ramasserEtoile
        this.physics.add.overlap(this.player, this.star1, this.ramasserEtoile, null, this);

        this.physics.add.collider(this.player, this.platforms)
        this.physics.add.collider(this.player, this.walls)
        this.physics.add.collider(this.boulasse, this.platforms)
        this.physics.add.collider(this.boulasse, this.walls)
        this.physics.add.collider(this.demonasse, this.platforms)
        this.physics.add.collider(this.demonasse, this.walls)
        this.physics.add.collider(this.rosasse, this.platforms)
        this.physics.add.collider(this.rosasse, this.walls)
    }

}

