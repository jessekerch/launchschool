function downloadFile(cb) {
  setTimeout(() => cb('download complete!'), 1500);
  console.log("downloading file...");
}

downloadFile((msg) => console.log(msg));