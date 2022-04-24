import { Sim } from '../sim/sim.js'
import utils from './utils.js'
import { render } from './render.js'

let objectType = document.getElementById('objectType')
export const selector = {
  init(canvas) {
    canvas.addEventListener('click', (event) => {

      if (Sim.running) { // We dont want to select objects when simulation is running
        return;
      }

      const mousePosition = { // Put mouse position to variable
        x: event.clientX,
        y: canvas.height - event.clientY
      }
      objectType.innerHTML = 'Nothing selected'; // Reset objectType


      Sim.simObjects.particles.forEach(particle => {
        particle.selected = false;
        if (utils.calcDistance(particle.position, mousePosition) < particle.width) { // If mouse is on particle
          particle.selected = true;
          objectType.innerHTML = 'particle';
        }
      })
      render.renderSim();
    });
  }
}