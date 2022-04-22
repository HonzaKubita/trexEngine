import { Sim } from '../sim/sim.js';

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
    if (particleType == '0') {

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