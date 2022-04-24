import Vector from "../vector.js";
import utils from "../../modules/utils.js";
export function connectionModifier(objects) {
  objects.connections.forEach(connection => {
    if (connection.connectionType == 'rubber') {
      rubber(connection);
    } else if (connection.connectionType == 'stick') {
      stick(connection);
    }
  })
}

function rubber(connection) {
  let distance = utils.calcDistance(connection.position.point1, connection.position.point2);
  if (distance > connection.length) {
    // Connection is too long, so we need to shorten it
    let forceVector = Vector.fromPositions(connection.position.point1, connection.position.point2);
    forceVector = forceVector.normalize();
    forceVector = forceVector.multiply(distance);
    forceVector = forceVector.divide(connection.length);
    connection.connectedTo.point1.velocity = Vector.add(connection.connectedTo.point1.velocity, forceVector);
    connection.connectedTo.point2.velocity = Vector.subtract(connection.connectedTo.point2.velocity, forceVector);
  }
}

function stick(connection) {
  let particleVector1 = connection.connectedTo.point1.velocity;
  let particleVector2 = connection.connectedTo.point2.velocity;
  connection.connectedTo.point1.velocity = Vector.subtract(particleVector1, particleVector2);
  connection.connectedTo.point2.velocity = Vector.subtract(particleVector2, particleVector1);
}