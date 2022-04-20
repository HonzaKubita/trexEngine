import utils from './modules/utils.js'; // Module to control global application functionality (logging to console etc.)
import { render } from './modules/render.js'; // Module used for redering

import { Particle } from './sim/particle.js'; // Class used for creating new particles

utils.init(); // Make sure app started successfully


render.mount('canvas'); // Mount canvas to rendering module

const exampleParticle = new Particle(50, 50, 0); // Creating new particle object

utils.debug('Example particle created');

render.draw(exampleParticle); // Rendering the particle