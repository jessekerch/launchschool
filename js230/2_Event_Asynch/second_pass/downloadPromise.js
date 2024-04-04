// Create a function downloadFile that simulates downloading a file by logging "Downloading file...". After a delay of 1.5 seconds, it should call the callback with the argument "Download complete!".

function downloadFilePromise() {
  return new Promise((resolve) => {
    console.log('Downloading file...');
    setTimeout(() => {
      resolve('Download complete!')
    }, 1500);
  })
}

downloadFilePromise().then((msg) => console.log(msg));
