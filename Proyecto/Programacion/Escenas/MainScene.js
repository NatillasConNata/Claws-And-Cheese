class MainScene extends Phaser.Scene{
    constructor(){
        super({key: 'MainScene', active:true})
    }
    
    preload()
    {
        //this.load.audio('MainAudio', 'Musica/komiku/Komiku_-_70_-_Ending(chosic.com).mp3')


        this.load.image('Aviario', 'Arte/Bocetos/Fondo.jpeg');
        //this.load.spritesheet('ButtonPlay', 'Arte/Bocetos/UI/PixelGUI/PlayBtn.png', { frameWidth: 590, frameHeight: 260 });
        //this.load.spritesheet('ButtonPlayPressed', 'Arte/Bocetos/UI/PixelGUI/PlayClick.png', { frameWidth: 590, frameHeight: 260 });
        this.load.image('ButtonPlay', 'Arte/Bocetos/UI/PixelGUI/PlayBtn.png');
        this.load.image('ButtonPlayPressed', 'Arte/Bocetos/UI/PixelGUI/PlayClick.png');


        //this.load.spritesheet('Queso', 'Arte/Bocetos/Sprite/Ratonwalk.png', { frameWidth: 117 , frameHeight: 94 });

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

        
    }
    
    create ()
    {
        //console.log("imagen aviario");
        //AÑADIR IMÁGENES NORMALES
        this.add.image(0, 0, 'Aviario').setOrigin(0,0).setScale(2);
        //nineslice (poxX, posY, obj, sprite, tamañoX, tamañoY, px mantenidos izq., px mantenidos drch. , px mantenidos arriba, px mantenidos abajo )
        this.startButton =  this.add.sprite(500, 500, 'ButtonPlay').setInteractive().setScale(1);
        var optionsButton = this.add.sprite(800, 500, 'Buttons').setInteractive().setScale(1);
        var creditButton = this.add.sprite(500, 650, 'Buttons').setInteractive().setScale(1);
        var exitButton = this.add.sprite(800, 650, 'Buttons').setInteractive().setScale(1);
        
        //this.offline = this.add.sprite(this.CONFIG.centerX, this.CONFIG.centerY * 1.25, 'newGameButton').setInteractive().setScale(0.5);


        //AUDIO
        //let MainAudio = this.sound.add('MainAudio',{loop:true});
       // MainAudio.play();

        //TEXTOS POR PANTALLA 
        var tittle = this.add.text(this.sys.game.canvas.width/10, 100, 'Garras y Queso', {fontFamily: 'v5bloques' , fontSize: 75 , fill: '#000000'} )
        this.add.text(450, 500, 'PLAY', {fontFamily: 'bitween' , fontSize: 40 , fill: '#000000'} )
        this.add.text(750, 500, 'OPTION', {fontFamily: 'bitween' , fontSize: 40 , fill: '#000000'} )
        this.add.text(450, 650, 'CREDITS', {fontFamily: 'bitween' , fontSize: 30 , fill: '#000000'} )
        this.add.text(730, 650, 'EXIT', {fontFamily: 'bitween' , fontSize: 40 , fill: '#000000'} )


        //pulsar botón cambia de escena
        //START BUTTON
        
        this.startButton.on('pointerdown', function () {
          //  this.scene.stop('MainScene');
            this.setTexture('ButtonPlayPressed');
            this.scene.start('Scene4', Scene4, true, { x: 400, y: 300 });
            //MainAudio.stop()
        
        },this);
        
        //OPTIONS BUTTON

        //CREDITS BUTTON
        creditButton.on('pointerdown', function () {
            //this.scene.stop('MainScene');
            this.scene.start('Credits', Credits, true, { x: 400, y: 300 });
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
    }

    update ()
    {

    }

}