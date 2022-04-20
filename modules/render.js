import { Canvas2dGraphics, start } from './sandy-canvas-module.js';
const canvas = document.getElementById('canvas')
const c = new Canvas2dGraphics(canvas);

WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;

cavnas.width = WIDTH;
cavnas.height = HEIGHT;

export const Render = {
  renderQueue: [],
  addToQueue(object) {
    this.renderQueue.push(object);
  },
  removeFromQueue(object) {
    this.renderQueue.splice(this.renderQueue.indexOf(object), 1);
  },
  draw(object) {
  },
  renderAll() {
    this.renderQueue.forEach(object => {
      this.draw(object);
    })
  }
}