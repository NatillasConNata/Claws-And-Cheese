class MainScene extends Phaser.Scene{
    constructor(){
        super({key: 'MainScene', active:true})
    }
    
    preload()
    {
        //this.load.audio('MainAudio', 'Musica/komiku/Komiku_-_70_-_Ending(chosic.com).mp3')


        this.load.image('Aviario', 'Arte/Bocetos/Fondo.jpeg');
        this.load.spritesheet('Buttons', 'Arte/Bocetos/UI/Buttons.png', { frameWidth: 24, frameHeight: 23 });
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
        var startButton =  this.add.nineslice(500, 500, 'Buttons', 36, 144,138,  4,4,4,7).setInteractive();
        var startButton2 = this.add.nineslice(644, 500, 'Buttons', 37,  144,138,  4,4,4,7).setInteractive();
        var optionsButton = this.add.nineslice(800, 500, 'Buttons', 38, 144,138,  4,4,4,7).setInteractive();
        var optionsButton2 = this.add.nineslice(944, 500, 'Buttons', 39,  144,138,  4,4,4,7).setInteractive();
        var creditButton = this.add.nineslice(500, 650, 'Buttons', 32, 144,138,  4,4,4,7).setInteractive();
        var creditButton2 = this.add.nineslice(644, 650, 'Buttons', 33,  144,138,  4,4,4,7).setInteractive();
        var exitButton = this.add.nineslice(800, 650, 'Buttons', 34, 144,138,  4,4,4,7).setInteractive();
        var exitButton2 = this.add.nineslice(944, 650, 'Buttons', 35,  144,138,  4,4,4,7).setInteractive();


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
        startButton.on('pointerdown', function () {
          //  this.scene.stop('MainScene');/**************** */
            this.scene.start('Scene4', Scene4, true, { x: 400, y: 300 });
            //MainAudio.stop()
        
        },this);
        startButton2.on('pointerdown', function () {
           // this.scene.stop('MainScene');/**************** */
            this.scene.start('Scene4', Scene4, true, { x: 400, y: 300 });
            //MainAudio.stop()
        },this);
        //OPTIONS BUTTON

        //CREDITS BUTTON
        creditButton.on('pointerdown', function () {
            //this.scene.stop('MainScene');/**************** */
            this.scene.start('Credits', Credits, true, { x: 400, y: 300 });
           // MainAudio.stop()

        },this);
        creditButton2.on('pointerdown', function () {
            //this.scene.stop('MainScene');/**************** */
            this.scene.start('Credits', Credits, true, { x: 400, y: 300 });
          //  MainAudio.stop()

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