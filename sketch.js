function setup() {
  createCanvas(800, 600);
  frameRate(30);
  game = new Game();
  telaInicial = new TelaInicial();
  game.setup();
  scenes = {
    game,
    telaInicial,
  };
  managerButton = new ManagerButton("Iniciar", width/2,height/2);
  // soundOfGame.loop();
}

function keyPressed() {
  // Se keypressed for igual ao espaço, faça pular
  game.keyPressed(key);
}

function draw() {
  if (currentScene === "game") {
    game.draw();
  }
  scenes[currentScene].draw();
}
