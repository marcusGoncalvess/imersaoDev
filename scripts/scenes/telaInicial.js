class TelaInicial {
  constructor() {}

  draw() {
    this._background();
    this._text();
    this._button();
  }

  _background() {
    image(telaInicialImage, 0, 0, width, height);
  }
  _text() {
    textFont(fontTelaInicial);
    textAlign(CENTER);
    textSize(50);
    fill("#fff");
    text("Run Peter,", width / 2, 100);
    text("RUN!", width / 2, 150);
  }
  _button() {
    managerButton.y = (height / 8) * 5;
    managerButton.draw();
  }
}
