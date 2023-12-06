
class Acuarioymuelles extends Phaser.Scene{
    constructor(){
        super({key: 'Acuarioymuelles', active:false})
    }

    preload()
    {
        this.load.image('Jaulas', 'Proyecto/Arte/Bocetos/niveles prototipos/EscenarioJaulaPixelArt.png');
        this.load.spritesheet('raton','Proyecto/Arte/Bocetos/Sprite/Ratonwalk.png',{frameWidth:116,frameHeight:94});
        this.load.spritesheet('leon','Proyecto/Arte/Bocetos/Sprite/Leonwalk.png',{frameWidth:127,frameHeight:110});
    }
    //Creacion de los personajes 
    create ()
    {
        //Creacion del personaje 
        player = this.physics.add.sprite(100, 450, 'raton');

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
        //Creaccion de animaciones de izquierda a derecha 
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('raton', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'raton', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('raton', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        player2 = this.physics.add.sprite(200, 450, 'leon');
        player2.setBounce(0.2);
        player2.setCollideWorldBounds(true);
       // Creaccion de animaciones de izquierda a derecha para el león
        this.anims.create({
            key: 'leftLion',
            frames: this.anims.generateFrameNumbers('leon', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turnLion',
            frames: [{ key: 'leon', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'rightLion',
            frames: this.anims.generateFrameNumbers('leon', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        //Inicializo la variable de controles 
        //Curso de personaje 1
        cursors = this.input.keyboard.createCursorKeys();
        //Cursor de personaje 2 
        this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    }

    update (){
         //Comprobacion de cual tecla esta pulsando el jugador 
         if (cursors.left.isDown)
         {
             player.setVelocityX(-160);
 
             player.anims.play('left', true);
         }
         else if (cursors.right.isDown)
         {
             player.setVelocityX(160);
 
             player.anims.play('right', true);
         }
         else
         {
             player.setVelocityX(0);
 
             player.anims.play('turn');
         }
         //Comprueba si el personaje esta en el suelo y si esta en el aire 
         //Para que no haga multiplrd salto 
         if (cursors.up.isDown && player.body.touching.down)
         {
             player.setVelocityY(-330);
         }
         //Jugador 2 
         if (this.left.isDown) {
             player2.setVelocityX(-160);
             player2.anims.play('leftLion', true);
         } else if (this.right.isDown) {
             player2.setVelocityX(160);
             player2.anims.play('rightLion', true);
         } else {
             player2.setVelocityX(0);
             player2.anims.play('turnLion');
         }
                 //Comprueba si el personaje esta en el suelo y si esta en el aire 
                 //Para que no haga multiplrd salto 
                 if (this.up.isDown && player2.body.touching.down)
                 {
                     player2.setVelocityY(-330);
             }
         

    }
}
