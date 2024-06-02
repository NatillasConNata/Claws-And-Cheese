class LeaderBoard extends Phaser.Scene{
    constructor(){
        super({key: 'LeaderBoard', active:false})
        this.width= 1920 ,
        this.height = 1080 
    }
    init(){
        this.CONFIG = this.sys.game.CONFIG;
    }

    preload()
    { 
        this.load.image('Portada', 'Arte/Escenario/MainMenu/Menu2.jpg');
        this.canvas = this.sys.game.canvas;
    }
    create()
    {
        this.add.image(this.canvas.width * 0.5, this.canvas.height*0.5, 'Portada').setScale(1);
        this.exitButton = this.add.sprite(this.canvas.width * 0.2, this.canvas.height * 0.9, 'ButtonExit').setInteractive().setScale(0.5);

        // Crear una lista de arrays con 2 atributos cada uno
        let lista = [];
        let tablon = this.add.dom( this.canvas.width * 0.5, this.canvas.height*0.5).createFromCache('leaderboard');

        
        this.loadAccounts(function (accounts) {
            for (let i = 0; i < accounts.length; i++) {
                // Función para agregar un nuevo elemento a la lista
                lista.push([(accounts[i].name + " : ") , accounts[i].time]);
            }
            // Ordenar la lista en función del segundo atributo (el float)
            lista.sort(function(a, b) {
                
                return a[1] - b[1]; // Orden ascendente, para descendente usa b[1] - a[1]
            });
            $('#leaderboard').val('');
	        for (let i = 0; i < lista.length; i++) {

	            $('#leaderboard').val($('#leaderboard').val() + (lista[i][0] + lista[i][1] ) + "\n");
	        }
	        $('#leaderboard').scrollTop = $('#leaderboard').scrollHeight;
        });

        this.exitButton.on('pointerdown', function () {
            //scene.scene.stop('Credits');/**************** */
            this.exitButton.setTexture('ButtonExitPressed');
            this.exitButton.setTint(0xc7c7c7)
            this.time.addEvent({
                delay: 500,
                callback: function ()
                {
                    this.scene.start('MainScene', MainScene, true, { x: 400, y: 300 });
                },
                callbackScope: this,
                repeat: 0
            });
        
        },this);
    }


    loadAccounts(callback) {
        var urls = [window.location.href + 'accounts'];
        $.each(urls, function(i,u){
            $.ajax(u,{
                //url: 'http://' + url + '/accounts'
            }).done(function (accounts) {
                console.log('Accounts loaded: ' + JSON.stringify(accounts));
                callback(accounts);
            })
        })
    }

}
