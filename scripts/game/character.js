class Character {
  constructor(image) {
    this.image = image;
    this.matriz = [];
    // Matriz Dinamica
    for (let c = 0; c < 4; c++) {
      for (let i = 0; i < 4; i++) {
        if (i <= 3) {
          this.matriz.push([220 * i]);
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
      this.matriz[c].push(matrizNumber);
    }
    this.currentFrame = 0;
    console.log(this.matriz);
  }

  show() {
    image(
      this.image,
      0,
      height - 135,
      110,
      135,
      this.matriz[this.currentFrame][0],
      this.matriz[this.currentFrame][1],
      220,
      270
    );
    this.animation();
  }

  animation() {
    this.currentFrame++;
    // Faz repetir a animação do personagem
    if (this.currentFrame >= this.matriz.length - 1) {
      this.currentFrame = 0;
    }
  }
}
