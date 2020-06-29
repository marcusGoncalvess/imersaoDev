class Animate {
  constructor(matriz, image, x, yVar, widthImg, heightImg, widthSprite, heightSprite) {
    this.matriz = matriz;
    this.image = image;
    this.widthImg = widthImg;
    this.heightImg = heightImg;
    this.x = x;
    this.yVar = yVar;
    this.y = height - this.heightImg - this.yVar;
    this.widthSprite = widthSprite;
    this.heightSprite = heightSprite;

    this.currentFrame = 0;
  }

  show() {
    image(
      this.image,
      this.x,
      this.y,
      this.widthImg,
      this.heightImg,
      this.matriz[this.currentFrame][0],
      this.matriz[this.currentFrame][1],
      this.widthSprite,
      this.heightSprite
    );
    this.animation();
  }

  animation() {
    this.currentFrame++;
    // Faz repetir a animação do personagem
    if (this.currentFrame >= this.matriz.length - 1) {
      this.currentFrame = 0;
    }
  }
}
