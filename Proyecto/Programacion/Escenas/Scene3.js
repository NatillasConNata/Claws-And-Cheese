class Scene3 extends Phaser.Scene {
    constructor() {
        super({ key: 'Scene3', active: false });
        this.BASE_PATH = 'Proyecto/Arte/Bocetos/';
    }


preload() {
this.load.image('escenario', 'Arte/Bocetos/niveles prototipos/Nivel3/scene.png');
this.load.image('caja', 'Arte/Bocetos/niveles prototipos/Nivel3/caja.png');
this.load.image('key', 'Arte/Bocetos/niveles prototipos/Nivel3/key.png'); // Nueva imagen de la llave
this.load.image('flag', 'Arte/Bocetos/niveles prototipos/Nivel3/bandera.png'); // Nueva imagen de la bandera
this.load.spritesheet('QuesoPlayer', 'Arte/Bocetos/Sprite/ratonspritesheet.png', { frameWidth: 116 , frameHeight: 97 });
        this.load.spritesheet('GarrasPlayer', 'Arte/Bocetos/Sprite/leonspritesheet.png', { frameWidth: 127 , frameHeight: 110});
this.load.image('escalera', 'Arte/Bocetos/niveles prototipos/Nivel3/escalerainv.png');

//Plataforma de las escenas 
this.load.image('suelo','Arte/Bocetos/niveles prototipos/Nivel3/suelo.png');
this.load.image('plataforma1','Arte/Bocetos/niveles prototipos/Nivel3/plataforma1.png');


//Variables
this.plataforms;
this.player;
this.player2;
this.cursors;
this.score = 0;
this.scoreText;
this.right;
this.left;
this.up;
this.escalera;
this.caja;
this.key;
this.flag;
}



//Creacion de variables nuevas 

  create() {
    this.add.image(2000, 1000, 'escenario').setScale(2.1);
    //Plataforma suelo
    this.plataforms = this.physics.add.staticGroup();
    this.plataforms.create(975, 1870, 'suelo');
    this.plataforms.create(1500, 1870, 'suelo');
    this.plataforms.create(1800, 1870, 'suelo');
    this.plataforms.create(2100, 1870, 'suelo');
    this.plataforms.create(2600, 1870, 'suelo');
    this.plataforms.create(3000, 1870, 'suelo');
    //Plataforma del parkour
    this.plataforms.create(68, 1650, 'plataforma1');//Plataforma 1
    this.plataforms.create(400, 1600, 'plataforma1');//Plataforma 2
    this.plataforms.create(590, 1500, 'plataforma1')//Plataforma 3
    this.plataforms.create(900, 1550, 'plataforma1');//Plataforma 4
    this.plataforms.create(1100, 1450, 'plataforma1')//Plataforma 5
    this.plataforms.create(1400, 1400, 'plataforma1')//Plataforma 6
    this.plataforms.create(1550, 1300, 'plataforma1')//Plataforma 7
    this.plataforms.create(1650, 1200, 'plataforma1')//Plataforma 8
    this.plataforms.create(1650, 750, 'plataforma1')//Plataforma 9
    this.plataforms.create(1400, 650, 'plataforma1')//Plataforma 10
    this.plataforms.create(1250, 650, 'plataforma1')//Plataforma 11

    this.plataforms.create(1000, 600, 'plataforma1')//Plataforma 11
    
    this.plataforms.create(1820, 1120, 'plataforma1');//Plataforma de escalera
     
    
    
    //Superficie llave 
    this.plataforms.create(68, 800, 'plataforma1');//Superficie llave 
    this.plataforms.create(200, 800, 'plataforma1');//Superficie llave 
    
    
    // Crear la llave (key) en la plataforma
    this.key = this.physics.add.sprite(68, 600, 'key');
    this.key.setCollideWorldBounds(true);
    this.physics.add.collider(this.key, this.plataforms);



    // Ajustar hitbox horizontalmente
    //escalera.children.iterate(function (child) {
        //child.body.setSize(child.width / 2, child.height);
        //child.body.setOffset(child.width / 4, 0);
    //});


    this.caja = this.physics.add.sprite(400, 1750, 'caja');
    this.caja.setCollideWorldBounds(true);
    this.physics.add.collider(this.caja, this.plataforms);

      // Agregar bandera

    this.flag = this.physics.add.sprite(3500, 170, 'flag');
    this.flag.setCollideWorldBounds(true);

    this.player = new Queso(this,200,1750,'QuesoPlayer');
    this.physics.add.collider(this.player, this.plataforms);
    this.player.body.setCollideWorldBounds(true)

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
        key: 'escalada',
        frames: this.anims.generateFrameNumbers('ratonescalada', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    this.player2 = new Garras(this,250, 1750, 'GarrasPlayer');
    this.physics.add.collider(this.player2, this.platforms);
    this.player2.body.setCollideWorldBounds(true);

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

    this.anims.create({
        key: 'bite',
        frames: this.anims.generateFrameNumbers('raton', { start: 9, end: 13 }),
        frameRate: 10,
        repeat: 0 // No se repetirá la animación
    });

    //Funciones
    this.cursors = this.input.keyboard.createCursorKeys();
    this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

    this.physics.add.collider(this.player, this.plataforms);
    this.physics.add.collider(this.player2, this.plataforms);

    this.physics.add.collider(this.caja, this.plataforms);
    this.physics.add.collider(this.flag, this.plataforms);
    this.physics.add.collider(this.player, this.escalera);
    this.physics.add.overlap(this.player, this.key, this.collectKey, null, this);
    this.physics.add.overlap(this.player2, this.key, this.collectKey, null, this);
    this.physics.add.overlap(this.player, this.flag, this.changeScene, null, this);

    this.physics.add.collider(this.player2, this.caja, (player2, caja) => {
        var touching = this.player2.body.touching;
        this.caja.body.moves = true;
        if (touching.down || touching.up || touching.left || touching.right) {
            this.caja.setVelocityX(0);
            this.caja.body.moves = true;
        } else {
            var relativeX = player2.x - caja.x;
            var relativeY = player2.y - caja.y; // Corregir esta línea, usar 'caja.y' en lugar de 'caja.x'
            if (relativeX <= 0) {
                if (relativeY == 0) {
                    this.caja.body.moves = true;
                    this.caja.setVelocityX(0);
                }
            } else {
                if (relativeY == 0) {
                    this.caja.body.moves = true;
                    this.caja.setVelocityX(0);
                }
            }
        }
    });

    this.physics.add.collider(this.player, this.caja, (player, caja) => {
        if (player.body.touching.down) {
           
            caja.setVelocityY(0);
            caja.body.moves = false;
        }

        if (player.body.touching.left || player.body.touching.right) {
           
            caja.setVelocityX(0);
            caja.body.moves = false;
        }
    });
}

 update() {
    this.player.update();
    this.player2.update();
    /*
    if (this.cursors.left.isDown) {
        this.player.setVelocityX(-160);
        this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
        this.player.setVelocityX(160);
        this.player.anims.play('right', true);
    } else {
        this.player.setVelocityX(0);
        this.player.anims.play('turn');
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
        this.player.setVelocityY(-330);
    }

    if (this.left.isDown) {
        this.player2.setVelocityX(-160);
        this.player2.anims.play('leftLion', true);
    } else if (this.right.isDown) {
        this.player2.setVelocityX(160);
        this.player2.anims.play('rightLion', true);
    } else {
        this.player2.setVelocityX(0);
        this.player2.anims.play('turnLion');
    }

    if (this.up.isDown && player2.body.touching.down) {
        this.player2.setVelocityY(-330);
    }

    // Detectar pulsación de la tecla 'P' para la mordida
    if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P))) {
        
}
if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E).isDown && checkOverlap(player, escalera)) {
        this.player.setVelocityY(-160);
        this.player.setVelocityX(0);
        
    } else if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q).isDown && checkOverlap(player, escalera)) {
        this.player.setVelocityY(160);
        this.player.setVelocityX(0);
        
    } else if (checkOverlap(player, escalera)) {
        this.player.setVelocityY(0);
        this.player.setVelocityX(0);
    }
    */
}
collectKey(player, key) {
    this.key.disableBody(true, true);
    this.hasKey = true; // Variable para controlar si el jugador tiene la llave
}

changeScene(player, flag) {
    if (this.hasKey) {
        // Cambiar a la siguiente escena
        this.scene.start('Credits'); // Reemplaza 'NextSceneKey' con el nombre de tu siguiente escena
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
Scene3.GAME_WIDTH = 720;
Scene3.GAME_HEIGHT = 640;
Scene3.RATON_WIDTH = 116;
Scene3.RATON_HEIGHT = 94;
Scene3.LEON_WIDTH = 127;
Scene3.LEON_HEIGHT = 110;