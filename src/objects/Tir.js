class Tir extends ObjetPhysique{
    constructor(scene, x, y){
       super(scene, x +15, y -30, "tir");
       scene.add.existing(this);
       scene.physics.add.existing(this);
       scene.physics.add.collider(scene.physics, this, function(){this.destroy()}, null, scene);
       this.body.allowGravity=false;
       this.setDisplaySize(50,1);
       this.setBodySize(this.body.width,this.body.height);
        if(scene.player.flipX!= true){
           this.setVelocityX(1000);
       }else if(scene.player.flipx= true){
       this.setVelocityX(1000 * -1);
       }
       let tir = this;
       this.setBounce(1);
       this.setDepth(998);
       scene.physics.add.collider(this, scene.devant, function(){
         tir.destroy()
      });
       scene.monstersContainer.iterate(monster=>{
          scene.physics.add.overlap(this, monster, function(){ if (monster.isAlive){
            tir.destroy();
          monster.Tmortlol();}}, null, scene);
       })
    }
 }
