class Scene4Online extends Phaser.Scene {
    constructor() {
        super({ key: 'Scene4Online', active: false });
        this.BASE_PATH = 'Proyecto/Arte/';
    }

    init() {
        let that = this;

        this.CONFIG = this.sys.game.CONFIG;
        this.accounts = undefined;
        this.connected = false;
        this.controlled = {
            id: -1,
            player: null,
            gameId: 0
        };

        this.functions = {
            setPlayer: function (message) {
                console.log("SET PLAYER");
                if(message.name=="Cheese"){

                    that.controlled.player= that.player1; 
                    console.log(that.player1);
                    console.log(that.player2);
                }
                else if (message.name=="Claws"){
                    console.log("GarrasControlesInit");
                    that.controlled.player= that.player2;
                    console.log(that.player1);
                    console.log(that.player2);
                }
                that.controlled.id = message.id;
                that.controlled.gameId = message.id_p;
                //that.assign();
            },
            update: function (message) {
                let player;
                if (message.characterName == "Cheese") {
                    player = that.player1;
                } else if (message.characterName == "Claws") {
                    player = that.player2;
                }

                if (player) {
                    player.setPosition(message.posX, message.posY);
                    player.setTexture(message.texture);
                } else {
                    console.error("Player not found for name:", message.name);
                }

                // CAJAS
                if (that.cajas) {
                    that.cajas.getChildren().forEach((caja, i) => {
                        if (message.listaCajas[i]) {
                            caja.setPosition(message.listaCajas[i].posX, message.listaCajas[i].posY);
                        }
                    });
                }
                // PUERTAS
                if (message.door_open === true && that.doors) {
                    that.doorsOpen=true;
                    that.doors.children.iterate((child) => {
                        child.setTexture('doorOpen');
                    });
                    that.physics.world.removeCollider(that.doorsCol);
                    that.physics.world.removeCollider(that.doorsCol2);
                }
                if (message.key_found === true && that.flag && that.key) {
                    that.flag.setTexture('flag');
                    that.key.setVisible(false);
                    that.hasKey = true;
                }
            }
        };

        // WEBSOCKETS
        this.connection = new WebSocket('ws://' + window.location.host + '/echo');
        this.connection.onerror = function (e) {
            console.log("WS error: " + e);
        };

        this.connection.onmessage = function (msg) {
            var message = JSON.parse(msg.data);
            if (message.id != that.controlled.id && that.functions[message.funcion]) {
                that.functions[message.funcion](message);
            }
        };

        this.connection.onclose = function () {
            console.log("Closing socket");
        };

        let message = {
            nueva_partida: true,
            player_id: this.CONFIG.ID
        };

        this.connection.onopen = function () {
            try {
                that.connection.send(JSON.stringify(message));
            } catch (e) {
                console.log(e);
            }
        };
    }

