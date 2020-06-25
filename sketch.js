let scenarioImage1;
let scenarioImage2;
let scenarioImage3;
let enemyImage;
let characterImage;

let scenario;
let character;
let enemy;

let gameOverImage;

let soundOfJump;
let soundOfGame;
let soundOfGameOver;

const enemyMatriz = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
];
const characterMatriz = [
  [0, 0],
  [0, 0],
  [0, 0],
  [108, 0],
  [108, 0],
  [108, 0],
  [0, 140],
  [0, 140],
  [0, 140],
  [108, 140],
  [108, 140],
  [108, 140],
  [0, 280],
  [0, 280],
  [0, 280],
  [108, 280],
  [108, 280],
  [108, 280],
  [0, 420],
  [0, 420],
  [0, 420],
  [108, 420],
  [108, 420],
  [108, 420],
];

function preload() {
  scenarioImage1 = loadImage("/assets/scenario/layers/far-buildings.png");
  scenarioImage2 = loadImage("/assets/scenario/layers/back-buildings.png");
  scenarioImage3 = loadImage("/assets/scenario/layers/foreground.png");

  characterImage = loadImage("/assets/character/run.png");
  enemyImage = loadImage("/assets/enemies/droplets.png");

  gameOverImage = loadImage("/assets/others/gameOver.png");

  soundOfGame = loadSound("/sounds/gameTrack.mp3");
  soundOfJump = loadSound("/sounds/jump.mp3");
  soundOfGameOver = loadSound("/sounds/gameOver.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  scenario1 = new Scenario(scenarioImage1, 2);
  scenario2 = new Scenario(scenarioImage2, 4);  
  scenario3 = new Scenario(scenarioImage3, 8);
  character = new Character(
    characterMatriz,
    characterImage,
    0,
    135,
    135,
    108,
    140
  );
  enemy = new Enemy(enemyMatriz, enemyImage, width - 52, 52, 52, 104, 104);
  // constructor(matriz, image, x, widthImg, heightImg, widthSprite, heightSprite)
  // soundOfGame.loop();
}

function keyPressed() {
  // Se keypressed for igual ao espaço, faça pular
  if (keyCode == 32) {
    character.jump();
  }
}

function draw() {
  scenario1.show();
  scenario2.show();
  scenario3.show();
  scenario1.move();
  scenario2.move();
  scenario3.move();

  character.show();
  character.applyGravity();

  enemy.show();
  enemy.move();

  if (character.isColliding(enemy)) {
    noLoop();
    image(gameOverImage, 0, 0, width, height)
    // soundOfGameOver.play();
  }
  //circle(x,y,tamanho)
  // circle(mouseX, mouseY, 200);
  //image(imagem,x,y,width,height,x dentro da imagem, y dentro da imagem,quantos pixels pegar da imagem(width e height))
}
