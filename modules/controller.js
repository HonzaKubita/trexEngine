import { Particle } from '../sim/particle.js';
import { Sim } from '../sim/sim.js';
import utils from '../modules/utils.js';
import { render } from '../modules/render.js';

let startStopBtn = document.getElementById('startStopBtn');


function startStop() {
  startStopBtn.addEventListener('click', () => {
    if (Sim.running) {
      startStopBtn.innerHTML = 'Start';
      Sim.stop();
    } else {
      startStopBtn.innerHTML = 'Stop';
      Sim.start();
    }
  })
}

function particleManager() {
  let particleSelect = document.getElementById('particleType');
  let addParticle = document.getElementById('addParticle');
  addParticle.addEventListener('click', () => {
    let particleType = particleSelect.options[particleSelect.selectedIndex].value;
    if (particleType == 'e') {
      utils.log('Adding electron');
      Sim.addObject(new Particle(50, 50, 'e'));
    } else if (particleType == 'p') {
      utils.log('Adding proton');
      Sim.addObject(new Particle(100, 50, 'p'));
    } else if (particleType == 'n') {
      utils.log('Adding neutron');
      Sim.addObject(new Particle(150, 50, 'n'));
    }
  })
}

const init = () => {
  startStop();
  particleManager();
}

export default {
  init,
}