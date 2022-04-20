import utils from './utils.js';

export const render = {
  c: "", // Canvas to draw on
  mount(canvasID) { // Mount canvas on page
    utils.debug('Mounting canvas...');
    this.c = document.getElementById(canvasID).getContext("2d");
    utils.debug('Canvas mounted');
    //this.c.width = window.innerWidth; // Set canvas width to window width
  },
  draw(object) {
    utils.debug('Drawing object');
    if (object.type == "particle") {
      utils.debug('Drawing particle');
      switch (object.charge) { // Set particle color based on charge
        case 0:
          this.c.fillStyle = "#545454";
          utils.debug('neutral');
          break;
        case 1:
          this.c.fillStyle = "#5e17eb";
          utils.debug('positive');
          break;
        case -1:
          this.c.fillStyle = "#ff1616";
          utils.debug('negative');
          break;
      }
      this.c.beginPath(); // Begin drawing
      this.c.arc(object.position.x, this.c.height - object.position.y, 10, 0, Math.PI * 2, false); // Draw circle
      this.c.closePath(); // Stop drawing
      this.c.fill(); // Fill circle
    }
  }
}