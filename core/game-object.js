export default class GameObject {
  constructor(props) {
    this.name = props.name;
    this.width = props.width;
    this.height = props.height;
    this.position = props.position;
    this.rotation = props.rotation;
    this.speed = 0;
    this.direction = {x: 0, y: 0};
    this.velocity = {x: 0, y: 0};
    this.color = props.color;
    this.canvas = props.canvas;
    this.ctx = props.ctx;
    this.inputs = props.inputs;
  }

  initialize() {

  }

  update(deltaTime) {
    this.move(deltaTime);
  }

  draw() {
    if (this.checkOutOfBoundsScreen()) {
      return;
    }

    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  move(deltaTime) {
    this.speed = 0;
    this.direction.x = 0;
    this.direction.y = 0;

    if (this.inputs.hasOwnProperty('d')) {
      this.speed = 80;
      this.direction.x += 1;
    }

    if (this.inputs.hasOwnProperty('a')) {
      this.speed = 80;
      this.direction.x += -1;
    }

    if (this.inputs.hasOwnProperty('w')) {
      this.speed = 80;
      this.direction.y += -1;
    }

    if (this.inputs.hasOwnProperty('s')) {
      this.speed = 80;
      this.direction.y += 1;
    }

    this.velocity.x = this.direction.x * this.speed;
    this.velocity.y = this.direction.y * this.speed;

    this.position.x += this.velocity.x / deltaTime;
    this.position.y += this.velocity.y / deltaTime;
  }

  checkOutOfBoundsScreen() {
    let isOffScreen = false;
    let tooRight = this.position.x > this.canvas.width;
    let tooLeft = this.position.x + this.width < 0;
    let tooUp = this.position.y + this.height < 0;
    let tooDown = this.position.y > this.canvas.height;

    isOffScreen = tooRight || tooLeft || tooUp || tooDown;

    return isOffScreen;
  }
}
