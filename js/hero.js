class Hero extends Phaser.Sprite {
  constructor(game) {
    super("Game");
    this.game = game;
  }

  preload() {
    this.game.load.image("hero", "images/hero_stopped.png");
  }

  create(x, y) {
    Phaser.Sprite.call(this, this.game, x, y, "hero");
    this.game.add.existing(this);
    this.anchor.set(0.5, 0.5);
  }
}

// inherit from Phaser.Sprite
Hero.prototype = Object.create(Phaser.Sprite.prototype);
Hero.prototype.constructor = Hero;
