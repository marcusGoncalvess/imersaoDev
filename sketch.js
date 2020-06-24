let scenarioImage;
let scenario;
let soundOfGame;
let character;

function preload() {
  scenarioImage = loadImage("/assets/scenario/forest.png");
  characterImage = loadImage("/assets/character/running.png");
  soundOfGame = loadSound("/sounds/gameTrack.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  scenario = new Scenario(scenarioImage, 5);
  character = new Character(characterImage);
  // soundOfGame.loop();
}

function draw() {
  scenario.show();
  scenario.move();
  character.show();
  //circle(x,y,tamanho)
  circle(mouseX, mouseY, 200);
  //image(imagem,x,y,width,height,x dentro da imagem, y dentro da imagem,quantos pixels pegar da imagem(width e height))
}
