import Vector from "../vector.js";
import utils from "../../modules/utils.js";

export default function electromagneticForce(objects, force) {
  objects.particles.forEach(particle => {
    objects.particles.forEach(otherParticle => {
      if (particle !== otherParticle && particle.charge !== 'n' && otherParticle.charge !== 'n') { // Calculate only for electrons and protons
        let distance = utils.calcDistance(particle.position, otherParticle.position);
        let forceVector = Vector.fromPositions(particle.position, otherParticle.position);
        forceVector = forceVector.normalize();
        forceVector = forceVector.multiply(force);
        forceVector = forceVector.divide(distance);
        if (particle.charge !== otherParticle.charge) {
          // Particles have different charges so they attract each other
          particle.velocity = Vector.add(particle.velocity, forceVector);
        } else {
          // Particles have the same charge so they repel each other
          particle.velocity = Vector.subtract(particle.velocity, forceVector);
        }
      }
    });
  });
}
