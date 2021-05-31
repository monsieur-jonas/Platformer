class ObjetEnnemi extends ObjetPhysique{
    /**
     * Quand Player touche cet objet, il a perdu
     * @param {Tableau} scene
     * @param {Number} x
     * @param {Number} y
     * @param {string} image
     */
    constructor(scene, x, y,image) {
        super(scene, x, y,image);
        scene.physics.add.overlap(
            scene.player,
            this,
            scene.hitMonster,
            null,
            scene
        );
    }
    Tmortlol(){
        this.isAlive=false;
        this.anims.play('die');
         this.setVelocityX(0);
        // this.sound.play('mobDeath');
        // this.saigne(monster,function(){
        // })
    }
}
