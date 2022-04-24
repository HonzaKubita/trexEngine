import Vector from './vector.js';
import { textures } from '../modules/textures.js';
export class Particle {
  type = 'particle';
  fixed = false;
  position = { // Position in 2D space
    x: 0,
    y: 0
  };
  velocity = new Vector(0, 0); // Velocity in 2D space
  constructor(x, y, charge) {
    this.charge = charge; // Particle type (neutron/proton/electron)
    this.position.x = x; // Position of the particle in 2D space (x, y)
    this.position.y = y;
    this.height = textures[this.charge].height;
    this.width = textures[this.charge].width;
  }
  update() {
    if (!this.fixed) {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    } else {
      this.velocity.clear();
    }
  }
}