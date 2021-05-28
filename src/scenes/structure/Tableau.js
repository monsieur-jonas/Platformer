/**
* Toutes les fonctions propres à un tableau dans notre jeu.
* Cette classe n'est pas à utiliser directement, elle doit être extend !
*/
class Tableau extends Phaser.Scene{
  /**
  *
  * @param {String} key identifiant de la scène à jouer
  */
  constructor(key) {
    super(key);
  }

  /**
  * Par défaut on charge un fond et le player
  */
  preload(){
    this.load.image('boom', 'assets/blood.jpg');
    this.load.image('spike', 'assets/spike.png');
    this.load.image('bullet', 'assets/bullet01.png');
    this.load.image('night', 'assets/placeholderfond.jpg');
    this.load.audio('tir', 'assets/sound/shoot.wav');
    this.load.spritesheet('explode','assets/explode.png',
    { frameWidth: 50, frameHeight: 50  }
  );
  this.load.spritesheet('kevin',
  'assets/kevin03.png',
  { frameWidth: 71, frameHeight: 119  }
);
this.load.spritesheet('player',
'assets/mike04.png',
{ frameWidth: 64, frameHeight: 125  }
);
}
create(){
  Tableau.current=this;
  this.sys.scene.scale.lockOrientation("landscape")
  console.log("On est sur "+this.constructor.name+" / "+this.scene.key);
  this.sonTir = this.sound.add('tir');

  /**
  * Le joueur
  * @type {Player}
  */
  this.player=new Player(this,0,1500);

  this.boutonTir = this.input.keyboard.addKey('A');

  this.input.on('pointerdown', function () {
    this.cameras.main.shake(10);
  }, this);


}
update(){
  super.update();
  this.player.move();
  this.tirPlayer();
}
tirPlayer(){
  if (Phaser.Input.Keyboard.JustDown(this.boutonTir)){
    this.player.shootBeam();
    this.sonTir.play();
  }
}

ramasserEtoile (player, star)
{
  star.disableBody(true, true);
  ui.gagne();

  //va lister tous les objets de la scène pour trouver les étoies et vérifier si elles sont actives
  let totalActive=0;
  for(let child of this.children.getChildren()){
    if(child.texture && child.texture.key==="star"){
      if(child.active){
        totalActive++;
      }
    }
  }
  if(totalActive===0){
    this.win();
  }
  /*
  // this.stars est un groupe (plus tard)
  if (this.stars.countActive(true) === 0)
  {
  this.win();
}
*/

}

hitMonster(player, monster){
  let me=this;
  if(!monster.isDead){
    if(!me.player.isDead){
      me.player.isDead=true;
      me.player.visible=false;
      me.player.isDead=false;
      me.scene.restart();
    }

  }


}




/**
* Pour reset cette scène proprement
* @private
*/
_destroy(){
  this.player.stop();
  this.scene.stop();
}

/**
* Quand on a gagné
*/
win(){
  Tableau.suivant();
}

/**
* Va au tableau suivant
*/
static suivant(){
  let ceSeraLaSuivante=false;
  let nextScene=null;
  if(Tableau.current){
    for(let sc of game.scene.scenes){
      if(sc.scene.key !== "ui"){
        if(!nextScene){
          if(ceSeraLaSuivante){
            nextScene=sc;
          }
          if(sc.scene.key === Tableau.current.scene.key){
            ceSeraLaSuivante=true;
          }
        }
      }
    }
  }
  if(!nextScene){
    nextScene = game.scene.scenes[0];
  }
  Tableau.goTableau(nextScene);
}

static goTableau(tableau){
  if(Tableau.current){
    Tableau.current._destroy();
  }
  game.scene.start(tableau);
}


}

/**
* Le tableau en cours
* @type {null|Tableau}
*/
Tableau.current=null;
