import { Particle } from '../sim/particle.js';
import { Sim } from '../sim/sim.js';
import utils from '../modules/utils.js';
import { settings } from '../modules/settings.js';


let startStopBtn = document.getElementById('startStopBtn');
let resetSimBtn = document.getElementById('resetBtn');


function startStop() {
  startStopBtn.addEventListener('click', () => {
    if (Sim.running) {
      startStopBtn.innerHTML = 'Resume';
      Sim.stop();
      settings.enable(); // After simulation is started, disable settings menu
    } else {
      startStopBtn.innerHTML = 'Pause';
      Sim.start();
      settings.disable();
    }
  })
}

function resetSim() {
  resetSimBtn.addEventListener('click', () => {
    if (!Sim.running) {
      Sim.reset();
      startStopBtn.innerHTML = 'Start';
    }
  });
}

function particleManager() {
  let particleSelect = document.getElementById('particleType');
  let addParticle = document.getElementById('addParticle');
  addParticle.addEventListener('click', () => {
    let particleType = particleSelect.options[particleSelect.selectedIndex].value;
    if (particleType == 'e') {
      utils.log('Added electron');
      Sim.addObject(new Particle(50, 450, 'e'));
    } else if (particleType == 'p') {
      utils.log('Added proton');
      Sim.addObject(new Particle(100, 450, 'p'));
    } else if (particleType == 'n') {
      utils.log('Added neutron');
      Sim.addObject(new Particle(150, 450, 'n'));
    }
  })
}

const init = () => {
  startStop();
  particleManager();
  resetSim();
}

export default {
  init,
}