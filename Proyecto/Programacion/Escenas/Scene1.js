
class Scene1 extends Phaser.Scene{
    constructor(){
        super({key: 'Scene1', active:false})
    }

    preload()
    {
        this.load.image('Jaulas', 'Proyecto/Arte/Bocetos/niveles prototipos/EscenarioJaulaPixelArt.png');
        console.log("Se ha llegado a la Escena 1")
        this.load.image('Kamaron', 'Arte/Bocetos/kamaron.png');
    }
    create ()
    {
        console.log("imagen del nivel 1 (jaulas)");
        this.add.image(0, 0, 'Jaulas').setOrigin(0,0).setScale(0.2);
        this.add.image(10, 10, 'Kamaron').setOrigin(0,0).setScale(0.2);
    }

    update (){}
}
