class Enemy extends Animate {
  constructor(
    matriz,
    image,
    x,
    widthImg,
    heightImg,
    widthSprite,
    heightSprite
  ) {
    super(matriz, image, x, widthImg, heightImg, widthSprite, heightSprite);
  }

  move() {
    this.x = this.x - 5;
    if (this.x < -this.widthImg) {
      this.x = width;
    }
  }
}
