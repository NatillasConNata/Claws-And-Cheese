class Queso extends PlayerModel {
  constructor(scene, x,y,textureKey, controls, id, players , ground) {
    super(scene,x,y,textureKey, 'QuesoPlayer', controls, id, players , ground)    
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
    


    this.setFrame(this.idleFrame.front);




 
  //MOVE CHARACTER
}
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

}
