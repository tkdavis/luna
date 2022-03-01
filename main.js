import GameObject from './core/game-object.js';
import InputManager from './core/input-manager.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
let lastTime = 0;


function openTab(e) {
  console.log(e.target.id)
  document.querySelectorAll('.tabcontent').forEach((el) => {
    console.log(el);
    if (e.target.id.replace('-btn', '') !== el.id) {
      el.classList.add('hide');
    } else {
      el.classList.remove('hide');
    }
  })
}

document.getElementById('text-editor-btn').addEventListener('click', openTab);
document.getElementById('gameWindow-btn').addEventListener('click', openTab);

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

    ctx.clearRect(0, 0, 800, 600);
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

const inputManager = new InputManager();
inputManager.attachListener();

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
  width: 32,
  height: 32,
  position: {x: 40, y: 40, z: 0},
  rotation: {},
  color: '#ea7ffc',
  canvas: canvas,
  ctx: ctx,
  inputs: inputManager.inputsTriggered
})

gameLoop();
