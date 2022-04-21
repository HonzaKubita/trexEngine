import utils from './utils.js';

export const render = {
  canvas: "", // Canvas object
  c: "", // Canvas to draw on (context)
  mount(canvasID) { // Mount canvas on page
    utils.debug('Mounting canvas...');
    this.canvas = document.getElementById(canvasID);
    this.c = this.canvas.getContext("2d");
    utils.debug('Canvas mounted');
  },
  clear() {
    this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
      utils.debug('Drawing object2');
      this.c.beginPath(); // Begin drawing
      this.c.arc(object.position.x, this.canvas.height - object.position.y, 10, 0, Math.PI * 2, false); // Draw circle
      //this.c.arc(50, 50, 10, 0, Math.PI * 2, false); // Draw circle
      this.c.closePath(); // Stop drawing
      this.c.fill(); // Fill circle
      utils.debug('Drawing done');
    }
  }
}