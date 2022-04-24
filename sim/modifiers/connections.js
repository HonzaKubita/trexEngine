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
    if (!connection.connectedTo.point1.fixed) {
      connection.connectedTo.point1.velocity = Vector.add(connection.connectedTo.point1.velocity, forceVector);
    }
    if (!connection.connectedTo.point2.fixed) {
      connection.connectedTo.point2.velocity = Vector.subtract(connection.connectedTo.point2.velocity, forceVector);
    }
  }
}

function stick(connection) {
  let particleV1 = connection.connectedTo.point1.velocity;
  let particleV2 = connection.connectedTo.point2.velocity;
  let connectionVector = Vector.fromPositions(connection.position.point1, connection.position.point2);

  let connectionSplit1 = connectionVector.multiply(Vector.dot(particleV1, connectionVector) / (connectionVector.magnitude() ** 2));
  let connectionSplit2 = connectionVector.multiply(Vector.dot(particleV2, connectionVector) / (connectionVector.magnitude() ** 2));

  let avarage = Vector.avarage(connectionSplit1, connectionSplit2);

  let particle1Force = Vector.subtract(particleV1, connectionSplit1);
  let particle2Force = Vector.subtract(particleV2, connectionSplit2);

  connection.connectedTo.point1.velocity = Vector.add(particle1Force, avarage);
  connection.connectedTo.point2.velocity = Vector.add(particle2Force, avarage);

}