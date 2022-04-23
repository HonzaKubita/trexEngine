import { Particle } from '../sim/particle.js';
import { Platform } from '../sim/platform.js';
import { Connection } from '../sim/connection.js';

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
      utils.log('Added negatively charged particle');
      Sim.addObject(new Particle(50, 450, 'e'));
    } else if (particleType == 'p') {
      utils.log('Added positively charged particle');
      Sim.addObject(new Particle(100, 450, 'p'));
    } else if (particleType == 'n') {
      utils.log('Added neutrally charged particle');
      Sim.addObject(new Particle(150, 450, 'n'));
    }
  })
}

function platformManager() {
  let platformSelect = document.getElementById('platformType');
  let addPlatform = document.getElementById('addPlatform');
  addPlatform.addEventListener('click', () => {
    let platformType = platformSelect.options[platformSelect.selectedIndex].value;
    if (platformType == 'bouncy') {
      utils.log('Added bouncy platform');
      Sim.addObject(new Platform(300, 350, 400, 350, 'bouncy'));
    } else if (platformType == 'stiff') {
      utils.log('Added stiff platform');
      Sim.addObject(new Platform(300, 250, 400, 250, 'stiff'));
    }
  });
}

function connectionManager() {
  let connectionSelect = document.getElementById('connectionType');
  let addConnection = document.getElementById('addConnection');
  addConnection.addEventListener('click', () => {
    let connectionType = connectionSelect.options[connectionSelect.selectedIndex].value;
    if (connectionType == 'rubber') {
      utils.log('Added rubber connection');
      Sim.addObject(new Connection(300, 150, 400, 150, 'rubber'));
    } else if (connectionType == 'rope') {
      utils.log('Added rope connection');
      Sim.addObject(new Connection(300, 100, 400, 100, 'rope'));
    } else if (connectionType == 'stick') {
      utils.log('Added stick connection');
      Sim.addObject(new Connection(300, 50, 400, 50, 'stick'));
    }
  });
}


const init = () => {
  startStop();
  particleManager();
  resetSim();
  platformManager();
  connectionManager();
}

export default {
  init,
}