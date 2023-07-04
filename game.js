
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
    ladderCell: { x: 0, y: 0 },
    ladders: [
        { width: 3, height: 4, incX: 2, incY: 3 },
        { width: 4, height: 2, incX: 3, incY: 1 },
        { width: 2, height: 4, incX: 1, incY: 3 },
        { width: 2, height: 2, incX: -1, incY: 1 },
        { width: 4, height: 2, incX: -3, incY: 1 },
        { width: 0, height: 3, incX: 0, incY: 2 },
    ]
}

var game = new Phaser.Game(config)


