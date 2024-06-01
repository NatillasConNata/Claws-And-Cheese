class MainScene extends Phaser.Scene{
    constructor(){
        super({key: 'MainScene', active:true})
        this.width= 1920 ,
        this.height = 1080 
        
    }
    
    preload()
    {
        //this.load.audio('MainAudio', 'Musica/komiku/Komiku_-_70_-_Ending(chosic.com).mp3')


        this.load.image('Portada', 'Arte/Escenario/MainMenu/Menu2.jpg');
        this.load.image('Title', 'Arte/Escenario/MainMenu/Title2.png');
        //this.load.spritesheet('ButtonPlay', 'Arte/Bocetos/UI/PixelGUI/PlayBtn.png', { frameWidth: 590, frameHeight: 260 });
        //this.load.spritesheet('ButtonPlayPressed', 'Arte/Bocetos/UI/PixelGUI/PlayClick.png', { frameWidth: 590, frameHeight: 260 });
        this.load.image('ButtonPlay', 'Arte/UI/PixelGUI/PlayBtn.png');
        this.load.image('ButtonPlayPressed', 'Arte/UI/PixelGUI/PlayClick.png');
        this.load.image('ButtonOptions', 'Arte/UI/PixelGUI/OptBtn.png');
        this.load.image('ButtonOptionsPressed', 'Arte/UI/PixelGUI/OptClick.png');
        this.load.image('ButtonExit', 'Arte/UI/PixelGUI/ExitBtn.png');
        this.load.image('ButtonExitPressed', 'Arte/UI/PixelGUI/ExitClick.png');
        this.load.image('ButtonCredit', 'Arte/UI/PixelGUI/CredBtn.png');
        this.load.image('ButtonCreditPressed', 'Arte/UI/PixelGUI/CredClick.png');
        //this.load.spritesheet('Queso', 'Arte/Bocetos/Sprite/Ratonwalk.png', { frameWidth: 117 , frameHeight: 94 });

        //Creacion del boton tutorial
        this.load.image('ButtonTutorial', 'Arte/UI/PixelGUI/layer3.png');
        this.load.image('ButtonTutorialPressed', 'Arte/UI/PixelGUI/layer4.png');

        //
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
           // console.log(percent);
        }) 
        this.load.on("complete",()=>{
           // console.log("DONEEEEEEE")
        })

        this.canvas = this.sys.game.canvas;
        
    }
    
    create ()
    {
        //console.log("imagen aviario");
        //AÑADIR IMÁGENES NORMALES
        //this.add.image(this.canvas.width * 0.5, this.canvas.height*0.5, 'Portada').setOrigin(0,0).setScale(1);
        this.add.image(this.canvas.width * 0.5, this.canvas.height*0.5, 'Portada').setScale(1);
       // this.add.image(this.canvas.width * 0.5, this.canvas.height*0.1, 'Title').setScale(1);

        
        //text1.setTint(0xeb3f21,   0x21d3eb);*/
        const text1 = this.add.text(this.canvas.width * 0.1, this.canvas.height*0.1, 'Claws an',
        {fontFamily: 'light_pixel-7' , fontSize: 170,align: 'center' , fill: '#ffffff' ,  stroke:'#eb3f21', strokeThickness:20  } )
        const text2 = this.add.text(this.canvas.width * 0.476, this.canvas.height*0.1, 'd cheese',
        {fontFamily: 'light_pixel-7' , fontSize: 170,align: 'center' , fill: '#ffffff' ,  stroke:'#21d3eb', strokeThickness:20  } )
        


        //const block =this.add.image(this.canvas.width * 0.5, this.canvas.height, 'Portada').setScale(1);
        //Phaser.Display.Align.In.Center(block, this.add.zone(0, 0, this.canvas.width * 0.5, this.canvas.height));

        console.log(this.canvas.width * 0.5);
        //nineslice (poxX, posY, obj, sprite, tamañoX, tamañoY, px mantenidos izq., px mantenidos drch. , px mantenidos arriba, px mantenidos abajo )
        this.startButton =  this.add.sprite(this.canvas.width * 0.3, 500, 'ButtonPlay').setInteractive().setScale(0.5);
        this.optionsButton = this.add.sprite(this.canvas.width * 0.5, 500, 'ButtonOptions').setInteractive().setScale(0.5);
        this.optionsButton.setTint(0x231d35)
        this.creditButton = this.add.sprite(this.canvas.width * 0.3, 760, 'ButtonCredit').setInteractive().setScale(0.5);
        //this.exitButton = this.add.sprite(this.canvas.width * 0.5, 760, 'ButtonExit').setInteractive().setScale(0.5);
        //this.exitButton.setTint(0x231d35)
        this.tutorialButton =this.add.sprite(this.canvas.width * 0.5, 760, 'ButtonTutorial').setInteractive().setScale(0.5);

        //this.offline = this.add.sprite(this.CONFIG.centerX, this.CONFIG.centerY * 1.25, 'newGameButton').setInteractive().setScale(0.5);


        //AUDIO
        //let MainAudio = this.sound.add('MainAudio',{loop:true});
       // MainAudio.play();

        //TEXTOS POR PANTALLA 
        //var tittle = this.add.text(this.sys.game.canvas.width/10, 100, 'Garras y Queso', {fontFamily: 'v5bloques' , fontSize: 75 , fill: '#000000'} )
        /*this.add.text(450, 500, 'PLAY', {fontFamily: 'bitween' , fontSize: 40 , fill: '#000000'} )
        this.add.text(750, 500, 'OPTION', {fontFamily: 'bitween' , fontSize: 40 , fill: '#000000'} )
        this.add.text(450, 650, 'CREDITS', {fontFamily: 'bitween' , fontSize: 30 , fill: '#000000'} )
        this.add.text(730, 650, 'EXIT', {fontFamily: 'bitween' , fontSize: 40 , fill: '#000000'} )
        */

        //pulsar botón cambia de escena
        //START BUTTON
        
        this.startButton.on('pointerdown', function () {
          //  this.scene.stop('MainScene');
            this.startButton.setTexture('ButtonPlayPressed');
            this.startButton.setTint(0xc7c7c7)
            //this.scene.events.on('sleep', listener)
            this.time.addEvent({
                delay: 500,
                callback: function ()
                {
                    this.scene.start('Scene4', Scene4, true, { x: 400, y: 300 });

                },
                callbackScope: this,
                repeat: 0
            });
            //MainAudio.stop()
        
        },this);
        
        //OPTIONS BUTTON
        /*
        this.optionsButton.on('pointerdown', function () {
            //this.scene.stop('MainScene');
            this.optionsButton.setTexture('ButtonOptionsPressed');
            this.optionsButton.setTint(0xc7c7c7)
            //this.scene.events.on('sleep', listener)
            this.time.addEvent({
                delay: 500,
                callback: function ()
                {
                    this.scene.start('Credits', Credits, true, { x: 400, y: 300 });
                },
                callbackScope: this,
                repeat: 0
            });
           // MainAudio.stop()
        },this);
        */
        //CREDITS BUTTON
        this.creditButton.on('pointerdown', function () {
            //this.scene.stop('MainScene');
            this.creditButton.setTexture('ButtonCreditPressed');
            this.creditButton.setTint(0xc7c7c7)
            //this.scene.events.on('sleep', listener)
            this.time.addEvent({
                delay: 500,
                callback: function ()
                {
                    this.scene.start('Credits', Credits, true, { x: 400, y: 300 });
                },
                callbackScope: this,
                repeat: 0
            });
           // MainAudio.stop()

        },this);
       
        //EXIT BUTTON
        

        
        //animaciones de personajes en pantalla
        /*this.anims.create({
            key: 'QuesoLeft',
            frames: this.anims.generateFrameNumbers('Queso', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        var Queso = this.add.sprite(200, 300, 'Queso').play('QuesoLeft');*/

        //Button Tutorial process 
        this.tutorialButton.on('pointerdown', function () {
            //this.scene.stop('MainScene');
            this.tutorialButton.setTexture('ButtonTutorialPressed');
            this.tutorialButton.setTint(0xc7c7c7)
            //this.scene.events.on('sleep', listener)
            this.time.addEvent({
                delay: 500,
                callback: function ()
                {
                    this.scene.start('Tutorial', Tutorial, true, { x: 400, y: 300 });
                },
                callbackScope: this,
                repeat: 0
            });
           // MainAudio.stop()

        },this);

    }

    update ()
    {

    }

}