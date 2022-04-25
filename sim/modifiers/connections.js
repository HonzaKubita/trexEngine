import stick from './connections/stick.js';
import rubber from './connections/rubber.js';
import spring from './connections/spring.js';

export function connectionModifier(objects) {
  objects.connections.forEach(connection => {
    if (connection.connectionType == 'rubber') {
      rubber(connection);
    } else if (connection.connectionType == 'stick') {
      stick(connection);
    } else if (connection.connectionType == 'spring') {
      spring(connection);
    }
  })
}