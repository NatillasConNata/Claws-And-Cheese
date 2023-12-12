class Scene2 extends Phaser.Scene{
    constructor(){
        super({key: 'Scene2', active:false})
    }

    preload()
    {
        this.cursors;
        //this.cameras.main.setBackgroundColor(0x990e3);
        this.load.image('Aviario', 'Arte/Bocetos/niveles prototipos/EscenarioAviarioPixelArtV1.jpg');
        console.log("he llegado hasta Scene2")
        this.load.image('Kamaron', 'Arte/Bocetos/kamaron.png');
        this.load.spritesheet('QuesoPlayer', 'Arte/Bocetos/Sprite/ratonspritesheet.png', { frameWidth: 116 , frameHeight: 97 });

        this.player1
        this.keys

    }
    create ()
    {
        console.log("imagen aviario");
        var aviario= this.add.image(0, 0, 'Aviario').setOrigin(0,0).setScale(0.2);
        this.add.image(10, 10, 'Kamaron').setOrigin(0,0).setScale(0.2);

        this.player1 = new Queso(this,200,200,'QuesoPlayer');
        //this.physics.add.collider(this.player1,aviario)
        this.player1.body.setCollideWorldBounds(true)
    }

    update (time)
    {
        this.player1.update();
    }
}