class Game {
  constructor() {
    this.currentEnemy = 0;
  }

  setup() {
    scenario1 = new Scenario(scenarioImage1, 2);
    scenario2 = new Scenario(scenarioImage2, 4);
    scenario3 = new Scenario(scenarioImage3, 8);

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
      52,
      52,
      104,
      104,
      10,
      100
    );
    const trollEnemy = new Enemy(
      trollEnemyMatriz,
      trollEnemyImage,
      width * 2,
      0,
      200,
      200,
      400,
      400,
      10,
      100
    );
    const flyerEnemy = new Enemy(
      flyerEnemyMatriz,
      flyerEnemyImage,
      width - 52,
      200,
      100,
      75,
      200,
      150,
      10,
      100
    );

    enemies.push(normalEnemy);
    enemies.push(trollEnemy);
    enemies.push(flyerEnemy);
  }

  keyPressed(key) {
    if (keyCode == 32) {
      character.jump();
    }
  }

  draw(){
    scenario1.show();
    scenario2.show();
    scenario3.show();
    scenario1.move();
    scenario2.move();
    scenario3.move();
  
    score.show();
    score.addScore();
  
    character.show();
    character.applyGravity();
  
    const enemy = enemies[this.currentEnemy];
    const visibleEnemy = enemy.x < -enemy.widthImg;
    enemy.show();
    enemy.move();
  
    if (visibleEnemy) {
      this.currentEnemy++;
      if (this.currentEnemy > 2) {
        this.currentEnemy = 0;
      }
      enemy.velocity = parseInt(random(10, 30));
    }
  
    if (character.isColliding(enemy)) {
      noLoop();
      image(gameOverImage, 0, 0, width, height);
      // soundOfGame.stop();
      // soundOfGameOver.play();
    }
  
    //circle(x,y,tamanho)
    // circle(mouseX, mouseY, 200);
    //image(imagem,x,y,width,height,x dentro da imagem, y dentro da imagem,quantos pixels pegar da imagem(width e height))
  }
}
