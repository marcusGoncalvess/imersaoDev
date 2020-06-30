class Life {
  constructor(total, start) {
    this.total = total;
    this.start = start;
    this.lifes = this.start;
    this.widthImg = 25;
    this.heightImg = 25;
    this.startX = 20;
  }
  draw() {
    for (let i = 0; i < this.lifes; i++) {
      const margin = i * 10;
      const position = this.startX * (1 + i);

      image(lifeImage, position + margin, 20, this.widthImg, this.heightImg);
    }
  }

  receiveLife() {
    if (this.lifes <= this.total) {
      this.lifes++;
    }
  }

  lostLife() {
    this.lifes--;
  }
}
