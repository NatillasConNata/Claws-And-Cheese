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
        this.load.image('AviarioFondo', 'Arte/Bocetos/niveles prototipos/Nivel2/AviarioBackground.png');
        this.load.image('AviarioDelante', 'Arte/Bocetos/niveles prototipos/Nivel2/AviarioForeground.png');
        this.load.image('Platform', 'Arte/Bocetos/niveles prototipos/Nivel2/InvisiblePlatform.png');
        this.load.image('BlockPlatform', 'Arte/Bocetos/niveles prototipos/Nivel2/BlockPlatform.png');
        this.load.image('PC', 'Arte/Bocetos/niveles prototipos/Nivel2/Pc.png');
        this.load.image('Puerta', 'Arte/Bocetos/niveles prototipos/Nivel2/puerta.png');


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
    }
    create ()
    {
        


        //
        this.add.image(0, 0, 'AviarioFondo').setOrigin(0,0).setScale(1);
        this.add.image(10, 10, 'Kamaron').setOrigin(0,0).setScale(0.2);

        //Platforms y limites
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(200, 900, 'ground');
        this.platforms.create(2000, 1985, 'Platform').setScale(40,1).refreshBody();
        this.platforms.create(150, 1610, 'Platform').setScale(0.5,1).refreshBody();
        this.platforms.create(1460, 1610, 'Platform').setScale(23,1).refreshBody();
        this.platforms.create(3300, 1410, 'Platform').setScale(10,1).refreshBody();
        this.platforms.create(2630, 1595, 'BlockPlatform');
        this.platforms.create(2680, 1555, 'BlockPlatform');
        this.platforms.create(2730, 1515, 'BlockPlatform');
        this.platforms.create(2790, 1475, 'BlockPlatform');
        this.platforms.create(2840, 1435, 'BlockPlatform');
        this.platforms.create(600, 1110, 'Platform').setScale(4,2).refreshBody();
        this.platforms.create(1260, 1110, 'Platform').setScale(5,2).refreshBody();
        this.platforms.create(1750, 1410, 'Platform').setScale(8,2).refreshBody();
        this.platforms.create(2140, 1300, 'BlockPlatform').setScale(1,5).refreshBody();
        this.platforms.create(1720, 1090, 'BlockPlatform').setScale(8,1).refreshBody();
        this.platforms.create(2000, 1030, 'BlockPlatform').setScale(12,1).refreshBody();
        this.platforms.create(2270, 970, 'BlockPlatform').setScale(5,1).refreshBody();
        this.platforms.create(2950, 950, 'BlockPlatform').setScale(22,3).refreshBody();
        this.platforms.create(3490, 600, 'BlockPlatform').setScale(1,10).refreshBody();

        //pc 
        this.PC = this.physics.add.staticGroup();
        this.PC.create(3300, 650, 'PC').setScale(0.5).refreshBody();

        //PLAYERS
       // this.player1 = new Queso(this,200,1890,'QuesoPlayer');
        this.player1 = new Queso(this,3000,650,'QuesoPlayer');
        this.physics.add.collider(this.player1, this.platforms);
        this.player1.body.setCollideWorldBounds(true);


        this.player2 = new Garras(this, 250, 1870, 'GarrasPlayer');
        this.physics.add.collider(this.player2, this.platforms);
        this.player2.body.setCollideWorldBounds(true);

        //puerta
        this.door = this.physics.add.staticGroup();
        this.door.create(3708, 1232, 'Puerta');
        this.physics.add.collider(this.player1, this.door);
        this.physics.add.collider(this.player2, this.door);


        //combo wombo
        this.combo = this.input.keyboard.createCombo('zxcv');
        this.combo.enabled = false //no procesa teclas

        this.input.keyboard.on('keycombomatch', function (event) {
            console.log('Konami Code entered!');
            this.door.destroy()
        });

        //Foreground
        var aviario= this.add.image(0, 0, 'AviarioDelante').setOrigin(0,0).setScale(1.0);


        //interactuabilidad
        //this.physics.add.overlap(this.player1, this.PC, this.codigo.call(), null, this);
        //this.physics.add.overlap(this.player2, this.pc, this.codigo.call(), null, this);


        ///camaras
        //this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        //this.cameras.main.startFollow(this.player1, true, 0.8, 0.8)

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

}