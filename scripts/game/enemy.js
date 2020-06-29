class Enemy extends Animate {
  constructor(
    matriz,
    image,
    x,
    yVar,
    widthImg,
    heightImg,
    widthSprite,
    heightSprite,
    velocity,
    delay
  ) {
    super(
      matriz,
      image,
      x,
      yVar,
      widthImg,
      heightImg,
      widthSprite,
      heightSprite
    );
    this.velocity = velocity;
    this.delay = delay;
    this.x = width + this.delay;
  }

  move() {
    this.x = this.x - this.velocity;
    if (this.x < -this.widthImg - this.delay) {
      this.x = width;
    }
  }
}
