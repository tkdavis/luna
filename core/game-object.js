export default class GameObject {
  constructor(props) {
    this.name = props.name;
    this.width = props.width;
    this.height = props.height;
    this.position = props.position;
    this.rotation = props.rotation;
    this.color = props.color;
    this.ctx = props.ctx;
    this.scripts = [];
  }

  initialize() {

  }

  update(deltaTime) {
    // this.position.x += 5 / deltaTime;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
