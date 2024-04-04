async function asyncDownloadFile() {
  console.log('Downloading file...');
  let msg = await new Promise((resolve) => setTimeout(() => resolve('Download complete'), 2000));
  console.log(msg);
}

asyncDownloadFile();
