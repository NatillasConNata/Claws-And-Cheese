//import MainScene from './Escenas/MainScene.js';
/*const App = function(){
    'use strict';
    this.VERSION = '0.0.1';
    this.IS_DEV = true;
}
App.prototype.start = function(){
    let scenes=[];
    scenes.push(MainScene);
    //scenes.push(Scene1);
    scenes.push(Scene2);
    //scenes.push(Scene3);
    scenes.push(Credits);
    var config = {
        type: Phaser.AUTO,
        width: 1900 ,
        height: 950 ,
        backgroundColor: '#FADA3C',
        physics: {
            defaul: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        scene:scenes, //array de escenas del juego
        dom:{
            createContainer:true
        }
    };
    console.log("he llegado hasta configs")
    
    const game = new Phaser.Game(config);

}*/

window.addEventListener('load', () => {
    let scenes=[];
    scenes.push(MainScene);
    scenes.push(Scene1);
    scenes.push(Scene2);
    scenes.push(Scene3);
    scenes.push(Credits);
    let config = {
        type: Phaser.AUTO,
        width: 4000,
        height: 2000,
        backgroundColor: 0x220283,
        physics: {
            default: 'arcade',
            arcade: {
                debug: true,
                gravity: {
                    y: 5000
                }
            }
        },
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            parent: "thegame"
        },
        pixelArt: true,
        scene: scenes
    }
    const game = new Phaser.Game(config)
    }) //end load listener
    
    
    
    
    class TitleScene extends Phaser.Scene {
        constructor() {
            super('titleScene')
        }
    
        preload() {
    
        } //end preload
    
        create() {
    
        } //end create
    
        update() {
    
        } //end update
    } //end title scene
    
    class WinScene extends Phaser.Scene {
        constructor() {
            super('winScene')
        }
    
        preload() {
    
        } //end preload
    
        create() {
    
        } //end create
    
        update() {
    
        } //end update
    } //end title scene
    
    class LoseScene extends Phaser.Scene {
        constructor() {
            super('loseScene')
        }
        init(data){
            this.remainingHealth = data.health
            console.log(this.remainingHealth);
            console.log('help');
        }
    
        preload() {
            this.cameras.main.setBackgroundColor(0xcc0000)
            // this.load.image('bg', '../assets/characters.png')
    
        } //end preload
    
        create() {
            //this.add.image(100,100,'characters')
        } //end create
    
        update() {
    
        } //end update
    } //end title scene


