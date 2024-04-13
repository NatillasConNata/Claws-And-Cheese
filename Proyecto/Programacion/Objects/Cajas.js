class Cajas extends Phaser.Physics.Arcade.Sprite { 
    constructor(scene, x,y,textureKey) {
      super(scene, x,y,textureKey)
      this.scene.add.existing(this)
      this.scene.physics.world.enableBody(this, 0)//activar body del objeto
      this.body.setCollideWorldBounds(true); 
    }
    update(time,delta)
    {
        this.body.velocity.x = 0;
    }
    
   }