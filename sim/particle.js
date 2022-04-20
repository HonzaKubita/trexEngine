export class Particle {
  type = "particle"; // This is a particle object (used in rendering)
  position = { // Position in 2D space
    x: 0,
    y: 0
  };
  velocity = { // Velocity in 2D space
    x: 0,
    y: 0
  };
  constructor(x, y, charge) {
    this.position.x = x // Position of the particle in 2D space
    this.position.y = y
    this.charge = charge // Particle type (0 = neutral, 1 = positively charged, -1 = negatively charged)
  }
  update() {
  }
}