class Scene2 extends Phaser.Scene{
    constructor(){
        super({key: 'Scene2', active:false})
    }

    preload()
    {
        //camaras
        this.cameras.main.setBackgroundColor(0x9900e3)
        //this.cameras.main.height = 890
        //this.cameras.main.width = 1000
        //this.cameras.main.setPosition(32,32)

        //carga imágenes y spritesheets
        this.load.image('AviarioFondo', 'Arte/Bocetos/niveles prototipos/Nivel2/AviarioBackgroundcodigo.png');
        this.load.image('AviarioDelante', 'Arte/Bocetos/niveles prototipos/Nivel2/AviarioForeground.png');
        this.load.image('Platform', 'Arte/Bocetos/niveles prototipos/Nivel2/InvisiblePlatform.png');
        this.load.image('BlockPlatform', 'Arte/Bocetos/niveles prototipos/Nivel2/BlockPlatform.png');
        this.load.image('PC', 'Arte/Bocetos/niveles prototipos/Nivel2/Pc.png');
        this.load.image('Puerta', 'Arte/Bocetos/niveles prototipos/Nivel2/puerta.png');
        this.load.image('silla', 'Arte/Bocetos/niveles prototipos/Nivel2/Silla.png');
        this.load.image('caja', 'Arte/Bocetos/niveles prototipos/Nivel3/caja.png');


        console.log("he llegado hasta Scene2")
        this.load.image('Kamaron', 'Arte/Bocetos/kamaron.png');
        this.load.spritesheet('QuesoPlayer', 'Arte/Bocetos/Sprite/ratonspritesheet.png', { frameWidth: 116 , frameHeight: 97 });
        this.load.spritesheet('GarrasPlayer', 'Arte/Bocetos/Sprite/leonspritesheet.png', { frameWidth: 127 , frameHeight: 110});

        this.load.image('ground', 'Arte/Bocetos/niveles prototipos/Nivel2/plataform.jpg');

        //variables
        this.player1
        this.player2
        this.keys
        this.platforms
        this.PC
        this.combo
        this.door
        this.silla
        this.door2
        this.caja;
        this.caja2;
    }
    create ()
    {
        //
        this.add.image(0, 0, 'AviarioFondo').setOrigin(0,0);
        this.add.image(10, 10, 'Kamaron').setOrigin(0,0).setScale(0.2);
        

        

        
        this.silla= this.physics.add.staticGroup()
        this.silla.create(3300, 800, 'silla');
        //Platforms y limites
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(200, 900, 'ground');
        this.platforms.create(2000, 1985, 'Platform').setScale(40,1).refreshBody();
        this.platforms.create(150, 1600, 'Platform').setScale(0.5,1).refreshBody();
        this.platforms.create(1460, 1600, 'Platform').setScale(23,1).refreshBody();
        this.platforms.create(3300, 1400, 'Platform').setScale(10,1).refreshBody();
        this.platforms.create(2630, 1585, 'BlockPlatform');
        this.platforms.create(2680, 1545, 'BlockPlatform');
        this.platforms.create(2730, 1505, 'BlockPlatform');
        this.platforms.create(2790, 1465, 'BlockPlatform');
        this.platforms.create(2840, 1425, 'BlockPlatform');
        this.platforms.create(600, 1100, 'Platform').setScale(4,2).refreshBody();
        this.platforms.create(1260, 1100, 'Platform').setScale(5,2).refreshBody();
        this.platforms.create(1750, 1400, 'Platform').setScale(8,2).refreshBody();
        this.platforms.create(2140, 1290, 'BlockPlatform').setScale(1,5).refreshBody();
        this.platforms.create(1720, 1080, 'BlockPlatform').setScale(8,1).refreshBody();
        this.platforms.create(2000, 1020, 'BlockPlatform').setScale(12,1).refreshBody();
        this.platforms.create(2270, 960, 'BlockPlatform').setScale(5,1).refreshBody();
        this.platforms.create(2950, 940, 'BlockPlatform').setScale(22,3).refreshBody();
        this.platforms.create(3490, 590, 'BlockPlatform').setScale(1,10).refreshBody();
        this.platforms.create(800, 1800, 'ground');
        this.platforms.create(900, 1200, 'ground');
        this.platforms.create(700, 1400, 'ground');

        
        //CAJAS
        this.caja = this.physics.add.sprite(700, 1870, 'caja');
        this.caja.setCollideWorldBounds(true);
        this.physics.add.collider(this.caja, this.platforms);

        this.caja2 = this.physics.add.sprite(700, 1470, 'caja');
        this.caja2.setCollideWorldBounds(true);
        this.physics.add.collider(this.caja2, this.platforms);
        

        //pc 
        this.PC = this.physics.add.staticGroup();
        this.PC.create(3300, 650, 'PC').setScale(0.5).refreshBody();

        //PLAYERS
       // this.player1 = new Queso(this,200,1890,'QuesoPlayer');
        this.player1 = new Queso(this,200, 1870,'QuesoPlayer');
        this.physics.add.collider(this.player1, this.platforms);
        this.physics.add.collider(this.player1, this.silla);
        this.player1.body.setCollideWorldBounds(true);


        this.player2 = new Garras(this, 250, 1870, 'GarrasPlayer');
        this.physics.add.collider(this.player2, this.platforms);
        this.physics.add.collider(this.player1, this.silla);
        this.player2.body.setCollideWorldBounds(true);

        //puerta
        this.door = this.physics.add.staticGroup();
        this.door.create(3708, 1232, 'Puerta');
        this.physics.add.collider(this.player1, this.door,this.enterDoor, null, this);
        this.physics.add.collider(this.player2, this.door,this.enterDoor, null, this);

        //cambiar escena
        this.door2= this.physics.add.staticGroup();
        this.door2.create(3708, 1270, 'BlockPlatform').setScale(2,3).refreshBody();
        this.physics.add.overlap(this.player1, this.door2, this.enterDoor, null, this)
        this.physics.add.overlap(this.player2, this.door2, this.enterDoor, null, this)


        //combo wombo
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

        //Foreground
        var aviario= this.add.image(0, 0, 'AviarioDelante').setOrigin(0,0).setScale(1.0);

        //interactuabilidad
        //this.physics.add.overlap(this.player1, this.PC, this.codigo.call(), null, this);
        //this.physics.add.overlap(this.player2, this.pc, this.codigo.call(), null, this);

        ///camaras
        //this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        //this.cameras.main.startFollow(this.player1, true, 0.8, 0.8)

        
    
        //CAJAS        
        this.physics.add.collider(this.caja, this.platforms);
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
        this.physics.add.collider(this.player1, this.caja, (player1, caja) => {
            if (player1.body.touching.down) {
               
                caja.setVelocityY(0);
                caja.body.moves = false;
            }
    
            if (player1.body.touching.left || player1.body.touching.right) {
               
                caja.setVelocityX(0);
                caja.body.moves = false;
            }
        });



        this.physics.add.collider(this.caja2, this.platforms);
        this.physics.add.collider(this.player2, this.caja2, (player2, caja2) => {
            var touching = this.player2.body.touching;
            this.caja2.body.moves = true;
            if (touching.down || touching.up || touching.left || touching.right) {
                this.caja2.setVelocityX(0);
                this.caja2.body.moves = true;
            } else {
                var relativeX = player2.x - caja2.x;
                var relativeY = player2.y - caja2.y; // Corregir esta línea, usar 'caja.y' en lugar de 'caja.x'
                if (relativeX <= 0) {
                    if (relativeY == 0) {
                        this.caja2.body.moves = true;
                        this.caja2.setVelocityX(0);
                    }
                } else {
                    if (relativeY == 0) {
                        this.caja2.body.moves = true;
                        this.caja2.setVelocityX(0);
                    }
                }
            }
        });
        this.physics.add.collider(this.player1, this.caja2, (player1, caja2) => {
            if (player1.body.touching.down) {
               
                caja2.setVelocityY(0);
                caja2.body.moves = false;
            }
    
            if (player1.body.touching.left || player1.body.touching.right) {
               
                caja2.setVelocityX(0);
                caja2.body.moves = false;
            }
        });
    
    }

    update(time) {
        this.player1.update();
        this.player2.update();
    
        if (this.physics.overlap(this.player1, this.PC)) {
            // Verifica si el jugador está cerca de la PC y habilita el combo
            this.combo.enabled = true;
            console.log('patata')
        } else {
            // Si el jugador no está cerca de la PC, deshabilita el combo
            this.combo.enabled = false;
            console.log('patos')
        }
    }
    
    enterDoor() 
    {
        this.scene.start('Scene3'); // Reemplaza 'NextScene' con el nombre de tu siguiente escena.
        console.log('Entering the door!');
        //this.shutdown()
    }

    
}