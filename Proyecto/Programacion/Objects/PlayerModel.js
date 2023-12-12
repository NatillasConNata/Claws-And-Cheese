class PlayerModel extends Phaser.GameObjects.Sprite { //playerModel
    constructor(scene, x,y,textureKey, type) {
      super(scene, x,y,textureKey)

      this.scene = scene
      this.textureKey = textureKey
      this.scene.add.existing(this)
      this.scene.physics.world.enableBody(this, 0)//ir a fisicas del mundo(gameconfig) y asignarselas al objeto
      this.type = type
      this.isDead = false 
    }
  
    
  }