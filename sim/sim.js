import utils from '../modules/utils.js';
import { settings } from '../modules/settings.js';
import { render } from '../modules/render.js';
import Vector from './vector.js';

// Modifiers
import collisions from './modifiers/collisions.js';
import gravity from './modifiers/gravity.js';
import electromagneticForce from './modifiers/electromagneticForce.js';
import { connectionModifier } from './modifiers/connections.js';

export const Sim = {
  running: false,
  simObjects: {
    particles: [],
    platforms: [],
    connections: [],
  },
  addObject(object) { // Function for adding new objects to simulation
    this.simObjects[`${object.type}s`].push(object);
    render.draw(object, true);
  },
  start() {
    this.running = true; // Mark sumulation as running
    
    this.data = settings.getData(); // Load settings from settings menu

    console.log('Running with settings:');
    console.log(this.data);
    
    this.gravityForce = new Vector(0, -this.data.gravityStrength/100); // Create gravity force vector

    this.velocityLoose = 0; // Zero % loss of velocity
    if (!this.data.infiniteVelocity) { // If infinite velocity is enabled
      this.velocityLoose = 10; // How much velocity is lost when colliding with walls in percents
    }
    
    utils.log('Simulation started');
    simLoop(); // Start simulation loop
  },
  stop() {
    this.running = false; // Mark sumulation as stopped
    utils.log('Simulation stopped');
  },
  reset() {
    if (this.running) { // Stop simulation if it is running
      this.stop();
    }
    this.simObjects = { // Clear all objects
      particles: [],
      platforms: [],
      connections: [],
    };
    render.clear(); // Clear cavnas
    utils.log('Simulation reset');
  },
}

function simLoop() {

  // Calculate modifiers
  
  if (Sim.data.gravity) { // If gravity is enabled
    gravity(Sim.simObjects, Sim.gravityForce); // Apply gravity force to all objects
  }

  if (Sim.data.electromagneticForce) { // If electromagnetic force is enabled
    electromagneticForce(Sim.simObjects, Sim.data.electromagneticForceStrength); // Apply electromagnetic force to all objects
  }

  connectionModifier(Sim.simObjects); // Apply connection modifier to all particles

  // Solve collisions

  collisions.solveWallCollisions(Sim.simObjects.particles, render.canvas, Sim.velocityLoose); // Solve collisions between particles and walls
  //collisions.solveParticleCollisions(Sim.simObjects.particles, Sim.velocityLoose)
  collisions.solvePlatformCollisions(Sim.simObjects.particles, Sim.simObjects.platforms, Sim.velocityLoose); // Solve collisions between particles and platforms
  
  // Update
  
  Sim.simObjects.particles.forEach(particle => {
    particle.update(); // Update particle position
  });

  // Render
  render.renderSim(); // Render simulation

  // Loop

  if (Sim.running) {
    // Call simLoop function again to create a loop
    requestAnimationFrame(simLoop);
  }
}