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
    if (object.type == 'platform' || object.type == 'connection') {
      this.c.strokeStyle = object.color;
      this.c.lineWidth = 10;
      this.c.beginPath();
      this.c.moveTo(object.position.point1.x, canvas.height - object.position.point1.y);
      this.c.lineTo(object.position.point2.x, canvas.height - object.position.point2.y);
      this.c.stroke();
      this.drawCircle(object.position.point1, 10, object.color);
      this.drawCircle(object.position.point2, 10, object.color);
    } else if (object.type == 'particle') {
      if (object.selected && !Sim.running) {
        this.drawOutline(object);
      }
      if (mid) {
        this.c.drawImage(object.texture, object.position.x - object.texture.width / 2, canvas.height - object.position.y - object.texture.height / 2);
      } else {
        this.c.drawImage(object.texture, object.position.x, canvas.height - object.position.y);
      }
    }
  },
  drawMultiple(objects, mid = false) {
    utils.debug('Drawing multiple objects');
    objects.forEach(object => {
      this.draw(object, mid);
    });
  },
  drawVector(object) {
    this.c.strokeStyle = '#00ff00';
    this.c.lineWidth = 2;
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
    this.drawMultiple(Sim.simObjects.platforms); // Draw platforms

    if (Sim.data.showVectors) { // If showVectors is enabled
      Sim.simObjects.particles.forEach(particle => {
        render.drawVector(particle); // Display particle velocity vector as line
      });
    }

    // Sim.simObjects.particles.forEach(particle => { // Draw particle outlines
    //   if (particle.selected) {
    //     this.drawOutline(particle)
    //   }
    // });
  },
  drawCircle(position, radius, color) {
    this.c.beginPath();
    this.c.arc(position.x, canvas.height - position.y, radius, 0, 2 * Math.PI);
    this.c.fillStyle = color;
    this.c.fill();
  },
  drawOutline(object) {
    this.c.strokeStyle = '#ff0000';
    this.c.lineWidth = 3;
    if (object.type == 'particle') {
      let x = object.position.x - object.width / 2;
      let y = canvas.height - object.position.y - object.height / 2;
      this.c.beginPath();
      this.c.rect(x, y, object.width, object.height);
      this.c.stroke();
    }
  }
}