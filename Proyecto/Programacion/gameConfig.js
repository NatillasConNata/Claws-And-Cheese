//import MainScene from './Escenas/MainScene.js';
const App = function(){
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

}


