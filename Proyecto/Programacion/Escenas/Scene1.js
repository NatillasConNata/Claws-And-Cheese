
class Scene1 extends Phaser.Scene{
    constructor(){
        super({key: 'Scene1', active:false})
        this.BASE_PATH = 'Proyecto/Arte/Bocetos/';
    }

    //DESCRIPCIÓN DEL NIVEL:
    // El león tiene que mover cajas
    // y el ratón apagar interruptores
    // para que ambos consigan pasar
    // al siguiente nivel

    
    //NOTA: En este nivel vamos a llamar a
    // los interruptores "llaves" (o keys)
    // y la función de estos es abrir las puertas.

    hasKey1 = false; 
    hasKey2 = false;

    config = {
        type: Phaser.AUTO,
        width: 3744,
        height: 1080,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    game = new Phaser.Game(config);

    preload()//Se cargan los recursos
    {
        this.load.image('Jaulas', 'Arte/Bocetos/niveles prototipos/EscenarioJaulaPixelArt.png');
        console.log("Se ha llegado a la Escena 1")
        this.load.image('Kamaron', 'Arte/Bocetos/kamaron.png');
    }
    create ()
    {
        console.log("imagen del nivel 1 (jaulas)");
        this.add.image(0, 0, 'Jaulas').setOrigin(0,0).setScale(2);
        this.add.image(10, 10, 'Kamaron').setOrigin(0,0).setScale(0.2);

        plataforms = this.physics.add.staticGroup();
        //Definir de donde a donde va cada plataforma y como de grande es.
        plataforms.create(700, 820, 'suelo').setScale(6).refreshBody(); //plat. de inicio
        plataforms.create(975, 625, 'suelo'); //1er contenedor
        plataforms.create(1555, 720, 'suelo'); //1º interruptor
        plataforms.create(2055, 765, 'suelo').setScale(3).refreshBody(); //plat. del medio
        plataforms.create(2120, 625, 'suelo'); //2º contenedor
        plataforms.create(2600, 720, 'suelo'); //2º interruptor
        plataforms.create(3250, 800, 'suelo').setScale(4).refreshBody(); //plat. final
         
        caja = this.physics.add.sprite(50, 50, 'caja');
        caja.setCollideWorldBounds(true);
        this.physics.add.collider(caja, plataforms);
            
        // Agregar bandera
        flag = this.physics.add.sprite(750, 170, 'flag');
        flag.setCollideWorldBounds(true);

        //Físicas y controles del ratón
        player = this.physics.add.sprite(100, 450, 'raton');
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('raton', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'raton', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('raton', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'bite',
            frames: this.anims.generateFrameNumbers('raton', { start: 9, end: 13 }),
            frameRate: 10,
            repeat: 0 // No se repetirá la animación
        });
        //como en esta escena no hay escaleras, no pongo la física de escalada
        

        //Físicas y controles del ratón
        player2 = this.physics.add.sprite(200, 450, 'leon');
        player2.setBounce(0.2);
        player2.setCollideWorldBounds(true);
        this.physics.add.collider(player2, plataforms);

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

        cursors = this.input.keyboard.createCursorKeys();
        this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        this.physics.add.collider(player, plataforms);
        this.physics.add.collider(player2, plataforms);
        this.physics.add.collider(caja, plataforms);
        this.physics.add.collider(flag, plataforms);

        this.physics.add.overlap(player, key1, collectKey, null, this);
        this.physics.add.overlap(player, key2, collectKey, null, this);
        this.physics.add.overlap(player, flag,player2, changeScene, null, this);

        // Agregamos la colisión y la función de overlap para el león y la caja
        this.physics.add.collider(player2, caja, function (player2, caja) {
            var touching = player2.body.touching;

            if (touching.down || touching.up || touching.left || touching.right) {
                caja.setVelocityX(0);
            } else {
                var relativeX = player2.x - caja.x;
                var relativeY =player2.y - caja.x;
                if (relativeX <= 0) {
                    if(relativeY ==0){
                        caja.setVelocityX(160);
                    }
                } else {
                    if(relativeY ==0){
                        caja.setVelocityX(160);
                    }
                }
            }
        });
    update ()
    {
        if (cursors.left.isDown) {      //parámetros ratón
            player.setVelocityX(-160);
            player.anims.play('left', true);
        } else if (cursors.right.isDown) {
            player.setVelocityX(160);
            player.anims.play('right', true);
        } else {
            player.setVelocityX(0);
            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-330);
        }

        if (this.left.isDown) {     //parámetros león
            player2.setVelocityX(-160);
            player2.anims.play('leftLion', true);
        } else if (this.right.isDown) {
            player2.setVelocityX(160);
            player2.anims.play('rightLion', true);
        } else {
            player2.setVelocityX(0);
            player2.anims.play('turnLion');
        }

        if (this.up.isDown && player2.body.touching.down) {
            player2.setVelocityY(-330);
        }

        // Detectar pulsación de la tecla 'P' para pulsar el botón
        if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P))) {
            player.anims.play('bite', true);
        }

   collectKey1(player, key1) {
        key1.disableBody(true, true);
        hasKey1 = true; // Variable para controlar si el jugador tiene la llave
    
        if (hasKey1) {
            this.physics.world.removeCollider(collider1);
        }
    }

    collectKey2(player, key2) {
        key2.disableBody(true, true);
        hasKey2 = true; // Variable para controlar si el jugador tiene la llave
    
        if (hasKey2) {
            this.physics.world.removeCollider(collider2);
        }
    }

    checkOverlap(spriteA, groupB) {
        var boundsA = spriteA.getBounds();
        var objectsB = groupB.getChildren();
        for (var i = 0; i < objectsB.length; i++) {
            var boundsB = objectsB[i].getBounds();
            if (Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB)) {
                return true;
            }
        }
        return false;
    } 
}

// Constantes de dimensiones
Scene1.GAME_WIDTH = 3744;   //Los píxeles que ocupa
Scene1.GAME_HEIGHT = 1080;  // la imagen de fondo

Scene1.RATON_WIDTH = 58;   //Los píxeles que ocupa
Scene1.RATON_HEIGHT = 47;   // la imagen del ratón
//NOTA: He hecho al ratón la mitad de grande de lo que era en la escena 3
// porque es un ratón, en el doc ponía que al ser ratón podría pasar por sitios pequeños etc.

Scene1.LEON_WIDTH = 127;    //Los píxeles que ocupan
Scene1.LEON_HEIGHT = 110;   // la imagen del león

