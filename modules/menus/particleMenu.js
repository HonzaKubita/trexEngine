import { Sim } from '../../sim/sim.js';
import utils from '../../modules/utils.js';
import { Particle } from '../../sim/particle.js';

export default function particleMenu() {
  let particleSelect = document.getElementById('particleType');
  let addParticle = document.getElementById('addParticle');
  let removeParticle = document.getElementById('removeParticle');

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

  removeParticle.addEventListener('click', () => {
    let selectedParticle = Sim.simObjects.particles.filter(particle => particle.selected)[0];
    Sim.removeObject(selectedParticle);
    utils.log('Removed particle');
  });
}