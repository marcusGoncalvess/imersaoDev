class Game {
  constructor() {
    this.currentIndice = 0;
    this.map = [
      {
        enemy: 0,
        velocity: 10,
      },
      {
        enemy: 1,
        velocity: 15,
      },
      {
        enemy: 2,
        velocity: 20,
      },
      {
        enemy: 3,
        velocity: 15,
      },
      {
        enemy: parseInt(random(0, 3)),
        velocity: parseInt(random(15, 20)),
      },
      {
        enemy: parseInt(random(0, 3)),
        velocity: parseInt(random(15, 30)),
      },
      {
        enemy: parseInt(random(0, 3)),
        velocity: parseInt(random(15, 40)),
      },
      {
        enemy: parseInt(random(0, 3)),
        velocity: parseInt(random(20, 40)),
      },
      {
        enemy: parseInt(random(0, 3)),
        velocity: parseInt(random(30, 40)),
      },
    ];
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
      200,
      125,
      163,
      60,
      10
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
      10
    );
    const flyerEnemy = new Enemy(
      enemyMatriz,
      enemy3Image,
      width - 52,
      30,
      400,
      200,
      257,
      104,
      30
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
      10
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

    const currentLine = this.map[this.currentIndice];
    const enemy = enemies[currentLine.enemy];
    const visibleEnemy = enemy.x < -enemy.widthImg;

    enemy.velocity = currentLine.velocity;
    enemy.show();
    enemy.move();

    if (visibleEnemy) {
      this.currentIndice++;
      enemy.aparece();
      if (this.currentIndice > this.map.length - 1) {
        this.currentIndice = 0;
      }
    }

    if (character.isColliding(enemy)) {
      life.lostLife();
      character.turnInvincible();
      soundOfDamage.play();
      if (life.lifes === 0) {
        image(gameOverImage, 0, 0, width, height);
        soundOfGame.stop();
        soundOfGameOver.play();
        noLoop();
      }
    }

    //circle(x,y,tamanho)
    // circle(mouseX, mouseY, 200);
    //image(imagem,x,y,width,height,x dentro da imagem, y dentro da imagem,quantos pixels pegar da imagem(width e height))
  }
}
