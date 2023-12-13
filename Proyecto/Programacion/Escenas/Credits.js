class Credits extends Phaser.Scene{
    constructor(){
        super({key: 'Credits', active:false})
    }

    preload(){
        this.load.spritesheet('Buttons', 'Arte/Bocetos/UI/Buttons.png', { frameWidth: 24, frameHeight: 23 });
        this.load.image('Kamaron', 'Arte/Bocetos/kamaron.png');
        this.load.audio('CreditsAudio', 'Musica/komiku/Komiku_-_70_-_Ending(chosic.com).mp3')
    }
  
    create (){

        //IMAGENES
        this.add.image(1750, 750, 'Kamaron').setScale(0.2);

        //AUDIO
        let creditAudio = this.sound.add('CreditsAudio',{loop:true});
        creditAudio.play();

        //BOTONES
        //nineslice (poxX, posY, obj, sprite, tamañoX, tamañoY, px mantenidos izq., px mantenidos drch. , px mantenidos arriba, px mantenidos abajo )
        var returnButton = this.add.nineslice(100, 100, 'Buttons', 5, 72,69,  4,4,4,7).setInteractive();

        returnButton.on('pointerdown', function () {
            //scene.scene.stop('Credits');/**************** */
            creditAudio.stop();
            this.scene.start('MainScene', MainScene, true, { x: 400, y: 300 });
        
        },this);

        

        //TEXTOS
        var tittle = this.add.text(this.sys.game.canvas.width/10, 75, 'Garras y Queso', {fontFamily: 'v5bloques' , fontSize: 75 , fill: '#fb7756'} )

        this.add.text(100, 200, 'DESARROLLADORES', {fontFamily: 'bitween' , fontSize: 75 , fill: '#fb7756'} )
        this.add.text(150, 300, 'Miguel Angel Gimenez Montemayor', {fontFamily: 'bitween' , fontSize: 50 , fill: '#fb7756'} )
        this.add.text(200, 400, 'Natalia Martinez Clemente', {fontFamily: 'bitween' , fontSize: 50 , fill: '#fb7756'} )
        
        
        this.add.text(150, 600, 'MUSICA', {fontFamily: 'bitween' , fontSize: 75 , fill: '#fb7756'} )
        this.add.text(200, 700, 'chosic.com/free-music', {fontFamily: 'bitween' , fontSize: 50 , fill: '#fb7756'} )
        this.add.text(300, 750, ' Autor: Komiku', {fontFamily: 'bitween' , fontSize: 50 , fill: '#fb7756'} )

        /*this.add.text(this.sys.game.canvas.width/9, 300, '8bit', {fontFamily: '8bit' , fontSize: 50 , fill: '#fb7756'} )
        this.add.text(this.sys.game.canvas.width/9, 350, 'bitween', {fontFamily: 'bitween' , fontSize: 50 , fill: '#fb7756'} )
        this.add.text(this.sys.game.canvas.width/9, 400, 'final', {fontFamily: 'final' , fontSize: 50 , fill: '#fb7756'} )
        this.add.text(this.sys.game.canvas.width/9, 450, 'kiwisoda', {fontFamily: 'kiwisoda' , fontSize: 50 , fill: '#fb7756'} )
        this.add.text(this.sys.game.canvas.width/9, 500, 'pixelcards', {fontFamily: 'pixelcards' , fontSize: 50 , fill: '#fb7756'} )
        this.add.text(this.sys.game.canvas.width/9, 550, 'v5bloques', {fontFamily: 'v5bloques' , fontSize: 50 , fill: '#fb7756'} )*/
    }

    update (){}
}
