import utils from './modules/utils.js'; // Module to control global application functionality (logging to console etc.)
import { settings } from './modules/settings.js'; // It does what it says
import controller from './modules/controller.js'; // It does what it says
import { render } from './modules/render.js'; // Module used for redering

const mode = 'dev'; // enables displaying debug logs to console when set to 'dev'

utils.init(mode); // Make sure app started successfully

settings.init(); // Initialize settings

controller.init(); // Initialize controller

render.mount('canvas'); // Mount canvas to rendering module

render.clear();