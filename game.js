
var config = {
    width: 1000,
    height: 1000,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
}

var gameSettings = {
    playerSpeed: 200,
    squareSize: 100,
    currentCell: { x: 0, y: 9 },
    targetCell: { x: 0, y: 0 },
}

var game = new Phaser.Game(config)


