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
                

        this.time.addEvent({
            delay: 1,
            callback: () => {this.scene.start('MainScene');},
            callBackScope: this
        });


    }
}