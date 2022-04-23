import { render } from './render.js';
import { Sim } from '../sim/sim.js';

function calcDistance(particle1, particle2) { // Recycled from electromagneticForce.js
  return Math.sqrt(Math.pow(particle1.x - particle2.x, 2) + Math.pow(particle1.y - particle2.y, 2));
}

export const drag = {
  init(canvas) {
    canvas.addEventListener("mousemove", (event) => {
      
      if (Sim.running) { // We dont want to drag particles when simulation is running
        return;
      }

      const mousePosition = { // Put mouse position to variable
        x: event.clientX,
        y: render.canvas.height - event.clientY
      }

      // Detect if left mouse button is pressed
      if (event.which == 1) {
        Sim.simObjects.particles.forEach(particle => { // Repeat for each particle
          let particlePosition = particle.position; // Put particle position to variable
          if (calcDistance(particlePosition, mousePosition) < particle.width) { // If mouse is on particle
            particle.position = mousePosition; // Set particle position to mouse position
          }
        });
      }
      render.renderSim(); // Render simulation
    })
  }
}