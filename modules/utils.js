let mode = 'default';
let clearBtn = document.getElementById('clearConsole');
let consoleDiv = document.getElementById('output');

clearBtn.addEventListener('click', () => { // Function for clearing the console
  consoleDiv.innerHTML = '';
});

const init = (runmode) => {
  // Check if the program inited correctly and set the mode
  mode = runmode;
  consoleDiv.innerHTML = '=-> App started successfully <br />';
  scrollDown();
};


const debug = (message) => { // Function for displaying debug logs to console dev mode only
  if (mode == 'dev') {
    consoleDiv.innerHTML += `=?> ${message} <br />`;
    scrollDown();
  }
};

const log = (message) => { // Function for logging to console in all modes
  consoleDiv.innerHTML += `=-> ${message} <br />`;
  scrollDown();
};

const scrollDown = () => { // Function for auto scrolling down the console
  consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

export default {
  init,
  debug,
  log,
}