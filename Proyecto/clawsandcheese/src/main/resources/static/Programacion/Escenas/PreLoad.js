class PreLoad extends Phaser.Scene{
    constructor(){
        super({key: 'PreLoad', active:true})
        this.width= 1920 ,
        this.height = 1080 
    }

    preload()
    {
        this.load.html('login', 'text/login.html');
        this.load.html('leaderboard', 'text/leaderboard.html');
        //this.load.css('light_pixel-7', './Fonts/light_pixel-7/light_pixel-7.ttf');
    }
    create(){

        console.log(window.location.pathname);        
        
        /*this.load.once('filecomplete-css-custom-font', () => {
            // Start your game here
            const textPrecarga = this.add.text(this.canvas.width * 0.1, this.canvas.height*0.1, '',
            {fontFamily: 'light_pixel-7' , fontSize: 170,align: 'center' , fill: '#ffffff' ,  stroke:'#eb3f21', strokeThickness:20  } )        });
    
        this.load.start();*/
        

        this.time.addEvent({
            delay: 1,
            callback: () => {this.scene.start('MainScene');},
            callBackScope: this
        });


    }
}