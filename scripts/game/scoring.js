class Scoring {
  constructor() {
    this.score = 0;
  }

  show() {
    textAlign(RIGHT);
    fill("#fff");
    textSize(50);
    text(parseInt(this.score), width - 30, 50);
  }

  addScore() {
    this.score = this.score + 0.1;
  }
}
