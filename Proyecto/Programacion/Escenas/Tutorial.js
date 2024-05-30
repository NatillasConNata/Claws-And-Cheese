class Tutorial extends Phaser.Scene{
    constructor(){
        super({key: 'Tutorial', active:false})
        this.width= 1920 ,
        this.height = 1080 

        this.BASE_PATH = 'Proyecto/Arte/';
    }

    preload(){  
        this.load.image('Portada', 'Arte/Escenario/MainMenu/Menu2.jpg');
        this.load.image('Title', 'Arte/Escenario/MainMenu/Title2.png');
        this.load.spritesheet('QuesoPlayer', './Proyecto/Arte/Characters/FREEVERSION_MrCookies', { frameWidth: 170 , frameHeight: 86});
        this.load.image('GarraMoveRight', 'Arte/Escenario/MainMenu/Menu2.jpg');//Imagenes de Garra
        this.load.image('GarraMoveLeft', 'Arte/Escenario/MainMenu/Menu2.jpg');
        this.load.image('GarraJump', 'Arte/Escenario/MainMenu/Menu2.jpg');
        this.load.image('ButtonExit', 'Arte/UI/PixelGUI/ExitBtn.png');
        this.load.image('ButtonExitPressed', 'Arte/UI/PixelGUI/ExitClick.png');
        this.canvas = this.sys.game.canvas;
    }
  
    create (){
        this.add.image(this.canvas.width * 0.5, this.canvas.height*0.5, 'Portada').setScale(1);
        this.add.image(this.canvas.width * 0.5, this.canvas.height*0.1, 'Title').setScale(1);


        this.exitButton = this.add.sprite(this.canvas.width * 0.5, this.canvas.height * 0.9, 'ButtonExit').setInteractive().setScale(0.5);

        this.exitButton.on('pointerdown', function () {
            //scene.scene.stop('Credits');/**************** */
            this.exitButton.setTexture('ButtonExitPressed');
            this.exitButton.setTint(0xc7c7c7)
            this.time.addEvent({
                delay: 500,
                callback: function ()
                {
                    this.scene.start('MainScene', MainScene, true, { x: 400, y: 300 });
                },
                callbackScope: this,
                repeat: 0
            });
        
        },this);


    }

    update (){}
}
