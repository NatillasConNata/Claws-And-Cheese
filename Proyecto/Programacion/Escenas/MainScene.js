
class MainScene extends Phaser.Scene{
    constructor(){
        super({key: 'MainScene', active:true})
    }

    preload()
    {
        this.load.image('Aviario', 'Arte/Bocetos/niveles prototipos/EscenarioAviarioPixelArtV1.jpg');
        console.log("he llegado hasta Main")
        //this.load.image('Aviario', 'Arte/kamaron.png');

    }
    create ()
    {
        console.log("imagen aviario");
        this.add.image(0, 0, 'Aviario').setScale(0.1).refreshBody();
    }

    update ()
    {

    }
}