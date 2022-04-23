import { textures } from '../modules/textures.js';
import Vector from './vector.js';
export class Particle {
  type = 'particle';
  position = { // Position in 2D space
    x: 0,
    y: 0
  };
  velocity = new Vector(0, 0); // Velocity in 2D space
  constructor(x, y, charge) {
    this.texture = textures[charge];
    this.height = this.texture.height;
    this.width = this.texture.width;
    this.position.x = x; // Position of the particle in 2D space (x, y)
    this.position.y = y;
    this.charge = charge; // Particle type (neutron/proton/electron)
  }
  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}