let scenarioImage;
let enemyImage;
let characterImage;

let scenario;
let character;
let enemy;

let soundOfJump;
let soundOfGame;

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
const characterMatriz = [];
// Matriz Dinamica
for (let c = 0; c < 4; c++) {
  for (let i = 0; i < 4; i++) {
    if (i <= 3) {
      characterMatriz.push([220 * i]);
    }
  }
}
for (let c = 0; c < 16; c++) {
  let matrizNumber = 0;
  if (c >= 4) {
    matrizNumber = 270;
  }
  if (c >= 8) {
    matrizNumber = 270 * 2;
  }
  if (c >= 12) {
    matrizNumber = 270 * 3;
  }
  characterMatriz[c].push(matrizNumber);
}

function preload() {
  scenarioImage = loadImage("/assets/scenario/forest.png");
  characterImage = loadImage("/assets/character/running.png");
  enemyImage = loadImage("/assets/enemies/droplets.png");
  soundOfGame = loadSound("/sounds/gameTrack.mp3");
  soundOfJump = loadSound("/sounds/jump.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  scenario = new Scenario(scenarioImage, 5);
  character = new Character(
    characterMatriz,
    characterImage,
    0,
    135,
    135,
    220,
    270
  );
  enemy = new Enemy(enemyMatriz, enemyImage, width - 52, 52, 52, 104, 104);
  // constructor(matriz, image, x, widthImg, heightImg, widthSprite, heightSprite)
  // soundOfGame.loop();
}

function keyPressed() {
  // Se keypressed for igual ao espaço, faça pular
  if (keyCode == 32) {
    character.jump();
    soundOfJump.play();
  }
}

function draw() {
  scenario.show();
  scenario.move();

  character.show();
  character.applyGravity();

  enemy.show();
  enemy.move();

  if (character.isColliding(enemy)) {
    console.log("colidou");
    noLoop();
  }
  //circle(x,y,tamanho)
  // circle(mouseX, mouseY, 200);
  //image(imagem,x,y,width,height,x dentro da imagem, y dentro da imagem,quantos pixels pegar da imagem(width e height))
}
