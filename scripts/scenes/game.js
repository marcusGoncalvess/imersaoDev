class Game {
  constructor() {
    this.currentEnemy = 0;
  }

  setup() {
    scenario1 = new Scenario(scenarioImage1, 1);
    scenario2 = new Scenario(scenarioImage2, 3);
    scenario3 = new Scenario(scenarioImage3, 5);

    score = new Scoring();

    character = new Character(
      characterMatriz,
      characterImage,
      0,
      10,
      135,
      135,
      108,
      140
    );
    const normalEnemy = new Enemy(
      enemyMatriz,
      enemyImage,
      width - 52,
      20,
      250,
      125,
      163,
      60,
      10,
      100
    );
    const trollEnemy = new Enemy(
      enemyMatriz,
      enemy2Image,
      width * 2,
      200,
      250,
      125,
      96,
      61,
      10,
      100
    );
    const flyerEnemy = new Enemy(
      enemyMatriz,
      enemy3Image,
      width - 52,
      50,
      400,
      200,
      257,
      104,
      30,
      100
    );

    const enemy4 = new Enemy(
      enemyMatriz,
      enemy4Image,
      width - 52,
      200,
      250,
      125,
      93,
      60,
      10,
      100
    );

    life = new Life(3, 3);

    enemies.push(normalEnemy);
    enemies.push(trollEnemy);
    enemies.push(flyerEnemy);
    enemies.push(enemy4);
  }

  keyPressed(key) {
    if (keyCode == 32) {
      character.jump();
    }
  }

  draw() {
    scenario1.show();
    scenario2.show();
    scenario3.show();
    scenario1.move();
    scenario2.move();
    scenario3.move();

    score.show();
    score.addScore();

    character.show();
    life.draw();
    character.applyGravity();

    const enemy = enemies[this.currentEnemy];
    const visibleEnemy = enemy.x < -enemy.widthImg;
    enemy.show();
    enemy.move();

    if (visibleEnemy) {
      this.currentEnemy++;
      if (this.currentEnemy > 3) {
        this.currentEnemy = 0;
      }
      enemy.velocity = parseInt(random(10, 30));
    }

    if (character.isColliding(enemy)) {
      life.lostLife();
      character.turnInvincible();
      if(life.lifes === 0){
        image(gameOverImage, 0, 0, width, height);
        noLoop();
      }
      // soundOfGame.stop();
      // soundOfGameOver.play();
    }


    //circle(x,y,tamanho)
    // circle(mouseX, mouseY, 200);
    //image(imagem,x,y,width,height,x dentro da imagem, y dentro da imagem,quantos pixels pegar da imagem(width e height))
  }
}
