let mode = 'default';

const init = (runmode) => {
  // Check if the program inited correctly and set the mode
  mode = runmode;
  document.getElementById('output').innerHTML = '=-> App started successfully <br />';
  scrollDown();
};


const debug = (message) => {
  if (mode == 'dev') {
    document.getElementById('output').innerHTML += `=?> ${message} <br />`;
    scrollDown();
  }
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