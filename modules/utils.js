const init = () => {
  // Check if the program inited correctly
  document.getElementById('output').innerHTML = '=-> App started successfully <br />';
  scrollDown();
};


const debug = (message) => {
  document.getElementById('output').innerHTML += `=?> ${message} <br />`;
  scrollDown();
};

const log = (message) => {
  document.getElementById('output').innerHTML += `=-> ${message} <br />`;
  scrollDown();
};

const scrollDown = () => {
  document.getElementById('output').scrollTop = document.getElementById('output').scrollHeight;
}

export default {
  init,
  debug,
  log,
}