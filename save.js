var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            // gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('yellow', 'assets/images/yellow.png');
    this.load.image('red', 'assets/images/red.png');
    this.load.image('green', 'assets/images/green.png');
    this.load.image('extra', 'assets/images/extra.png');
    this.load.image('player', 'assets/images/player.png');
}

// function create() {
//     this.red = this.add.image(400, 300, 'red');
//     this.player = this.add.image(400, 500, 'player');

//     //set up bounds
//     this.physics.world.setBounds(0, 0, 800, 600);

//     this.red.setBounce(1);
//     this.red.setCollideWorldBounds(true);
// }

function create() {
    this.red = this.physics.add.image(400, 300, 'red');
    this.red.v = 1
    this.player = this.add.image(400, 500, 'player');

    this.red.setVelocity(100, 0);
    this.red.setBounce(1, 1);
    this.red.setCollideWorldBounds(true);

    // emitter.startFollow(red);
}

//t: số ms từ lúc bắt đầu
//dt: từ update() trước đó đến hiện tại
function update(t, dt) {
}