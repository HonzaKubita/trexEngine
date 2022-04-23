import Vector from "../vector.js";

function calcDistance(particle1, particle2) {
  return Math.sqrt(Math.pow(particle1.x - particle2.x, 2) + Math.pow(particle1.y - particle2.y, 2));
}

export default function electromagneticForce(objects, force) {
  objects.particles.forEach(particle => {
    objects.particles.forEach(otherParticle => {
      if (particle !== otherParticle && particle.charge !== 'n' && otherParticle.charge !== 'n') { // Calculate only for electrons and protons
        let distance = calcDistance(particle.position, otherParticle.position);
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
