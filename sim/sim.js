import utils from '../modules/utils.js';
import { settings } from '../modules/settings.js';
import { render } from '../modules/render.js';

export const Sim = {
  running: false,
  simulationObjects: {
    particles: [],
    bounds: [],
  },
  addObject(object) { // Function for adding new objects to simulation
    this.simulationObjects[`${object.type}s`].push(object);
    render.draw(object);
  },
  start() {
    utils.log('Simulation started');
    this.running = true; // Mark sumulation as running

    let data = settings.getData(); // Load settings from settings menu

    let particles = [...this.simulationObjects.particles]; // Copy particlesStart array to particles array

  },
  stop() {
    utils.log('Simulation stopped');
    this.running = false; // Mark sumulation as stopped
  }
}