    preload() {
        this.load.image('escenario', 'Arte/Escenario/Scene4/GarrasAndCheeseFondo.png');
        this.load.image('escenarioObjFront', 'Arte/Escenario/Scene4/GarrasAndCheeseObjetosFront.png');
        this.load.image('SueloBase', 'Arte/Escenario/Scene4/GarrasAndCheeseBase.png');
        this.load.image('Escaleras3', 'Arte/Escenario/Scene4/GarrasAndCheeseEscaleras3.png');
        this.load.image('Escaleras5', 'Arte/Escenario/Scene4/GarrasAndCheeseEscaleras5.png');
        this.load.image('Escaleras8', 'Arte/Escenario/Scene4/GarrasAndCheeseEscaleras8.png');
        this.load.image('sueloBlocks', 'Arte/Escenario/Scene4/SueloBlocks.png');
        this.load.image('Platform1Up', 'Arte/Escenario/Scene4/GarrasAndCheesePlatform1Up.png');
        this.load.image('Platform2Up', 'Arte/Escenario/Scene4/GarrasAndCheesePlatform2Up.png');
        this.load.image('Platform3Up', 'Arte/Escenario/Scene4/GarrasAndCheesePlatform3Up.png');
        this.load.image('Platform19Lat', 'Arte/Escenario/Scene4/GarrasAndCheesePlatform19Lat.png');
        this.load.image('Platform4Lat', 'Arte/Escenario/Scene4/GarrasAndCheesePlatform4Lat.png');
        this.load.image('Platform16Up', 'Arte/Escenario/Scene4/GarrasAndCheesePlatform16Up.png');
        this.load.image('Block', 'Arte/Escenario/Scene4/GarrasAndCheeseBlock.png');
        this.load.image('Platform16Lat', 'Arte/Escenario/Scene4/GarrasAndCheesePlatform16Lat.png');
        this.load.image('Plank', 'Arte/Escenario/Scene4/GarrasAndCheesePlank.png');
        this.load.image('Cartel1', 'Arte/Escenario/Scene4/Cartel1.png');
        this.load.image('Cartel2', 'Arte/Escenario/Scene4/Cartel2.png');
        this.load.image('DiagImg', 'Arte/Escenario/Scene4/Dialog.png');
        this.load.image('DiagPCImg', 'Arte/Escenario/Scene4/DialogServer.png');
        this.load.image('ButtonExit', 'Arte/UI/PixelGUI/ExitBtn.png');
        this.load.image('ButtonExitPressed', 'Arte/UI/PixelGUI/ExitClick.png');
        this.load.image('caja', 'Arte/Escenario/Scene4/Box.png');
        this.load.image('key', 'Arte/Escenario/Scene4/Key.png');
        this.load.image('flag', 'Arte/Escenario/Scene4/Flag.png');
        this.load.image('flagclose', 'Arte/Escenario/Scene4/FlagClose.png');
        this.load.image('doorOpen', 'Arte/Escenario/Scene4/DoorOpen.png');
        this.load.image('doorClose', 'Arte/Escenario/Scene4/DoorClose.png');
        this.load.spritesheet('GarrasPlayer', 'Arte/Characters/otter_sprite_pack/Garras.png', { frameWidth: 170, frameHeight: 86 });
        this.load.spritesheet('QuesoPlayer', 'Arte/Characters/FREEVERSION_MrCookies/MRCookies_Complete_19x19.png', { frameWidth: 19, frameHeight: 19 });
        this.load.image('PC', 'Arte/Bocetos/niveles prototipos/Nivel2/Pc.png');
        this.load.image('code', 'Arte/Escenario/Scene4/eNTERcODE.png');
        this.canvas = this.sys.game.canvas;

    }

