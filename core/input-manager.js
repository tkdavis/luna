const bodyEl = document.querySelector('body');
export default class InputManager {
  constructor() {
    this.inputsTriggered = {};
  }

  attachListener() {
    bodyEl.addEventListener('keydown', (e) => {this.handleKeyDown(e)});
    bodyEl.addEventListener('keyup', (e) => {this.handleKeyUp(e)});
  }

  handleKeyDown(e) {
    this.inputsTriggered[e.key] = e.key;
    // console.log(this.inputsTriggered);
  }

  handleKeyUp(e) {
    delete this.inputsTriggered[e.key];
  }

  clearInputsTriggered() {
    this.inputsTriggered = {}
  }
}
