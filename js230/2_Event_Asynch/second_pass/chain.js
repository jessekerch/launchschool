let downloadFile = new Promise((resolve, reject) => {
  console.log('Connecting to server...');
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('Download successful');
    } else {
      reject('Download failed');
    }
  }, 2000);
});

downloadFile
  .then(console.log)
  .then(() => console.log('Ready to play!'))
  .catch(console.error)
  .finally(() => setTimeout(() => console.log('Game Over'), 1500));
