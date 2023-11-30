export default class SceneManager extends Phaser.Scene{
    constructor(){
        super('SceneManager');
    }
    preload(){
        //this.load.image( 'mainScene','MainMenu.jpg')

        //this.load.image( 'jaulas','EscenarioJaulas.jpg')
        this.load.image( 'aviario','EscenarioAviarioPixelArtV1.jpg')
    }
    creat(){
        this.scene.start('Preloader');
    }
}