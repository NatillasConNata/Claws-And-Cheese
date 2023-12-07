class Acuarioymuelles extends Phaser.Scene {
    constructor() {
        super({ key: 'Acuarioymuelles', active: false });
        this.BASE_PATH = 'Proyecto/Arte/Bocetos/';
    }

    preload() {
        this.load.image('Jaulas', this.BASE_PATH + 'niveles prototipos/EscenarioJaulaPixelArt.png');
        this.load.spritesheet('raton', this.BASE_PATH + 'Sprite/Ratonwalk.png', { frameWidth: 116, frameHeight: 94 });
        this.load.spritesheet('leon', this.BASE_PATH + 'Sprite/Leonwalk.png', { frameWidth: 127, frameHeight: 110 });
    }

    createCharacters() {
        this.player = this.physics.add.sprite(100, 450, 'raton');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        // Animaciones para el ratón
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('raton', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'raton', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('raton', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.player2 = this.physics.add.sprite(200, 450, 'leon');
        this.player2.setBounce(0.2);
        this.player2.setCollideWorldBounds(true);

        // Animaciones para el león
        this.anims.create({
            key: 'leftLion',
            frames: this.anims.generateFrameNumbers('leon', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turnLion',
            frames: [{ key: 'leon', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'rightLion',
            frames: this.anims.generateFrameNumbers('leon', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.cursors = this.input.keyboard.createCursorKeys();
        this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    }

    create() {
        this.createCharacters();
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }

        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }

        if (this.left.isDown) {
            this.player2.setVelocityX(-160);
            this.player2.anims.play('leftLion', true);
        } else if (this.right.isDown) {
            this.player2.setVelocityX(160);
            this.player2.anims.play('rightLion', true);
        } else {
            this.player2.setVelocityX(0);
            this.player2.anims.play('turnLion');
        }

        if (this.up.isDown && this.player2.body.touching.down) {
            this.player2.setVelocityY(-330);
        }
    }
}

// Constantes de dimensiones
Acuarioymuelles.GAME_WIDTH = 720;
Acuarioymuelles.GAME_HEIGHT = 640;
Acuarioymuelles.RATON_WIDTH = 116;
Acuarioymuelles.RATON_HEIGHT = 94;
Acuarioymuelles.LEON_WIDTH = 127;
Acuarioymuelles.LEON_HEIGHT = 110;