import utils from '../modules/utils.js';
import { settings } from '../modules/settings.js';
import { render } from '../modules/render.js';

export const Sim = {
  running: false,
  start() {
    utils.log('Simulation started');
    this.running = true;

    let data = settings.getData();
    console.log(data);
  },
  stop() {
    utils.log('Simulation stopped');
    this.running = false;
  }
}