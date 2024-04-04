const {
  setTimeout,
  setImmediate,
  setInterval,
} = require('node:timers/promises');

async function asyncDownloadFile() {
  console.log('Downloading file...');
  await setTimeout(1500);
  console.log('Download complete');
}

asyncDownloadFile();
