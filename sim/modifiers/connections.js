import Vector from "../vector.js";
import utils from "../../modules/utils.js";
export function connectionModifier(objects) {
  objects.connections.forEach(connection => {
    let distance = utils.calcDistance(connection.position.point1, connection.position.point2);
    if (distance > connection.length) {
      console.log('toolong');
      // Connection is too long, so we need to shorten it
      let forceVector = Vector.fromPositions(connection.position.point1, connection.position.point2);
      forceVector = forceVector.normalize();
      forceVector = forceVector.multiply(distance);
      forceVector = forceVector.divide(connection.length);
      connection.connectedTo.point1.velocity = Vector.add(connection.connectedTo.point1.velocity, forceVector);
      connection.connectedTo.point2.velocity = Vector.subtract(connection.connectedTo.point2.velocity, forceVector);
    }
  })
}