//import MainScene from './Escenas/MainScene.js';
const App = function(){
    'use strict';
    this.VERSION = '0.0.1';
    this.IS_DEV = true;
}
App.prototype.start = function(){
    let scenes=[];
    scenes.push(MainScene);
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 1000,
        backgroundColor: '#4488aa',
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
    
    var game = new Phaser.Game(config);

}


