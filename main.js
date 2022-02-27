import GameObject from './core/game-object.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
let lastTime = 0;

// Luna Game
class Game {
  constructor(props) {
    this.name = props.name;
    this.canvas = props.canvas;
    this.ctx = props.ctx;
    this.world = props.world;
    this.scenes = props.scenes;
    this.gameObjects = props.gameObjects;
    this.timestamp;
  }

  initialize() {
    if (!Object.keys(this.scenes).length) {
      this.scenes = {name: "Scene1"};
    }
  }

  update(deltaTime) {
    if (!deltaTime) {
      return;
    }

    playerObj.update(deltaTime);
  }

  draw(deltaTime) {
    if (!deltaTime) {
      return;
    }

    ctx.clearRect(0, 0, 600, 800);
    playerObj.draw();
  }
}

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  game.initialize();
  game.update(deltaTime);
  game.draw(deltaTime);
  requestAnimationFrame(gameLoop);
}

const game = new Game({
  name: "TestGame",
  canvas: canvas,
  ctx: ctx,
  world: {},
  scenes: {},
  gameObjects: {}
});

const playerObj = new GameObject({
  name: 'Player',
  width: 100,
  height: 100,
  position: {x: 40, y: 40, z: 0},
  rotation: {},
  color: '#0000FF',
  ctx: ctx
})

gameLoop()
