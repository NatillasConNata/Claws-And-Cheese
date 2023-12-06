
class Scene2 extends Phaser.Scene{
    constructor(){
        super({key: 'Scene2', active:false})
    }

    preload()
    {
        this.load.image('Aviario', 'Arte/Bocetos/niveles prototipos/EscenarioAviarioPixelArtV1.jpg');
        console.log("he llegado hasta Scene2")
        this.load.image('Kamaron', 'Arte/Bocetos/kamaron.png');
    }
    create ()
    {
        console.log("imagen aviario");
        this.add.image(0, 0, 'Aviario').setOrigin(0,0).setScale(0.2);
        this.add.image(10, 10, 'Kamaron').setOrigin(0,0).setScale(0.2);
    }

    update ()
    {

    }
}