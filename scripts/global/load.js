function preload() {
    telaInicialImage = loadImage("/assets/scenario/telaInicial.png")
    fontTelaInicial = loadFont("/assets/others/fontTelaInicial.otf")

    scenarioImage1 = loadImage("/assets/scenario/layers/far-buildings.png");
    scenarioImage2 = loadImage("/assets/scenario/layers/back-buildings.png");
    scenarioImage3 = loadImage("/assets/scenario/layers/foreground.png");
  
    characterImage = loadImage("/assets/character/run.png");
    enemyImage = loadImage("/assets/enemies/droplets.png");
    trollEnemyImage = loadImage("/assets/enemies/troll.png");
    flyerEnemyImage = loadImage("/assets/enemies/flyerDroplets.png");
  
    gameOverImage = loadImage("/assets/others/gameOver.png");
  
    soundOfGame = loadSound("/sounds/gameTrack.mp3");
    soundOfJump = loadSound("/sounds/jump.mp3");
    soundOfGameOver = loadSound("/sounds/gameOver.mp3");
  }