    create() {
        this.doorsOpen = false;
        this.hasKey = false;

        this.timerText = this.add.text(this.width / 2, 100, 'Time: 0', {
            fontSize: '32px',
            fill: '#ffffff'
        }).setOrigin(0.5, 0.5);
        this.timer = 0;
        this.timerEvent = this.time.addEvent({
            delay: 1000,
            callback: this.updateTimer,
            callbackScope: this,
            loop: true
        });

        this.add.image(this.canvas.width * 0.5, this.canvas.height * 0.5, 'escenario').setScale(2);
        this.add.image(this.canvas.width * 0.5, this.canvas.height * 0.5, 'escenarioObjFront').setScale(2);

        this.exitButton = this.add.sprite(this.canvas.width * 0.05, this.canvas.height * 0.05, 'ButtonExit').setInteractive().setScale(0.2);

        this.plataforms = this.physics.add.staticGroup();
        this.plataforms.create(this.canvas.width * 0.5, this.canvas.height * 0.9655, 'SueloBase');
        this.plataforms.create(this.canvas.width * 0.11, this.canvas.height * 0.815, 'sueloBlocks');
        this.plataforms.create(this.canvas.width * 0.247, this.canvas.height * 0.315, 'Platform1Up');
        this.plataforms.create(this.canvas.width * 0.943, this.canvas.height * 0.72, 'Platform1Up');
        this.plataforms.create(this.canvas.width * 0.943, this.canvas.height * 0.686, 'Platform1Up');
        this.plataforms.create(this.canvas.width * 0.967, this.canvas.height * 0.45, 'Platform1Up');
        this.plataforms.create(this.canvas.width * 0.979, this.canvas.height * 0.415, 'Platform1Up');
        this.plataforms.create(this.canvas.width * 0.095, this.canvas.height * 0.51, 'Platform2Up');
        this.plataforms.create(this.canvas.width * 0.105, this.canvas.height * 0.65, 'Platform2Up');
        this.plataforms.create(this.canvas.width * 0.145, this.canvas.height * 0.58, 'Platform2Up');
        this.plataforms.create(this.canvas.width * 0.15, this.canvas.height * 0.44, 'Platform2Up');
        this.plataforms.create(this.canvas.width * 0.21, this.canvas.height * 0.59, 'Platform3Up');
        this.plataforms.create(this.canvas.width * 0.415, this.canvas.height * 0.75, 'Platform2Up');
        this.plataforms.create(this.canvas.width * 0.493, this.canvas.height * 0.53, 'Platform2Up');
        this.plataforms.create(this.canvas.width * 0.35, this.canvas.height * 0.32, 'Platform2Up');
        this.plataforms.create(this.canvas.width * 0.255, this.canvas.height * 0.67, 'Platform2Up');
        this.plataforms.create(this.canvas.width * 0.255, this.canvas.height * 0.46, 'Platform3Up');
        this.plataforms.create(this.canvas.width * 0.35, this.canvas.height * 0.8, 'Platform3Up');
        this.plataforms.create(this.canvas.width * 0.38, this.canvas.height * 0.6, 'Platform3Up');
        this.plataforms.create(this.canvas.width * 0.033, this.canvas.height * 0.45, 'Platform3Up');
        this.plataforms.create(this.canvas.width * 0.76, this.canvas.height * 0.527, 'Platform3Up');
        this.plataforms.create(this.canvas.width * 0.46, this.canvas.height * 0.53, 'Platform3Up');
        this.plataforms.create(this.canvas.width * 0.46, this.canvas.height * 0.283, 'Platform3Up');
        this.plataforms.create(this.canvas.width * 0.81, this.canvas.height * 0.75, 'Platform3Up');
        this.plataforms.create(this.canvas.width * 0.85, this.canvas.height * 0.75, 'Platform3Up');
        this.plataforms.create(this.canvas.width * 0.89, this.canvas.height * 0.75, 'Platform3Up');
        this.plataforms.create(this.canvas.width * 0.93, this.canvas.height * 0.75, 'Platform3Up');
        this.plataforms.create(this.canvas.width * 0.913, this.canvas.height * 0.48, 'Platform3Up');
        this.plataforms.create(this.canvas.width * 0.954, this.canvas.height * 0.48, 'Platform3Up');
        this.plataforms.create(this.canvas.width * 0.93, this.canvas.height * 0.15, 'Platform3Up');
        this.plataforms.create(this.canvas.width * 0.89, this.canvas.height * 0.15, 'Platform3Up');
        this.plataforms.create(this.canvas.width * 0.85, this.canvas.height * 0.15, 'Platform3Up');
        this.plataforms.create(this.canvas.width * 0.93, this.canvas.height * 0.067, 'Platform4Lat');
        this.plataforms.create(this.canvas.width * 0.005, this.canvas.height * 0.38, 'Platform19Lat').setFlipX(true);
        this.plataforms.create(this.canvas.width * 0.235, this.canvas.height * 0.615, 'Platform19Lat').setFlipX(true);
        this.plataforms.create(this.canvas.width * 0.995, this.canvas.height * 0.35, 'Platform19Lat');
        this.plataforms.create(this.canvas.width * 0.434, this.canvas.height * 0.565, 'Platform16Lat');
        this.plataforms.create(this.canvas.width * 0.094, this.canvas.height * 0.32, 'Platform16Up');
        this.plataforms.create(this.canvas.width * 0.67, this.canvas.height * 0.28, 'Platform16Up');
        this.plataforms.create(this.canvas.width * 0.883, this.canvas.height * 0.28, 'Platform16Up');
        this.plataforms.create(this.canvas.width * 0.63, this.canvas.height * 0.65, 'Platform16Up');
        this.plataforms.create(this.canvas.width * 0.843, this.canvas.height * 0.65, 'Platform16Up');
        this.plataforms.create(this.canvas.width * 0.63, this.canvas.height * 0.405, 'Platform16Up');
        this.plataforms.create(this.canvas.width * 0.06, this.canvas.height * 0.5, 'Platform4Lat');
        this.plataforms.create(this.canvas.width * 0.06, this.canvas.height * 0.63, 'Platform4Lat');
        this.plataforms.create(this.canvas.width * 0.9, this.canvas.height * 0.565, 'Platform4Lat');
        this.plataforms.create(this.canvas.width * 0.795, this.canvas.height * 0.865, 'Platform4Lat');
        this.plataforms.create(this.canvas.width * 0.795, this.canvas.height * 0.835, 'Platform4Lat');
        this.plataforms.create(this.canvas.width * 0.672, this.canvas.height * 0.863, 'Platform4Lat');
        this.plataforms.create(this.canvas.width * 0.886, this.canvas.height * 0.615, 'Block');
        this.plataforms.create(this.canvas.width * 0.775, this.canvas.height * 0.8, 'Plank');
        this.plataforms.create(this.canvas.width * 0.74, this.canvas.height * 0.86, 'Plank');

        this.doors = this.physics.add.staticGroup();
        this.doors.create(this.canvas.width * 0.95, this.canvas.height * 0.21, 'doorClose').setFlipX(true);

        this.ladders = this.physics.add.staticGroup();
        this.ladders.create(this.canvas.width * 0.22, this.canvas.height * 0.435, 'Escaleras8');
        this.ladders.create(this.canvas.width * 0.48, this.canvas.height * 0.795, 'Escaleras8');
        this.ladders.create(this.canvas.width * 0.685, this.canvas.height * 0.86, 'Escaleras5');
        this.ladders.create(this.canvas.width * 0.515, this.canvas.height * 0.565, 'Escaleras3');
        this.ladders.create(this.canvas.width * 0.487, this.canvas.height * 0.35, 'Escaleras3');

        let keys = Phaser.Input.Keyboard.KeyCodes;
        let wasd = this.input.keyboard.addKeys({ 'up': keys.W, 'down': keys.S, 'left': keys.A, 'right': keys.D, 'p': keys.E, 'o': keys.Q });

        this.players = this.add.group({
            classType: PlayerModel,
            maxSize: 2,
            runChildUpdate: true
        });

        this.exitButton.on('pointerdown', function () {
            this.exitButton.setTexture('ButtonExitPressed');
            this.exitButton.setTint(0xc7c7c7);
            this.time.addEvent({
                delay: 500,
                callback: function () {
                    this.scene.start('MainScene', MainScene, true, { x: 400, y: 300 });
                },
                callbackScope: this,
                repeat: 0
            });
        }, this);

        this.cartel = this.physics.add.staticGroup();
        this.cartel.create(this.canvas.width * 0.193, this.canvas.height * 0.68, 'Cartel1').refreshBody();
        this.dialogo = this.add.sprite(this.canvas.width * 0.193, this.canvas.height * 0.63, 'DiagImg').setScale(2).setVisible(false);
        this.texto = this.add.text(this.canvas.width * 0.188, this.canvas.height * 0.595, 'k', { fontFamily: 'light_pixel-7', fontSize: '40px', color: '#EE6352' }).setVisible(false);

        this.cartel2 = this.physics.add.staticGroup();
        this.cartel2.create(this.canvas.width * 0.926, this.canvas.height * 0.715, 'Cartel1').refreshBody();
        this.dialogo2 = this.add.sprite(this.canvas.width * 0.926, this.canvas.height * 0.665, 'DiagImg').setScale(2).setVisible(false);
        this.texto2 = this.add.text(this.canvas.width * 0.921, this.canvas.height * 0.63, 'f', { fontFamily: 'light_pixel-7', fontSize: '40px', color: '#59CD90' }).setVisible(false);

        this.cartel3 = this.physics.add.staticGroup();
        this.cartel3.create(this.canvas.width * 0.953, this.canvas.height * 0.445, 'Cartel1').refreshBody();
        this.dialogo3 = this.add.sprite(this.canvas.width * 0.953, this.canvas.height * 0.395, 'DiagImg').setScale(2).setVisible(false);
        this.texto3 = this.add.text(this.canvas.width * 0.948, this.canvas.height * 0.36, 'r', { fontFamily: 'light_pixel-7', fontSize: '40px', color: '#3FA7D6' }).setVisible(false);

        this.cartel4 = this.physics.add.staticGroup();
        this.cartel4.create(this.canvas.width * 0.25, this.canvas.height * 0.915, 'Cartel1').refreshBody();
        this.dialogo4 = this.add.sprite(this.canvas.width * 0.25, this.canvas.height * 0.865, 'DiagImg').setScale(2).setVisible(false);
        this.texto4 = this.add.text(this.canvas.width * 0.245, this.canvas.height * 0.83, 'o', { fontFamily: 'light_pixel-7', fontSize: '40px', color: '#FAC05E' }).setVisible(false);

        this.cartel5 = this.physics.add.staticGroup();
        this.cartel5.create(this.canvas.width * 0.905, this.canvas.height * 0.118, 'Cartel1').refreshBody();
        this.dialogo5 = this.add.sprite(this.canvas.width * 0.905, this.canvas.height * 0.068, 'DiagImg').setScale(2).setVisible(false);
        this.texto5 = this.add.text(this.canvas.width * 0.9, this.canvas.height * 0.033, 'y', { fontFamily: 'light_pixel-7', fontSize: '40px', color: '#F79D84' }).setVisible(false);

        this.PC = this.physics.add.staticGroup();
        this.PC.create(this.canvas.width * 0.88, this.canvas.height * 0.2, 'PC').setScale(0.2).refreshBody();
        this.pcCartel = this.add.sprite(this.canvas.width * 0.88, this.canvas.height * 0.12, 'DiagPCImg').setScale(2).setVisible(false);
        this.pcText = this.add.sprite(this.canvas.width * 0.88, this.canvas.height * 0.12, 'code').setScale(0.8).setVisible(false);

        this.player1 = new Queso(this, 200, this.canvas.height * 0.02, 'QuesoPlayer', wasd, '01', this.players, this.plataforms, this.ladders).setScale(2);
        this.player2 = new Garras(this, 250, this.canvas.height * 0.2, 'GarrasPlayer', wasd, '02', this.players, this.plataforms);

        this.cajas = this.add.group({
            classType: Cajas,
            maxSize: 5,
            runChildUpdate: true
        });

        this.caja = new Cajas(this, 1500, this.canvas.height * 0.9, 'caja');
        this.cajas.add(this.caja);
        this.caja = new Cajas(this, 1740, this.canvas.height * 0.5, 'caja');
        this.cajas.add(this.caja);
        this.caja = new Cajas(this, 1400, this.canvas.height * 0.3, 'caja');
        this.cajas.add(this.caja);

        this.physics.add.collider(this.cajas, this.plataforms);
        this.physics.add.collider(this.cajas, this.player1, function (caja1, player) {
            caja1.setPushable(false);
        });
        this.physics.add.collider(this.cajas, this.player2, function (caja1, player) {
            caja1.setPushable(true);
        });
        this.physics.add.collider(this.cajas, this.plataforms, function (caja1, player) {
            caja1.setPushable(false);
        });
        this.physics.add.collider(this.cajas, this.cajas, function (caja1, player) {
            caja1.setPushable(true);
        });
        this.doorsCol = this.physics.add.collider(this.player2, this.doors);
        this.doorsCol2 = this.physics.add.collider(this.player1, this.doors);

        this.key = this.physics.add.sprite(68, 300, 'key');
        this.key.setCollideWorldBounds(true);
        this.physics.add.collider(this.key, this.plataforms);
        this.physics.add.overlap(this.player1, this.key, this.collectKey, null, this);
        this.physics.add.overlap(this.player2, this.key, this.collectKey, null, this);

        this.flag = this.physics.add.sprite(this.canvas.width * 0.98, this.canvas.height * 0.22, 'flagclose');
        this.flag.setCollideWorldBounds(true);
        this.physics.add.collider(this.flag, this.plataforms);
        this.physics.add.overlap(this.player1, this.flag, this.changeScene, null, this);
        this.physics.add.overlap(this.player2, this.flag, this.changeScene, null, this);

        this.combo = this.input.keyboard.createCombo('forky');
        this.combo.enabled = false;

        this.input.keyboard.on('keycombomatch', (event) => {
            if (this.doors) {
                this.doors.children.iterate((child) => {
                    child.setTexture('doorOpen');
                });
                this.physics.world.removeCollider(this.doorsCol);
                this.physics.world.removeCollider(this.doorsCol2);
                this,this.doorsOpen=true;
            }
        });
        console.log(that.player1);
                    console.log(that.player2);
    }

