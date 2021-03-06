let game;
let telaInicialImage;
let fontTelaInicial;
let scenarioImage1;
let scenarioImage2;
let scenarioImage3;
let enemyImage;
let trollEnemyImage;
let flyerEnemyImage;
let characterImage;
let lifeImage;

let currentScene = "telaInicial";
let scenes;
let telaInicial;
let managerButton;

let scenario1;
let scenario2;
let scenario3;
let character;
let enemy;
let trollEnemy;
let flyerEnemy;
let life;

let gameOverImage;

let soundOfJump;
let soundOfGame;
let soundOfGameOver;
let soundOfDamage

let score;

const enemyMatriz = [
  [0, 0],
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
const trollEnemyMatriz = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];
const flyerEnemyMatriz = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];

const enemies = [];
