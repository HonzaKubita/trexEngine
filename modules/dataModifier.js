import { Sim } from '../sim/sim.js';

const uneditable = ['type', 'texture', 'height', 'width', 'selected'];
const dataModifierDiv = document.getElementById('objectData');
const objectType = document.getElementById('objectType');

export const dataModifier = {
  update() {

    dataModifierDiv.innerHTML = '';

    objectType.innerHTML = 'Nothing selected';


    Sim.simObjects.particles.forEach(particle => {
      if (particle.selected) {
        objectType.innerHTML = 'Particle data:';
        for (const property in particle) {
          if (!uneditable.includes(property)) {
            const div = document.createElement('div');
            div.innerHTML = `${property}: ${particle[property]}`;
            dataModifierDiv.appendChild(div);
          }
        }
      }
    });
  }
}