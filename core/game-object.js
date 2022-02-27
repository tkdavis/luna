export default class GameObject {
  constructor(props) {
    this.name = props.name;
    this.width = props.width;
    this.height = props.height;
    this.position = props.position;
    this.rotation = props.rotation;
    this.color = props.color;
    this.canvas = props.canvas;
    this.ctx = props.ctx;
    this.scripts = [];
  }

  initialize() {

  }

  update(deltaTime) {
    this.position.y += 20 / deltaTime;
  }

  draw() {
    if (this.checkOutOfBoundsScreen()) {
      return;
    }

    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  checkOutOfBoundsScreen() {
    let isOffScreen = false;
    let tooRight = this.position.x > this.canvas.width;
    let tooLeft = this.position.x + this.width < 0;
    let tooUp = this.position.y + this.height < 0;
    let tooDown = this.position.y > this.canvas.height;

    if (tooRight || tooLeft || tooUp || tooDown) {
      isOffScreen = true;
    }

    return isOffScreen;
  }
}
