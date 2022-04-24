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
            generateDataModifier(particle, property);
          }
        }
      }
    });
  }
}

function generateDataModifier(particle, property) {
  if (typeof particle[property] == 'boolean') {
    dataModifierDiv.innerHTML += `<div class="dataModifier">${property}: <input type="checkbox" id="${property}" ${particle[property] ? 'checked' : ''}></div>`;
  } 
  else if (typeof particle[property] == 'number') {
    dataModifierDiv.innerHTML += `<div class="dataModifier">${property}: <input type="number" id="${property}" value="${particle[property]}"></div>`;
  }
  else if (typeof particle[property] == 'string') {
    dataModifierDiv.innerHTML += `<div class="dataModifier">${property}: <input type="text" id="${property}" value="${particle[property]}"></div>`;
  } else if (typeof particle[property] == 'object') {
    dataModifierDiv.innerHTML += `<div>${property}:</div>`;
    for (const subProperty in particle[property]) {
      generateDataModifier(particle[property], subProperty);
    }
  }
}