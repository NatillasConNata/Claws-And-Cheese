class Queso extends PlayerModel {
  constructor(scene, x,y,textureKey, controls, id, players , ground, ladders) {
    super(scene,x,y,textureKey, 'QuesoPlayer', controls, id, players , ground)    
    const animFrameRate= 10
    const anims = scene.anims
    this.jumpVelocity = -1000
    this.ladders=ladders
    this.climbing = false
    anims.create({
        key:'queso-left',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 7,
            end: 13
        }),
        frameRate: animFrameRate,
        repeat:-1
    })
 
    anims.create ({
        key:'queso-idle',
        frames: anims.generateFrameNumbers(this.textureKey,{
        start:0,
        end:6
    }),
    frameRate: animFrameRate,
    repeat:-1
    })

    anims.create({
        key:'queso-right',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 7,
            end: 13
        }),
        frameRate: animFrameRate,
        repeat:-1
    })
    

    anims.create({
        key:'queso-bite-left',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 14,
            end: 20
        }),
        frameRate: animFrameRate,
        repeat:-1
    })

    anims.create({
        key:'queso-bite-right',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 14,
            end: 20
        }),
        frameRate: animFrameRate,
        repeat:-1
    })

    anims.create({
        key:'queso-up',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 32,
            end: 34
        }),
        frameRate: animFrameRate,
        repeat:-1
    })

    anims.create({
        key:'queso-jump',
        frames: anims.generateFrameNumbers(this.textureKey,{
            start: 21,
            end: 26
        }),
        frameRate: animFrameRate,
        repeat:-1
    })
    


    //this.setFrame(this.idleFrame.front);

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


update(time,delta){
    //escalar (PARA ESCALAR HAY QUE PULSAR P Y HACIA ARRIBA SIMULTÁNEAMENTE)
    if(this.climbing == true){
        if(this.controls.p.justDown || this.scene.physics.overlap(this, this.ladders) == false){
            this.setVelocityY(this.jumpVelocity);
            this.climbing = false
            this.body.setAllowGravity(true)
        }
        else{
            this.body.velocity.x = 0
            this.body.velocity.y = 0
            if (this.controls.up.isDown) {
                this.body.velocity.y -= this.speed;
              }
            if (this.controls.down.isDown) {
                this.body.velocity.y += this.speed;
            }
        }
    }
    else{
        if(this.controls.p.isDown ){
            if(this.scene.physics.overlap(this, this.ladders)){
                this.climbing = true
                this.body.setAllowGravity(false)
            }
        }
        else{
            super.update(time,delta)
        }
    }


    //MOVER PERSONAJE Y ANIMSACIONES
    //pers izda
    if(this.controls.left.isDown){
        //this.queso-left.setFlipX(false)
        //player.setFlipX(false);
        this.setFlipX(true);
        this.anims.play('queso-left',true)
    }
    //pers drcha
    else if(this.controls.right.isDown){

        this.setFlipX(false);
        this.anims.play('queso-right', true);
    }
    //Subir escaleras
    else if (this.climbing== true && this.controls.up.isDown )
    {
        
        this.anims.play('queso-up', true);
    }
    //bajar escaleras
    else if (this.climbing== true  && this.controls.down.isDown )
    {
      this.anims.play('queso-up', true);
    }
    //morder
    else if (this.controls.o.isDown)
    {
        this.anims.play('queso-bite-left', true);
    }
    else if (this.controls.up.isDown &&  this.climbing== false )
        {
            this.anims.play('queso-jump', true);
        }
    else{
        this.anims.play('queso-idle', true)
    }

}
  //MOVE CHARACTER
/*
update(){
    
    //MOVER PERSONAJE Y ANIMSACIONES
    //pers izda
    if(this.controls.left.isDown){
        this.anims.play('queso-left',true)
    }
    //pers drcha
    else if(this.controls.right.isDown){
        this.anims.play('queso-right', true);
    }
    //Subir escaleras
    else if (this.controls.p.isDown )
    {
        this.anims.play('queso-up', true);
    }
    //bajar escaleras
    else if (this.controls.down.isDown )
    {
      this.anims.play('queso-up', true);
    }
    //morder
    else if (this.controls.o.isDown)
    {
        this.anims.play('queso-bite-left', true);

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
*/
}
