class Character extends Animate {
  constructor(
    matriz,
    image,
    x,
    yVar,
    widthImg,
    heightImg,
    widthSprite,
    heightSprite
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

    this.yVar = yVar;
    this.starterY = height - this.widthImg - this.yVar;
    this.y = this.starterY;
    this.jumpSpeed = 0;
    this.gravity = 3.3;
    this.jumpHeight = -35;
    this.jumps = 0;
    this.invincible = false;
  }

  jump() {
    this.jumps++;
    if (this.jumps <= 2) {
      this.jumpSpeed = this.jumpHeight;
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

  turnInvincible() {
    this.invincible = true;
    setTimeout(() => {
      this.invincible = false;
    }, 1000);
  }

  isColliding(enemy) {
    if (this.invincible) {
      return false;
    }
    const precision = 0.5; //Diminuir o hitbox dos personagens
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
