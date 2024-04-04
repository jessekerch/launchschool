// Create a function downloadFile that simulates downloading a file by logging "Downloading file...". After a delay of 1.5 seconds, it should call the callback with the argument "Download complete!".

function downloadFile(callback) {
  console.log('Downloading file...');
  setTimeout(() => callback('Download complete!'), 1500);
}

downloadFile(console.log);
