import { textures } from '../modules/textures.js';
export class Particle {
  type = 'particle';
  position = { // Position in 2D space
    x: 0,
    y: 0
  };
  velocity = { // Velocity in 2D space
    x: 0,
    y: 0
  };
  constructor(x, y, charge) {
    this.texture = textures[charge];
    this.height = this.texture.height;
    this.width = this.texture.width;
    this.position.x = x; // Position of the particle in 2D space
    this.position.y = y;
    this.charge = charge; // Particle type (neutron/proton/electron)
  }
  update() {
  }
}