    update(time, delta) {
        let that = this;
    console.log("UPDATEGARAQUESO");
        if (this.controlled.player != null) {
            console.log("cONTROLLERPLAYERNOTNULL");
            if (this.connected != true) {
                this.getGame(this.controlled.gameId, function (size) {
                    if (size == 2) {
                        that.connected = true;
                    }
                });
                return;
            }

            let name;
            if (this.controlled.player == this.player1) {
                name = "Cheese";
                //console.log("CHEEEEEESOOOOOO");
                this.player1.update();
            } else if (this.controlled.player == this.player2) {
                name = "Claws";
                //console.log("CLAWS BABYYYYYYYYYYY");

                this.player2.update();
            }

            const position = [];
            this.cajas.children.iterate(caja => {
                position.push({ posX: caja.x, posY: caja.y });
            });
            let characterName;
            if(this.controlled.player == this.player1){
                characterName="Cheese";
            }
            else if(this.controlled.player == this.player2){
                characterName="Claws";
            }
            else{
                console.log("JUGADOOR NO ES 1 ni 2");
            }

            let update = {
                characterName : characterName,
                name: name,
                id: that.controlled.id,
                id_p: that.controlled.gameId,
                posX: that.controlled.player.x,
                posY: that.controlled.player.y,
                //texture: that.controlled.player.texture.key,
                listaCajas: position,
                door_open: that.doorsOpen,
                key_found: that.hasKey
            };
            console.log( update);

            try {
                this.connection.send(JSON.stringify(update));
            } catch (e) {
                console.log(e);
            }
        }
    }

