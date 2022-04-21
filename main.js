import utils from './modules/utils.js'; // Module to control global application functionality (logging to console etc.)
import { settings } from './modules/settings.js'; // It does what it says
import { render } from './modules/render.js'; // Module used for redering

import { Particle } from './sim/particle.js'; // Class used for creating new particles
import { Sim } from './sim/sim.js';

const mode = 'dev'; // enables displaying debug logs to console when set to 'dev'

utils.init(mode); // Make sure app started successfully

settings.init(); // Initialize settings

utils.debug('ihsdbfihbgi hbgjibgijbawih gbwihgihwafbihwbfhwbefhwh fbawihefbyiaw');

render.mount('canvas'); // Mount canvas to rendering module

const exampleParticle = new Particle(50, 50, 0); // Creating new particle object

utils.debug('Example particle created');

render.draw(exampleParticle); // Rendering the particle

render.clear();

let startStopBtn = document.getElementById('startStopBtn');

startStopBtn.addEventListener('click', () => {
  if (Sim.running) {
    startStopBtn.innerHTML = 'Start';
    Sim.stop();
  } else {
    startStopBtn.innerHTML = 'Stop';
    Sim.start();
  }
})