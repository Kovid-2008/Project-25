class computerarcher {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;

      this.image=loadImage("./assets/computerArcher.png")
    }
    display() {
      push();
      imageMode(RIGHT)
      image(this.image,this.x,this.y,this.width,this.height);
      pop();
      noFill();
    }
  }
