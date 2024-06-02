//import MainScene from './Escenas/MainScene.js';
const App = function(){
    'use strict';
    this.VERSION = '0.0.1';
    this.IS_DEV = true;
}

App.prototype.start = function(){
    let scenes=[];
    scenes.push(PreLoadScene);
    scenes.push(MainScene);
    //scenes.push(Scene1);
    //scenes.push(Scene2);
    //scenes.push(Scene3);
    scenes.push(Scene4);
    scenes.push(Credits);
    scenes.push(Tutorial);
    scenes.push(LeaderBoard);
    let config = {
        type: Phaser.AUTO,
        width: 2400 ,
        height: 960 ,
        backgroundColor: 0x220283,
        physics: {
            default: 'arcade',
            arcade: {
                debug: false,
                gravity: {
                    y: 5000
                }
            }
        },
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            parent: "thegame",
            },
        pixelArt: true,
        scene: scenes,
        dom:{
            createContainer:true 
        }   
        
    }
    const game = new Phaser.Game(config)

    game.CONFIG = {
        width: config.width,
        height: config.height,
        gameWidth: (config.width - 60) / 2,
        centerX: Math.round(0.5*config.width),
        centerY: Math.round(0.5*config.height),
        ID:undefined
    }

    //console.log(game.CONFIG)

}

