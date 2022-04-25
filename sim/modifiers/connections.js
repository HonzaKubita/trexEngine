import stick from './connections/stick.js';
import rubber from './connections/rubber.js';

export function connectionModifier(objects) {
  objects.connections.forEach(connection => {
    if (connection.connectionType == 'rubber') {
      rubber(connection);
    } else if (connection.connectionType == 'stick') {
      stick(connection);
    }
  })
}