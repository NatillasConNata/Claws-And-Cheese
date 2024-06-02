class MainScene extends Phaser.Scene{
    constructor(){
        super({key: 'MainScene', active:false})
        this.width= 1920 ,
        this.height = 1080 
        
    }
    init(){
        this.CONFIG = this.sys.game.CONFIG;
        this.accounts = undefined;
        this.user = undefined;

    }

    preload()
    {
        //this.load.audio('MainAudio', 'Musica/komiku/Komiku_-_70_-_Ending(chosic.com).mp3')

        this.load.html('login','text/login.html');
        
        //this.load.bitmapFont('light_pixel-7', 'Fonts/light-pixel-7/light_pixel-7.png', 'Fonts/light-pixel-7/light_pixel-7.fnt');
        
        this.load.bitmapFont('click','Fonts/click.png','Fonts/click.xml');

        this.load.image('Portada', 'Arte/Escenario/MainMenu/Menu2.jpg');
        this.load.image('Title', 'Arte/Escenario/MainMenu/Title2.png');
        //this.load.spritesheet('ButtonPlay', 'Arte/Bocetos/UI/PixelGUI/PlayBtn.png', { frameWidth: 590, frameHeight: 260 });
        //this.load.spritesheet('ButtonPlayPressed', 'Arte/Bocetos/UI/PixelGUI/PlayClick.png', { frameWidth: 590, frameHeight: 260 });
        this.load.image('ButtonPlay', 'Arte/UI/PixelGUI/PlayBtn.png');
        this.load.image('ButtonPlayPressed', 'Arte/UI/PixelGUI/PlayClick.png');
        this.load.image('ButtonOptions', 'Arte/UI/PixelGUI/OptBtn.png');
        this.load.image('ButtonOptionsPressed', 'Arte/UI/PixelGUI/OptClick.png');
        this.load.image('ButtonExit', 'Arte/UI/PixelGUI/ExitBtn.png');
        this.load.image('ButtonExitPressed', 'Arte/UI/PixelGUI/ExitClick.png');
        this.load.image('ButtonCredit', 'Arte/UI/PixelGUI/CredBtn.png');
        this.load.image('ButtonCreditPressed', 'Arte/UI/PixelGUI/CredClick.png');
        this.load.image('ButtonLogOut', 'Arte/UI/PixelGUI/logoffBtn.png');
        this.load.image('ButtonLogOutPressed', 'Arte/UI/PixelGUI/logoffClick.png');
        this.load.image('ButtonBoard', 'Arte/UI/PixelGUI/boardBtn.png');
        this.load.image('ButtonBoardPressed', 'Arte/UI/PixelGUI/boardClick.png');
        //this.load.spritesheet('Queso', 'Arte/Bocetos/Sprite/Ratonwalk.png', { frameWidth: 117 , frameHeight: 94 });

        //Creacion del boton tutorial
        this.load.image('ButtonTutorial', 'Arte/UI/PixelGUI/layer3.png');
        this.load.image('ButtonTutorialPressed', 'Arte/UI/PixelGUI/layer4.png');

        //
        console.log("he llegado hasta Main")
        this.load.image('Kamaron', 'Arte/Bocetos/kamaron.png');

        //barra de carga del juego
        let barraCarga = this.add.graphics({
            fillStyle: {
                color:  0xFFFFFF

            }
        })
        this.load.on("progress",(percent)=>{
           // barraCarga.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50); //error en this.game = undefined
           // console.log(percent);
        }) 
        this.load.on("complete",()=>{
           // console.log("DONEEEEEEE")
        })


        this.canvas = this.sys.game.canvas;
        
    }
    
    create ()
    {
        
        

        //console.log("imagen aviario");
        //AÑADIR IMÁGENES NORMALES
        this.add.image(this.canvas.width * 0.5, this.canvas.height*0.5, 'Portada').setScale(1);
       // this.add.image(this.canvas.width * 0.5, this.canvas.height*0.1, 'Title').setScale(1);
        //nineslice (poxX, posY, obj, sprite, tamañoX, tamañoY, px mantenidos izq., px mantenidos drch. , px mantenidos arriba, px mantenidos abajo )
        this.startButton =  this.add.sprite(this.canvas.width * 0.3, 500, 'ButtonPlay').setInteractive().setScale(0.5);
        this.logInButton = this.add.sprite(this.canvas.width * 0.5, 500, 'ButtonOptions').setInteractive().setScale(0.5);
        this.creditButton = this.add.sprite(this.canvas.width * 0.3, 760, 'ButtonCredit').setInteractive().setScale(0.5);
        this.tutorialButton =this.add.sprite(this.canvas.width * 0.5, 760, 'ButtonTutorial').setInteractive().setScale(0.5);
        this.logOffButton = this.add.sprite(this.canvas.width * 0.7, 500, 'ButtonLogOut').setInteractive().setScale(0.5); //sustituye a logInButton
        this.logOffButton.visible=false;
        this.boardButton =this.add.sprite(this.canvas.width * 0.7, 760, 'ButtonBoard').setInteractive().setScale(0.5);//solo aparece cuando te has logeado
        this.boardButton.visible=false;
        
        //CARGAR LAS CUENTAS AL INICIAR LA ESCENA PARA COMPROBAR SI HAY LOGS
        //SE PRESUPONE QUE ESTO OCURRE EN LOCAL, SI SE LANZA CON UN SERVIDOR, SE CALCULA CON EL CLIENTE ACTUAL(SE HACE EN LA SIG,PARTE)
        this.loadAccounts((accounts) => {
            this.accounts = accounts;
            
            if (this.accounts && this.accounts.some(account => account.active === true)) {
                // Si existe al menos una cuenta con active a true, muestra el board y el botón de desloguearse
                //y no puede iniciar otra sesión
                this.boardButton.visible = true;
                this.logOffButton.visible = true;
                this.logInButton.visible = false;
            }
        });
        



        //text1.setTint(0xeb3f21,   0x21d3eb);*/
        const text1 = this.add.text(this.canvas.width * 0.1, this.canvas.height*0.1, 'Claws an',
        {fontFamily: 'light_pixel-7' , fontSize: 170,align: 'center' , fill: '#ffffff' ,  stroke:'#eb3f21', strokeThickness:20  } )
        const text2 = this.add.text(this.canvas.width * 0.476, this.canvas.height*0.1, 'd cheese',
        {fontFamily: 'light_pixel-7' , fontSize: 170,align: 'center' , fill: '#ffffff' ,  stroke:'#21d3eb', strokeThickness:20  } )
        


        //const block =this.add.image(this.canvas.width * 0.5, this.canvas.height, 'Portada').setScale(1);
        //Phaser.Display.Align.In.Center(block, this.add.zone(0, 0, this.canvas.width * 0.5, this.canvas.height));

        

        //this.offline = this.add.sprite(this.config.centerX, this.config.centerY * 1.25, 'newGameButton').setInteractive().setScale(0.5);

        //TEXTO LOGIN
        this.loginText = this.add.bitmapText(
            this.CONFIG.centerX,            
            this.CONFIG.centerY*1.5,
            'click',
            '',
            48
        ).setOrigin(0.5);


        //AUDIO
        //let MainAudio = this.sound.add('MainAudio',{loop:true});
       // MainAudio.play();

        //pulsar botón cambia de escena
        //START BUTTON
        
        this.startButton.on('pointerdown', function () {
          //  this.scene.stop('MainScene');
            this.startButton.setTexture('ButtonPlayPressed');
            this.startButton.setTint(0xc7c7c7)
            //this.scene.events.on('sleep', listener)
            this.time.addEvent({
                delay: 500,
                callback: function ()
                {
                    this.scene.start('Scene4', Scene4, true, { x: 400, y: 300 });

                },
                callbackScope: this,
                repeat: 0
            });
            //MainAudio.stop()
        
        },this);
        
        //LOGIN BUTTON
        let that  =this;
        
        this.logInButton.on('pointerdown', function () {
            this.logInButton.setTexture('ButtonOptionsPressed');
            this.logInButton.setTint(0xc7c7c7)
            this.time.addEvent({
                delay: 500,
                callbackScope: this,
                repeat: 0
            });

            this.startButton.visible =false;
            this.creditButton.visible =false;
            this.tutorialButton.visible=false;
            this.logInButton.visible=false;

            this.loggingButton = that.add.dom(this.canvas.width * 0.5, this.canvas.height * 0.5).createFromCache('login');


            this.loggingButton.addListener('click');
            this.loggingButton.on('click', function (event) {

                if(event.target.name === 'loginButton')
                {
                    let inputUsername = this.getChildByName('username');
                    let inputPassword = this.getChildByName('password');
        
                    if(inputUsername.value !== '' && inputPassword.value !== '')
                    {
                        let exist = false;
                        let index = undefined;

                        that.loadAccounts(function (accounts) {
                            that.accounts = accounts;

                            if(that.accounts != undefined)
                            {
                                for (let i = 0; i < that.accounts.length; i++) {
                                    if(that.accounts[i].name == inputUsername.value)
                                    {
                                        exist = true;
                                        index = i;
                                    }
                                }
                            }

                            if(!exist)
                            {
                                let account = {
                                    name: inputUsername.value,
                                    password: inputPassword.value,
                                    active: true
                                }
                        
                                that.createAccount(account, function (account) {
                                    that.user = account;

                                    that.startButton.visible =true;
                                    that.creditButton.visible =true;
                                    that.tutorialButton.visible=true;
                                    that.logInButton.visible=false;
                                    that.logOffButton.visible=true;
                                    that.boardButton.visible=true;
                                    that.loginText.setText('');
                                    that.loggingButton.visible=false;

                                    that.loadAccounts(function (accounts) {
                                        that.accounts = accounts;
                                        for (let i = 0; i < that.accounts.length; i++) {
                                            if(that.accounts[i].name == inputUsername.value)
                                            {
                                                that.CONFIG.ID = that.accounts[i].id
                                            }
                                        }
                                    });
                                });
                            }
                            else
                            {
                                if(that.accounts[index].active == true)
                                {
                                    that.loginText.setText('Cuenta ocupada');
                                }
                                else
                                {
                                    if(that.accounts[index].password == inputPassword.value)
                                    {
                                        that.accounts[index].active = true;
                                        that.updateAccount(that.accounts[index]);
                                        that.user = that.accounts[index];

                                        that.startButton.visible =true;
                                        that.creditButton.visible =true;
                                        that.tutorialButton.visible=true;
                                        that.logInButton.visible=false;
                                        that.logOffButton.visible=true;
                                        that.boardButton.visible=true;
                                        that.loginText.setText('');
                                        that.loggingButton.visible=false;


                                        that.loadAccounts(function (accounts) {
                                            that.accounts = accounts;
                                            for (let i = 0; i < that.accounts.length; i++) {
                                                if(that.accounts[i].name == inputUsername.value)
                                                {
                                                    that.CONFIG.ID = that.accounts[i].id
                                                }
                                            }
                                        });
                                    }
                                    else
                                    {
                                        that.loginText.setText('Contraseña incorrecta');
                                    }
                                }
                            }
                        });
                    }
                    else
                    {
                        if(inputUsername.value === '' && inputPassword.value === '')
                        {
                            that.loginText.setText('Falta el nombre y la contraseña');
                        }
                        else
                        {
                            if(inputUsername.value === '')
                            {
                                that.loginText.setText('Falta el nombre');
                            }
                            else
                            {
                                that.loginText.setText('Falta la contraseña');
                            }
                        }
                    }
                }
            });
            
           // MainAudio.stop()
        },this);
        


        //CREDITS BUTTON
        this.creditButton.on('pointerdown', function () {
            //this.scene.stop('MainScene');
            this.creditButton.setTexture('ButtonCreditPressed');
            this.creditButton.setTint(0xc7c7c7)
            //this.scene.events.on('sleep', listener)
            this.time.addEvent({
                delay: 500,
                callback: function ()
                {
                    this.scene.start('Credits', Credits, true, { x: 400, y: 300 });
                },
                callbackScope: this,
                repeat: 0
            });
           // MainAudio.stop()

        },this);
       
        //LOG OFF BUTTON
        this.logOffButton.on('pointerdown', function (){
            this.creditButton.setTexture('ButtonLogOutPressed');
            this.creditButton.setTint(0xc7c7c7)
            //this.scene.events.on('sleep', listener)
            /*this.time.addEvent({
                delay: 500,
                callback: function ()
                {
                    

                },
                callbackScope: this,
                repeat: 0
                });*/
                that.loadAccounts(function (accounts) {
                    
                    that.accounts = accounts;
                    that.accounts[that.CONFIG.ID - 1].active = false;
                    that.updateAccount(that.accounts[that.CONFIG.ID - 1]);
                });
                that.CONFIG.ID = undefined;

                that.logInButton.visible=true;
                that.logOffButton.visible=false;
                that.boardButton.visible=false;
                that.loginText.setText('');
            
        },this);
        
        //LEADERBOARD BUTTON
        this.boardButton.on('pointerdown', function (){
            this.creditButton.setTexture('ButtonBoardPressed');
            this.creditButton.setTint(0xc7c7c7)
            this.time.addEvent({
                delay: 50,
                callback: function ()
                {
                    this.scene.start('LeaderBoard', Scene4, true, { x: 400, y: 300 });
                },
                callbackScope: this,
                repeat: 0
                });
            
        },this);

        
        //animaciones de personajes en pantalla
        /*this.anims.create({
            key: 'QuesoLeft',
            frames: this.anims.generateFrameNumbers('Queso', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        var Queso = this.add.sprite(200, 300, 'Queso').play('QuesoLeft');*/

        //Button Tutorial process 
        this.tutorialButton.on('pointerdown', function () {
            //this.scene.stop('MainScene');
            this.tutorialButton.setTexture('ButtonTutorialPressed');
            this.tutorialButton.setTint(0xc7c7c7)
            //this.scene.events.on('sleep', listener)
            this.time.addEvent({
                delay: 500,
                callback: function ()
                {
                    this.scene.start('Tutorial', Tutorial, true, { x: 400, y: 300 });
                },
                callbackScope: this,
                repeat: 0
            });
           // MainAudio.stop()

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

    createAccount(account, callback) {
		var urls = [window.location.href + 'accounts'];
        console.log(urls);
        $.each(urls, function(i,u){
	        $.ajax(u,{
	            method: "POST",
	            //url: 'http://' + url + '/accounts',
	            data: JSON.stringify(account),
	            processData: false,
	            headers: {
	                "Content-Type": "application/json"
	            }
	        }).done(function (account) {
	            console.log("Account created: " + JSON.stringify(account));
	            callback(account);
	        })
        })
    }

    updateAccount(account) {
		var urls = [window.location.href + 'accounts/' + account.id];
        $.each(urls, function(i,u){
	        $.ajax(u,{
	            method: 'PUT',
	            //url: 'http://' + url + '/accounts/' + account.id,
	            data: JSON.stringify(account),
	            processData: false,
	            headers: {
	                "Content-Type": "application/json"
	            }
	        }).done(function (account) {
	            console.log("Updated item: " + JSON.stringify(account))
	        })
        })
    }

}