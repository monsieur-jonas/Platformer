class TableauZoo extends Tableau{

    preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
        this.load.image('boulasse', 'assets/boulasse.png');
        this.load.image('demonasse', 'assets/demonasse.png');
        this.load.image('rosasse', 'assets/rosasse.png');
        this.load.image('chapotasse', 'assets/chapotasse.png');
        this.load.image('kingasse', 'assets/kingasse.png');
    }
    create() {
        super.create();
       
        this.platforms = this.physics.add.staticGroup();
        this.walls = this.physics.add.staticGroup();
        this.demonasse = new Demonasse(this,300,100);
        this.kingasse = new Kingasse(this,200,210);
        this.chapotasse = new Chapotasse(this,100,300);
        this.rosasse = new Rosasse(this,400,350);
        this.boulasse = new Boulasse(this,500,100);


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

        //quand le joueur touche une étoile on appelle la fonction ramasserEtoile
        this.physics.add.overlap(this.player, this.star1, this.ramasserEtoile, null, this);

        //Foutus problemes de collisions !
        this.physics.add.collider(this.player, this.platforms)
        this.physics.add.collider(this.demonasse, this.platforms)
        this.physics.add.collider(this.kingasse, this.platforms)
        this.physics.add.collider(this.chapotasse, this.platforms)
        this.physics.add.collider(this.rosasse, this.platforms)
        this.physics.add.collider(this.boulasse, this.platforms)
        this.physics.add.collider(this, this.walls)
    }

}

