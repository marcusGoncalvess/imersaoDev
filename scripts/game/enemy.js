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
    velocity
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
    this.x = width;
  }

  move() {
    this.x = this.x - this.velocity;
  }

  aparece() {
    this.x = width;
  }
}
