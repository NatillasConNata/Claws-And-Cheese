class Scene4 extends Phaser.Scene {
    constructor() {
        super({ key: 'Scene4', active: false });
        this.BASE_PATH = 'Proyecto/Arte/';
    }


preload() {
    //this.load.image('escenario', 'Arte/Bocetos/niveles prototipos/Nivel3/scene.png');
//ESCENARIO
this.load.image('escenario', 'Arte/Escenario/Scene4/GarrasAndCheeseFondo.png');
this.load.image('escenarioObjFront', 'Arte/Escenario/Scene4/GarrasAndCheeseObjetosFront.png');
//this.load.image('escenarioPlatforms', 'Arte/Escenario/Scene4/GarrasAndCheesePlataformas.png');///////////////////////////////////////////////////no se si cambiarlo por plataformas individuales

this.load.image('SueloBase', 'Arte/Escenario/Scene4/GarrasAndCheeseBase.png');/////////////////////////////////
this.load.image('Escaleras3', 'Arte/Escenario/Scene4/GarrasAndCheeseEscaleras3.png');/////////////////////////////////
this.load.image('Escaleras5', 'Arte/Escenario/Scene4/GarrasAndCheeseEscaleras5.png');/////////////////////////////////
this.load.image('Escaleras8', 'Arte/Escenario/Scene4/GarrasAndCheeseEscaleras8.png');/////////////////////////////////
this.load.image('sueloBlocks', 'Arte/Escenario/Scene4/SueloBlocks.png');/////////////////////////////////
this.load.image('Platform1Up', 'Arte/Escenario/Scene4/GarrasAndCheesePlatform1Up.png');/////////////////////////////////
this.load.image('Platform2Up', 'Arte/Escenario/Scene4/GarrasAndCheesePlatform2Up.png');/////////////////////////////////
this.load.image('Platform3Up', 'Arte/Escenario/Scene4/GarrasAndCheesePlatform3Up.png');/////////////////////////////////
this.load.image('Platform19Lat', 'Arte/Escenario/Scene4/GarrasAndCheesePlatform19Lat.png');/////////////////////////////////
this.load.image('Platform4Lat', 'Arte/Escenario/Scene4/GarrasAndCheesePlatform4Lat.png');/////////////////////////////////
this.load.image('Platform16Up', 'Arte/Escenario/Scene4/GarrasAndCheesePlatform16Up.png');/////////////////////////////////
this.load.image('Block', 'Arte/Escenario/Scene4/GarrasAndCheeseBlock.png');/////////////////////////////////
this.load.image('Platform16Lat', 'Arte/Escenario/Scene4/GarrasAndCheesePlatform16Lat.png');/////////////////////////////////
this.load.image('Plank', 'Arte/Escenario/Scene4/GarrasAndCheesePlank.png');/////////////////////////////////



//BOTONES
this.load.image('ButtonExit', 'Arte/UI/PixelGUI/ExitBtn.png');
this.load.image('ButtonExitPressed', 'Arte/UI/PixelGUI/ExitClick.png');

//OBJETOS
this.load.image('caja', 'Arte/Escenario/Scene4/Box.png');
this.load.image('key', 'Arte/Escenario/Scene4/Key.png'); // Nueva imagen de la llave
this.load.image('flag', 'Arte/Escenario/Scene4/Flag.png'); // Nueva imagen de la bandera
this.load.image('doorOpen', 'Arte/Escenario/Scene4/DoorOpen.png'); // puerta abierta
this.load.image('doorClose', 'Arte/Escenario/Scene4/DoorClose.png'); //puerta cerrada

//PERSONAJES
//this.load.spritesheet('QuesoPlayer', 'Arte/Bocetos/Sprite/ratonspritesheet.png', { frameWidth: 116 , frameHeight: 97 });
//this.load.spritesheet('GarrasPlayer', 'Arte/Bocetos/Sprite/leonspritesheet.png', { frameWidth: 127 , frameHeight: 110});
this.load.spritesheet('GarrasPlayer', 'Arte/Characters/otter_sprite_pack/Garras.png', { frameWidth: 170 , frameHeight: 86});
this.load.spritesheet('QuesoPlayer', 'Arte/Characters/FREEVERSION_MrCookies/MRCookies_Complete_19x19.png', { frameWidth: 19 , frameHeight: 19 });

//PC
this.load.image('PC', 'Arte/Bocetos/niveles prototipos/Nivel2/Pc.png');



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
this.doors;
this.doorsCol;
this.doorsCol2;
this.PC;
this.combo;

this.canvas = this.sys.game.canvas;
}



//Creacion de variables nuevas 

  create() {

    this.add.image(this.canvas.width * 0.5, this.canvas.height*0.5, 'escenario').setScale(2);    
    //this.add.image(this.canvas.width * 0.5, this.canvas.height*0.5, 'escenarioPlatforms').setScale(2).setAlpha(0.3);

    this.add.image(this.canvas.width * 0.5, this.canvas.height*0.5, 'escenarioObjFront').setScale(2);

    //Botones
    this.exitButton = this.add.sprite(this.canvas.width * 0.05, this.canvas.height * 0.05, 'ButtonExit').setInteractive().setScale(0.2);


    //Plataformas suelo
    this.plataforms = this.physics.add.staticGroup();
    this.plataforms.create(this.canvas.width * 0.5, this.canvas.height*0.9655 , 'SueloBase');
    this.plataforms.create(this.canvas.width * 0.11, this.canvas.height *0.815, 'sueloBlocks');
    //this.plataforms.create(this.canvas.width * 0.18, this.canvas.height * 0.51, 'Platform1Up');
    this.plataforms.create(this.canvas.width * 0.247, this.canvas.height * 0.315, 'Platform1Up');
    this.plataforms.create(this.canvas.width * 0.943, this.canvas.height * 0.72, 'Platform1Up');
    this.plataforms.create(this.canvas.width * 0.943, this.canvas.height * 0.686, 'Platform1Up');
    this.plataforms.create(this.canvas.width * 0.967, this.canvas.height * 0.45, 'Platform1Up');
    this.plataforms.create(this.canvas.width * 0.979, this.canvas.height * 0.415, 'Platform1Up');

    this.plataforms.create(this.canvas.width * 0.095, this.canvas.height * 0.51, 'Platform2Up');
    this.plataforms.create(this.canvas.width * 0.105, this.canvas.height * 0.65, 'Platform2Up');
    this.plataforms.create(this.canvas.width * 0.145, this.canvas.height * 0.58, 'Platform2Up');
    this.plataforms.create(this.canvas.width * 0.15, this.canvas.height * 0.44, 'Platform2Up');
    this.plataforms.create(this.canvas.width * 0.21, this.canvas.height * 0.59, 'Platform3Up');
    this.plataforms.create(this.canvas.width * 0.415, this.canvas.height * 0.75, 'Platform2Up');
    this.plataforms.create(this.canvas.width * 0.493, this.canvas.height * 0.53, 'Platform2Up');

    //Plataformas foso
    this.plataforms.create(this.canvas.width * 0.35, this.canvas.height * 0.32, 'Platform2Up');
    this.plataforms.create(this.canvas.width * 0.255, this.canvas.height * 0.67, 'Platform2Up');
    //this.plataforms.create(this.canvas.width * 0.265, this.canvas.height * 0.71, 'Platform2Up');
    //this.plataforms.create(this.canvas.width * 0.285, this.canvas.height * 0.42, 'Platform3Up');
    //this.plataforms.create(this.canvas.width * 0.29, this.canvas.height * 0.55, 'Platform3Up');
    this.plataforms.create(this.canvas.width * 0.255, this.canvas.height * 0.46, 'Platform3Up');
    this.plataforms.create(this.canvas.width * 0.35, this.canvas.height * 0.8, 'Platform3Up');
    //this.plataforms.create(this.canvas.width * 0.32, this.canvas.height * 0.915, 'Platform3Up');
   this.plataforms.create(this.canvas.width * 0.38, this.canvas.height * 0.6, 'Platform3Up');
    //this.plataforms.create(this.canvas.width * 0.4055, this.canvas.height * 0.39, 'Platform3Up');
    
    this.plataforms.create(this.canvas.width * 0.033, this.canvas.height * 0.45, 'Platform3Up');
    this.plataforms.create(this.canvas.width * 0.76, this.canvas.height * 0.527, 'Platform3Up');      //plataforma puzle caja sobre caja
    //this.plataforms.create(this.canvas.width * 0.81, this.canvas.height * 0.48, 'Platform3Up');    
    this.plataforms.create(this.canvas.width * 0.46, this.canvas.height * 0.53, 'Platform3Up');

    this.plataforms.create(this.canvas.width * 0.46, this.canvas.height * 0.283, 'Platform3Up');

    this.plataforms.create(this.canvas.width * 0.81, this.canvas.height * 0.75, 'Platform3Up');
    this.plataforms.create(this.canvas.width * 0.85, this.canvas.height * 0.75, 'Platform3Up');
    this.plataforms.create(this.canvas.width * 0.89, this.canvas.height * 0.75, 'Platform3Up');
    this.plataforms.create(this.canvas.width * 0.93, this.canvas.height * 0.75, 'Platform3Up');
    this.plataforms.create(this.canvas.width * 0.913, this.canvas.height * 0.48, 'Platform3Up');
    this.plataforms.create(this.canvas.width * 0.954, this.canvas.height * 0.48, 'Platform3Up');

    this.plataforms.create(this.canvas.width * 0.93, this.canvas.height * 0.15, 'Platform3Up');//Caseta con puertas
    this.plataforms.create(this.canvas.width * 0.89, this.canvas.height * 0.15, 'Platform3Up');//Caseta con puertas
    this.plataforms.create(this.canvas.width * 0.85, this.canvas.height * 0.15, 'Platform3Up');//Caseta con puertas
    this.plataforms.create(this.canvas.width *0.93, this.canvas.height * 0.067, 'Platform4Lat');//Caseta con puertas



    this.plataforms.create(this.canvas.width * 0.005, this.canvas.height * 0.38, 'Platform19Lat').setFlipX(true);
    this.plataforms.create(this.canvas.width * 0.235, this.canvas.height * 0.615, 'Platform19Lat').setFlipX(true);
    this.plataforms.create(this.canvas.width * 0.995, this.canvas.height * 0.35, 'Platform19Lat');
    //this.plataforms.create(this.canvas.width * 0.434, this.canvas.height * 0.615, 'Platform19Lat');

    this.plataforms.create(this.canvas.width *0.434, this.canvas.height * 0.565, 'Platform16Lat');


    this.plataforms.create(this.canvas.width*0.094, this.canvas.height * 0.32, 'Platform16Up');
    this.plataforms.create(this.canvas.width *0.67, this.canvas.height * 0.28, 'Platform16Up');
    this.plataforms.create(this.canvas.width *0.883 , this.canvas.height * 0.28, 'Platform16Up');
    this.plataforms.create(this.canvas.width *0.63, this.canvas.height * 0.65, 'Platform16Up');
    this.plataforms.create(this.canvas.width *0.843, this.canvas.height * 0.65, 'Platform16Up');
    this.plataforms.create(this.canvas.width *0.63, this.canvas.height * 0.405, 'Platform16Up');


    this.plataforms.create(this.canvas.width *0.06, this.canvas.height * 0.5, 'Platform4Lat');
    this.plataforms.create(this.canvas.width *0.06, this.canvas.height * 0.63, 'Platform4Lat');
    this.plataforms.create(this.canvas.width *0.9, this.canvas.height * 0.565, 'Platform4Lat');
    this.plataforms.create(this.canvas.width *0.795, this.canvas.height * 0.865, 'Platform4Lat');
    this.plataforms.create(this.canvas.width *0.795, this.canvas.height * 0.835, 'Platform4Lat');
    this.plataforms.create(this.canvas.width *0.672, this.canvas.height * 0.863, 'Platform4Lat');

    this.plataforms.create(this.canvas.width *0.886, this.canvas.height * 0.615, 'Block');

    this.plataforms.create(this.canvas.width *0.775, this.canvas.height * 0.8, 'Plank');
    this.plataforms.create(this.canvas.width *0.74, this.canvas.height * 0.86, 'Plank');

    
    //PUERTAS
    this.doors = this.physics.add.staticGroup();
    this.doors.create(this.canvas.width * 0.95, this.canvas.height * 0.21  , 'doorClose').setFlipX(true);
    


    //ESCALERAS
    this.ladders = this.physics.add.staticGroup();
    this.ladders.create(this.canvas.width * 0.22, this.canvas.height*0.435, 'Escaleras8');
    this.ladders.create(this.canvas.width * 0.48, this.canvas.height*0.795, 'Escaleras8');
    this.ladders.create(this.canvas.width * 0.685, this.canvas.height*0.86, 'Escaleras5');
    this.ladders.create(this.canvas.width * 0.515, this.canvas.height*0.565, 'Escaleras3');
    this.ladders.create(this.canvas.width * 0.487, this.canvas.height*0.35, 'Escaleras3');





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
    //BOTONES
    this.exitButton.on('pointerdown', function () {
        //this.scene.stop('MainScene');
        this.exitButton.setTexture('ButtonExitPressed');
        this.exitButton.setTint(0xc7c7c7)
        //this.scene.events.on('sleep', listener)
        this.time.addEvent({
            delay: 500,
            callback: function ()
            {
                this.scene.start('MainScene', MainScene, true, { x: 400, y: 300 });
            },
            callbackScope: this,
            repeat: 0
        });
       // MainAudio.stop()

    },this);
   


    this.player = new Queso(this,200,this.canvas.height *0.2,'QuesoPlayer',wasd,'01',this.players,this.plataforms, this.ladders).setScale(2);
    this.player2 = new Garras(this,250, this.canvas.height *0.2, 'GarrasPlayer',cursors,'02',this.players,this.plataforms);


    //CAJAS
    this.cajas = this.add.group({
        classType: Cajas,
        maxSize: 5,
        runChildUpdate: true
        
    })

    this.caja = new Cajas(this,1500, this.canvas.height*0.9, 'caja');    
    this.cajas.add(this.caja);
    this.caja = new Cajas(this,1740, this.canvas.height*0.5, 'caja');
    this.cajas.add(this.caja);
    this.caja = new Cajas(this,1400, this.canvas.height*0.3, 'caja');
    this.cajas.add(this.caja);


    this.physics.add.collider(this.cajas, this.plataforms);
    this.physics.add.collider(this.cajas, this.player, function(caja1, player){
        caja1.setPushable(false);
    });
    this.physics.add.collider(this.cajas, this.player2, function(caja1, player){
        caja1.setPushable(true);
    });
    this.physics.add.collider(this.cajas, this.plataforms, function(caja1, player){
        caja1.setPushable(false);
    });
    this.physics.add.collider(this.cajas, this.cajas, function(caja1, player){
        caja1.setPushable(true);
    });
    this.doorsCol = this.physics.add.collider(this.player2, this.doors);
    this.doorsCol2 =this.physics.add.collider(this.player, this.doors);

    //LLAVES
    // Crear la llave (key) en la plataforma
    this.key = this.physics.add.sprite(68, 300, 'key');
    this.key.setCollideWorldBounds(true);
    this.physics.add.collider(this.key, this.plataforms);

    //Funciones

    //this.physics.add.collider(this.caja, this.plataforms);
    //this.physics.add.collider(this.player, this.escalera);
    this.physics.add.overlap(this.player, this.key, this.collectKey, null, this);
    this.physics.add.overlap(this.player2, this.key, this.collectKey, null, this);
    this.physics.add.overlap(this.player, this.flag, this.changeScene, null, this);


    //SALIDA
    this.flag = this.physics.add.sprite(this.canvas.width*0.98, this.canvas.height * 0.22, 'flag');
    this.flag.setCollideWorldBounds(true);
    this.physics.add.collider(this.flag, this.plataforms);    
    this.physics.add.overlap(this.player, this.flag, this.changeScene, null, this);
    this.physics.add.overlap(this.player2, this.flag, this.changeScene, null, this);


    //pc 
    this.PC = this.physics.add.staticGroup();
    this.PC.create(this.canvas.width*0.88, this.canvas.height*0.2, 'PC').setScale(0.2).refreshBody();

    //COMBO
    this.combo = this.input.keyboard.createCombo('panc');
    this.combo.enabled = false //no procesa teclas

    this.input.keyboard.on('keycombomatch', (event) => {
        console.log('Konami Code entered!');
        if (this.door) {
            this.door.clear(true,true);
            this.door = null;
        }
        //this.enterDoor(); // Llama a la función enterDoor cuando se activa el combo
    });

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

    //ELIMINAR COLLIDER DE PUERTA
    this.doors.children.iterate((child) => {
        child.setTexture('doorOpen');
      });
    this.physics.world.removeCollider(this.doorsCol);
    this.physics.world.removeCollider(this.doorsCol2);
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

//PC CODE
update(time) {
    this.player.update();
    this.player2.update();

    if (this.physics.overlap(this.player, this.PC)) {
        // Verifica si el jugador está cerca de la PC y habilita el combo
        this.combo.enabled = true;
        console.log('patata')
    } else {
        // Si el jugador no está cerca de la PC, deshabilita el combo
        this.combo.enabled = false;
        console.log('patos')
    }
}
}

// Constantes de dimensiones
Scene4.GAME_WIDTH = 720;
Scene4.GAME_HEIGHT = 640;
Scene4.RATON_WIDTH = 19;
Scene4.RATON_HEIGHT = 19;
Scene4.LEON_WIDTH = 170;
Scene4.LEON_HEIGHT = 86;