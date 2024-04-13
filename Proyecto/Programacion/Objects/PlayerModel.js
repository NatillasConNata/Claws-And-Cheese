class PlayerModel extends Phaser.Physics.Arcade.Sprite { //modelo base para cualquier personaje del juego, jugadores u otros
    constructor(scene, x,y,textureKey, type,controls, id, players , ground) {
      super(scene, x,y,textureKey)
      this.controls = controls 
      this.id = id
      this.players = players 
      this.ground = ground
      this.groundCollider = scene.physics.add.collider(this, ground);
      this.scene = scene
      this.type = type;
      this.textureKey = textureKey
      this.speed = 500;
      this.jumpVelocity = -1300;
      this.scene.add.existing(this)
      this.scene.physics.world.enableBody(this, 0)//activar body en el personaje
      this.body.setCollideWorldBounds(true);
      //this.body.setGravity(0 , 160)//Cambiar esto por que le afecten fisicas del config
      this.isDead = false 
    }
    update(time,delta)
    {

      this.body.velocity.x = 0
      if (this.controls.left.isDown) {
        this.body.velocity.x -= this.speed;
      }
      if (this.controls.right.isDown) {
        this.body.velocity.x += this.speed;
      }
      if(this.controls.up.isDown && this.body.onFloor()){
        this.setVelocityY(this.jumpVelocity);
      }

    }
   }