class PlayerModel extends Phaser.GameObjects.Sprite { //modelo base para cualquier personaje del juego, jugadores u otros
    constructor(scene, x,y,textureKey, type) {
      super(scene, x,y,textureKey)

      this.scene = scene
      this.textureKey = textureKey
      this.scene.add.existing(this)
      this.scene.physics.world.enableBody(this, 0)//activar body en el personaje
      //this.body.setGravity(0 , 160)//Cambiar esto por que le afecten fisicas del config
      this.type = type
      this.isDead = false 
    }
  
    
  }