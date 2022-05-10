const TrexEngine = require("./main"); // Import the engine

const engine2D = new TrexEngine.Engine2D(); // Crete new 2D engine

newObject = new TrexEngine.EngineObject2D(); // Create new 2D object

console.log(engine2D);
console.log(newObject);

engine2D.addObject(newObject); // Add object to engine

let objects = engine2D.getObjects(); // Get objects from engine

console.log(objects);