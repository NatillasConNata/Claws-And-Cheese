class Tutorial extends Phaser.Scene{
    constructor(){
        super({key: 'Tutorial', active:false})
        this.width= 1920 ,
        this.height = 1080 

        this.BASE_PATH = 'Proyecto/Arte/';
    }

    preload(){  
        this.load.image('tuto', 'Arte/Escenario/Tutorial/PruebaTutorial.png');

        this.canvas = this.sys.game.canvas;
    }
  
    create (){
        this.add.image(this.canvas.width * 0.5, this.canvas.height*0.5, 'tuto');
        //this.add.image(this.canvas.width * 0.5, this.canvas.height*0.1, 'Title').setScale(1);
        const text1 = this.add.text(this.canvas.width * 0.7 , this.canvas.height * 0.5, 'Claws ',
        {fontFamily: 'light_pixel-7' , fontSize: 110,align: 'center' , fill: '#ffffff' ,  stroke:'#eb3f21', strokeThickness:20  } )
        const text2 = this.add.text(this.canvas.width * 0.7, this.canvas.height*0.65, ' and',
        {fontFamily: 'light_pixel-7' , fontSize: 110,align: 'center' , fill: '#ffffff' ,  stroke:'#21d3eb', strokeThickness:20  } )
        const text3 = this.add.text(this.canvas.width * 0.7, this.canvas.height*0.8, 'Cheese',
        {fontFamily: 'light_pixel-7' , fontSize: 110,align: 'center' , fill: '#ffffff' ,  stroke:'#21d3eb', strokeThickness:20   } )
        /*this.add.text(this.canvas.width * 0.7 , this.canvas.height * 0.6, 'Claws \n and\n Cheese' , 
        {fontFamily: 'jorolks' , fontSize: 130 , fill: '#ffffff ' , align: 'center'} )*/

        this.exitButton = this.add.sprite(this.canvas.width * 0.2, this.canvas.height * 0.9, 'ButtonExit').setInteractive().setScale(0.5);

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