    collectKey(player, key) {
        this.key.disableBody(true, true);
        this.hasKey = true;
        if (this.flag) {
            this.flag.setTexture('flag');
        }
    }

    changeScene(player, flag) {
        if (this.hasKey) {
            let that = this;
            this.loadAccounts(function (accounts) {
                that.accounts = accounts;
                if (that.CONFIG.ID != undefined) {
                    that.accounts[that.CONFIG.ID - 1].time = that.timer;
                }
                that.updateAccount(that.accounts[that.CONFIG.ID - 1]);
            });

            var endConnection = {
                destruir: true,
                id: this.controlled.id,
                id_p: this.controlled.gameId
            };
            this.connection.send(JSON.stringify(endConnection));

            this.scene.start('Credits');
        }
    }

    updateTimer() {
        this.timer++;
        this.timerText.setText('Time: ' + this.timer);
    }

   

    loadAccounts(callback) {
        var urls = [window.location.href + 'accounts'];
        $.each(urls, function (i, u) {
            $.ajax(u).done(function (accounts) {
                callback(accounts);
            }).fail(function () {
                callback(null, false);
            });
        });
    }

    updateAccount(account) {
        var urls = [window.location.href + 'accounts/' + account.id];
        $.each(urls, function (i, u) {
            $.ajax(u, {
                method: 'PUT',
                data: JSON.stringify(account),
                processData: false,
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(function (account) {
                console.log("Updated item: " + JSON.stringify(account));
            });
        });
    }

    getGame(id, callback) {
        $.ajax({
            method: 'GET',
            url: 'http://' + window.location.host + '/games/' + id
        }).done(function (size) {
            callback(size);
        });
    }
}

// Constantes de dimensiones
Scene4Online.GAME_WIDTH = 720;
Scene4Online.GAME_HEIGHT = 640;
Scene4Online.RATON_WIDTH = 19;
Scene4Online.RATON_HEIGHT = 19;
Scene4Online.LEON_WIDTH = 170;
Scene4Online.LEON_HEIGHT = 86;