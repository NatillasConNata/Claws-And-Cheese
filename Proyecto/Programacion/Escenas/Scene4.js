class Scene4 extends Phaser.Scene {
    constructor() {
        super({ key: 'Scene4', active: false });
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
this.ladders;
this.cajas;
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
    
    this.plataforms.create(1820, 1120, 'plataforma1');//Plataforma de escalera
     
    
    
    //ESCALERAS
    this.ladders = this.physics.add.staticGroup();
    this.ladders.create(1500, 1750, 'GarrasPlayer').setScale(5);




    // Ajustar hitbox horizontalmente
    //escalera.children.iterate(function (child) {
        //child.body.setSize(child.width / 2, child.height);
        //child.body.setOffset(child.width / 4, 0);
    //});
    


      // Agregar bandera
    
    //CONTROLES
    let keys = Phaser.Input.Keyboard.KeyCodes;
    let wasd = this.input.keyboard.addKeys({'up': keys.W, 'down': keys.S, 'left': keys.A, 'right': keys.D, 'p': keys.E,'o' : keys.Q});
        let cursors = this.input.keyboard.addKeys({'up': keys.UP, 'down': keys.DOWN, 'left': keys.LEFT, 'right': keys.RIGHT, 'p': keys.P,'o': keys.O});
   //Personajes
        this.players = this.add.group({
        classType: PlayerModel,
        maxSize: 2,
        runChildUpdate: true
    });



    this.player = new Queso(this,200,1750,'QuesoPlayer',wasd,'01',this.players,this.plataforms, this.ladders);
    this.player2 = new Garras(this,250, 1750, 'GarrasPlayer',cursors,'02',this.players,this.plataforms);


    //CAJAS
    this.cajas = this.add.group({
        classType: Cajas,
        maxSize: 5,
        runChildUpdate: true
        
    })
    this.caja = new Cajas(this,400, 1750, 'caja');
    this.cajas.add(this.caja);
    this.physics.add.collider(this.cajas, this.plataforms);
    this.physics.add.collider(this.cajas, this.player, function(caja1, player){
        caja1.setPushable(false);
    });
    this.physics.add.collider(this.cajas, this.player2, function(caja1, player){
        caja1.setPushable(true);
    });

    
    //Funciones
/*
    this.physics.add.collider(this.caja, this.plataforms);
    this.physics.add.collider(this.flag, this.plataforms);
    this.physics.add.collider(this.player, this.escalera);
    this.physics.add.overlap(this.player, this.key, this.collectKey, null, this);
    this.physics.add.overlap(this.player2, this.key, this.collectKey, null, this);
    this.physics.add.overlap(this.player, this.flag, this.changeScene, null, this);
    */
   /*
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
    */
/*
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
    */
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
Scene4.GAME_WIDTH = 720;
Scene4.GAME_HEIGHT = 640;
Scene4.RATON_WIDTH = 116;
Scene4.RATON_HEIGHT = 94;
Scene4.LEON_WIDTH = 127;
Scene4.LEON_HEIGHT = 110;