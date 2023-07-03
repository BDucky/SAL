class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    var squareSize = 100;

    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        var x = i * squareSize;
        var y = j * squareSize;

        var isWhite = (i + j) % 2 === 0;
        var color = isWhite ? 0xffffff : 0x000000;

        var graphic = this.add
          .graphics(this)
          .fillStyle(color, 1)
          .fillRect(x, y, squareSize, squareSize);
      }
    }

    this.player1 = this.add.sprite(
      squareSize / 2,
      config.height - squareSize / 2,
      "player1"
    );
    this.player1.setScale(2);
    this.player1.play("player1_anim");
    this.player1.setInteractive();

    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      var randomNumber = Phaser.Math.Between(1, 6);
      console.log(randomNumber);
      for (var i = 0; i < randomNumber; i++) {
        this.movePlayer()
        setTimeout(() => {
          this.movePlayer();
          console.log("time out");
        }, 2000);
      }
    }
  }

  movePlayer() {
    var squareSize = 100;

    if (
      gameSettings.currentCell.x < 9 &&
      gameSettings.currentCell.y % 2 !== 0
    ) {
      gameSettings.currentCell.x += 1;
    } else if (
      gameSettings.currentCell.x > 0 &&
      gameSettings.currentCell.y % 2 === 0
    ) {
      gameSettings.currentCell.x -= 1;
    } else if (
      gameSettings.currentCell.x === 9 &&
      gameSettings.currentCell.y % 2 !== 0
    ) {
      gameSettings.currentCell.y -= 1;
    } else if (
      gameSettings.currentCell.x === 0 &&
      gameSettings.currentCell.y % 2 === 0
    ) {
      gameSettings.currentCell.y -= 1;
    }

    var targetX = gameSettings.currentCell.x * squareSize + squareSize / 2;
    var targetY = gameSettings.currentCell.y * squareSize + squareSize / 2;
    if (targetX <= 50 && targetY == 50) {
      targetX == 50;
      targetY == 50;
      console.log("You win!");
    }
    console.log(targetX, targetY);

    this.player1.x = targetX;
    this.player1.y = targetY;
  }
}
