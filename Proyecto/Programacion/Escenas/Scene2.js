class Scene2 extends Phaser.Scene{
    constructor(){
        super({key: 'Scene2', active:false})
    }

    preload()
    {
        //camareas
        this.cameras.main.setBackgroundColor(0x9900e3)
        //this.cameras.main.height = 890
        //this.cameras.main.width = 1000
        //this.cameras.main.setPosition(32,32)

        //carga imágenes y spritesheets
        this.load.image('AviarioFondo', 'Arte/Bocetos/niveles prototipos/Nivel2/AviarioBackground.png');
        this.load.image('AviarioDelante', 'Arte/Bocetos/niveles prototipos/Nivel2/AviarioForeground.png');
        this.load.image('Platform', 'Arte/Bocetos/niveles prototipos/Nivel2/InvisiblePlatform.png');
        this.load.image('BlockPlatform', 'Arte/Bocetos/niveles prototipos/Nivel2/BlockPlatform.png');

        console.log("he llegado hasta Scene2")
        this.load.image('Kamaron', 'Arte/Bocetos/kamaron.png');
        this.load.spritesheet('QuesoPlayer', 'Arte/Bocetos/Sprite/ratonspritesheet.png', { frameWidth: 116 , frameHeight: 97 });
        this.load.image('ground', 'Arte/Bocetos/niveles prototipos/Nivel2/plataform.jpg');

        //variables
        this.player1
        this.keys
        this.platforms

    }
    create ()
    {
        this.add.image(0, 0, 'AviarioFondo').setOrigin(0,0).setScale(2.0);
        this.add.image(10, 10, 'Kamaron').setOrigin(0,0).setScale(0.2);

        //Platforms y limites
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(200, 900, 'ground');
        this.platforms.create(2000, 1999, 'Platform').setScale(40,1).refreshBody();
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



        this.player1 = new Queso(this,200,800,'QuesoPlayer');
        //this.player1.allowGravity(true);
        //this.player1 = this.physics.add.sprite(this.player1);
        //this.player1.setCollideWorldBounds(true);
        //this.physics.add(this.player1);
       // this.player1.body.setGravity(0 , 200)
        this.physics.add.collider(this.player1, this.platforms);
        this.player1.body.setCollideWorldBounds(true);

        //this.physics.add.collider(this.player1,aviario)
        //this.player1.body.setCollideWorldBounds(true)

        //Foreground
        var aviario= this.add.image(0, 0, 'AviarioDelante').setOrigin(0,0).setScale(2.0);



        ///camaras
        //this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        //this.cameras.main.startFollow(this.player1, true, 0.8, 0.8)

    }

    update (time)
    {
        this.player1.update();
        //console.log(this.player1.body.touching.down)
    }
}