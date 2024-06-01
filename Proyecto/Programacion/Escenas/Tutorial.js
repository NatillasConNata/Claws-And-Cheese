class Tutorial extends Phaser.Scene{
    constructor(){
        super({key: 'Tutorial', active:false})
        this.width= 1920 ,
        this.height = 1080 

        this.BASE_PATH = 'Proyecto/Arte/';
    }

    preload(){  
        this.load.image('escenario', 'Arte/Escenario/Scene4/GarrasAndCheeseFondo.png');

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
