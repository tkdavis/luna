// Luna main js
const canvas = document.getElementById("gameScreen");

const ctx = canvas.getContext("2d");

class Game {
  constructor(props) {
    this.name = props.name;
    this.canvas = props.gameCanvas;
    this.world = props.world;
    this.scenes = props.scenes;
    this.gameObjects = props.gameObjects;
  }

  Initialize() {
    if (!Object.keys(this.scenes).length) {
      this.scenes = {name: "Scene1"};
    }
  }

  Update() {
    // run updates here
  }

  Draw() {
    ctx.clearRect(0, 0, 600, 800);

    ctx.fillStyle = '#f00';
    ctx.fillRect(20, 20, 100, 100);
  }
}

const game = new Game({
  name: "TestGame",
  canvas: canvas,
  world: {},
  scenes: {},
  gameObjects: {}
});

game.Initialize();
game.Update();
game.Draw();
