import utils from './utils.js';
import { Sim } from '../sim/sim.js';

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
  draw(object, mid = false) { // Draw object on canvas
    utils.debug('Drawing object');
    if (mid) {
      this.c.drawImage(object.texture, object.position.x - object.texture.width / 2, canvas.height - object.position.y - object.texture.height / 2);
    } else {
      this.c.drawImage(object.texture, object.position.x, canvas.height - object.position.y);
    }
  },
  drawMultiple(objects, mid = false) {
    utils.debug('Drawing multiple objects');
    objects.forEach(object => {
      this.draw(object, mid);
    });
  },
  drawVector(object) {
    this.c.strokeStyle = '#ff0000';
    let dx = object.position.x + object.velocity.x * 10
    let dy = canvas.height - object.position.y - object.velocity.y * 10
    this.c.beginPath();
    this.c.moveTo(object.position.x, canvas.height - object.position.y);
    this.c.lineTo(dx, dy);
    this.c.stroke();
    this.c.font = "15px Arial";
    let speed = object.velocity.magnitude().toString()
    this.c.fillText(speed.slice(0, speed.indexOf('.') + 2), dx, dy);
  },

  renderSim() {
    this.clear(); // Clear canvas
  
    this.drawMultiple(Sim.simObjects.connections); // Draw connections
    this.drawMultiple(Sim.simObjects.particles, true); // Draw particles
  }
}