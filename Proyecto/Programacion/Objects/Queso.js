class Queso extends PlayerModel {
  constructor(scene, x, y, textureKey) {
    super(scene,x,y,textureKey, 'QuesoPlayer')    

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

    this.idleFrame = {
        key:'queso-idle',
        front: 4
    }

    anims.create({
        key:'queso-right',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 5,
            end: 8
        }),
        frameRate: animFrameRate,
        repeat:-1
    })
    

    anims.create({
        key:'queso-bite-left',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 9,
            end: 13
        }),
        frameRate: animFrameRate,
        repeat:-1
    })

    anims.create({
        key:'queso-bite-right',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 14,
            end: 18
        }),
        frameRate: animFrameRate,
        repeat:-1
    })

    anims.create({
        key:'queso-up',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 19,
            end: 22
        }),
        frameRate: animFrameRate,
        repeat:-1
    })


    this.setFrame(this.idleFrame.front)




    //KEYS input
    //para el leon será ASDW
    const{LEFT,RIGHT, UP,DOWN,P,O} = Phaser.Input.Keyboard.KeyCodes
    this.keys = scene.input.keyboard.addKeys({
        left:LEFT,
        right:RIGHT,
        up: UP,
        down: DOWN,
        p:P,
        o:O,
    })
  }

  //MOVE CHARACTER
update(){
    const {keys} = this
    const speed = 140
    const previousVelocity = this.body.velocity.clone()

    this.body.setVelocity(0)
    
    //MOVER PERSONAJE Y ANIMSACIONES
    //pers izda
    if(keys.left.isDown){
        this.body.setVelocityX(-speed*2)
        this.anims.play('queso-left',true)
    }
    //pers drcha
    else if(keys.right.isDown){
        this.body.setVelocityX(speed*2)
        this.anims.play('queso-right', true);
    }
    //Subir escaleras
    else if (keys.p.isDown )
    {
        this.body.setVelocityY(-speed*2)

        this.anims.play('queso-up', true);
    }
    //bajar escaleras
    else if (keys.down.isDown )
    {
        this.body.setVelocityY(speed)

        this.anims.play('queso-up', true);
    }
    //morder
    else if (keys.o.isDown)
    {
        this.body.setVelocityY(-1)
        this.anims.play('queso-bite-left', true);

    }
    //salto
    else if (keys.up.isDown && this.body.touching.down)
    {
        this.body.setVelocityY(-speed*100)
    }
   
    else{
        this.anims.stop()
    }
    //---------

    //this.body.velocity.normalize().scale(speed)
  
    
    

    if(this.body.velocity.x == 0 && this.body.velocity.y ==0){
        this.setFrame(this.idleFrame.front)
    }


}

}