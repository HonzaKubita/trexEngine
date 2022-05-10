// Import all objects constructors
const EngineObject2D = require('./objects/engineObject2D.js');

// Import all modules
const Render = require('./modules/render.js');


class Engine2D {
  _objects = {};
  constructor() {}
  addObject(object) {
    this._objects[object.id] = object;
  }
  removeObject(object) {
    this._objects[object.id] = undefined;
  }
  getObjects() {
    return this._objects;
  }
}

module.exports = {
  Engine2D,
  EngineObject2D,
  Render,
};