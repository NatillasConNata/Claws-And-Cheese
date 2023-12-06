
class MainScene extends Phaser.Scene{
    constructor(){
        super({key: 'MainScene', active:true})
    }

    preload()
    {
        this.load.image('Aviario', 'Arte/Bocetos/niveles prototipos/EscenarioAviarioPixelArtV1.jpg');
        this.load.spritesheet('Buttons', 'Arte/Bocetos/UI/Buttons.png', { frameWidth: 24, frameHeight: 23 });
        console.log("he llegado hasta Main")
        this.load.image('Kamaron', 'Arte/Bocetos/kamaron.png');

        //barra de carga del juego
        let barraCarga = this.add.graphics({
            fillStyle: {
                color:  0xFFFFFF

            }
        })
        this.load.on("progress",(percent)=>{
           // barraCarga.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50); //error en this.game = undefined
            console.log(percent);
        }) 
        this.load.on("complete",()=>{
            console.log("DONEEEEEEE")
        })

    }
    create ()
    {
        //console.log("imagen aviario");
        this.add.image(0, 0, 'Aviario').setOrigin(0,0).setScale(0.2);
        var startButton = this.add.image(500, 500, 'Buttons', 52).setScale(3).setInteractive();
        var startButton2 = this.add.image(572, 500, 'Buttons', 53).setScale(3).setInteractive();


    //pulsar botón cambia de escena
    //START BUTTON
    startButton.on('pointerdown', function () {
        this.scene.stop('MainScene');/**************** */
        this.scene.start('Scene2', Scene2, true, { x: 400, y: 300 });
    
    },this);
    startButton2.on('pointerdown', function () {
        this.scene.stop('MainScene');/**************** */
        this.scene.start('Scene2', Scene2, true, { x: 400, y: 300 });
    
    },this);
    //CONFIG BUTTON

    //CREDITS BUTTON

    //EXIT BUTTON

    }

    update ()
    {

    }

}