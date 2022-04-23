import { Sim } from '../sim/sim.js';
export const settings = {
  button: document.getElementById('settingsBtn'),
  settingsDiv: document.getElementById('settings'),

  settingsDivContent: document.getElementsByName('settingsModifier'),

  init() {
    // Event listeners for settings button
    this.button.addEventListener('click', () => {
      if (this.button.innerHTML == 'Settings') {
        this.button.innerHTML = 'Close';
        this.settingsDiv.style.display = 'flex';
      } else {
        this.button.innerHTML = 'Settings';
        this.settingsDiv.style.display = 'none';
      }
    })
  },
  getData() {
    let data = {};
    
    this.settingsDivContent.forEach(element => {
      if (element.type == 'checkbox') {
        data[element.id] = element.checked;
      } else if (element.type == 'number') {
        data[element.id] = Number(element.value);
      }
    })
    return data;
  },
  disable() {
    this.settingsDivContent.forEach(element => {
      element.disabled = true;
    })
  },
  enable() {
    this.settingsDivContent.forEach(element => {
      element.disabled = false;
    })
  }
}