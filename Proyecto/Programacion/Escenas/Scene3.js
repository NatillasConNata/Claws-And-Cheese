class Scene3 extends Phaser.Scene {
    constructor() {
        super({ key: 'Scene3', active: false });
        this.BASE_PATH = 'Proyecto/Arte/Bocetos/';
    }

   
 hasKey = false;

 config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
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

 preload() {
this.load.image('sky', 'assets/sky.png');
this.load.image('ground', 'assets/platform.png');
this.load.image('caja', 'assets/cajota.png');
this.load.image('key', 'assets/key.png'); // Nueva imagen de la llave
this.load.image('flag', 'assets/flag.png'); // Nueva imagen de la bandera
this.load.spritesheet('raton', 'assets/Ratonmejordef.png', { frameWidth: 116, frameHeight: 94 });
this.load.spritesheet('ratonescalada', 'assets/ratonEscalada.png', { frameWidth: 116, frameHeight: 94 });
this.load.spritesheet('leon', 'assets/Leonbipedo.png', { frameWidth: 127, frameHeight: 110 });
this.load.image('escalera', 'assets/Escalera.png');
}


 plataforms;
 player;
 player2;
 cursors;
 score = 0;
 scoreText;
 right;
 left;
 up;
 escalera;
 caja;
//Creacion de variables nuevas 
 key;
 flag;
 create() {
    this.add.image(400, 300, 'sky');

    plataforms = this.physics.add.staticGroup();
    plataforms.create(400, 568, 'ground').setScale(2).refreshBody();
    plataforms.create(600, 400, 'ground');
    plataforms.create(50, 250, 'ground');
    plataforms.create(750, 220, 'ground');
      // Agregar llave
    key = this.physics.add.sprite(700, 400, 'key');
    key.setCollideWorldBounds(true);
    this.physics.add.collider(key, plataforms);

    escalera = this.physics.add.staticGroup();
    escalera.create(350, 455, 'escalera').setScale(5);

    // Ajustar hitbox horizontalmente
    escalera.children.iterate(function (child) {
        child.body.setSize(child.width / 2, child.height);
        child.body.setOffset(child.width / 4, 0);
    });


    caja = this.physics.add.sprite(350, 455, 'caja');
    caja.setCollideWorldBounds(true);
    this.physics.add.collider(caja, plataforms);

      // Agregar bandera

    flag = this.physics.add.sprite(750, 170, 'flag');
    flag.setCollideWorldBounds(true);

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
        key: 'escalada',
        frames: this.anims.generateFrameNumbers('ratonescalada', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

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

    this.anims.create({
        key: 'bite',
        frames: this.anims.generateFrameNumbers('raton', { start: 9, end: 13 }),
        frameRate: 10,
        repeat: 0 // No se repetirá la animación
    });

    cursors = this.input.keyboard.createCursorKeys();
    this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

    this.physics.add.collider(player, plataforms);
    this.physics.add.collider(player2, plataforms);
    this.physics.add.collider(caja, plataforms);
    this.physics.add.collider(flag, plataforms);
    this.physics.add.collider(player, escalera);

    this.physics.add.overlap(player, key, collectKey, null, this);
    this.physics.add.overlap(player2, key, collectKey, null, this);
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
}

 update() {
    if (cursors.left.isDown) {
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

    if (this.up.isDown && player2.body.touching.down) {
        player2.setVelocityY(-330);
    }

    // Detectar pulsación de la tecla 'P' para la mordida
    if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P))) {
        player.anims.play('bite', true);
}
if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E).isDown && checkOverlap(player, escalera)) {
        player.setVelocityY(-160);
        player.setVelocityX(0);
        player.anims.play('ratonescalada', true);
    } else if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q).isDown && checkOverlap(player, escalera)) {
        player.setVelocityY(160);
        player.setVelocityX(0);
        player.anims.play('ratonescalada', true);
    } else if (checkOverlap(player, escalera)) {
        player.setVelocityY(0);
        player.setVelocityX(0);
    }
}

 

 collectKey(player, key) {
key.disableBody(true, true);
hasKey = true; // Variable para controlar si el jugador tiene la llave
}

 changeScene(player, flag, player2) {
if (hasKey) {
    // Cambiar a la siguiente escena
    this.scene.start('NextSceneKey'); // Reemplaza 'NextSceneKey' con el nombre de tu siguiente escena
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