export const settings = {
  button: document.getElementById('settingsBtn'),
  settingsDiv: document.getElementById('settings'),
  init() {
    // Event listeners for settings button
    this.button.addEventListener('click', () => {
      if (this.button.innerHTML == 'Settings') {
        this.button.innerHTML = 'Close';
        this.settingsDiv.style.display = 'block';
      } else {
        this.button.innerHTML = 'Settings';
        this.settingsDiv.style.display = 'none';
      }
    })
  },
  getData() {
    let settingsDivContent = document.getElementsByName('settingsBox');
    let data = {};
    settingsDivContent.forEach(element => {
      data[element.id] = element.checked;
    })
    return data;
  }
}