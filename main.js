const consoleOut = document.getElementById('consoleOut');
const consoleLog = (message) => {
  consoleOut.innerHTML = message;
};

consoleLog('Hello World!');