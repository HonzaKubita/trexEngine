import utils from './utils.js';

export const render = {
  canvas: "", // Canvas object
  c: "", // Canvas to draw on (context)
  mount(canvasID) { // Mount canvas on page
    utils.debug('Mounting canvas...');
    this.canvas = document.getElementById(canvasID);
    this.c = this.canvas.getContext("2d");
    utils.debug('Canvas mounted');
  },
  clear() {
    this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  draw(object) {
    utils.debug('Drawing object');
    this.c.drawImage(object.texture, object.position.x, object.position.y, object.width, object.height);
  },
  drawMultiple(objects) {
    utils.debug('Drawing multiple objects');
    objects.forEach(object => {
      this.draw(object);
    });
  }
}