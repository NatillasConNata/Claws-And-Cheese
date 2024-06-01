class Garras extends PlayerModel {
  constructor(scene, x,y,textureKey, controls, id, players , ground) {
    super(scene,x,y,textureKey, 'GarrasPlayer', controls, id, players , ground)    

    const animFrameRate= 10
    const anims = scene.anims
    this.pushing =false  /////////

    anims.create({
        key:'garras-left',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 39,
            end: 41
        }),
        frameRate: animFrameRate,
        repeat:-1
    })

    anims.create({
        key:'garras-idle',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 12,
            end: 23
        }),
        frameRate: animFrameRate,
        repeat:-1
    })

    anims.create({
        key:'garras-right',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 36,
            end: 38
        }),
        frameRate: animFrameRate,
        repeat:-1
    })

    anims.create({
      key:'garras-empujar',
      frames: anims.generateFrameNumbers(this.textureKey,{
          start: 72,
          end: 74
      }),
      frameRate: animFrameRate,
      repeat:-1
  })


anims.create({
    key:'garras-jump',
    frames: anims.generateFrameNumbers(this.textureKey,{
        start: 24,
        end: 27 
    }),
    frameRate: animFrameRate,
    repeat:-1
})






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

  //ANIMS CHARACTER
  update(time,delta){
    super.update(time,delta)
    //pers salto
    if (this.controls.up.isDown)
    {
        this.anims.play('garras-jump', true);
    }
    //pers izda
    else if(this.controls.left.isDown)
    {
        this.anims.play('garras-left',true)
    }
    //pers drcha
    else if(this.controls.right.isDown)
    {
        this.anims.play('garras-right', true);
    }
    else if(this.pushing == true)
        {
            this.anims.play('garras-empujar', true);
        }
    else{
        this.anims.play('garras-idle', true)
    }
  }
  /*
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
        this.body.setVelocityY(-speed*60)
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


}*/
}