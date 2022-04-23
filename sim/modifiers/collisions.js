import Vector from '../vector.js';
function solveWallCollisions(particles, enviroment) {
  particles.forEach(particle => {
    if(particle.position.x - particle.texture.width / 2 < 0) {
      particle.velocity.x = Math.abs(particle.velocity.x);
    } 
    else if (particle.position.x + particle.texture.width / 2 > enviroment.width) {
      particle.velocity.x = -Math.abs(particle.velocity.x);
    }
    if(particle.position.y - particle.texture.height / 2 < 0) {
      particle.velocity.y = Math.abs(particle.velocity.y);
    }
    else if(particle.position.y + particle.texture.height / 2 > enviroment.height) {
      particle.velocity.y = -Math.abs(particle.velocity.y);
    }
  });
}

export default {
  solveWallCollisions
}