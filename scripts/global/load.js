function preload() {
    telaInicialImage = loadImage("/assets/scenario/telaInicial.png")
    fontTelaInicial = loadFont("/assets/others/fontTelaInicial.ttf")

    scenarioImage1 = loadImage("/assets/scenario/layers/far-buildings.png");
    scenarioImage2 = loadImage("/assets/scenario/layers/back-buildings.png");
    scenarioImage3 = loadImage("/assets/scenario/layers/foreground.png");
  
    characterImage = loadImage("/assets/character/run.png");
    enemyImage = loadImage("/assets/enemies/v-police.png");
    enemy2Image = loadImage("/assets/enemies/v-red.png");
    enemy3Image = loadImage("/assets/enemies/v-truck.png")
    enemy4Image = loadImage("/assets/enemies/v-yellow.png")
    lifeImage = loadImage("/assets/others/heart.png")

    gameOverImage = loadImage("/assets/others/gameOver.png");
  
    soundOfGame = loadSound("/sounds/gameTrack.mp3");
    soundOfJump = loadSound("/sounds/jump.mp3");
    soundOfDamage = loadSound("/sounds/damage.wav")
    soundOfGameOver = loadSound("/sounds/gameOver.mp3");
  }