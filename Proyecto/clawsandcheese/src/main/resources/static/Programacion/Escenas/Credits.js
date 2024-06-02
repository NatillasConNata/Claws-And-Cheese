class Credits extends Phaser.Scene{
    constructor(){
        super({key: 'Credits', active:false})
        this.width= 1920 ,
        this.height = 1080 
    }
    init(){
        this.CONFIG = this.sys.game.CONFIG;
    }
    preload(){
        //this.load.spritesheet('Buttons', 'Arte/Bocetos/UI/Buttons.png', { frameWidth: 24, frameHeight: 23 });
        this.load.image('PortadaCredits', 'Arte/Escenario/MainMenu/Menu1.jpg');

        this.load.image('Title', 'Arte/Escenario/MainMenu/Title2.png');
        this.load.image('ButtonExit', 'Arte/UI/PixelGUI/ExitBtn.png');
        this.load.image('ButtonExitPressed', 'Arte/UI/PixelGUI/ExitClick.png');
        this.load.image('Kamaron', 'Arte/Bocetos/kamaron.png');
        this.load.audio('CreditsAudio', 'Musica/komiku/Komiku_-_70_-_Ending(chosic.com).mp3')


        this.canvas = this.sys.game.canvas;

//       

        
    }
  
    create (){

        //IMAGENES
        this.add.image(this.canvas.width * 0.5, this.canvas.height*0.5, 'PortadaCredits').setScale(1);
        //this.add.image(this.canvas.width * 0.5, this.canvas.height*0.1, 'Title').setScale(1);
        this.add.image(1750, 750, 'Kamaron').setScale(0.2);

        const text1 = this.add.text(this.canvas.width * 0.1, this.canvas.height*0.05, 'Claws an',
        {fontFamily: 'light_pixel-7' , fontSize: 170,align: 'center' , fill: '#ffffff' ,  stroke:'#eb3f21', strokeThickness:20  } )
        const text2 = this.add.text(this.canvas.width * 0.476, this.canvas.height*0.05, 'd cheese',
        {fontFamily: 'light_pixel-7' , fontSize: 170,align: 'center' , fill: '#ffffff' ,  stroke:'#21d3eb', strokeThickness:20  } )

        //AUDIO
        let creditAudio = this.sound.add('CreditsAudio',{loop:true});
        creditAudio.play();

        //BOTONES
        //nineslice (poxX, posY, obj, sprite, tamañoX, tamañoY, px mantenidos izq., px mantenidos drch. , px mantenidos arriba, px mantenidos abajo )
        //var returnButton = this.add.nineslice(100, 100, 'Buttons', 5, 72,69,  4,4,4,7).setInteractive();
        this.exitButton = this.add.sprite(this.canvas.width * 0.1, this.canvas.height * 0.9, 'ButtonExit').setInteractive().setScale(0.5);

        this.exitButton.on('pointerdown', function () {
            //scene.scene.stop('Credits');/**************** */
            this.exitButton.setTexture('ButtonExitPressed');
            this.exitButton.setTint(0xc7c7c7)
            creditAudio.stop();
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

                

        //TEXTOS

        this.add.text(this.canvas.width * 0.3 , this.canvas.height*0.3, 'DESARROLLADORES \n Miguel Angel Gimenez Montemayor \n Natalia Martinez Clemente  \n\n  MUSICA \n chosic.com/free-music \n Autor: Komiku' , 
        {fontFamily: 'light_pixel-7' , fontSize: 50 , fill: '#FF5733 ' , align: 'center',stroke:'#000000', strokeThickness:10} )

        
    }

    update (){}
}
