class Queso extends PlayerModel {
  constructor(scene, x, y, textureKey, frame) {
    super(scene,x,y,textureKey, 'Queso')

    const animFrameRate= 10
    const anims = scene.anims

    anims.create({
        key:'queso-left',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 0,
            end: 3
        }),
        frameRate: animFrameRate,
        repeat:-1
    })

    anims.create({
        key:'queso-right',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 5,
            end: 8
        }),
        frameRate: animFrameRate,
        repeat:-1
    })

    this.idleFrame({
        key:'queso-idle',
        front: 4
    })

    anims.create({
        key:'queso-bite-left',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 10,
            end: 14
        }),
        frameRate: animFrameRate,
        repeat:-1
    })

    anims.create({
        key:'queso-bite-right',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 15,
            end: 19
        }),
        frameRate: animFrameRate,
        repeat:-1
    })

    anims.create({
        key:'queso-up',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 20,
            end: 23
        }),
        frameRate: animFrameRate,
        repeat:-1
    })


    this.setFrame(this.idleFrame.front)




    //KEYS input
    //para el leon será ASDW
    const{LEFT,RIGHT, UP,DOWN} = Phaser.Input.Keyboard.KeyCodes
    this.keys = scene.input.keyboard.addKeys({
        left:LEFT,
        right:RIGHT,
        up:UP,
        down:DOWN
    })
  }

  //MOVE CHARACTER
update(){
    const {keys} = this
    const speed = 100
    const previousVelocity = this.body.velocity.clone()

    this.body.setVelocity(0)
    
    //MOVER PERSONAJE
    if(keys.left.isDown){
        this.body.setVelocityX(-speed)
    }
    else if(keys.right.isDown){
        this.body.setVelocityX(speed)
    }

    //subir escaleras
    //---------

    this.body.velocity.normalize().scale(speed)

    //animaciones pers
    if(keys.left.isDown){
        this.anims.play('queso-left',true)
    }
    else if (keys.right.isDown)
    {
        this.anims.play('queso-right', true);
    }
    else{
        this.anims.stop()
    }

    if(this.body.velocity.x == 0 && this.body.velocity.y ==0){
        this.setFrame(this.idleFrame.front)
    }


}

}