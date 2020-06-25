class Character extends Animate {
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

    this.starterY = height - this.widthImg;
    this.y = this.starterY;
    this.jumpSpeed = 0;
    this.gravity = 3;
    this.jumps = 0;
  }

  jump() {
    this.jumps ++;
    if(this.jumps <= 2) {
      this.jumpSpeed = -30;
      soundOfJump.play();
    }
  }

  applyGravity() {
    this.y = this.y + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravity;

    //Impede que a gravidade leve a personagem para debaixo do chão
    if (this.y > this.starterY) {
      this.y = this.starterY;
      this.jumps = 0;
    }
  }

  isColliding(enemy) {
    const precision = 0.7; //Diminuir o hitbox dos personagens
    const collision = collideRectRect(
      this.x,
      this.y,
      this.widthImg * precision,
      this.heightImg * precision,
      enemy.x,
      enemy.y,
      enemy.widthImg * precision,
      enemy.heightImg * precision
    );

    return collision;
  }
}
