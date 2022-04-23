
import { Sim } from '../sim/sim.js';
export class Connection {
  type = 'connection';
  position = {
    point1: {x: 0, y: 0},
    point2: {x: 0, y: 0},
  }
  connectedTo = {
    point1: null,
    point2: null,
  }
  constructor(x, y, x2, y2, connectionType, length = 200) {
    this.position.point1.x = x;
    this.position.point1.y = y;
    this.position.point2.x = x2;
    this.position.point2.y = y2;
    this.connectionType = connectionType;
    this.length = length;
    if (connectionType == 'rubber') {
      this.color = '#2e2e2e';
    } else {
      this.color = '#00ffff';
    }
  }
  update() {
    Sim.simObjects.particles.forEach(particle => {
      if (particle.position.x == this.position.point1.x && particle.position.y == this.position.point1.y) {
        this.connectedTo.point1 = particle;
      } else if (particle.position.x == this.position.point2.x && particle.position.y == this.position.point2.y) {
        this.connectedTo.point2 = particle;
      }
    });
  }
}
