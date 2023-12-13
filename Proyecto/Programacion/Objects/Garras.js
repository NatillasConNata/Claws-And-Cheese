class Garras extends PlayerModel {
  constructor(scene, x, y, textureKey) {
    super(scene,x,y,textureKey, 'GarrasPlayer')    

    const animFrameRate= 10
    const anims = scene.anims

    anims.create({
        key:'garras-left',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 0,
            end: 3
        }),
        frameRate: animFrameRate,
        repeat:-1
    })

    this.idleFrame = {
        key:'garras-idle',
        front: 4
    }

    anims.create({
        key:'garras-right',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 5,
            end: 8
        }),
        frameRate: animFrameRate,
        repeat:-1
    })

    anims.create({
      key:'garras-empujar-izda',
      frames: anims.generateFrameNumbers(this.textureKey,{
          start: 9,
          end: 12
      }),
      frameRate: animFrameRate,
      repeat:-1
  })

  anims.create({
    key:'garras-empujar-drcha',
    frames: anims.generateFrameNumbers(this.textureKey,{
        start: 13,
        end: 16
    }),
    frameRate: animFrameRate,
    repeat:-1
})


    this.setFrame(this.idleFrame.front)




    //KEYS input
    //para el leon será ASDW
    const{W,A,S,D,Q,E} = Phaser.Input.Keyboard.KeyCodes
    this.keys = scene.input.keyboard.addKeys({
        w: W,
        a: A,
        s: S,
        d: D,
        q: Q,
        e: E,
    })
  }

  //MOVE CHARACTER
update(){
    const {keys} = this
    const speed = 130
    const previousVelocity = this.body.velocity.clone()

    this.body.setVelocity(0)
    
    //MOVER PERSONAJE Y ANIMSACIONES
    //pers izda
    if(keys.a.isDown){
        this.body.setVelocityX(-speed*2)
        this.anims.play('garras-left',true)
    }
    //pers drcha
    else if(keys.d.isDown){
        this.body.setVelocityX(speed*2)
        this.anims.play('garras-right', true);
    }
    
    //salto
    else if (keys.w.isDown && this.body.touching.down)
    {
        this.body.setVelocityY(-speed*50)
    }
    //empujar

   
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