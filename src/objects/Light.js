class Light extends Phaser.Physics.Arcade.Sprite{

  /**
  *
  * @param {Tableau} scene
  * @param x
  * @param y
  */
  constructor(scene, x, y) {
    super(scene, x, y);

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.allowGravity=false;

    this.px = x;
    this.py = y;

  }



  addLight(scene,r,g,b,radius,intensity,attenuation){
    var l = scene.add.pointlight(this.px,this.py,0,radius,intensity).setDepth(9999);
    l.attenuation=attenuation;
    l.color.setTo(r,g,b);
  }

}
